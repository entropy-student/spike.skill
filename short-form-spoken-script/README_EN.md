<div align="center">

# 🎙️ Short-Form Spoken Script

### Build the retention structure first, then rewrite it for a human voice

**A self-contained short-form scripting skill: Timing Contract → Content Contract → Retention Architecture → Spoken Rewrite → Oral QA → SRT.**

[简体中文](./README.md) · [English](./README_EN.md) · [Full Skill Rules](./SKILL.md)

![Version](https://img.shields.io/badge/version-v0.1.3-orange?style=flat-square)
![Status](https://img.shields.io/badge/status-Calibrating-yellow?style=flat-square)
![Focus](https://img.shields.io/badge/focus-Spoken%20Script-blueviolet?style=flat-square)

</div>

## What it does

AI-written talking-head scripts often fail in one of two ways: they have good structure but sound written, or they sound casual but do not maintain attention. This skill handles those problems in separate passes, locks duration/speaking rate before drafting, and derives an SRT from the locked script using the same speaking-rate input.

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
Script Lock
├─ Spoken Script
└─ SRT using the same timing source
```

The language pass is not allowed to silently change the hook promise, evidence order, payoff, core takeaway, or CTA function. The SRT pass is not allowed to rewrite the locked script.

## Speaking-rate input

Users may provide their own measured or preferred speaking rate. For Chinese spoken scripts, when no rate is supplied, the default is:

> **4.8 readable/spoken characters per second**

The target length is planned as `target_seconds × speaking_rate_cps`, with about ±5% default tolerance. Punctuation, whitespace and Markdown are excluded; numbers and English terms are approximated according to how they are actually spoken. Real measured audio always overrides the character model.

The derived SRT must use the same timing source. If the script is planned at 4.8 chars/s, the estimated SRT cannot silently use another fixed speed.

Examples at the default Chinese rate:
- 45 s ≈ 216 spoken characters
- 60 s ≈ 288
- 120 s ≈ 576

## Default deliverables

The existing spoken-script template stays unchanged:

1. Title / topic name
2. Best hook — the actual opening of the spoken script, shown once
3. Body continuation — starts immediately after the hook and must not repeat it
4. Spoken character/word count + speaking rate + estimated duration

The reading order is simply `Best Hook → Body Continuation`. The hook is surfaced separately only for review, replacement and A/B testing. Total count and duration are calculated once across `hook + body continuation`.

A standard completed run also returns:

5. A standalone UTF-8 `.srt` file derived from the same locked script.

Without real audio, SRT timestamps are estimated from the configured speaking rate. If real voice/TTS audio becomes available later, the SRT should be re-aligned to that audio and the estimated timeline replaced.

## SRT rules

- The SRT text must match `Best Hook + Body Continuation` without omissions, duplicates or added sentences.
- The hook appears once and begins at `00:00:00,000`.
- Segment timing is estimated as `segment_spoken_chars / speaking_rate_cps` when no real audio exists.
- Split by meaning and natural breath first; typically aim for about 1.5–4 seconds per subtitle block.
- Timestamps must increase continuously without overlap or reversal.
- Use standard `HH:MM:SS,mmm --> HH:MM:SS,mmm` SRT syntax.

See `references/05_SRT_TIMING.md` and `templates/srt_delivery.md`.

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
Return title, best hook, body continuation, spoken length, rate and estimated duration.
Show the hook once; the body must continue after it without repeating it.
Also generate a standalone SRT using the same speaking-rate input.
```

## Production handoff

```text
Short-Form Spoken Script
↓
Locked Script + Estimated SRT
↓
Voice / TTS
↓
Real Audio Alignment (when available)
↓
TalkCraft / Director Layer
↓
Video Production
```

The skill does not handle formal storyboards, voice generation, motion design, thumbnails or publishing. An SRT generated without real audio is a speaking-rate estimate, not word-level acoustic alignment.

## Method references

This is an original Spike Skill Library synthesis. It was informed by:
- https://github.com/social-media-skills/skills/tree/main/skills/short-form-video-script
- https://github.com/KKKKhazix/human-writing

They are references, not runtime dependencies. See `RESEARCH_NOTES.md`.

<div align="center">

### Structure earns attention. Language earns trust.

</div>