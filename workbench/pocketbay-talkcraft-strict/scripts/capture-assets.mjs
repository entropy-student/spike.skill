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
page.setDefaultTimeout(5000);

const safeGoto = async (url) => {
  await page.goto(url, {waitUntil:'domcontentloaded', timeout:45000});
  await page.waitForTimeout(1800);
  await page.evaluate(() => window.scrollTo(0, 0));
};

// DOM measurements are retained for long-page stop coordinates used by the Recipes.
const docBox = async (loc) => {
  try {
    if ((await loc.count()) < 1) return null;
    return await loc.evaluate((el) => {
      const r = el.getBoundingClientRect();
      return {x:r.left + window.scrollX, y:r.top + window.scrollY, width:r.width, height:r.height};
    });
  } catch { return null; }
};

const textLocator = async (candidates) => {
  for (const text of candidates) {
    const loc = page.getByText(text, {exact:false}).first();
    try {
      if ((await loc.count()) > 0 && await loc.isVisible()) return {loc, text};
    } catch {}
  }
  return null;
};

const boxForText = async (text) => {
  const found = await textLocator([text]);
  return found ? docBox(found.loc) : null;
};

// IMPORTANT: do not use page.screenshot({clip}) for the live-page section stills.
// Chromium can reject a mathematically valid document-space clip when a responsive page
// changes layout during scroll/font settlement. Locator/ElementHandle.screenshot scrolls the
// real DOM node into view and lets Playwright compute the safe capture rectangle itself.
const screenshotRegionForLocator = async (loc, file, {minW=420,minH=180,maxH=1100,preferSection=true}={}) => {
  try {
    await loc.scrollIntoViewIfNeeded();
    await page.waitForTimeout(120);
    const handle = await loc.evaluateHandle((el, cfg) => {
      let n = el;
      let best = el;
      while (n && n !== document.body && n !== document.documentElement) {
        const r = n.getBoundingClientRect();
        const usable = r.width >= cfg.minW && r.height >= cfg.minH && r.height <= cfg.maxH;
        if (usable) {
          best = n;
          const tag = (n.tagName || '').toLowerCase();
          if (cfg.preferSection && (tag === 'section' || tag === 'article' || tag === 'main')) break;
        }
        n = n.parentElement;
      }
      return best;
    }, {minW,minH,maxH,preferSection});
    const el = handle.asElement();
    if (!el) return false;
    await el.screenshot({path:path.join(stillsDir,file), animations:'disabled'});
    await handle.dispose();
    return true;
  } catch (err) {
    console.warn(`DOM region screenshot failed for ${file}: ${String(err)}`);
    return false;
  }
};

const screenshotAroundCandidates = async (candidates, file, opts={}) => {
  const found = await textLocator(candidates);
  if (!found) return false;
  return screenshotRegionForLocator(found.loc, file, opts);
};

const screenshotAroundHeadingIndex = async (selector, index, file, opts={}) => {
  const locs = page.locator(selector);
  const n = await locs.count();
  if (n <= index) return false;
  return screenshotRegionForLocator(locs.nth(index), file, opts);
};

const mustExist = async (p) => {
  const st = await fs.stat(p).catch(()=>null);
  if (!st || st.size===0) throw new Error(`Required live evidence asset missing: ${p}`);
};

await safeGoto('https://pocketbay.com/');
await page.screenshot({path:path.join(pagesDir,'home-hero.png'), fullPage:false, animations:'disabled'});
await page.screenshot({path:path.join(pagesDir,'home-full.png'), fullPage:true, animations:'disabled'});
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

const sectionOpts = {minW:700,minH:260,maxH:1100,preferSection:true};
let ok = await screenshotAroundCandidates(['Deploy directly from your editor','Focus on the product, not the server'], 'home-deploy.png', sectionOpts);
if (!ok) ok = await screenshotAroundHeadingIndex('h2',0,'home-deploy.png',sectionOpts);
if (!ok) throw new Error('Could not DOM-capture homepage Deploy section');

ok = await screenshotAroundCandidates(['Work that gets used','A name that gets known'], 'home-discover.png', sectionOpts);
if (!ok) ok = await screenshotAroundHeadingIndex('h2',1,'home-discover.png',sectionOpts);
if (!ok) throw new Error('Could not DOM-capture homepage Discover section');

