import React from 'react';
import {
  AbsoluteFill,
  Easing,
  Freeze,
  Img,
  Sequence,
  interpolate,
  staticFile,
  useCurrentFrame,
} from 'remotion';
import {CAPTIONS} from './captions';
import {Backdrop} from './motion-systems/backdrop';

import SlabPunchTitle from './cards/slab-punch-title';
import SourceConverge from './cards/source-converge';
import WordSlotCycle from './cards/word-slot-cycle';
import TitleDemoteToLabel from './cards/title-demote-to-label';
import EvidenceScrollTour from './cards/evidence-scroll-tour';
import Split6040Story from './cards/split-60-40-story';
import StrikeAndReplace from './cards/strike-and-replace';
import StepTimelineVertical from './cards/step-timeline-vertical';
import GalleryWallDolly from './cards/gallery-wall-dolly';
import LeadWordZoomAssemble from './cards/lead-word-zoom-assemble';
import LineCarryTransition from './cards/line-carry-transition';
import CaretWipeTransition from './cards/caret-wipe-transition';
import PullbackCoolTransition from './cards/pullback-cool-transition';

const FPS=30;
const ACCENT='#5B5FF2';
const LIGHT='#F5F7FB';
const DARK='#0D1117';

const f=(sec:number)=>Math.round(sec*FPS);

const SHOTS=[
  ['S01',0.000,11.250],['S02',11.250,17.708],['S03',17.708,25.000],['S04',25.000,33.542],
  ['S05',33.542,45.417],['S06',45.417,56.667],['S07',56.667,62.292],['S08',62.292,72.292],
  ['S09',72.292,83.958],['S10',83.958,93.958],['S11',93.958,99.792],['S12',99.792,109.792],
  ['S13',109.792,115.625],['S14',115.625,120.000],
] as const;

const CardStage:React.FC<{children:React.ReactNode; camera?:number}> = ({children,camera=0.012}) => {
  const frame=useCurrentFrame();
  const scale=interpolate(frame,[0,240],[1,1+camera],{extrapolateRight:'clamp',easing:Easing.inOut(Easing.sin)});
  return <AbsoluteFill style={{overflow:'hidden',background:LIGHT}}>
    <div style={{position:'absolute',inset:-12,scale,transformOrigin:'50% 50%'}}>
      <div style={{position:'absolute',left:0,top:0,width:960,height:540,scale:2,transformOrigin:'0 0'}}>{children}</div>
    </div>
  </AbsoluteFill>;
};

const HoldCard:React.FC<{freezeAt:number;children:React.ReactNode;camera?:number}> = ({freezeAt,children,camera}) => {
  const frame=useCurrentFrame();
  return <CardStage camera={camera}>{frame>=freezeAt?<Freeze frame={freezeAt}>{children}</Freeze>:children}</CardStage>;
};

const SlowPage:React.FC<{src:string;dark?:boolean;push?:number;overlay?:number}> = ({src,dark=false,push=1.045,overlay=0.12}) => {
  const frame=useCurrentFrame();
  const scale=interpolate(frame,[0,330],[1,push],{extrapolateRight:'clamp',easing:Easing.linear});
  return <AbsoluteFill style={{background:dark?DARK:LIGHT,overflow:'hidden'}}>
    <div style={{position:'absolute',inset:-24,scale,transformOrigin:'50% 50%'}}>
      <Img src={src} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
    </div>
    <AbsoluteFill style={{background:dark?`rgba(13,17,23,${overlay})`:`rgba(245,247,251,${overlay})`}}/>
  </AbsoluteFill>;
};

const Note:React.FC<{children:React.ReactNode;dark?:boolean;top?:number}> = ({children,dark=false,top=82}) =>
  <div style={{position:'absolute',left:120,right:120,top,textAlign:'center',fontFamily:'Noto Sans CJK SC, Microsoft YaHei, sans-serif',fontSize:42,fontWeight:700,color:dark?'#F8FAFC':'#0F172A',letterSpacing:-1}}>{children}</div>;

const SmallNote:React.FC<{children:React.ReactNode;dark?:boolean}> = ({children,dark=false}) =>
  <div style={{position:'absolute',left:130,right:130,bottom:165,textAlign:'center',fontFamily:'Noto Sans CJK SC, Microsoft YaHei, sans-serif',fontSize:30,fontWeight:600,color:dark?'#CBD5E1':'#667085'}}>{children}</div>;

