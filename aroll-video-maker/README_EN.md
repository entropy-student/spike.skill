<div align="center">

# 🎞️ Aroll Video Maker

### Semantic-driven illustrated narrative video skill

**Character-locked · selectable style library · many-to-many narration/visual mapping · one color master per new visual state · Remotion/CSS motion**

[简体中文](./README.md) · [English](./README_EN.md) · [Full Skill Rules](./SKILL.md)

![Status](https://img.shields.io/badge/status-v0.1.0%20Calibrating-orange?style=flat-square)
![Format](https://img.shields.io/badge/output-16%3A9%20%7C%201920x1080-blue?style=flat-square)
![Video Model](https://img.shields.io/badge/video%20model-not%20required-success?style=flat-square)

</div>

---

## What it solves

A common AI illustration-video pipeline behaves like this:

```text
one sentence
→ one image
→ fixed reveal
→ next sentence
```

That often feels like an animated slide deck.

Aroll Video Maker instead uses:

```text
script + voiceover
→ semantic understanding
→ visual beats
→ shot planning
→ reuse an existing color master OR generate one new color master
→ Remotion/CSS motion
```

It explicitly supports:

- one sentence mapping to multiple images;
- one image spanning multiple sentences;
- multiple shots derived from one image;
- callback / reuse;
- no generative video model requirement.

---

## Default output

```text
16:9
1920×1080
landscape
subtitles off by default
no generative video model
one color master for each genuinely new visual state
```

Black-and-white layers, detail layers, intermediate frames, pans, zooms and reveals should not trigger extra image-generation calls by default.

---

## Core architecture

### Character Lock

Keep the recurring character stable in face, hair, age, body proportions, outfit and signature traits using a fixed Character Reference.

### Style Lock

Read the current style library from `gnipbao/story-to-handdrawn-video` at runtime and lock one selected style for the full video.

### Semantic Director

Do not cut by punctuation alone. Evaluate action, emotion, time, location, contrast, punchline, visual metaphor and whether the current image already communicates the meaning.

### Audio Master Timeline

Voiceover timing drives the visual timeline. Visual scenes do not dictate narration duration.

---

## Pipeline

```text
script + voiceover + character reference
→ choose current style
→ Character Lock + Style Lock
→ audio timeline
→ Semantic Director
→ Visual Beat Planner
→ Shot Planner
→ reuse first
→ generate one color master only when necessary
→ consistency review
→ Remotion/CSS
→ optional subtitles / SFX / BGM
→ 1920×1080 MP4
```

---

## Key rule

> Narration ≠ Visual Beat ≠ Shot ≠ Image

A new shot does not imply a new generated image.

A single color master may produce a wide shot, close-up, crop, pan, punch-in, hold and callback without another generation call.

Left-to-right reveal and grayscale-to-color are optional effects, not mandatory scene grammar.

---

## Upstreams

- `gnipbao/story-to-handdrawn-video`: style library, character consistency, image-generation and Remotion foundations
- `luvisir/story-to-handdrawn-video`: voiceover timing, DSP and FFmpeg synchronization patterns
- `Vincentwei1021/video-shotcraft`: optional shot / motion recipe reference

This skill does not modify upstream repositories.

---

## Quick invocation

```text
Use Aroll Video Maker for this video.
Here are the script, final voiceover and character reference.
Let me choose one current style.
Default to 16:9 landscape with no subtitles and no generative video model.
Do not map one sentence to one image. Use semantic visual beats, allow one sentence to use multiple images and multiple sentences to share an image.
Generate only one color master when a genuinely new visual state is required; make the remaining shot changes with Remotion/CSS.
```

---

## Status

**v0.1.0 — Calibrating**

The first calibration cycle focuses on character consistency, semantic cut quality, one-image/multi-shot reuse, and the final 16:9 no-subtitle viewing experience.
