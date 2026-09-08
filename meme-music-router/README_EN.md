# Meme Music Router（热梗音乐路由器）

> A routing and creative-combination skill for turning **recent, already-qualified high-tier memes or hot topics** into strong music reinterpretation concepts without redefining hotspot, music-trend, or music-quality standards.

## Core boundary

The router does **not** decide on its own:

- whether a meme/hot topic is S/A/B;
- whether a song is currently trending;
- whether the final music is good.

Those decisions belong to:

- **Entertainment Rander** → hotspot/meme tier;
- **Music Trend Radar** → current song trend;
- **Music Quality Radar** → final musical quality.

> **The three Skills above are judges. Meme Music Router is the director.**

## Default freshness

Current project mode prioritizes:

1. today / last 24 hours;
2. last 3 days;
3. up to 7 days only when the topic is still actively spreading.

By default, only Entertainment Rander **S / S+** topics enter the main production pool.

## Four routes

1. **Route A — Native music meme**: the meme is already tied to a song, lyric, performance, or BGM. Do not search for another song; instead find the strongest role, scene, identity callback, or musical reinterpretation.
2. **Route B — Current hit reinterpretation**: use a current/recently resurfaced song only when Music Trend Radar confirms the song is actually hot and the narrative relationship is natural.
3. **Route C — Classic song reinterpretation**: if current hits do not fit, use a highly recognizable classic song with a stronger identity/story connection.
4. **Route D — Original music**: if no existing song truly fits, skip song matching and design an original song around the meme itself.

Original music is not a downgrade. If Route D completes the meme better than borrowing a song, Route D should win.

## Creative preferences

When otherwise comparable, prioritize:

**upbeat / energetic / rhythmic** > **dramatic / triumphant** > mid-tempo > slow emotional songs > slow sad ballads.

Default to a **single-character POV** rather than frequent multi-character switching.

The strongest concepts create an identity/story loop rather than merely sharing the same mood.

## Calibration anchor

Fixed S-tier anchor:

> **Tang Yixin × Consort Qi / the blood-test accusation scene × “你嘴巴多毒我才不在乎” = S.**

The performer behind the trending lyric is the same actor behind a classic role whose personality and famous scene naturally reinterpret the lyric.

## Creative tiers

| Tier | Definition | Typical reaction |
|---|---|---|
| **B** | It can fit | “Sure, that works.” |
| **A** | Clever match | “That pairing is pretty good.” |
| **A+** | Pre-S with a clear upgrade path | “This is close — one more layer could make it perfect.” |
| **S** | Natural identity/story loop | “This song / idea belongs to this character.” |
| **S+** | Creates a reusable new format | “I want to create another one using this method.” |

A+ is not just “a slightly better A”. It means the hotspot has already passed the high-tier gate and the concept is close enough to S that the Router should keep exploring alternate routes, scenes, hooks, or identity loops.

## Default final output

The main output normally shows only:

- **S+**
- **S**
- **A+**

Ordinary A/B concepts are hidden unless the user asks for a full calibration pool or boundary analysis.

Do not invent S+ just to fill a quota. Do not promote ordinary A concepts to A+ merely to increase count.

## Creative expansion requirement

For each qualified hotspot, the Router should not stop at the first usable pairing. It should actively test:

- native-music reinterpretation;
- current-hit options;
- classic-song options;
- original-music options;
- single-character identity callbacks;
- stronger scenes or hooks;
- what specifically would upgrade an A+ concept into S.

The goal is not to list everything. The goal is to **search harder inside the high-quality pool**.

## After the user confirms a concept: proactively offer a meme image

When the user clearly locks a concept — for example, “use this one”, “pick #1”, “this works”, or equivalent — the Router must proactively ask once:

> **“Want me to generate a meme image for this concept too?”**

Rules:

- ask proactively; do not wait for the user to remember;
- do **not** generate automatically unless the user says yes;
- ask only once unless the user later changes their mind;
- keep the image tied to the confirmed character, scene, and core joke;
- default visual goal: understandable in 1–3 seconds, one strong focal point, strong expression/action/contrast, minimal text;
- after the image is generated, continue the already-confirmed music workflow instead of reopening concept selection;
- if the user already says “confirm this and generate the meme image”, skip the extra question and generate directly.

## Skill chain

```text
Entertainment Rander
    ↓
Recent S / S+ hotspot pool
    ↓
Meme Music Router
    ↓
Route A / B / C / D + creative expansion
    ↓
User confirms one concept
    ↓
Proactively ask whether to generate a meme image
    ├─ Yes → generate image → continue confirmed concept
    └─ No  → continue directly
    ↓
Music Trend Radar
    ↓
Only when Route B requires current-song validation
    ↓
Music Quality Radar
    ↓
Make the selected concept genuinely good music
    ↓
Music Prompt Generator
    ↓
Still being calibrated through real Suno/music-model generations
```

## Current status

**v0.2.1 — Calibrating**
