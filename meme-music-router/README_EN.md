# Meme Music Router（热梗音乐路由器）

> A routing skill for turning internet memes and hot topics into music-driven reinterpretations without forcing every idea through the same “find a trending song” pipeline.

## What it does

The router starts from a meme or hot topic and selects the best musical treatment:

1. **Route A — Native music meme**: the meme is already tied to a song, lyric, performance, or BGM; keep that musical memory and find the strongest role, scene, or identity reinterpretation.
2. **Route B — Current hit reinterpretation**: use a currently trending or recently resurfaced song only when the relationship is genuinely natural.
3. **Route C — Classic song reinterpretation**: if current hits do not fit, use a highly recognizable classic song with a stronger narrative or identity connection.
4. **Route D — Original music**: if no existing song truly fits, skip song matching and design an original song around the meme itself.

The key rule is simple:

> **Do not force a trending song into the workflow just because the workflow has a song-matching step.**

## Creative preferences

When two ideas are otherwise comparable, prioritize:

**upbeat / energetic / rhythmic** > **dramatic / triumphant** > mid-tempo > slow emotional songs > slow sad ballads.

Default to a **single-character POV** rather than frequent multi-character switching.

The strongest concepts usually create a real identity or story loop, not just a similar mood.

## Calibration anchor

The fixed S-tier anchor is:

> **Tang Yixin × Consort Qi / the blood-test accusation scene × “你嘴巴多毒我才不在乎” = S tier.**

Why it works: the performer who made the lyric trend is the same actor behind a classic role whose personality and famous scene naturally reinterprets that lyric. The joke/connection requires almost no explanation.

## Creative tiers

| Tier | Definition | Typical reaction |
|---|---|---|
| **B** | It can work | “Sure, that fits.” |
| **A** | Clever match | “That pairing is pretty good.” |
| **S** | Natural narrative/identity loop | “That song belongs to this character.” |
| **S+** | Creates a reusable new format | “I want to make another one using this method.” |

S+ is intentionally rare. It means the work creates a pattern that generates follow-up works, not simply that it is a better S-tier edit.

## Skill chain

```text
Entertainment Rander
    ↓
Find a meme / hot topic worth playing with
    ↓
Meme Music Router
    ↓
Choose Route A / B / C / D
    ↓
Music Trend Radar
    ↓
Only when current-song discovery is actually needed
    ↓
Music Quality Radar
    ↓
Turn the concept into a strong musical brief
    ↓
Music Prompt Generator
    ↓
Current status: UNVERIFIED
```

The final music-prompt layer has not yet been validated through repeated real Suno/music-model generations. The router therefore outputs a structured `MUSIC_BRIEF` rather than pretending that a stable final prompt recipe already exists.

## Current status

**v0.1.0 — Calibrating**
