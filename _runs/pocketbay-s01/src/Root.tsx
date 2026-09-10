import React from 'react';
import {Composition} from 'remotion';
import {S01} from './S01';

export const Root: React.FC = () => (
  <>
    <Composition
      id="S01"
      component={S01}
      durationInFrames={338}
      fps={30}
      width={1920}
      height={1080}
    />
  </>
);
