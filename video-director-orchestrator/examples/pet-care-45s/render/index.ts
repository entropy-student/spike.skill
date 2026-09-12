import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {HybridAnalysis} from './HybridAnalysis';

const Root: React.FC = () => (
  <Composition
    id="HybridAnalysis"
    component={HybridAnalysis}
    durationInFrames={357}
    fps={30}
    width={1920}
    height={1080}
  />
);

registerRoot(Root);
