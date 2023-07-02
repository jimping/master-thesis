const puppeteer = require('puppeteer');
const util = require('util');
const path = require('path');
const fs = require('fs');
const exec = util.promisify(require('child_process').exec);

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
        const pdfFile = file.path.replace('.html', '.pdf');
        const pngFile = file.path.replace('.html', '.png');

        const page = await browser.newPage();
        await page.setContent(file.content, {waitUntil: 'domcontentloaded'});
        await page.pdf({
            scale: 0.85,
            path: pdfFile,
            margin: {top: '0px', right: '10px', bottom: '0px', left: '10px'},
            printBackground: true,
            format: 'A4',
        });
        await page.close();

        // convert to png for doc file
        await exec(`convert -density 300 ${pdfFile} ${pngFile}`)
    }

    await browser.close();
}
