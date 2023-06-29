# Master Thesis: Comparative empirical study of the performance of the web frameworks Nuxt.js and Next.js

Jonas Imping<br>
TH-Lübeck

## Requirements

- Node.js (version 18.7.0)<br>
  https://nodejs.org/en/
- npm (version 8.15.0)<br>
  https://www.npmjs.com/
- pnpm (version 8.1.0)<br>
  https://pnpm.io/
- Lighthouse CLI (version 10.2.0)<br>
  https://github.com/GoogleChrome/lighthouse
- Perf Timeline CLI (version 0.1.3)<br>
  https://github.com/CondeNast/perf-timeline-cli
- Bigrig (version 1.3)
  https://github.com/googlearchive/node-big-rig
- Wrk (version 4.2.0)<br>
  https://github.com/wg/wrk

### Installation of Tools

```bash
# On macOS
brew install wrk jq
# On Linux
sudo apt-get install wrk
# On Windows
choco install wrk

# Install other tools with npm
npm install -g pnpm lighthouse perf-timeline-cli

pnpm install
```

## Folder Structure

```
- apps/
  - next/               --> Next.js (Version 13.4) App
    - src/              --> Next.js Code
    - public/           --> Static Assets (Images, etc.)
    - ...
  - nuxt/               --> Nuxt.js (Version 3.6) App
    - src/              --> Nuxt.js Code
    - public/           --> Static Assets (Images, etc.)
    - ...
- benchmarks/
  - reports/            --> Reports and results of the benchmarking tests
  - tools/              --> Tools for benchmarking
    - chrome-devtools/  --> Chrome DevTools script
    - http/             --> HTTP-Benchmark script (wrk)
    - lighthouse/       --> Lighthouse script
    - report/           --> Generating report
  - utils/              --> Helper scripts for benchmarking
```

## How to Run the Apps

Setting the environment variable `COMPONENTS` is optional. The default value is `10`. To run the apps with 100 components, run the following command:

```bash
COMPONENTS=100 pnpm b:all
```


### Next.js

```bash
pnpm a:next
```

### Nuxt.js

```bash
pnpm a:nuxt
```

## How to Run the Benchmarks

Please make sure that the apps are running before starting the benchmarks.

### Lighthouse

```bash
pnpm b:lighthouse
```

### Chrome Dev Tools

```bash
pnpm b:chrome
```

### HTTP

```bash
pnpm b:http
```

### Reports

```bash
pnpm b:reports
```

### All together

```bash
pnpm b:all
```

## Count Lines of Code

```bash
npm install -g cloc
cloc --exclude-list-file=.clocignore .
```
