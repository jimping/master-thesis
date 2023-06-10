const util = require('util');
const exec = util.promisify(require('child_process').exec);
const routes = require('../../routes');
const parser = require('../../utils/parser');

async function run() {
    for (let route of routes) {
        const {app, file, path} = parser(route, '-lighthouse');

        console.info(`Generating Lighthouse Report for ${app.toUpperCase()} route: ${route}...`)

        const {stdout, stderr} = await exec(`
           lighthouse \
              --output json \
              --output html \
              --output-path ${file} \
              ${route} \
              --only-categories=performance \
              --chrome-flags="--headless"
          `);
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    }

};

run();
