const puppeteer = require('puppeteer');
const fs = require('fs');
const files = [];
const readFiles = (dir) => {
    fs.readdirSync(dir).forEach(filename => {
        const name = dir + '/' + filename;
        const isDirectory = fs.statSync(name).isDirectory();
        isDirectory ? readFiles(name) : files.push({filename, path: name, content: fs.readFileSync(name, 'utf8')});
    });
}

async function generatePdf() {
    readFiles(__dirname);

    const filterFilesByHtmlDocuments = files.filter(file => file.filename.endsWith('.html'));

    const browser = await puppeteer.launch({
        headless: "new",
    });

    for (let file of filterFilesByHtmlDocuments) {
        const page = await browser.newPage();
        await page.setContent(file.content, {waitUntil: 'domcontentloaded'});
        await page.pdf({
            scale: 0.75,
            path: file.path.replace('.html', '.pdf'),
            margin: {top: '0px', right: '30px', bottom: '0px', left: '30px'},
            printBackground: true,
            format: 'A4',
        });
        await page.close();
    }

    await browser.close();
}

generatePdf()
