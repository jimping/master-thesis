const path = require('path');
const fs = require('fs');
const bigrig = require('bigrig');
const handlebars = require("handlebars");
const template = handlebars.compile(fs.readFileSync(path.join(__dirname, 'template.hbs'), 'utf8'), {
    noEscape: true
});

const reports = {
    ...['nuxt', 'next'].reduce((acc, framework) => {
        return {
            ...acc,
            [framework]: {
                ...['client', 'server'].reduce((acc2, type) => {
                    return {
                        ...acc2,
                        [type]: {
                            ...['isr', 'ssg', 'ssr'].reduce((acc3, mode) => {
                                return {
                                    ...acc3,
                                    [mode]: {
                                        lighthouse: require(`../../reports/${framework}/${type}-components/${mode}-lighthouse.report.json`),
                                        devtools: `../../reports/${framework}/${type}-components/${mode}.json`,
                                        wrk: require(`../../reports/${framework}/${type}-components/${mode}-wrk.json`),
                                    }
                                }
                            }, 0)
                        }
                    }
                }, 0),
            }
        }
    }, 0),
}

const analyze = (p) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, p))
        return bigrig.analyze(data)[0]
    } catch (e) {
        return  {
            duration: 0,
            paint: 0,
            styles: 0,
            javaScript: 0,
            javaScriptCompile: 0,
            parseHTML: 0,
        }
    }

}

const format = (value, suffix = 'ms') => {
    if (suffix === 'bytes') {
        return (value / 1024)
            .toLocaleString('de-DE', {maximumFractionDigits: 2}) + ' kB'
    }

    return parseFloat(value)
        .toLocaleString('de-DE', {maximumFractionDigits: 2}) + suffix
}

const metrics = {
    '/--Allgemein--/': () => (''),
    'Komponenten': (_) => process.env.COMPONENTS || 10,
    '/--Lighthouse--/': () => (''),
    'Performance-Score': (reports) => (reports.lighthouse.categories.performance.score * 100).toFixed(0) + '/100',
    'LCP': (reports) => format(reports.lighthouse.audits['largest-contentful-paint'].numericValue),
    'FID': (reports) => format(reports.lighthouse.audits['max-potential-fid'].numericValue),
    'CLS': (reports) => format(reports.lighthouse.audits['cumulative-layout-shift'].numericValue),
    'FCP': (reports) => format(reports.lighthouse.audits['first-contentful-paint'].numericValue),
    'TBT': (reports) => format(reports.lighthouse.audits['total-blocking-time'].numericValue),
    'SI': (reports) => format(reports.lighthouse.audits['speed-index'].numericValue),
    'TTFB': (reports) => format(reports.lighthouse.audits['server-response-time'].numericValue),
    'Code-Bundle-Size': (reports) => format(reports.lighthouse.audits['total-byte-weight'].numericValue, 'bytes'),
    '/--Chrome DevTools--/': () => (''),
    'Loading': (reports) => format(analyze(reports.devtools).duration),
    'Painting': (reports) => format(analyze(reports.devtools).paint + analyze(reports.devtools).styles),
    'Scripting': (reports) => format(analyze(reports.devtools).javaScript + analyze(reports.devtools).javaScriptCompile),
    'Rendering': (reports) => format(analyze(reports.devtools).parseHTML),
    '/--HTTP--/': () => (''),
    'Anfragen': (reports) => format(reports.wrk.total_requests, ' HTTP Anfragen'),
    'Fehlgeschlagene Anfragen': (reports) => format(reports.wrk.timeouts, ' HTTP Anfragen'),
    'Anfragen pro Sekunde': (reports) => format(reports.wrk.req_per_sec, 'req/s'),
    'Antwortzeit': (reports) => 'ø' + format(reports.wrk.latency.avg),
    'Durchsatz': (reports) => 'ø' + format(reports.wrk.transfer_per_sec, 'MB/s'),
}

const createHtmlTable = (ar) => {
    return `<table>${ar.reduce((c, o) => c += `<tr>${o.reduce((c, d) => (c += `<td>${d}</td>`), '')}</tr>`, '')}</table>`
}

const tables = []

for (const type of ['client', 'server']) {
    for (const mode of ['isr', 'ssg', 'ssr']) {
        const title = `${type.toUpperCase()}-Components - ${mode.toUpperCase()} Strategie`
        const keys = Object.keys(metrics)
        const cols = []

        for (const framework of ['nuxt', 'next']) {
            cols.push([
                framework.toUpperCase(),
                ...keys.map(key => metrics[key](reports[framework][type][mode]))
            ])
        }

        cols.unshift(['METRIK', ...keys])

        const convertedToColumns = cols[0].map((_, colIndex) => cols.map(row => row[colIndex]))

        tables.push({
            title,
            filename: `${type}-${mode}`,
            html: createHtmlTable(convertedToColumns)
                .replaceAll('/--', '<b>')
                .replaceAll('--/', '</b>')
        })
    }
}

for (const table of tables) {
    fs.writeFileSync(path.join(__dirname, `../../reports/${table.filename}.html`), template(table))
}
