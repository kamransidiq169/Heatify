const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const { generateReport } = require('lighthouse');
const { writeReport } = require('lighthouse/lighthouse-core/lib/report');

const VIEWPORTS = [320, 360, 375, 390, 414, 480, 768, 820, 1024, 1280, 1440, 1920, 2560];
const URL = 'http://localhost:3000/';
const BASELINE_DIR = './qa/baseline';

async function capture() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto(URL, { waitUntil: 'networkidle' });
  
  for (const vp of VIEWPORTS) {
    await page.setViewportSize({ width: vp, height: 9000 });
    
    // Capture home page screenshot
    await page.screenshot({ path: path.join(BASELINE_DIR, `home-${vp}w.png`), fullPage: true });
    console.log('Captured home-' + vp + 'w.png');
    
    // Run Lighthouse
    const runnerResult = await generateReport(URL, {
      output: 'json',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      screenEmulation: { width: vp, height: 9000 },
      throttling: 'Slow 4G',
    });
    
    const reportPath = path.join(BASELINE_DIR, `lighthouse-home-${vp}w.json`);
    await writeReport(runnerResult, reportPath);
    console.log('Lighthouse report saved to ' + reportPath);
  }
  
  await browser.close();
}

capture().catch(console.error);
