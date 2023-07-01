module.exports = function (route, components, group, suffix = '') {
    const uri = route.url.replace(/http:\/\/(.*):(\d+)\//s, '').split('?')[0];
    const app = route.app
    const name = group.name.replace(' ', '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
    const file = `./benchmarks/reports/${name}_${components.count}_${app}_${suffix}.json`;
    const path = file.replace(/\/[^\/]+$/s, '');

    return {
        uri,
        app,
        name,
        group,
        file,
        path
    }
}
