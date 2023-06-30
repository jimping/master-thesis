# Setup
sudo apt-get install -y wrk libxtst6 xdg-utils libxss1 libxshmfence1 libxrender1 libxrandr2 libxkbcommon0 libxi6 libxfixes3 libxext6  libxdamage1 libxcursor1 libxcomposite1 libxcb1 libxcb-dri3-0 libx11-xcb1 libx11-6 libuuid1 libstdc++6 libpangocairo-1.0-0 libpango-1.0-0 libnss3 libnspr4 libglib2.0-0 libgcc1 libgbm1  libexpat1 libdrm2 libdbus-1-3 libcups2 libcairo2 libc6 libatspi2.0-0 libatk1.0-0 libatk-bridge2.0-0 libasound2 libxrandr2 libatk1.0-0 libatk-bridge2.0-0 libx11-xcb1 libxcb-dri3-0 libxcomposite1 libxcursor1 libxdamage1 libcups2 libdrm2 libgbm1 libgtk-3-0 chromium-browser
sudo add-apt-repository ppa:savoury1/ffmpeg4
sudo add-apt-repository ppa:savoury1/chromium
sudo apt-get update
sudo apt-get install chromium-browser

sudo useradd thesis -G sudo -s /bin/bash

su thesis
cd ~

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
nvm install 18.16.1

npm install -g pnpm lighthouse @condenast/perf-timeline-cli


git clone https://github.com/jimping/master-thesis
cd master-thesis

pnpm install

# Lets build the projects and run the tests
pnpm a:nuxt
pnpm a:next
pnpm b:all
