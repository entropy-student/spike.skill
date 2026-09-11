import { chromium } from 'playwright';
import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const pagesDir = path.join(root, 'public/pages');
const stillsDir = path.join(root, 'public/stills');
await fs.mkdir(pagesDir, {recursive:true});
await fs.mkdir(stillsDir, {recursive:true});

const browser = await chromium.launch({headless:true});
const ctx = await browser.newContext({viewport:{width:1440,height:900}, deviceScaleFactor:2, locale:'en-US'});
const page = await ctx.newPage();
page.setDefaultTimeout(4000);

const safeGoto = async (url) => {
  await page.goto(url, {waitUntil:'domcontentloaded', timeout:45000});
  await page.waitForTimeout(1800);
};

// page.screenshot({clip}) expects document coordinates. Measure from getBoundingClientRect()
// plus scroll offsets rather than Locator.boundingBox() viewport coordinates.
const docBox = async (loc) => {
  try {
    if ((await loc.count()) < 1) return null;
    return await loc.evaluate((el) => {
      const r = el.getBoundingClientRect();
      return {x:r.left + window.scrollX, y:r.top + window.scrollY, width:r.width, height:r.height};
    });
  } catch { return null; }
};

const boxForText = async (text) => docBox(page.getByText(text, {exact:false}).first());

const boxForCandidates = async (candidates) => {
  for (const t of candidates) {
    const b = await boxForText(t);
    if (b) return {box:b, text:t};
  }
  return null;
};

const screenshotBox = async (b, file, padX=80, padY=70, minH=180) => {
  const {fullW,fullH} = await page.evaluate(() => ({fullW:document.documentElement.scrollWidth, fullH:document.documentElement.scrollHeight}));
  const x = Math.max(0, Math.min(fullW-1, b.x-padX));
  const y = Math.max(0, Math.min(fullH-1, b.y-padY));
  const width = Math.min(fullW-x, Math.max(b.width+padX*2, 420));
  const height = Math.min(fullH-y, Math.max(b.height+padY*2, minH));
  if (width < 2 || height < 2) return false;
  await page.screenshot({path:path.join(stillsDir,file), clip:{x,y,width,height}});
  return true;
};

const screenshotAroundCandidates = async (candidates, file, padX=80, padY=70, minH=180) => {
  const r = await boxForCandidates(candidates);
  if (!r) return false;
  return screenshotBox(r.box,file,padX,padY,minH);
};

const screenshotAroundHeadingIndex = async (selector, index, file, padX=180, padY=220, minH=520) => {
  const locs = page.locator(selector);
  const n = await locs.count();
  if (n <= index) return false;
  const b = await docBox(locs.nth(index));
  if (!b) return false;
  return screenshotBox(b,file,padX,padY,minH);
};

const mustExist = async (p) => {
  const st = await fs.stat(p).catch(()=>null);
  if (!st || st.size===0) throw new Error(`Required live evidence asset missing: ${p}`);
};

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

let ok = await screenshotAroundCandidates(['Deploy directly from your editor','Focus on the product, not the server'], 'home-deploy.png', 180, 190, 600);
if (!ok) ok = await screenshotAroundHeadingIndex('h2',0,'home-deploy.png');
if (!ok) throw new Error('Could not DOM-locate homepage Deploy section');

ok = await screenshotAroundCandidates(['Work that gets used','A name that gets known'], 'home-discover.png', 220, 260, 720);
if (!ok) ok = await screenshotAroundHeadingIndex('h2',1,'home-discover.png');
if (!ok) throw new Error('Could not DOM-locate homepage Discover section');

ok = await screenshotAroundCandidates(['A profile made of facts','Creator profile on PocketBay'], 'home-creator.png', 220, 250, 680);
if (!ok) ok = await screenshotAroundHeadingIndex('h3',2,'home-creator.png');
if (!ok) throw new Error('Could not DOM-locate homepage creator-profile section');

