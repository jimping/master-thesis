const amount_of_components = process.env.COMPONENTS || 10;
const frameworks = process.env.FRAMEWORKS || 'nuxt,next';
const specific_url = process.env.URL || null;

const routes = []

if (specific_url) {
    routes.push(specific_url)
} else {
    console.log("Amount of components for the test: " + amount_of_components)
    console.log("Frameworks to test: " + frameworks)

    if (frameworks.indexOf('nuxt') !== -1) {
        routes.push(...[
            //// Nuxt.js
            // Client Components
            "http://127.0.0.1:3000/client-components/ssg?c=" + amount_of_components,
            "http://127.0.0.1:3000/client-components/isr?c=" + amount_of_components,
            "http://127.0.0.1:3000/client-components/ssr?c=" + amount_of_components,
            // Server Components
            "http://127.0.0.1:3000/server-components/ssg?c=" + amount_of_components,
            "http://127.0.0.1:3000/server-components/isr?c=" + amount_of_components,
            "http://127.0.0.1:3000/server-components/ssr?c=" + amount_of_components,
        ])
    }

    if (frameworks.indexOf('next') !== -1) {
        routes.push(...[
            //// Next.js
            // Client Components
            "http://127.0.0.1:3001/client-components/ssg?c=" + amount_of_components,
            "http://127.0.0.1:3001/client-components/isr?c=" + amount_of_components,
            "http://127.0.0.1:3001/client-components/ssr?c=" + amount_of_components,
            // Server Components
            "http://127.0.0.1:3001/server-components/ssg?c=" + amount_of_components,
            "http://127.0.0.1:3001/server-components/isr?c=" + amount_of_components,
            "http://127.0.0.1:3001/server-components/ssr?c=" + amount_of_components,
        ])
    }
}

module.exports = routes
