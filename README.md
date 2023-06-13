# Master Thesis:Comparative empirical study of the performance of the web frameworks Nuxt.js and Next.js

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

### Installation of tools

```bash
# On macOS
brew install wrk
# On Linux
sudo apt-get install wrk
# On Windows
choco install wrk

# Install other tools with npm
npm install -g pnpm lighthouse perf-timeline-cli bigrig
```

## Folder Structure

- apps
  - next (version 13.4)
  - nuxt (version 3.5)
- benchmarks
  - reports
  - tools
    - chrome-devtools
    - http (wrk)
    - lighthouse
  - utils

## How to run the apps

### Next.js

```bash
pnpm a:next
```

### Nuxt.js

```bash
pnpm a:nuxt
```

## How to run the benchmarks

Please make sure that the apps are running before you start the benchmarks.

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

## Count Lines of Code

```bash
npm install -g cloc
cloc --exclude-list-file=.clocignore .
```
