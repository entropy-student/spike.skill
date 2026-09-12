import React from 'react';
import {Sequence} from 'remotion';
import {WideHudChapterTitle, WideProcessPillBuilder} from './VibeCutReferenceShots';

export const HybridAnalysis: React.FC = () => {
  return (
    <>
      <Sequence from={0} durationInFrames={113}>
        <WideHudChapterTitle
          chapterNumber="01"
          title="不只是更爱宠物"
          subtitle="真正变化的是养宠方式"
          accent="#a8ff47"
        />
      </Sequence>
      <Sequence from={113} durationInFrames={244}>
        <WideProcessPillBuilder
          title="三件事，在同时变化"
          prompt="共同把养宠推向长期照护"
          steps={[
            '家庭关系 / 家庭成员',
            '生活方式 / 精细照护',
            '风险敏感 / 健康管理',
          ]}
          accent="#45b83f"
        />
      </Sequence>
    </>
  );
};
