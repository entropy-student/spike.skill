import React from 'react';
import {AbsoluteFill, Freeze, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import LeadWordZoomAssemble from './cards/lead-word-zoom-assemble';
import {Backdrop} from './motion-systems/backdrop';
import {CameraRig} from './motion-systems/camera';
import {Sketch, DrawIcon, Connector, Panel, Label} from './motion-systems/schematic';

const ACCENT = '#0066CC';
const INK = '#1D1D1F';
const DIM = '#7A7A7A';

const subs = [
  {start: 0.000, end: 3.125, text: '我最近研究了一个挺有意思的产品，'},
  {start: 3.125, end: 4.167, text: '叫 PocketBay。'},
  {start: 4.167, end: 6.667, text: '它表面上是在做“一句话部署”，'},
  {start: 6.667, end: 8.333, text: '但我看完以后觉得，'},
  {start: 8.333, end: 11.250, text: '它真正想做的事情，比部署大得多。'},
];

const PlainSubtitle: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const s = subs.find((x) => t >= x.start && t < x.end);
  if (!s) return null;
  return (
    <AbsoluteFill style={{justifyContent: 'flex-end', alignItems: 'center', pointerEvents: 'none'}}>
      <div style={{marginBottom: 100, padding: '14px 42px', borderRadius: 14, background: 'rgba(7,11,20,0.72)', border: '1px solid rgba(255,255,255,0.16)', color: '#fff', fontFamily: '"PingFang SC", "Microsoft YaHei", sans-serif', fontSize: 44, fontWeight: 600, letterSpacing: 2, maxWidth: '66%', textAlign: 'center'}}>{s.text}</div>
    </AbsoluteFill>
  );
};

const RecipeStage: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const t = frame / fps;
  const fade = interpolate(t, [6.45, 6.80], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const card = (
    <LeadWordZoomAssemble
      words={['PocketBay', '不只是', '一句话部署']}
      subline="真正想做的事情，比部署大得多"
      accentIndex={0}
      accent={ACCENT}
    />
  );
  return (
    <AbsoluteFill style={{opacity: fade}}>
      <div style={{position: 'absolute', left: 0, top: 0, width: 960, height: 540, transform: 'scale(2)', transformOrigin: '0 0'}}>
        {frame < 130 ? card : <Freeze frame={129}>{card}</Freeze>}
      </div>
    </AbsoluteFill>
  );
};

const SchematicStage: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const abs = frame / fps;
  if (abs < 8.18) return null;
  const reveal = interpolate(abs, [8.18, 8.40], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  return (
    <AbsoluteFill style={{opacity: reveal}}>
      <div style={{position: 'absolute', left: 180, top: 230, width: 760}}>
        <div style={{fontFamily: '"PingFang SC", "Microsoft YaHei", sans-serif', color: INK, fontSize: 74, lineHeight: 1.15, fontWeight: 700, letterSpacing: -2}}>
          真正想接管的，<br/><span style={{color: ACCENT}}>是部署之后</span>
        </div>
        <div style={{marginTop: 26, fontFamily: '"PingFang SC", "Microsoft YaHei", sans-serif', color: DIM, fontSize: 34, lineHeight: 1.5}}>从代码到上线，再到真正的产品闭环</div>
      </div>
      <Sketch width={1920} height={1080}>
        <Panel abs={abs} at={8.26} x={1070} y={250} w={650} h={470} r={28} alpha={0.72} />
        <DrawIcon abs={abs} at={8.35} dur={0.42} name="code" x={1175} y={480} size={110} color={INK} width={3} />
        <Connector abs={abs} at={8.82} dur={0.40} from={{x: 1245, y: 480}} to={{x: 1420, y: 480}} arrow color={ACCENT} width={3} />
        <DrawIcon abs={abs} at={9.15} dur={0.42} name="rocket" x={1490} y={480} size={110} color={ACCENT} width={3} />
        <Connector abs={abs} at={9.58} dur={0.40} from={{x: 1555, y: 480}} to={{x: 1660, y: 480}} arrow color={ACCENT} width={3} />
        <DrawIcon abs={abs} at={9.92} dur={0.42} name="layers" x={1710} y={480} size={110} color={INK} width={3} />
        <Label abs={abs} at={8.60} x={1175} y={620} text="代码" size={36} color={INK} />
        <Label abs={abs} at={9.42} x={1490} y={620} text="上线" size={36} color={ACCENT} />
        <Label abs={abs} at={10.18} x={1710} y={620} text="产品闭环" size={36} color={INK} />
      </Sketch>
    </AbsoluteFill>
  );
};

export const S01: React.FC = () => (
  <AbsoluteFill style={{background: '#fff'}}>
    <Backdrop kind="pastel-mesh-flow" />
    <CameraRig durationSec={11.25} path={[{t: 0, scale: 1.0}, {t: 11.25, scale: 1.05}]}>
      <RecipeStage />
      <SchematicStage />
    </CameraRig>
    <PlainSubtitle />
  </AbsoluteFill>
);