ok = await screenshotAroundCandidates(['Launch is not the finish line','where the loop begins'], 'home-earn.png', 220, 260, 720);
if (!ok) ok = await screenshotAroundHeadingIndex('h2',2,'home-earn.png');
if (!ok) throw new Error('Could not DOM-locate homepage Earn section');

for (const [label,file] of [
  ['Auto Ledger','app-auto-ledger.png'],
  ['RedNote Copy Gen','app-rednote-copy.png'],
  ['Color & Type Pairer','app-color-type.png'],
]) {
  const found = await screenshotAroundCandidates([label],file,130,150,300);
  if (!found) throw new Error(`Could not DOM-locate real public app card: ${label}`);
}

let logoDone = false;
for (const sel of ['img[alt="PocketBay"]','img[src*="brand"]','img[src*="logo"]']) {
  const loc = page.locator(sel).first();
  try {
    if (await loc.count()) { await loc.screenshot({path:path.join(stillsDir,'pocketbay-logo.png')}); logoDone=true; break; }
  } catch {}
}
if (!logoDone) logoDone = await screenshotAroundCandidates(['PocketBay'],'pocketbay-logo.png',24,18,80);
if (!logoDone) throw new Error('Could not capture a live PocketBay brand mark');

await safeGoto('https://pocketbay.com/zh-CN/deploy');
await page.screenshot({path:path.join(pagesDir,'deploy-full.png'), fullPage:true});
const deployTargets = {};
for (const label of ['部署前检查清单','完整流程','准备可运行的 Web 项目','平台生成构建计划','上线或根据错误修复']) deployTargets[label] = await boxForText(label);
await fs.writeFile(path.join(pagesDir,'deploy-targets.json'), JSON.stringify(deployTargets,null,2));

await safeGoto('https://pocketbay.com/discover');
await page.screenshot({path:path.join(pagesDir,'discover-full.png'), fullPage:true});
const discoverTargets = {body: await docBox(page.locator('body'))};
await fs.writeFile(path.join(pagesDir,'discover-targets.json'), JSON.stringify(discoverTargets,null,2));

await safeGoto('https://pocketbay.com/community');
await page.screenshot({path:path.join(pagesDir,'community-full.png'), fullPage:true});

await browser.close();

for (const p of [
  path.join(pagesDir,'home-hero.png'), path.join(pagesDir,'home-full.png'),
  path.join(stillsDir,'home-deploy.png'), path.join(stillsDir,'home-discover.png'),
  path.join(stillsDir,'home-creator.png'), path.join(stillsDir,'home-earn.png'),
  path.join(stillsDir,'app-auto-ledger.png'), path.join(stillsDir,'app-rednote-copy.png'),
  path.join(stillsDir,'app-color-type.png'), path.join(stillsDir,'pocketbay-logo.png'),
  path.join(pagesDir,'deploy-full.png'), path.join(pagesDir,'discover-full.png'), path.join(pagesDir,'community-full.png')
]) await mustExist(p);

const sources = `# sources.md\n\nAll PocketBay visual evidence assets were captured by Playwright during this build from the live public website. Section crops are derived from live DOM geometry, never hand-drawn mock UI.\n\n- https://pocketbay.com/ — homepage hero/full-page, DOM-measured Deploy/Discover/Creator/Earn sections, and three public example app cards.\n- https://pocketbay.com/zh-CN/deploy — deployment guide full-page + DOM target coordinates.\n- https://pocketbay.com/discover — Discover full-page.\n- https://pocketbay.com/community — Community full-page.\n\nUsage: commentary/analysis video only. The PocketBay homepage explicitly marks its showcased usage/revenue figures as illustrative demo data; the film must not present those figures as customer data.\n`;
await fs.writeFile(path.join(root,'sources.md'), sources);
console.log('Captured and validated real PocketBay page assets:', pagesDir, stillsDir);
