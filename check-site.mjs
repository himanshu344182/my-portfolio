import puppeteer from 'puppeteer';

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
        page.on('pageerror', error => console.log('BROWSER ERROR:', error.message));

        console.log("Navigating to http://localhost:4173/");
        await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
        
        console.log("Done checking.");
        await browser.close();
    } catch (e) {
        console.error("Script failed:", e);
    }
})();
