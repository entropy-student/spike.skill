# Aroll Video Maker — SHOTBOOK Template

> 用于把 Audio Master Timeline、Visual Beat、Shot、Image Plan 与 Motion Plan 放在同一份可执行记录中。

## Project

```yaml
title: ""
style_id: ""
character_reference: ""
aspect_ratio: "16:9"
resolution: "1920x1080"
subtitle: false
voiceover_duration_sec: 0
```

## Narration Timeline

| Narration ID | Start | End | Text |
|---|---:|---:|---|
| N01 | 00:00.000 | 00:00.000 |  |

## Visual Beats

| Beat | Time Range | Semantic Intent | Visual Concept | Character State | Environment | New Image? | Asset |
|---|---|---|---|---|---|---|---|
| V01 | 00:00.000–00:00.000 |  |  |  |  | YES/NO | CM-001 / REUSE |

### New-image justification rule

每个 `YES` 必须回答：

> 为什么现有已通过彩色母图无法清楚表达这个新的视觉状态？

如果回答只是“想换个镜头”“避免静止”“想放大人物”之类，则应改成 `NO`，通过 Crop / Reframe / Motion 解决。

## Shot Plan

| Shot | Time Range | Beat | Asset | Framing | Motion | Cut Logic | Notes |
|---|---|---|---|---|---|---|---|
| S01 | 00:00.000–00:00.000 | V01 | CM-001 | medium | hold | hard cut |  |

## Color Master Registry

| Asset ID | Used By Beats | Character Ref | Style Lock | Continuity Ref | Status |
|---|---|---|---|---|---|
| CM-001 | V01,V02 | CHAR-001 | STYLE-XX | — | PASS/RETURN |

## Consistency Review

For every new Color Master:

```yaml
asset_id: CM-001
character_identity: PASS
hair_outfit_body: PASS
style_lock: PASS
scene_semantics: PASS
16_9_crop_safety: PASS
unexpected_text: PASS
extra_people_or_limbs: PASS
result: PASS
retry_count: 0
```

## Motion Recipes

Recommended minimal vocabulary:

```text
HOLD
HARD_CUT
CROP
REFRAME
PUNCH_IN
ZOOM
PAN
OPACITY
MASK_REVEAL
MASK_STEP
LOCAL_EMPHASIS
CALLBACK
LOCAL_GRAYSCALE_TO_COLOR
```

Do not assign motion merely to keep the frame busy.

## Final Preflight

- [ ] Voiceover is the master duration.
- [ ] Narration and Visual Timeline are not mechanically 1:1.
- [ ] One sentence may map to multiple visual beats where justified.
- [ ] Multiple narration segments may share one image where justified.
- [ ] Every new image has a semantic reason.
- [ ] No shot-only crop/zoom triggered a new image-generation call.
- [ ] Character identity remains stable.
- [ ] Style remains stable.
- [ ] Output is 1920×1080 / 16:9.
- [ ] Subtitles are absent unless explicitly enabled.
- [ ] No generative video model was used unless the user explicitly changed the project scope.
