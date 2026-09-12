import React from 'react';
import {Composition, Sequence, registerRoot} from 'remotion';
import {AeSaasKineticType} from './AeProjectReferenceShots';
import {
  WideCausalTagMap,
  WideGiantKeywordBackdrop,
  WideProcessPillBuilder,
} from './VibeCutReferenceShots';

const FPS = 30;
const TOTAL = 861; // 28.7s, rebased from SRT 03:39.527 -> 04:08.230

const S1_END = 184; // 00:00.000 -> 00:06.128
const S2_END = 424; // -> 00:14.143
const S3_END = 718; // -> 00:23.925

// Constraint test:
// 1) Each upstream template is used exactly once.
// 2) Upstream source files are not edited.
// 3) No custom skin, overlay, background, subtitle style, or continuity rail is added.
// 4) Style-bearing props use the exact canonical defaults from upstream Root.tsx.
const Film: React.FC = () => (
  <>
    <Sequence from={0} durationInFrames={S1_END}>
      <AeSaasKineticType
        phrases={['真正科学的照护', '不应该是', '问题 = 商品']}
        kicker="SCIENCE ≠ SHOPPING"
      />
    </Sequence>

    <Sequence from={S1_END} durationInFrames={S2_END - S1_END}>
      <WideCausalTagMap
        pairs={[
          {from: '猫喝水少', to: '智能饮水机'},
          {from: '猫喝水少', to: '多放水碗'},
          {from: '猫喝水少', to: '增加湿粮'},
        ]}
        outcome="同样可能解决问题"
        accent="#a8ff47"
      />
    </Sequence>

    <Sequence from={S2_END} durationInFrames={S3_END - S2_END}>
      <WideProcessPillBuilder
        title="值不值得买？先问三个问题"
        prompt="先判断问题，再决定是否购买"
        steps={[
          '问题真的存在吗？',
          '这个问题真的需要解决吗？',
          '除了购买，还有没有别的方法？',
        ]}
        accent="#45b83f"
      />
    </Sequence>

    <Sequence from={S3_END} durationInFrames={TOTAL - S3_END}>
      <WideGiantKeywordBackdrop
        keyword="别急着买"
        kicker="除了买东西，还有没有别的方法？ · 最后再回头看"
        accent="#ffe64f"
      />
    </Sequence>
  </>
);

const Root: React.FC = () => (
  <Composition
    id="CodeMotionPetTestV2"
    component={Film}
    durationInFrames={TOTAL}
    fps={FPS}
    width={1920}
    height={1080}
  />
);

registerRoot(Root);
