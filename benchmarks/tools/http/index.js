const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const routes = require('../../routes');
const parser = require('../../utils/parser');

async function run() {
    for (let route of routes) {
        const {app, file, path} = parser(route, '-wrk');

        const threads = 1
        const connections = 3
        const duration = 10

        console.info(`Running HTTP-Tests for ${app.toUpperCase()} route: ${route}...`)

        let stdout = ''
        let stderr = ''

        let reqs = 0
        let transfer = 0
        let total = 0
        let latencyAvg = 0
        let requestsAvg = 0
        let timeouts = 0

        try {
            const cmd = await exec(`wrk -t${threads} -c${connections} -d${duration}s ${route}`);
            stdout = cmd.stdout;
            stderr = cmd.stderr;

            console.log(stdout, stderr)

            reqs = stdout.match(/Requests\/sec:\s+([0-9.]+)/)[1] ?? 0
            transfer = stdout.match(/Transfer\/sec:\s+([0-9.]+)/)[1] ?? 0;
            total = stdout.match(/\s+([0-9.]+) requests in/)[1] ?? 0;
            latencyAvg = stdout.match(/Latency\s+([0-9.]+)/)[1] ?? 0;
            requestsAvg = stdout.match(/Req\/Sec\s+([0-9.]+)/)[1] ?? 0;
            timeouts = stdout.match(/timeout ([0-9]+)/)[1] ?? 0;
        } catch (e) {
            stdout = ''
            stderr = ''
        }

        const data = {
            req_per_sec: reqs,
            transfer_per_sec: transfer,
            total_requests: total,
            timeouts: timeouts,
            latency: {
                avg: latencyAvg
            },
            requests: {
                avg: requestsAvg
            },
        }

        await fs.writeFileSync(file, JSON.stringify(data, null, 4));

        // cooldown 10s to prevent rate limiting

        console.info(`HTTP-Tests for\n... ${app.toUpperCase()}\n... ${route}\nfinished. Cooling down for 10s...`)

        await new Promise((resolve) => setTimeout(resolve, 10000));
    }
}

run();
