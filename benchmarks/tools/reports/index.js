const path = require('path');
const fs = require('fs');
const handlebars = require("handlebars");
const _ = require('lodash');
const convert = require('./convert');

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
    'Komponenten': (reports) => reports.components,
    '/--Lighthouse--/': () => (''),
    'Performance-Score': (reports) => (reports.lighthouse.categories.performance.score * 100).toFixed(0) + '/100',
    'LCP': (reports) => format(reports.lighthouse.audits['largest-contentful-paint'].numericValue),
    'FID': (reports) => format(reports.lighthouse.audits['max-potential-fid'].numericValue),
    'CLS': (reports) => format(reports.lighthouse.audits['cumulative-layout-shift'].numericValue),
    'FCP': (reports) => format(reports.lighthouse.audits['first-contentful-paint'].numericValue),
    'TBT': (reports) => format(reports.lighthouse.audits['total-blocking-time'].numericValue),
    'SI': (reports) => format(reports.lighthouse.audits['speed-index'].numericValue),
    'TTFB': (reports) => format(reports.lighthouse.audits['server-response-time'].numericValue),
    'TTI': (reports) => format(reports.lighthouse.audits['interactive'].numericValue),
    'Code-Bundle-Size': (reports) => format(reports.lighthouse.audits['total-byte-weight'].numericValue, 'bytes'),
    '/--Renderings--/': () => (''),
    'Script Evaluation': (reports) => format(reports.lighthouse.audits['mainthread-work-breakdown'].details.items[0].duration),
    'Other': (reports) => format(reports.lighthouse.audits['mainthread-work-breakdown'].details.items[1].duration),
    'Style & Layout': (reports) => format(reports.lighthouse.audits['mainthread-work-breakdown'].details.items[2].duration),
    'Parse HTML & CSS': (reports) => format(reports.lighthouse.audits['mainthread-work-breakdown'].details.items[3].duration),
    'Script Parsing & Compilation': (reports) => format(reports.lighthouse.audits['mainthread-work-breakdown'].details.items[4].duration),
    'Rendering': (reports) => format(reports.lighthouse.audits['mainthread-work-breakdown'].details.items[5].duration),
    '/--HTTP Benchmark--/': () => (''),
    'Anfragen': (reports) => format(reports.wrk.total_requests, ''),
    'Fehlgeschlagene Anfragen': (reports) => format(reports.wrk.timeouts, ''),
    'Anfragen pro Sekunde': (reports) => format(reports.wrk.req_per_sec, 'req/s'),
    'Antwortzeit': (reports) => 'ø' + format(reports.wrk.latency.avg),
    'Durchsatz': (reports) => 'ø' + format(reports.wrk.transfer_per_sec, 'MB/s'),
}

const createHtmlTable = (ar) => {
    return `<table>${ar.reduce((c, o) => c += `<tr>${o.reduce((c, d) => (c += `<td><div class="flex items-center">${d}</div></td>`), '')}</tr>`, '')}</table>`
}

(async function () {
    const tables = []

    const jsonReports = _.groupBy(fs.readdirSync(path.join(__dirname, '../../reports')).map(filename => {
        const name = path.join(__dirname, '../../reports') + '/' + filename;

        return {filename, path: name}
    }).filter(file => file.filename.endsWith('.json')).map(file => {
        return {
            ...file,
            content: JSON.parse(fs.readFileSync(file.path, 'utf8'))
        }
    }), (file => file.filename.split('_')[0]));

    for (const [route, reports] of Object.entries(jsonReports)) {
        const title = `${route.toUpperCase()}`
        const keys = Object.keys(metrics)
        const cols = []

        cols.push(['METRIK', ...keys])

        const components = _.groupBy(reports, (report => report.filename.split('_')[1]))

        for (const [count, reports2] of Object.entries(components)) {
            const sortedFilesDesc = _.sortBy(reports2, i => i.filename).reverse()
            const frameworks = _.groupBy(sortedFilesDesc, (report => report.filename.split('_')[2]))

            for (const [framework, reports3] of Object.entries(frameworks)) {
                cols.push([
                    framework.toUpperCase(),
                    ...keys.map(key => metrics[key]({
                        components: count,
                        lighthouse: reports3.find(report => report.filename.includes('lighthouse')).content,
                        wrk: reports3.find(report => report.filename.includes('wrk')).content,
                    }))
                ])
            }

        }

        const convertedToColumns = cols[0].map((_, colIndex) => cols.map(row => row[colIndex]))

        tables.push({
            title,
            filename: `${route}`,
            html: createHtmlTable(convertedToColumns)
                .replaceAll('/--', '<b>')
                .replaceAll('--/', '</b>')
        })
    }

    const template = handlebars.compile(fs.readFileSync(path.join(__dirname, 'template.hbs'), 'utf8'), {
        noEscape: true
    });

    for (const table of tables) {
        fs.writeFileSync(
            path.join(__dirname, `../../reports/${table.filename}.html`),
            template(table)
                .replaceAll('NUXT', '<img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Nuxt_logo.svg" class="h-4 !my-0 block mr-2" /><span>Nuxt.js</span>')
                .replaceAll('NEXT', '<img src="https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png" class="h-4 !my-0 block mr-2" /><span>Next.js</span>')

        )
    }

    // await convert()
})()


