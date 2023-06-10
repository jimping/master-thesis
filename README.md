# Master Thesis:Comparative empirical study of the performance of the web frameworks Nuxt.js and Next.js

Jonas Imping<br>
TH-Lübeck

## Requirements

- Zsh (version 5.9)<br>
  https://www.zsh.org/
- Node.js (version 18.7.0)<br>
  https://nodejs.org/en/
- npm (version 8.15.0)<br>
  https://www.npmjs.com/
- pnpm (version 8.1.0)<br>
  https://pnpm.io/
- Lighthouse CLI (version 10.2.0)<br>
  https://github.com/GoogleChrome/lighthouse
- Wrk (version 4.2.0)<br>
  https://github.com/wg/wrk
- Perf Timeline CLI (version 0.1.3)<br>
  https://github.com/CondeNast/perf-timeline-cli
- Bigrig (version 1.3)
  https://github.com/googlearchive/node-big-rig

## Folder Structure

- apps
  - next (version 13.4)
  - nuxt (version 3.5)
- benchmarks
  - lighthouse
  - chrome dev tools
  - http 

## How to run

### Next.js

```bash
npm run a:next
```

### Nuxt.js

```bash
npm run a:nuxt
```

## How to benchmark

### Lighthouse

```bash
npm run b:lighthouse
```

### Chrome Dev Tools

```bash
npm run b:chrome
```

### HTTP

```bash
npm run b:http
```
