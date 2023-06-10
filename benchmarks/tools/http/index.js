const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const routes = require('../../routes');
const parser = require('../../utils/parser');

async function run() {
    for (let route of routes) {
        const {app, file, path} = parser(route, '-wrk');

        const threads = 2
        const connections = 20
        const duration = 3

        console.info(`HTTP-Tests for ${app.toUpperCase()} route: ${route}...`)

        const {stdout, stderr} = await exec(`wrk -t${threads} -c${connections} -d${duration}s ${route}`);

        console.log('stdout:', stdout);
        console.log('stderr:', stderr);

        const reqs = stdout.match(/Requests\/sec:\s+([0-9.]+)/)[1];
        const transfer = stdout.match(/Transfer\/sec:\s+([0-9.]+)/)[1];
        const total = stdout.match(/\s+([0-9.]+) requests in/)[1];

        const data = {
            req_per_sec: reqs,
            transfer_per_sec: transfer,
            total_requests: total,
            latency: {
                avg: stdout.match(/Latency\s+([0-9.]+)/)[1] + 'ms',
            },
            requests: {
                avg: stdout.match(/Req\/Sec\s+([0-9.]+)/)[1] + 'k',
            },
        }

        await fs.writeFileSync(file, JSON.stringify(data, null, 4));
    }

};

run();
