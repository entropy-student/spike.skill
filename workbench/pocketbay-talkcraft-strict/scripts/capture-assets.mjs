import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const pagesDir = path.join(root, 'public/pages');
const stillsDir = path.join(root, 'public/stills');
await fs.mkdir(pagesDir, {recursive:true});
await fs.mkdir(stillsDir, {recursive:true});

const browser = await chromium.launch({headless:true});
const ctx = await browser.newContext({viewport:{width:1440,height:900}, deviceScaleFactor:2, locale:'zh-CN'});
const page = await ctx.newPage();
page.setDefaultTimeout(15000);

const safeGoto = async (url) => {
  await page.goto(url, {waitUntil:'domcontentloaded', timeout:45000});
  await page.waitForTimeout(2500);
};

const boxForText = async (text) => {
  const loc = page.getByText(text, {exact:false}).first();
  try { return await loc.boundingBox(); } catch { return null; }
};

const screenshotAroundText = async (text, file, padX=80, padY=70) => {
  const b = await boxForText(text);
  if (!b) return false;
  const fullW = await page.evaluate(() => document.documentElement.scrollWidth);
  const fullH = await page.evaluate(() => document.documentElement.scrollHeight);
  const clip = {
    x: Math.max(0, b.x-padX),
    y: Math.max(0, b.y-padY),
    width: Math.min(fullW-Math.max(0,b.x-padX), b.width+padX*2),
    height: Math.min(fullH-Math.max(0,b.y-padY), b.height+padY*2),
  };
  await page.screenshot({path:path.join(stillsDir,file), clip});
  return true;
};

// Homepage: hero + 2x full page + machine-measured interest-point boxes.
await safeGoto('https://pocketbay.com/');
await page.screenshot({path:path.join(pagesDir,'home-hero.png'), fullPage:false});
await page.screenshot({path:path.join(pagesDir,'home-full.png'), fullPage:true});
const homeTargets = {};
for (const label of [
  'From one-line deploy to a real product',
  'Deploy directly from your editor',
  'You operate the product, not the server',
  'Work that gets used',
  'A profile made of facts',
  'Launch is not the finish line',
  'Build anywhere, launch on PocketBay'
]) homeTargets[label] = await boxForText(label);
await fs.writeFile(path.join(pagesDir,'home-targets.json'), JSON.stringify(homeTargets,null,2));

// Real crops from the actual homepage, measured from DOM text positions.
await screenshotAroundText('Deploy directly from your editor','home-deploy.png',160,150);
await screenshotAroundText('Work that gets used','home-discover.png',180,220);
await screenshotAroundText('A profile made of facts','home-creator.png',180,220);
await screenshotAroundText('Launch is not the finish line','home-earn.png',180,220);
await screenshotAroundText('Auto Ledger','app-auto-ledger.png',90,110);
await screenshotAroundText('RedNote Copy Gen','app-rednote-copy.png',90,110);
await screenshotAroundText('Color & Type Pairer','app-color-type.png',90,110);

// Brand mark: capture a real rendered PocketBay logo/wordmark where possible.
let logoDone = false;
for (const sel of ['img[alt="PocketBay"]','img[src*="brand"]','img[src*="logo"]']) {
  const loc = page.locator(sel).first();
  try {
    if (await loc.count()) { await loc.screenshot({path:path.join(stillsDir,'pocketbay-logo.png')}); logoDone=true; break; }
  } catch {}
}
if (!logoDone) await screenshotAroundText('PocketBay','pocketbay-logo.png',24,18);

// Deployment guide, real full page and DOM coordinates.
await safeGoto('https://pocketbay.com/zh-CN/deploy');
await page.screenshot({path:path.join(pagesDir,'deploy-full.png'), fullPage:true});
const deployTargets = {};
for (const label of ['部署前检查清单','完整流程','准备可运行的 Web 项目','平台生成构建计划','上线或根据错误修复']) deployTargets[label] = await boxForText(label);
await fs.writeFile(path.join(pagesDir,'deploy-targets.json'), JSON.stringify(deployTargets,null,2));

// Discover and Community evidence pages.
await safeGoto('https://pocketbay.com/discover');
await page.screenshot({path:path.join(pagesDir,'discover-full.png'), fullPage:true});
const discoverTargets = {body: await page.locator('body').boundingBox()};
await fs.writeFile(path.join(pagesDir,'discover-targets.json'), JSON.stringify(discoverTargets,null,2));

await safeGoto('https://pocketbay.com/community');
await page.screenshot({path:path.join(pagesDir,'community-full.png'), fullPage:true});

await browser.close();

const sources = `# sources.md\n\nAll PocketBay page assets were captured by Playwright during this build from the live public website.\n\n- https://pocketbay.com/ — homepage hero/full-page + DOM-measured crops; accessed during CI render.\n- https://pocketbay.com/zh-CN/deploy — deployment guide full-page + DOM target coordinates.\n- https://pocketbay.com/discover — Discover full-page.\n- https://pocketbay.com/community — Community full-page.\n\nUsage: commentary/analysis video only. Page captures are evidence assets; illustrative/demo metrics shown on PocketBay remain labeled as such in the source page and must not be presented as customer data.\n`;
await fs.writeFile(path.join(root,'sources.md'), sources);
console.log('Captured real PocketBay page assets:', pagesDir, stillsDir);
