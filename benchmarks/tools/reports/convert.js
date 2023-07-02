const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

module.exports = async () => {
    const files = fs.readdirSync(path.join(__dirname, '../../reports'))
        .filter(file => file.endsWith('.html'))
        .map(filename => {
            const name = path.join(__dirname, '../../reports') + '/' + filename;

            return {filename, path: name, content: fs.readFileSync(name, 'utf8')}
        });

    const browser = await puppeteer.launch({
        headless: "new",
    });

    for (let file of files) {
        const page = await browser.newPage();
        await page.setContent(file.content, {waitUntil: 'domcontentloaded'});
        await page.pdf({
            scale: 0.85,
            path: file.path.replace('.html', '.pdf'),
            margin: {top: '0px', right: '10px', bottom: '0px', left: '10px'},
            printBackground: true,
            format: 'A4',
        });
        await page.close();
    }

    await browser.close();
}
