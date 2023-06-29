const amount_of_components = process.env.COMPONENTS || 10;

console.log("Amount of components for the test: " + amount_of_components)

module.exports = [
    //// Nuxt.js
    // Client Components
    "http://127.0.0.1:3000/client-components/ssg?c=" + amount_of_components,
    "http://127.0.0.1:3000/client-components/isr?c=" + amount_of_components,
    "http://127.0.0.1:3000/client-components/ssr?c=" + amount_of_components,
    // Server Components
    "http://127.0.0.1:3000/server-components/ssg?c=" + amount_of_components,
    "http://127.0.0.1:3000/server-components/isr?c=" + amount_of_components,
    "http://127.0.0.1:3000/server-components/ssr?c=" + amount_of_components,

    //// Next.js
    // Client Components
    "http://127.0.0.1:3001/client-components/ssg?c=" + amount_of_components,
    "http://127.0.0.1:3001/client-components/isr?c=" + amount_of_components,
    "http://127.0.0.1:3001/client-components/ssr?c=" + amount_of_components,
    // Server Components
    "http://127.0.0.1:3001/server-components/ssg?c=" + amount_of_components,
    "http://127.0.0.1:3001/server-components/isr?c=" + amount_of_components,
    "http://127.0.0.1:3001/server-components/ssr?c=" + amount_of_components,
]
