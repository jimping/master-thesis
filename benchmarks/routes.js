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
                        url: "http://127.0.0.1:3000/client-components/" + count + "/ssg",
                    },
                    {
                        app: 'next',
                        url: "http://127.0.0.1:3001/client-components/" + count + "/ssg",
                    }
                ]
            },
            {
                name: 'Client Components - ISR',
                routes: [
                    {
                        app: 'nuxt',
                        url: "http://127.0.0.1:3000/client-components/" + count + "/isr",
                    },
                    {
                        app: 'next',
                        url: "http://127.0.0.1:3001/client-components/" + count + "/isr",
                    }
                ]
            },
            {
                name: 'Client Components - SSR',
                routes: [
                    {
                        app: 'nuxt',
                        url: "http://127.0.0.1:3000/client-components/" + count + "/ssr",
                    },
                    {
                        app: 'next',
                        url: "http://127.0.0.1:3001/client-components/" + count + "/ssr",
                    }
                ]
            },

            {
                name: 'Server Components - SSG',
                routes: [
                    {
                        app: 'nuxt',
                        url: "http://127.0.0.1:3000/server-components/" + count + "/ssg",
                    },
                    {
                        app: 'next',
                        url: "http://127.0.0.1:3001/server-components/" + count + "/ssg",
                    }
                ]
            },
            {
                name: 'Server Components - ISR',
                routes: [
                    {
                        app: 'nuxt',
                        url: "http://127.0.0.1:3000/server-components/" + count + "/isr",
                    },
                    {
                        app: 'next',
                        url: "http://127.0.0.1:3001/server-components/" + count + "/isr",
                    }
                ]
            },
            {
                name: 'Server Components - SSR',
                routes: [
                    {
                        app: 'nuxt',
                        url: "http://127.0.0.1:3000/server-components/" + count + "/ssr",
                    },
                    {
                        app: 'next',
                        url: "http://127.0.0.1:3001/server-components/" + count + "/ssr",
                    }
                ]
            }
        ]
    })
}


module.exports = routes
