const util = require('util');
const exec = util.promisify(require('child_process').exec);
const routes = require('../../routes');
const parser = require('../../utils/parser');

async function run() {
    for (let route of routes) {
        const {app, file, path} = parser(route, '-lighthouse');

        console.info(`Generating Lighthouse Report for ${app.toUpperCase()} route: ${route}...`)

        await exec(`
           lighthouse \
              --output json \
              --output html \
              --output-path ${file} \
              ${route} \
              --only-categories=performance \
              --chrome-flags="--headless"
          `);

        console.info(`Lighthouse Report for\n... ${app.toUpperCase()}\n... ${route}\nfinished. Cooling down for 10s...`)

        await new Promise((resolve) => setTimeout(resolve, 10000));
    }
}

run();
