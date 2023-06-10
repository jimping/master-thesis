# Master Thesis: Comparing the Performance of Next.js and Nuxt.js

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
cd apps/next
npm install
npm run build
npm run start
```

### Nuxt.js

```bash
cd apps/nuxt
npm install
npm run build
npm run start
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
