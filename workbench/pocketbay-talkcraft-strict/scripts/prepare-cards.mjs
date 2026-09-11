import fs from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const upstream = path.resolve(root, '../../_video-talkcraft');
const srcCards = path.join(root, 'src/cards');
await fs.mkdir(srcCards, {recursive:true});

const slugs = [
  'slab-punch-title','source-converge','word-slot-cycle','title-demote-to-label',
  'evidence-scroll-tour','split-60-40-story','strike-and-replace','step-timeline-vertical',
  'gallery-wall-dolly','lead-word-zoom-assemble','line-carry-transition',
  'caret-wipe-transition','pullback-cool-transition'
];

const copy = async (slug) => {
  const from = path.join(upstream, 'template/cards', `${slug}.tsx`);
  const to = path.join(srcCards, `${slug}.tsx`);
  const s = await fs.readFile(from,'utf8');
  await fs.writeFile(to,s);
};
for (const s of slugs) await copy(s);

const patch = async (slug, fn) => {
  const file=path.join(srcCards,`${slug}.tsx`);
  let s=await fs.readFile(file,'utf8');
  const before=s;
  s=fn(s);
  if(s===before) throw new Error(`patch produced no change: ${slug}`);
  await fs.writeFile(file,s);
};
const must = (s,a,b,label) => {
  if(!s.includes(a)) throw new Error(`missing pattern ${label||a.slice(0,80)}`);
  return s.replace(a,b);
};

// Global skin token replacement is presentation-only. Motion timing/easing/geometry remains upstream.
for (const slug of slugs) {
  const f=path.join(srcCards,`${slug}.tsx`);
  let s=await fs.readFile(f,'utf8');
  s=s.replaceAll('#0066cc','#5B5FF2');
  // Only replace the default decorative accent; semantic risk red remains on evidence marks where meaningful.
  if (slug !== 'evidence-scroll-tour') s=s.replaceAll('#e0452c','#5B5FF2');
  await fs.writeFile(f,s);
}

// slab-punch-title: expose only copy + backdrop/media skin. Motion core untouched.
await patch('slab-punch-title', (s) => {
  s=must(s,
`export default function SlabPunchTitle({ hostSrc }: { hostSrc?: string }) {`,
`type Props = { line1?: string; line2?: string; mediaSrc?: string; transparent?: boolean };
export default function SlabPunchTitle({ line1 = "表面上在做", line2 = "一句话部署", mediaSrc, transparent = false }: Props) {`, 'slab signature');
  s=s.replace(`<div className="host-wrap"><Host src={hostSrc} /></div>`, `{mediaSrc ? <div className="host-wrap"><img src={mediaSrc} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} /></div> : null}`);
  s=s.replace(`background: "#ffffff", color: "#1d1d1f", overflow: "hidden",`, `background: transparent ? "transparent" : "#ffffff", color: "#1d1d1f", overflow: "hidden",`);
  s=s.replace(`>找到</div>`,`>{line1}</div>`);
  s=s.replace(`              关键点\n`,`              {line2}\n`);
  return s;
});

// source-converge: optional real screenshot thumbnails replace text inside source nodes.
await patch('source-converge', (s) => {
  s=must(s,
`  /** 汇聚完成后的说明行 */\n  caption?: string;\n};`,
`  /** 汇聚完成后的说明行 */\n  caption?: string;\n  /** 可选真实来源截图：只替换来源胶囊的内容，不改曲线路径/时序 */\n  sourceImages?: string[];\n};`, 'source props');
  s=must(s,
`export default function SourceConverge({ title = "四个平台的数据，怎么汇成一张表", sources = ["抖音", "小红书", "B 站", "公众号"], hub = "一张表", caption = "每天 8 点自动更新" }: Props) {`,
`export default function SourceConverge({ title = "四个平台的数据，怎么汇成一张表", sources = ["抖音", "小红书", "B 站", "公众号"], hub = "一张表", caption = "每天 8 点自动更新", sourceImages }: Props) {`, 'source signature');
  s=must(s,
`              <rect x={-64} y={-22} width={128} height={44} rx={22} /><text y={7}>{sources[i]}</text>`,
`              <rect x={-64} y={-22} width={128} height={44} rx={22} />{sourceImages?.[i] ? <image href={sourceImages[i]} x={-56} y={-18} width={112} height={36} preserveAspectRatio="xMidYMid slice" clipPath="inset(0 round 18px)" /> : <text y={7}>{sources[i]}</text>}`, 'source node');
  return s;
});

// evidence-scroll-tour: replace fake-document presentation layer with a real page image + machine-measured mark.
// The original timing/easing/scroll curve is preserved verbatim by keeping GEO and all y-curve code unchanged.
await patch('evidence-scroll-tour', (s) => {
  s=must(s,
`export default function EvidenceScrollTour({ hostSrc }: { hostSrc?: string }) {`,
`type Props = { pageSrc?: string; markTop?: number; filename?: string };
export default function EvidenceScrollTour({ pageSrc, markTop = GEO.boxTop, filename = "PocketBay · live page" }: Props) {`, 'evidence signature');
  s=s.replace(`<div className="doc-titlebar"><i /><i /><i /><span className="fname">个人借款服务协议（2024 修订版）.pdf</span></div>`, `<div className="doc-titlebar"><i /><i /><i /><span className="fname">{filename}</span></div>`);
  // Make real image the moving page itself. Keep fake DOM only as fallback for card lint/demo fidelity.
  s=s.replace(`<div className="doc-page" style={{ transform: \`translateY(\${y}px)\` }}>`, `<div className="doc-page" style={{ transform: \`translateY(\${y}px)\`, padding: pageSrc ? 0 : undefined }}>\n            {pageSrc ? <>\n              <img src={pageSrc} style={{width:'100%',height:GEO.pageH,objectFit:'cover',objectPosition:'top',display:'block'}} />\n              <span className="mark-box" style={{position:'absolute',left:18,right:18,top:markTop,height:46,transform:\`scale(\${boxScale})\`,transformOrigin:'50% 50%'}} />\n            </> : <>`);
  // Close fallback fragment immediately before closing .doc-page. Use a stable terminal snippet from upstream.
  s=s.replace(`          </div>\n        </div>\n      </div>\n      <div className="host-badge">`, `            </>}\n          </div>\n        </div>\n      </div>\n      <div className="host-badge" style={{display:'none'}}>`) ;
  return s;
});

