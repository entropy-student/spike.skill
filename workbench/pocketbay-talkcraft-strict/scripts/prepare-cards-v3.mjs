import fs from 'node:fs/promises';
import path from 'node:path';
await import('./prepare-cards-v2.mjs');

const root=process.cwd();
const file=path.join(root,'src/cards/gallery-wall-dolly.tsx');
let s=await fs.readFile(file,'utf8');
// Card reference explicitly permits move/hold/pull to follow the spoken duration; geometry and camera law stay unchanged.
s=s.replace('move: 1.0,','move: 0.70,')
   .replace('hold: 0.9,','hold: 0.55,')
   .replace('lead: 0.8,','lead: 0.55,')
   .replace('pull: 1.2,','pull: 0.80,')
   .replace('exit: 0.4,','exit: 0.35,')
   .replace('end: 8.2,','end: 5.70,');
await fs.writeFile(file,s);
console.log('gallery-wall-dolly CONFIG shortened to fit S11 while preserving full wide→stops→pullback grammar.');
