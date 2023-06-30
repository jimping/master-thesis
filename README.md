# Master Thesis: Comparative empirical study of the performance of the web frameworks Nuxt.js and Next.js

Jonas Imping<br>
TH-Lübeck

## Requirements

- Node.js (version 18.16.1)<br>
  https://nodejs.org/en/
- NVM (version 0.39.3)<br>
  https://github.com/nvm-sh/nvm
- npm (version 9.7.2)<br>
  https://www.npmjs.com/
- pnpm (version 8.6.5)<br>
  https://pnpm.io/
- Lighthouse CLI (version 10.3.0)<br>
  https://github.com/GoogleChrome/lighthouse
- Perf Timeline CLI (version 0.1.3)<br>
  https://github.com/CondeNast/perf-timeline-cli
- Bigrig (version 1.3)
  https://github.com/googlearchive/node-big-rig
- Wrk (version 4.1.0)<br>
  https://github.com/wg/wrk

### Installation of Tools

```bash
# On macOS
brew install wrk
# On Linux
sudo apt-get install wrk
# On Windows
choco install wrk

# Install other tools with npm
npm install -g pnpm lighthouse @condenast/perf-timeline-cli

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
