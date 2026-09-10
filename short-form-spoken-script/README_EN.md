<div align="center">

# 🎙️ Short-Form Spoken Script

### Build the retention structure first, then rewrite it for a human voice

**A self-contained short-form scripting skill: Content Contract → Retention Architecture → Spoken Rewrite → Oral QA.**

[简体中文](./README.md) · [English](./README_EN.md) · [Full Skill Rules](./SKILL.md)

![Version](https://img.shields.io/badge/version-v0.1.0-orange?style=flat-square)
![Status](https://img.shields.io/badge/status-Calibrating-yellow?style=flat-square)
![Focus](https://img.shields.io/badge/focus-Spoken%20Script-blueviolet?style=flat-square)

</div>

## What it does

AI-written talking-head scripts often fail in one of two ways: they have good structure but sound written, or they sound casual but do not maintain attention. This skill handles the two problems in separate passes.

```text
Topic / Evidence
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

## Default deliverables

1. Title / topic name
2. Best hook
3. Complete read-aloud script
4. Character/word count + estimated duration

Shot directions, B-roll, motion design, voice, subtitles, thumbnails and publishing are downstream tasks.

## Supported use cases

Explainers, product/business commentary, opinions, tutorials, reviews, stories, personal narratives and truthful promotional content for Douyin, Xiaohongshu video, TikTok, Reels, Shorts and similar short-form platforms.

## Quick use

```text
Use Short-Form Spoken Script.
Topic: Why do many AI-built projects never get truly launched?
Platform: short-form vertical video
Duration: 45 seconds
Audience: people building products with AI coding tools
Goal: watch-through + meaningful comments

Lock one content promise first, build the retention structure,
then rewrite only for natural spoken language without breaking the hook/payoff chain.
Return title, best hook, full spoken script and estimated duration.
```

## Method references

This is an original Spike Skill Library synthesis. It was informed by:
- https://github.com/social-media-skills/skills/tree/main/skills/short-form-video-script
- https://github.com/KKKKhazix/human-writing

They are references, not runtime dependencies. See `RESEARCH_NOTES.md`.

<div align="center">

### Structure earns attention. Language earns trust.

</div>