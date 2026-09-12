import React from 'react';
import {Sequence} from 'remotion';
import {WideHudChapterTitle, WideCausalTagMap} from './VibeCutReferenceShots';

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
        <WideCausalTagMap
          pairs={[
            {from: '家庭关系', to: '家庭成员'},
            {from: '生活方式', to: '精细照护'},
            {from: '风险敏感', to: '健康管理'},
          ]}
          outcome="养宠方式改变"
          accent="#a8ff47"
        />
      </Sequence>
    </>
  );
};
