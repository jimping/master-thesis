const util = require('util');
const exec = util.promisify(require('child_process').exec);
const routes = require('../../routes');
const parser = require('../../utils/parser');

async function run() {
    for (let components of routes) {
        for (let group of components.groups) {
            for (let route of group.routes) {
                const {app, file} = parser(route, components, group, 'lighthouse');

                console.info(`Generating Lighthouse Report for ${app.toUpperCase()} route: ${route.url}...`)

                await exec(`
                   lighthouse \
                      --output json \
                      --output-path ${file} \
                      ${route.url} \
                      --only-categories=performance \
                      --chrome-flags="--headless"
                  `);

                console.info(`Lighthouse Report for\n... ${app.toUpperCase()}\n... ${route.url}\nfinished. Cooling down for 10s...`)

                await new Promise((resolve) => setTimeout(resolve, 10000));
            }
        }
    }
}

run();
