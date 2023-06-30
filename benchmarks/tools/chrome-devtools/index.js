const util = require('util');
const fs = require('fs')
const exec = util.promisify(require('child_process').exec);
const routes = require('../../routes');
const parser = require('../../utils/parser');

async function run() {
    for (let route of routes) {
        const {app, file, path} = parser(route);

        console.info(`Generating Performance Timeline for ${app.toUpperCase()} route: ${route}...`)

        const timeout = 30 * 1000; // 30 seconds
        const {stdout, stderr} = await exec(`
            perf-timeline generate ${route} \
              --path ${file} \
              --emulate-network-conditions \
              --connection-type cellular2g \
              --set-cpu-throttling-rate \
              --rate 4 \
              --timeout ${timeout}
          `);

        if (stdout) console.info(stdout);
        if (stderr) console.error(stderr);

        console.info(`Performance Timeline for\n... ${app.toUpperCase()}\n... ${route}\nfinished. Cooling down for 10s...`)

        await new Promise((resolve) => setTimeout(resolve, 10000));
    }
}

run();
