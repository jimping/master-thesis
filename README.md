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
- Wrk (version 4.1.0)<br>
  https://github.com/wg/wrk

### Linux setup (Ubuntu 22.04)

```bash
sudo add-apt-repository ppa:savoury1/ffmpeg4
sudo add-apt-repository ppa:savoury1/chromium

sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get dist-upgrade -y
sudo apt-get install -y wrk imagemagick libxtst6 xdg-utils libxss1 libxshmfence1 libxrender1 libxrandr2 libxkbcommon0 libxi6 libxfixes3 libxext6  libxdamage1 libxcursor1 libxcomposite1 libxcb1 libxcb-dri3-0 libx11-xcb1 libx11-6 libuuid1 libstdc++6 libpangocairo-1.0-0 libpango-1.0-0 libnss3 libnspr4 libglib2.0-0 libgcc1 libgbm1  libexpat1 libdrm2 libdbus-1-3 libcups2 libcairo2 libc6 libatspi2.0-0 libatk1.0-0 libatk-bridge2.0-0 libasound2 libxrandr2 libatk1.0-0 libatk-bridge2.0-0 libx11-xcb1 libxcb-dri3-0 libxcomposite1 libxcursor1 libxdamage1 libcups2 libdrm2 libgbm1 libgtk-3-0 chromium-browser

sudo useradd thesis -G sudo -s /bin/bash

su thesis && cd ~

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
nvm install 18

npm install -g pnpm lighthouse

git clone https://github.com/jimping/master-thesis
cd master-thesis

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
    - http/             --> HTTP-Benchmark script (wrk)
    - lighthouse/       --> Lighthouse script
    - reports/          --> Generating report
  - utils/              --> Helper scripts for benchmarking
```

## How to Run the Apps

```bash
pnpm b:all
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

![Lines of Code](./screenshots/lines-of-code.png)
