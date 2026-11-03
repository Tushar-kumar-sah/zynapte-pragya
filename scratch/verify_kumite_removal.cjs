const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const brainDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

  // 1. Contact Page
  await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  const contactBanner = await page.$('.authorized-partner-banner-contact');
  if (contactBanner) {
    await contactBanner.screenshot({ path: path.join(brainDir, 'verify_contact_banner.png') });
    console.log('Saved verify_contact_banner.png');
  }

  // 2. Home page Bottom CTA & Footer
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  const bottomCta = await page.$('.section-bottom-cta');
  if (bottomCta) {
    await bottomCta.screenshot({ path: path.join(brainDir, 'verify_bottom_cta.png') });
    console.log('Saved verify_bottom_cta.png');
  }

  const footer = await page.$('.site-footer');
  if (footer) {
    await footer.screenshot({ path: path.join(brainDir, 'verify_footer.png') });
    console.log('Saved verify_footer.png');
  }

  await browser.close();
  console.log('Verification screenshots complete.');
})();
