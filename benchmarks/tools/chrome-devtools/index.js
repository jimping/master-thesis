const util = require('util');
const exec = util.promisify(require('child_process').exec);
const routes = require('../../routes');
const parser = require('../../utils/parser');

async function run() {
    for (let route of routes) {
        const {app, file, path} = parser(route);

        console.info(`Generating Performance Timeline for ${app.toUpperCase()} route: ${route}...`)

        const {stdout, stderr} = await exec(`
            perf-timeline generate ${route} \
              --path ${file} \
              --emulate-network-conditions \
              --connection-type cellular2g \
              --set-cpu-throttling-rate \
              --rate 4
          `);
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
    }

};

run();
