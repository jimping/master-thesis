const reports = {
    nuxt: {
        client: {
            isr: {
                lighthouse: require('../../reports/nuxt/client-components/isr-lighthouse.report.json'),
                devtools: require('../../reports/nuxt/client-components/isr.json'),
                wrk: require('../../reports/nuxt/client-components/isr-wrk.json'),
            },
            ssg: {
                lighthouse: require('../../reports/nuxt/client-components/ssg-lighthouse.report.json'),
                devtools: require('../../reports/nuxt/client-components/ssg.json'),
                wrk: require('../../reports/nuxt/client-components/ssg-wrk.json'),
            },
            ssr: {
                lighthouse: require('../../reports/nuxt/client-components/ssr-lighthouse.report.json'),
                devtools: require('../../reports/nuxt/client-components/ssr.json'),
                wrk: require('../../reports/nuxt/client-components/ssr-wrk.json'),
            }
        },

        server: {
            isr: {
                lighthouse: require('../../reports/nuxt/server-components/isr-lighthouse.report.json'),
                devtools: require('../../reports/nuxt/server-components/isr.json'),
                wrk: require('../../reports/nuxt/server-components/isr-wrk.json'),
            },
            ssg: {
                lighthouse: require('../../reports/nuxt/server-components/ssg-lighthouse.report.json'),
                devtools: require('../../reports/nuxt/server-components/ssg.json'),
                wrk: require('../../reports/nuxt/server-components/ssg-wrk.json'),
            },
            ssr: {
                lighthouse: require('../../reports/nuxt/server-components/ssr-lighthouse.report.json'),
                devtools: require('../../reports/nuxt/server-components/ssr.json'),
                wrk: require('../../reports/nuxt/server-components/ssr-wrk.json'),
            }
        }
    },

    next: {
        client: {
            isr: {
                lighthouse: require('../../reports/next/client-components/isr-lighthouse.report.json'),
                devtools: require('../../reports/next/client-components/isr.json'),
                wrk: require('../../reports/next/client-components/isr-wrk.json'),
            },
            ssg: {
                lighthouse: require('../../reports/next/client-components/ssg-lighthouse.report.json'),
                devtools: require('../../reports/next/client-components/ssg.json'),
                wrk: require('../../reports/next/client-components/ssg-wrk.json'),
            },
            ssr: {
                lighthouse: require('../../reports/next/client-components/ssr-lighthouse.report.json'),
                devtools: require('../../reports/next/client-components/ssr.json'),
                wrk: require('../../reports/next/client-components/ssr-wrk.json'),
            }
        },

        server: {
            isr: {
                lighthouse: require('../../reports/next/server-components/isr-lighthouse.report.json'),
                devtools: require('../../reports/next/server-components/isr.json'),
                wrk: require('../../reports/next/server-components/isr-wrk.json'),
            },
            ssg: {
                lighthouse: require('../../reports/next/server-components/ssg-lighthouse.report.json'),
                devtools: require('../../reports/next/server-components/ssg.json'),
                wrk: require('../../reports/next/server-components/ssg-wrk.json'),
            },
            ssr: {
                lighthouse: require('../../reports/next/server-components/ssr-lighthouse.report.json'),
                devtools: require('../../reports/next/server-components/ssr.json'),
                wrk: require('../../reports/next/server-components/ssr-wrk.json'),
            }
        }
    }
}

console.log(reports.next.client.isr.lighthouse)