const S01=()=> <AbsoluteFill>
  <SlowPage src={staticFile('pages/home-hero.png')} dark/>
  <div style={{position:'absolute',inset:0}}><CardStage camera={0}><SlabPunchTitle line1="表面上在做" line2="一句话部署" transparent/></CardStage></div>
  <div style={{position:'absolute',left:130,bottom:190,padding:'18px 30px',borderRadius:18,background:'rgba(13,17,23,.82)',color:'#fff',fontFamily:'Noto Sans CJK SC, sans-serif',fontSize:36,fontWeight:700}}>真正想做的事情，比部署大得多</div>
</AbsoluteFill>;

const S02=()=> <HoldCard freezeAt={165}>
  <SourceConverge title="AI 编码已经把“写出代码”变得可达" sources={['Codex','Cursor','Claude Code']} hub="产品代码" caption="代码做出来了"/>
</HoldCard>;

const S03=()=> <HoldCard freezeAt={180}>
  <WordSlotCycle stem="代码写完以后" words={['怎么上线','谁在使用','用户从哪来','怎么收钱']} final="真正难题" accent={ACCENT}/>
</HoldCard>;

const S04=()=> <HoldCard freezeAt={160}>
  <TitleDemoteToLabel title="门槛正在后移" items={['开发门槛降低','上线与运营','获客与变现']} itemBg={['#E8F0FF','#E6F7F2','#EDE9FE']} accent={ACCENT}/>
</HoldCard>;

const S05=()=> <CardStage camera={0}><EvidenceScrollTour pageSrc={staticFile('pages/home-scroll.png')} markTop={625} filename="PocketBay · live homepage"/></CardStage>;

const S06=()=> <CardStage camera={0}>
  <Split6040Story src={staticFile('stills/deploy-loop.mp4')} title={['判断价值的关键']} chips={['一句话部署','自动构建','快速上线']} chipBg={['#E8F0FF','#FFE9F0','#E6F7F2']}/>
</CardStage>;

const S07=()=> <CardStage><StrikeAndReplace/></CardStage>;

const S08=()=> <CardStage><StepTimelineVertical/></CardStage>;

const S09=()=> <AbsoluteFill>
  <HoldCard freezeAt={165} camera={0.008}>
    <SourceConverge title="应用商店 + 服务器 + 创作者平台" sources={['Deploy','Discover','Creator','Earn']} sourceImages={[staticFile('stills/home-deploy.png'),staticFile('stills/home-discover.png'),staticFile('stills/home-creator.png'),staticFile('stills/home-earn.png')]} hub="产品发行平台" caption="如果这条链路跑通"/>
  </HoldCard>
  <div style={{position:'absolute',right:44,top:42,padding:'10px 16px',border:'1px solid rgba(255,255,255,.25)',borderRadius:999,color:'#CBD5E1',fontFamily:'Noto Sans CJK SC,sans-serif',fontSize:22}}>官网示例画面 · illustrative demo ≠ customer data</div>
</AbsoluteFill>;

const S10=()=> <AbsoluteFill>
  <CardStage camera={0}><EvidenceScrollTour pageSrc={staticFile('pages/discover-scroll.png')} markTop={590} filename="PocketBay Discover · live page"/></CardStage>
  <div style={{position:'absolute',right:92,top:116,maxWidth:520,padding:'20px 26px',borderRadius:18,background:'rgba(95,58,18,.88)',border:'2px solid rgba(255,177,88,.72)',color:'#FFD9A8',fontFamily:'Noto Sans CJK SC,sans-serif',fontSize:32,fontWeight:700}}>最大风险：普通用户为什么要打开 PocketBay 去找应用？</div>
</AbsoluteFill>;

const S11=()=> <CardStage camera={0}>
  <GalleryWallDolly srcs={[staticFile('stills/app-auto-ledger.png'),staticFile('stills/app-rednote-copy.png'),staticFile('stills/app-color-type.png')]} labels={['Auto Ledger','RedNote Copy Gen','Color & Type Pairer']}/>
</CardStage>;

const S12=()=> <AbsoluteFill>
  <HoldCard freezeAt={140}>
    <TitleDemoteToLabel title="接下来只看两件事" items={['外部真实用户','开发者第一笔钱']} itemBg={['#E8F0FF','#EDE9FE']} accent={ACCENT}/>
  </HoldCard>
  <div style={{position:'absolute',right:210,top:330,padding:'8px 16px',border:'2px solid #94A3B8',borderRadius:12,color:'#64748B',fontFamily:'Noto Sans CJK SC,sans-serif',fontSize:24,fontWeight:700}}>待验证</div>
</AbsoluteFill>;

