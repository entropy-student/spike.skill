<div align="center">

# 🎙️ Short-Form Spoken Script

### Build the retention structure first, then rewrite it for a human voice

**A self-contained short-form scripting skill: Timing Contract → Content Contract → Retention Architecture → Spoken Rewrite → Oral QA.**

[简体中文](./README.md) · [English](./README_EN.md) · [Full Skill Rules](./SKILL.md)

![Version](https://img.shields.io/badge/version-v0.1.1-orange?style=flat-square)
![Status](https://img.shields.io/badge/status-Calibrating-yellow?style=flat-square)
![Focus](https://img.shields.io/badge/focus-Spoken%20Script-blueviolet?style=flat-square)

</div>

## What it does

AI-written talking-head scripts often fail in one of two ways: they have good structure but sound written, or they sound casual but do not maintain attention. This skill handles the two problems in separate passes and locks duration/speaking rate before drafting.

```text
Topic / Evidence
↓
Timing Contract
Duration × speaking rate = target spoken length
↓
Content Contract
↓
Retention Architecture
↓
Spoken Rewrite
↓
Oral QA
↓
Final spoken-word script
```

The language pass is not allowed to silently change the hook promise, evidence order, payoff, core takeaway, or CTA function.

## Speaking-rate input

Users may provide their own measured or preferred speaking rate. For Chinese spoken scripts, when no rate is supplied, the default is:

> **4.8 readable/spoken characters per second**

The target length is planned as `target_seconds × speaking_rate_cps`, with about ±5% default tolerance. Punctuation, whitespace and Markdown are excluded; numbers and English terms are approximated according to how they are actually spoken. Real measured audio always overrides the character model.

Examples at the default Chinese rate:
- 45 s ≈ 216 spoken characters
- 60 s ≈ 288
- 120 s ≈ 576

## Default deliverables

1. Title / topic name
2. Best hook
3. Complete read-aloud script
4. Spoken character/word count + speaking rate + estimated duration

Shot directions, B-roll, motion design, voice, subtitles, thumbnails and publishing are downstream tasks.

## Supported use cases

Explainers, product/business commentary, opinions, tutorials, reviews, stories, personal narratives and truthful promotional content for Douyin, Xiaohongshu video, TikTok, Reels, Shorts and similar short-form platforms.

## Quick use

```text
Use Short-Form Spoken Script.
Topic: Why do many AI-built projects never get truly launched?
Platform: short-form vertical video
Duration: 45 seconds
Speaking rate: optional; Chinese defaults to 4.8 chars/s
Audience: people building products with AI coding tools
Goal: watch-through + meaningful comments

Calculate the target spoken length first, lock one content promise,
build the retention structure, then rewrite only for natural spoken language.
Return title, best hook, full spoken script, spoken length, rate and estimated duration.
```

## Method references

This is an original Spike Skill Library synthesis. It was informed by:
- https://github.com/social-media-skills/skills/tree/main/skills/short-form-video-script
- https://github.com/KKKKhazix/human-writing

They are references, not runtime dependencies. See `RESEARCH_NOTES.md`.

<div align="center">

### Structure earns attention. Language earns trust.

</div>