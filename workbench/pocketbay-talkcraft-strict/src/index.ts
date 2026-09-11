import React from 'react';
import {Composition, registerRoot} from 'remotion';
import {PocketBayStrict} from './Composition';

const Root=()=> <Composition id="PocketBayStrict" component={PocketBayStrict} width={1920} height={1080} fps={30} durationInFrames={3600}/>;
registerRoot(Root);
