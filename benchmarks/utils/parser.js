module.exports = function (route, suffix = '', components = 10) {
    const uri = route.replace(/http:\/\/(.*):(\d+)\//s, '');
    const app = route.indexOf('3000') !== -1 ? 'nuxt' : 'next';
    const file = `./benchmarks/reports/${app}/${uri}${suffix}.json`;
    const path = file.replace(/\/[^\/]+$/s, '');
    const url = `${route}?c=${components}`

    return {
        url,
        uri,
        app,
        file,
        path
    }
}
