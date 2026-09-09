<div align="center">

# 🎬 TalkCraft Design Orchestrator

### A thin visual-style and SHOTBOOK confirmation layer for video-talkcraft

**No fork, no vendored recipes, no rewritten pipeline — only two additional user interaction points.**

[简体中文](./README.md) · [English](./README_EN.md) · [Full Skill Rules](./SKILL.md)

![Status](https://img.shields.io/badge/status-active-success?style=flat-square)
![Type](https://img.shields.io/badge/type-orchestrator-blueviolet?style=flat-square)
![Upstream](https://img.shields.io/badge/upstream-video--talkcraft-orange?style=flat-square)

</div>

---

## What does it solve?

`video-talkcraft` already provides the production pipeline: timing alignment, SHOTBOOK planning, motion recipes, Remotion implementation, rendering, and QA.

This Skill does not reimplement those systems. It adds only two practical interaction points:

1. **At kickoff, collect the inputs currently required by TalkCraft and ask for the visual style in the same user interaction.**
2. **Review the SHOTBOOK before implementation and optionally replace recommended shots with user-provided assets.**

---

## One-line workflow

```text
One kickoff interaction:
provide current TalkCraft-required inputs + choose visual style
        ↓
Run the current video-talkcraft pipeline until SHOTBOOK is complete
        ↓
User reviews SHOTBOOK + optional asset upload
        ↓
No upload → continue original TalkCraft flow
Upload → replace assets and rerun required checks
        ↓
Resume the current video-talkcraft pipeline
        ↓
Final video
```

If the current `video-talkcraft` version still requires **a script plus a finished voice track that matches it**, both items and the style choice must be requested together rather than in separate rounds.

---

## The two added interaction points

### 1. At kickoff: collect required inputs + choose visual style together

The first time user information is needed, use one message to do both:

- collect whatever inputs the current `video-talkcraft` version requires;
- ask the user to choose a visual design source.

When the current required inputs are still a script and finished voice track, the entry prompt should be equivalent to:

> Please provide: (1) the script and (2) a finished wav/mp3 voice track matching the script. In the same reply, choose the visual style: A. TalkCraft default; B. a style from awesome-design-md; or C. an uploaded / described custom design direction.

If one of the required inputs is already present in the conversation, request only what is missing and do not ask for it again.

Visual style sources:

- **TalkCraft default** — use the visual-language rules defined by the current `video-talkcraft` version.
- **awesome-design-md** — use a current `VoltAgent/awesome-design-md` DESIGN.md as the visual skin source, such as Apple, Runway, Nike, Stripe, Linear, Notion, Spotify, or WIRED. Available examples must be verified at runtime.
- **Custom / uploaded design direction** — DESIGN.md, brand guide, screenshots, reference images, or written visual requirements.

External styles may only change the visual skin that TalkCraft allows to be changed. **They must not replace or rewrite the core motion behavior of TalkCraft recipes.**

### 2. After SHOTBOOK: review shots and optional assets

Once the SHOTBOOK is complete, pause before Recipe / Remotion implementation and highlight shots that could benefit from user-owned assets.

Useful asset types may include:

- presenter / character footage
- B-roll
- product, people, event, poster, or illustration images
- website / UI / app screenshots
- logos and brand assets
- charts, reports, source pages, or evidence screenshots

Uploading assets is optional.

- **No assets provided:** continue the original `video-talkcraft` asset acquisition and production flow.
- **Assets provided:** replace the corresponding asset slots, update required paths/records, rerun upstream asset checks / preflight, then continue.

---

## Why an orchestrator instead of a fork?

Both upstream repositories can evolve independently:

- `Vincentwei1021/video-talkcraft`
- `VoltAgent/awesome-design-md`

Vendoring their files would create version drift. This Skill therefore follows a thin-layer model:

```text
This Skill = interaction orchestration
video-talkcraft = source of truth for video production
awesome-design-md = optional source of visual design language
```

The current upstream rules must be read at runtime instead of relying on a frozen local copy.

---

## Quick invocation

```text
Use TalkCraft Design Orchestrator to produce this video.
In the first interaction, collect the current TalkCraft-required inputs and ask me to choose the visual style at the same time.
After the SHOTBOOK is complete, let me review it and tell me which shots could use my own assets.
Except for those two checkpoints, follow the current video-talkcraft pipeline exactly.
```

If the style is already known, provide it together with the inputs:

```text
Use TalkCraft Design Orchestrator.
Here are the script and finished voice track; use the Runway design language from awesome-design-md.
Let me review the SHOTBOOK and asset opportunities before implementation.
Follow the current video-talkcraft rules for everything else.
```

---

## Upstreams

- **Video production Skill:** `Vincentwei1021/video-talkcraft`
- **Optional design-language library:** `VoltAgent/awesome-design-md`

> This directory intentionally does not vendor TalkCraft recipes, TSX files, references, or DESIGN.md snapshots.

---

## Boundaries

This Skill does **not**:

- modify `video-talkcraft`;
- modify `awesome-design-md`;
- split required-input collection and visual-style selection into separate sequential checkpoints;
- reimplement TalkCraft recipes;
- skip SHOTBOOK, preflight, rendering, or QA;
- require users to upload optional assets;
- take over the rest of the TalkCraft workflow beyond the two declared interaction points.

---

<div align="center">

### Keep the pipeline. Upgrade the art direction.

</div>
