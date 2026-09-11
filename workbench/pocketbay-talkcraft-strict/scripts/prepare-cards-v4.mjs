import fs from 'node:fs/promises';
import path from 'node:path';
await import('./prepare-cards-v3.mjs');
const root=process.cwd();

async function edit(slug, fn){
  const file=path.join(root,'src/cards',`${slug}.tsx`);
  const before=await fs.readFile(file,'utf8');
  const after=fn(before);
  if(after===before) throw new Error(`v4 no-op: ${slug}`);
  await fs.writeFile(file,after);
}

// S06 is 11.25s. Upstream card explicitly defines CONFIG.end as the shot-length knob,
// so left-media slow push and tail-aligned exits span the entire confirmed shot.
await edit('split-60-40-story', s => s.replace('end: 6.8,','end: 11.25,'));

// Dark technology-editor skin: only palette/background tokens, no timing/easing/geometry changes.
await edit('source-converge', s => s
  .replace('background: "#ffffff", color: "#1d1d1f"','background: "#0D1117", color: "#F8FAFC"')
  .replaceAll('fill: #1d1d1f','fill: #F8FAFC')
  .replaceAll('stroke: #c9c9cf','stroke: #596274')
  .replaceAll('fill: #ffffff','fill: #ffffff'));

await edit('step-timeline-vertical', s => s
  .replace('background: "#ffffff", color: "#1d1d1f"','background: "#0D1117", color: "#F8FAFC"')
  .replace('color: #1d1d1f; white-space: nowrap;','color: #F8FAFC; white-space: nowrap;')
  .replace('color: #8a8a8a; margin-bottom: 4px;','color: #94A3B8; margin-bottom: 4px;')
  .replace('background: #d2d2d7;','background: #596274;'));

await edit('lead-word-zoom-assemble', s => s
  .replace('background: "#ffffff", color: "#1d1d1f"','background: "#0D1117", color: "#F8FAFC"')
  .replace('color: #1d1d1f; line-height: 1.2;','color: #F8FAFC; line-height: 1.2;')
  .replace('color: #7a7a7a; white-space: nowrap;','color: #CBD5E1; white-space: nowrap;'));

await edit('evidence-scroll-tour', s => s.replace('background: "#ffffff", color: "#1d1d1f"','background: "#0D1117", color: "#F8FAFC"'));

console.log('Applied approved skin + per-shot duration parameters; Recipe motion laws unchanged.');