const S13=()=> <AbsoluteFill style={{background:LIGHT}}>
  <HoldCard freezeAt={80} camera={0.006}><SlabPunchTitle line1="这两件事跑通" line2="位置才站得住" transparent/></HoldCard>
  <SmallNote>AI 产品发行平台</SmallNote>
</AbsoluteFill>;

const S14=()=> <AbsoluteFill style={{background:DARK}}>
  <CardStage camera={0}><LeadWordZoomAssemble words={['AI','帮你把产品','写出来以后']} subline="剩下的事情，都交给我" accentIndex={2} accent={ACCENT}/></CardStage>
  <div style={{position:'absolute',right:100,bottom:160,width:260,height:92,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid rgba(255,255,255,.18)',borderRadius:18,background:'rgba(255,255,255,.06)'}}>
    <Img src={staticFile('stills/pocketbay-logo.png')} style={{maxWidth:'85%',maxHeight:'70%',objectFit:'contain'}}/>
  </div>
</AbsoluteFill>;

const components=[S01,S02,S03,S04,S05,S06,S07,S08,S09,S10,S11,S12,S13,S14];

const CaptionLayer=()=>{
  const frame=useCurrentFrame();
  const t=frame/FPS;
  const c=CAPTIONS.find(x=>t>=x.start&&t<x.end);
  if(!c) return null;
  return <div style={{position:'absolute',left:130,right:130,bottom:50,minHeight:76,display:'flex',alignItems:'center',justifyContent:'center',padding:'12px 28px',borderRadius:22,background:'rgba(0,0,0,.78)',boxShadow:'0 8px 32px rgba(0,0,0,.22)',color:'#fff',fontFamily:'Noto Sans CJK SC, Microsoft YaHei, sans-serif',fontSize:46,lineHeight:1.25,fontWeight:600,textAlign:'center',zIndex:1000}}>{c.text}</div>;
};

const TransitionStage:React.FC<{children:React.ReactNode}>=({children})=><div style={{position:'absolute',left:0,top:0,width:960,height:540,scale:2,transformOrigin:'0 0'}}>{children}</div>;

const Overlays=()=> <>
  {/* All of these are the copied upstream transition Recipes, not reimplemented approximations. */}
  <Sequence from={f(8.45)} durationInFrames={204}><TransitionStage><LineCarryTransition titleA="比部署更大" subA="PocketBay 的野心" titleB="AI 编码之后" subB="代码做出来，只是开始" srcB={staticFile('stills/home-deploy.png')}/></TransitionStage></Sequence>
  <Sequence from={f(32.742)} durationInFrames={103}><TransitionStage><CaretWipeTransition oldText="门槛后移" newText="看真实页面"/></TransitionStage></Sequence>
  <Sequence from={f(71.492)} durationInFrames={103}><TransitionStage><CaretWipeTransition oldText="完整链路" newText="产品发行平台"/></TransitionStage></Sequence>

  <Sequence from={f(24.20)} durationInFrames={104}><TransitionStage><PullbackCoolTransition oldText="四个问题" newText="门槛后移"/></TransitionStage></Sequence>
  <Sequence from={f(44.617)} durationInFrames={104}><TransitionStage><PullbackCoolTransition oldText="完整链路" newText="判断价值"/></TransitionStage></Sequence>
  <Sequence from={f(61.492)} durationInFrames={104}><TransitionStage><PullbackCoolTransition oldText="完整链路" newText="闭环"/></TransitionStage></Sequence>
  <Sequence from={f(83.158)} durationInFrames={104}><TransitionStage><PullbackCoolTransition oldText="产品发行平台" newText="最大风险"/></TransitionStage></Sequence>
  <Sequence from={f(98.992)} durationInFrames={104}><TransitionStage><PullbackCoolTransition oldText="生态风险" newText="两项证据"/></TransitionStage></Sequence>
  <Sequence from={f(114.825)} durationInFrames={104}><TransitionStage><PullbackCoolTransition oldText="条件成立" newText="最后一句"/></TransitionStage></Sequence>
</>;

export const PocketBayStrict:React.FC=()=> <AbsoluteFill style={{background:DARK}}>
  {/* Global backdrop system is copied from upstream TalkCraft. It remains visible during transparent/media shots and boundaries. */}
  <Backdrop kind="mesh-flow-dark" speed={1.0}/>
  {SHOTS.map((shot,i)=>{
    const [,start,end]=shot;
    const Comp=components[i];
    return <Sequence key={shot[0]} from={f(start)} durationInFrames={f(end)-f(start)}><Comp/></Sequence>;
  })}
  <Overlays/>
  <CaptionLayer/>
</AbsoluteFill>;
