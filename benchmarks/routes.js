const amount_of_components = process.env.COMPONENTS || '10,250,1000'

const routes = []


console.log("Amount of components for the test: " + amount_of_components)

for (let count of amount_of_components.split(',')) {
    routes.push({
        count: count,
        groups: [
            {
                name: 'Client Components - SSG',
                routes: [
                    {
                        app: 'nuxt',
                        url: "http://127.0.0.1:3000/client-components/ssg?c=" + count,
                    },
                    {
                        app: 'next',
                        url: "http://127.0.0.1:3001/client-components/ssg?c=" + count,
                    }
                ]
            },
            {
                name: 'Client Components - ISR',
                routes: [
                    {
                        app: 'nuxt',
                        url: "http://127.0.0.1:3000/client-components/isr?c=" + count,
                    },
                    {
                        app: 'next',
                        url: "http://127.0.0.1:3001/client-components/isr?c=" + count,
                    }
                ]
            },
            {
                name: 'Client Components - SSR',
                routes: [
                    {
                        app: 'nuxt',
                        url: "http://127.0.0.1:3000/client-components/ssr?c=" + count,
                    },
                    {
                        app: 'next',
                        url: "http://127.0.0.1:3001/client-components/ssr?c=" + count,
                    }
                ]
            },

            {
                name: 'Server Components - SSG',
                routes: [
                    {
                        app: 'nuxt',
                        url: "http://127.0.0.1:3000/server-components/ssg?c=" + count,
                    },
                    {
                        app: 'next',
                        url: "http://127.0.0.1:3001/server-components/ssg?c=" + count,
                    }
                ]
            },
            {
                name: 'Server Components - ISR',
                routes: [
                    {
                        app: 'nuxt',
                        url: "http://127.0.0.1:3000/server-components/isr?c=" + count,
                    },
                    {
                        app: 'next',
                        url: "http://127.0.0.1:3001/server-components/isr?c=" + count,
                    }
                ]
            },
            {
                name: 'Server Components - SSR',
                routes: [
                    {
                        app: 'nuxt',
                        url: "http://127.0.0.1:3000/server-components/ssr?c=" + count,
                    },
                    {
                        app: 'next',
                        url: "http://127.0.0.1:3001/server-components/ssr?c=" + count,
                    }
                ]
            }
        ]
    })
}


module.exports = routes
