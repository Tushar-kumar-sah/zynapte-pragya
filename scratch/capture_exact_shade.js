const { execSync } = require('child_process');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseDir = 'C:\\Users\\sah05\\.gemini\\antigravity\\brain\\74102ae1-3e00-459a-bf7a-359ebfd6f78a';

const screenshots = [
  { name: 'shade_desktop_hero.png', url: 'http://localhost:3000/', w: 1280, h: 850 },
  { name: 'shade_desktop_flow.png', url: 'http://localhost:3000/', w: 1280, h: 2200 },
  { name: 'shade_mobile_390.png', url: 'http://localhost:3000/', w: 390, h: 1000 },
  { name: 'shade_pricing_desktop.png', url: 'http://localhost:3000/pricing-enquiry', w: 1280, h: 1100 },
  { name: 'shade_features_desktop.png', url: 'http://localhost:3000/all-features', w: 1280, h: 1100 }
];

for (const s of screenshots) {
  try {
    const outPath = `${baseDir}\\${s.name}`;
    execSync(`"${chromePath}" --headless --disable-gpu --window-size=${s.w},${s.h} --screenshot="${outPath}" "${s.url}"`);
    console.log(`Captured ${s.name}`);
  } catch (err) {
    console.error(`Failed ${s.name}:`, err.message);
  }
}
