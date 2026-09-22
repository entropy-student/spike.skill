# FFmpeg Renderer Adapter — Candidate v0.1

## Role

Baseline deterministic final-video renderer for Story Showrunner.

Validated environment:
- FFmpeg 9.0-full_build
- ffprobe available
- libx264
- AAC
- libass subtitles
- 1920x1080 / 30fps probe PASS
- structured timeline mutation PASS

## Boundary

FFmpeg owns deterministic assembly, not creative direction.

Inputs:
- FINAL_SHOT_TIMELINE
- accepted still/frame assets
- narration_master.wav
- FINAL_SUBTITLES.srt
- explicit motion/edit primitives
- output spec

It may not:
- change Visual Beat meaning/order;
- change frame choice;
- rewrite subtitles;
- change narration;
- invent transitions;
- change POV;
- generate explanatory graphics;
- use Remotion/Hyperframe unless the package explicitly routes a shot there.

## Baseline render modes

Supported in v0.1:

- STATIC
- HOLD
- SCALE_IN
- SCALE_OUT
- PAN
- PAN_ZOOM
- SCROLL_VERTICAL
- OVERLAY_STATIC
- CROSSFADE_EXPLICIT

Default:
`STATIC`

If no explicit motion primitive is declared, hold the accepted still for the resolved shot duration.

## Timing

Runtime Timeline Resolver is authoritative.

Visual timing must come from:
`FINAL_SHOT_TIMELINE`

Do not render from planned timestamps after FINAL timing exists.

At 30fps, visual edit boundaries are frame-quantized:
`1 frame = 33.333...ms`

Audio and subtitle source timestamps may be finer-grained.

The renderer should map visual boundaries to the nearest valid frame while preserving:
- order;
- non-overlap;
- final total duration;
- protected setup/reveal relationships.

## Inputs

Recommended workspace:

```text
render/
├─ frames/
│  ├─ SRCH_VB001.png
│  └─ ...
├─ narration_master.wav
├─ FINAL_SUBTITLES.srt
├─ FINAL_SHOT_TIMELINE.csv
├─ render_plan.json
└─ ffmpeg_render.py
```

## render_plan.json

Each shot:

```json
{
  "visual_beat_id": "SRCH_VB001",
  "frame": "frames/SRCH_VB001.png",
  "start": 0.0,
  "end": 4.2,
  "render_mode": "STATIC",
  "params": {}
}
```

The render plan is compiled from FINAL_SHOT_TIMELINE plus explicit edit instructions.

## Assembly

Baseline:
1. validate all required frames exist;
2. validate timeline order/non-overlap;
3. quantize visual boundaries to 30fps;
4. build deterministic video track;
5. mux narration;
6. burn or place FINAL subtitles according to package output policy;
7. encode H.264 + AAC;
8. ffprobe final output;
9. emit render report.

## Resume

Rendering is deterministic and cheap relative to generation.

Do not regenerate image/TTS assets because a final assembly render fails.

Retry only:
- renderer invocation;
- temporary intermediate generation;
- final mux/encode.

## QA

PASS requires:
- 1920x1080;
- 30fps;
- H.264;
- audio present;
- final duration within one video frame + permitted encoder tail tolerance of resolved timeline;
- every Visual Beat present in order;
- no missing frame;
- no unintended black/gap frame;
- subtitle track/burn-in present and ordered;
- narration starts at intended runtime origin.

## Failure codes

- RETURN_FFMPEG_NOT_AVAILABLE
- RETURN_RENDER_PLAN_INVALID
- RETURN_RENDER_FRAME_MISSING
- RETURN_RENDER_TIMELINE_OVERLAP
- RETURN_RENDER_DURATION_MISMATCH
- RETURN_RENDER_AUDIO_MISSING
- RETURN_RENDER_SUBTITLE_FAILURE
- RETURN_FFMPEG_EXECUTION