// strike-and-replace: copy only; change content constants/presentation sentence.
await patch('strike-and-replace', (s) => {
  s=s.replace(`from: "128K"`,`from: "部署能力"`).replace(`to: "1M"`,`to: "完整链路"`);
  s=s.replace(`上下文窗口是`,`真正有意思的是`);
  s=s.replace(`，一年翻了八倍`,``);
  s=s.replace(`<div className="host-wrap"><Host src={hostSrc} /></div>`, `<div className="host-wrap" style={{display:'none'}}><Host src={hostSrc} /></div>`);
  s=s.replace(`left: 45%; right: 3%;`,`left: 18%; right: 18%;`);
  return s;
});

// step timeline: reference explicitly allows 3–4 nodes and asks to lengthen lineDur when adding a node.
// We modify only data/config plus which one node is marked current; core inverse-easing trigger remains unchanged.
await patch('step-timeline-vertical', (s) => {
  s=s.replace(`lineDur: 0.6,`,`lineDur: 0.80,`);
  s=s.replace(`const WRAP_H = 264;`,`const WRAP_H = 352;`);
  const old=`const STEPS = [\n  { at: 22, kicker: "第一步", title: "先把目标写成一句话" },\n  { at: 132, kicker: "第二步", title: "砍掉两件不做的事" },\n  { at: 242, kicker: "第三步", title: "今天就动第一步" },\n];`;
  const neu=`const STEPS = [\n  { at: 22, kicker: "第一步", title: "AI 做出产品" },\n  { at: 126, kicker: "第二步", title: "PocketBay 上线" },\n  { at: 230, kicker: "第三步", title: "被发现 / 使用 / 反馈" },\n  { at: 334, kicker: "第四步", title: "继续迭代 / 有人付钱" },\n];`;
  s=must(s,old,neu,'steps array');
  s=s.replaceAll(`i === 0`, `i === STEPS.length - 1`);
  s=s.replace(`<div className="host-col"><Host src={hostSrc} /></div>`, `<div className="host-col" style={{display:'none'}}><Host src={hostSrc} /></div>`);
  s=s.replace(`left: 132px; top: 118px; width: 420px;`, `left: 230px; top: 84px; width: 560px;`);
  return s;
});

// caret-wipe: expose scene copy only. Complementary clipping/micro-motion/caret timing untouched.
await patch('caret-wipe-transition', (s) => {
  s=must(s,`export default function CaretWipeTransition({ hostSrc }: { hostSrc?: string }) {\n  void hostSrc;   // 本卡无主持人占位`, `type Props = { oldText?: string; newText?: string };
export default function CaretWipeTransition({ oldText = "上一段", newText = "下一段" }: Props) {`, 'caret signature');
  s=s.replace(`>被退格吃掉</div>`,`>{oldText}</div>`).replace(`>刚被打出来</div>`,`>{newText}</div>`);
  s=s.replace(`<div className="tag" style={{ opacity: tagOpacity }}>\n        光标即边界：走过之处是新场景 · 未到之处正被吃掉\n      </div>`, `<div className="tag" style={{ opacity: tagOpacity }}>PocketBay · 编辑式章节交接</div>`);
  return s;
});

// pullback-cool: expose only labels. Camera/dim/blur curves stay untouched.
await patch('pullback-cool-transition', (s) => {
  s=must(s,`export default function PullbackCoolTransition({ hostSrc }: { hostSrc?: string }) {\n  void hostSrc;   // 本卡无主持人占位`, `type Props = { oldText?: string; newText?: string };
export default function PullbackCoolTransition({ oldText = "上一段", newText = "下一段" }: Props) {`, 'pull signature');
  s=s.replace(`          后拉冷却\n`,`          {oldText}\n`).replace(`<div className="big">呼吸落定</div>`,`<div className="big">{newText}</div>`);
  s=s.replace(`<div className="tag" style={{ opacity: tagOpacity }}>\n        出场内容沉暗（相机收住）→ 入场从 0.90 后拉 · 全片最慢的一式\n      </div>`, `<div className="tag" style={{ opacity: tagOpacity }}>PocketBay · 冷却交接</div>`);
  return s;
});

// title-demote: hide demo host if present, keeping content props + motion core unchanged.
await patch('title-demote-to-label', (s) => {
  const needle=`<div className="host-col"><Host src={hostSrc} /></div>`;
  if (s.includes(needle)) return s.replace(needle, `<div className="host-col" style={{display:'none'}}><Host src={hostSrc} /></div>`);
  return s.replaceAll('#0066cc','#5B5FF2');
});

// gallery/lead/word/split use their upstream props directly; line-carry remains an exact upstream recipe skin.

console.log('Copied and minimally patched TalkCraft cards:', slugs.join(', '));
