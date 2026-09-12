import React from 'react';
import {AbsoluteFill, Composition, Sequence, interpolate, registerRoot, useCurrentFrame} from 'remotion';
import {AeOrganicGradientField, AeSaasKineticType} from './AeProjectReferenceShots';
import {WideProcessPillBuilder} from './VibeCutReferenceShots';

const FPS = 30;
const TOTAL = 861; // 28.7s, rebased from SRT 03:39.527 -> 04:08.230

const S1_END = 184; // 00:00.000 -> 00:06.128
const S2_END = 424; // -> 00:14.143
const S3_END = 718; // -> 00:23.925

const cues = [
  [0, 93, '因为真正科学的照护，不应该是：'],
  [93, 184, '每一个问题，都对应一件商品。'],
  [184, 293, '猫喝水少，不一定非要买智能饮水机。'],
  [293, 424, '多放几个水碗、增加湿粮，同样可能解决问题。'],
  [424, 523, '所以判断一件宠物用品值不值得买，'],
  [523, 636, '可以先问三个问题：问题真的存在吗？'],
  [636, 718, '这个问题真的需要解决吗？'],
  [718, 817, '除了买东西，还有没有别的方法？'],
  [817, 861, '最后再回头看：'],
] as const;

const Subtitle: React.FC<{children: React.ReactNode}> = ({children}) => (
  <div
    style={{
      position: 'absolute',
      left: 150,
      right: 150,
      bottom: 42,
      textAlign: 'center',
      color: '#fffdf7',
      fontFamily: 'Noto Sans CJK SC, Microsoft YaHei, PingFang SC, sans-serif',
      fontSize: 38,
      fontWeight: 700,
      lineHeight: 1.35,
      textShadow: '0 3px 20px rgba(0,0,0,.85)',
      zIndex: 100,
    }}
  >
    {children}
  </div>
);

const ContinuityRail: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, TOTAL - 1], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 34,
          left: 58,
          right: 58,
          height: 3,
          background: 'rgba(255,255,255,.18)',
          zIndex: 80,
        }}
      >
        <div style={{height: '100%', width: `${progress * 100}%`, background: '#c9f36a'}} />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 52,
          left: 58,
          fontFamily: 'Noto Sans CJK SC, Microsoft YaHei, PingFang SC, sans-serif',
          fontSize: 20,
          fontWeight: 800,
          letterSpacing: 1.5,
          color: 'rgba(255,255,255,.7)',
          zIndex: 80,
        }}
      >
        科学照护 · SOLVE THE PROBLEM FIRST
      </div>
    </>
  );
};

const Subtitles: React.FC = () => (
  <>
    {cues.map(([from, to, text]) => (
      <Sequence key={`${from}-${text}`} from={from} durationInFrames={to - from} layout="none">
        <Subtitle>{text}</Subtitle>
      </Sequence>
    ))}
  </>
);

const Film: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#06050d'}}>
    <Sequence from={0} durationInFrames={S1_END}>
      <AeSaasKineticType
        phrases={['真正科学的照护', '不应该是', '问题 = 商品']}
        kicker="SCIENCE ≠ SHOPPING"
        accent="#ff7658"
      />
    </Sequence>

    <Sequence from={S1_END} durationInFrames={S2_END - S1_END}>
      <WideProcessPillBuilder
        title="猫喝水少，只有一种解法吗？"
        prompt="问题：猫喝水少"
        steps={['智能饮水机', '多放几个水碗', '增加湿粮']}
        accent="#c9f36a"
      />
    </Sequence>

    <Sequence from={S2_END} durationInFrames={S3_END - S2_END}>
      <WideProcessPillBuilder
        title="值不值得买？先问三个问题"
        prompt="先把购买冲动变成判断"
        steps={['问题真的存在吗？', '这个问题真的需要解决吗？', '除了购买，还有别的方法吗？']}
        accent="#8ab4ff"
      />
    </Sequence>

    <Sequence from={S3_END} durationInFrames={TOTAL - S3_END}>
      <AeOrganicGradientField
        title="先解决问题，再决定买不买"
        subtitle="最后，再回头看"
        colors={['#c9f36a', '#8ab4ff', '#ff7658']}
      />
    </Sequence>

    <ContinuityRail />
    <Subtitles />
  </AbsoluteFill>
);

const Root: React.FC = () => (
  <Composition
    id="CodeMotionPetTest"
    component={Film}
    durationInFrames={TOTAL}
    fps={FPS}
    width={1920}
    height={1080}
  />
);

registerRoot(Root);