ok = await screenshotAroundCandidates(['A profile made of facts','Creator profile on PocketBay'], 'home-creator.png', sectionOpts);
if (!ok) ok = await screenshotAroundHeadingIndex('h3',2,'home-creator.png',sectionOpts);
if (!ok) throw new Error('Could not DOM-capture homepage creator-profile section');

ok = await screenshotAroundCandidates(['Launch is not the finish line','where the loop begins'], 'home-earn.png', sectionOpts);
if (!ok) ok = await screenshotAroundHeadingIndex('h2',2,'home-earn.png',sectionOpts);
if (!ok) throw new Error('Could not DOM-capture homepage Earn section');

const cardOpts = {minW:240,minH:120,maxH:620,preferSection:false};
for (const [label,file] of [
  ['Auto Ledger','app-auto-ledger.png'],
  ['RedNote Copy Gen','app-rednote-copy.png'],
  ['Color & Type Pairer','app-color-type.png'],
]) {
  const found = await screenshotAroundCandidates([label],file,cardOpts);
  if (!found) throw new Error(`Could not DOM-capture real public app card: ${label}`);
}

let logoDone = false;
for (const sel of ['img[alt="PocketBay"]','img[src*="brand"]','img[src*="logo"]']) {
  const loc = page.locator(sel).first();
  try {
    if (await loc.count()) {
      await loc.scrollIntoViewIfNeeded();
      await loc.screenshot({path:path.join(stillsDir,'pocketbay-logo.png'), animations:'disabled'});
      logoDone=true;
      break;
    }
  } catch {}
}
if (!logoDone) logoDone = await screenshotAroundCandidates(['PocketBay'],'pocketbay-logo.png',{minW:80,minH:24,maxH:180,preferSection:false});
if (!logoDone) throw new Error('Could not capture a live PocketBay brand mark');

await safeGoto('https://pocketbay.com/zh-CN/deploy');
await page.screenshot({path:path.join(pagesDir,'deploy-full.png'), fullPage:true, animations:'disabled'});
const deployTargets = {};
for (const label of ['部署前检查清单','完整流程','准备可运行的 Web 项目','平台生成构建计划','上线或根据错误修复']) deployTargets[label] = await boxForText(label);
await fs.writeFile(path.join(pagesDir,'deploy-targets.json'), JSON.stringify(deployTargets,null,2));

await safeGoto('https://pocketbay.com/discover');
await page.screenshot({path:path.join(pagesDir,'discover-full.png'), fullPage:true, animations:'disabled'});
const discoverTargets = {body: await docBox(page.locator('body'))};
await fs.writeFile(path.join(pagesDir,'discover-targets.json'), JSON.stringify(discoverTargets,null,2));

await safeGoto('https://pocketbay.com/community');
await page.screenshot({path:path.join(pagesDir,'community-full.png'), fullPage:true, animations:'disabled'});

await browser.close();

for (const p of [
  path.join(pagesDir,'home-hero.png'), path.join(pagesDir,'home-full.png'),
  path.join(stillsDir,'home-deploy.png'), path.join(stillsDir,'home-discover.png'),
  path.join(stillsDir,'home-creator.png'), path.join(stillsDir,'home-earn.png'),
  path.join(stillsDir,'app-auto-ledger.png'), path.join(stillsDir,'app-rednote-copy.png'),
  path.join(stillsDir,'app-color-type.png'), path.join(stillsDir,'pocketbay-logo.png'),
  path.join(pagesDir,'deploy-full.png'), path.join(pagesDir,'discover-full.png'), path.join(pagesDir,'community-full.png')
]) await mustExist(p);

const sources = `# sources.md\n\nAll PocketBay visual evidence assets were captured by Playwright during this build from the live public website. Section crops are screenshots of real DOM ancestors selected from matched live-page text; long-page stop coordinates are separately measured from the live DOM. No hand-drawn mock UI is used.\n\n- https://pocketbay.com/ — homepage hero/full-page, DOM-captured Deploy/Discover/Creator/Earn sections, and three public example app cards.\n- https://pocketbay.com/zh-CN/deploy — deployment guide full-page + DOM target coordinates.\n- https://pocketbay.com/discover — Discover full-page.\n- https://pocketbay.com/community — Community full-page.\n\nUsage: commentary/analysis video only. The PocketBay homepage explicitly marks its showcased usage/revenue figures as illustrative demo data; the film must not present those figures as customer data.\n`;
await fs.writeFile(path.join(root,'sources.md'), sources);
console.log('Captured and validated real PocketBay page assets:', pagesDir, stillsDir);
