const { chromium } = require('/usr/lib/node_modules/playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.goto('https://artificialanalysis.ai/', { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(2000);
  
  // Take screenshot
  await page.screenshot({ path: '/tmp/ai-leaderboard.png', fullPage: false });
  
  // Extract rankings data from the page
  const rankings = await page.evaluate(() => {
    const sections = document.querySelectorAll('section');
    const data = {
      intelligence: [],
      speed: [],
      price: []
    };
    
    // This is a simplified selector - the actual page structure needs verification
    const cards = document.querySelectorAll('[data-testid="model-card"], .model-card, .leaderboard-row');
    
    return data;
  });
  
  console.log(JSON.stringify({ success: true, screenshot: '/tmp/ai-leaderboard.png' }));
  
  await browser.close();
})().catch(e => {
  console.error(JSON.stringify({ success: false, error: e.message }));
  process.exit(1);
});