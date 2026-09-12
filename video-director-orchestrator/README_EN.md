<div align="center">

# 🎬 Video Director Orchestrator

### A hybrid directing layer for TalkCraft + Remotion Code Motion Explainer

**Decide what the viewer should see before deciding which template to use.**

[简体中文](./README.md) · [English](./README_EN.md) · [Full Skill](./SKILL.md)

![Status](https://img.shields.io/badge/status-v0.1.0%20Experimental-orange?style=flat-square)
![Type](https://img.shields.io/badge/type-director%20orchestrator-blueviolet?style=flat-square)

</div>

---

## Purpose

A sequence of individually polished Remotion shots can still feel like a reel of unrelated demos.

This Skill adds the missing directing layer between narrative planning and motion implementation:

- route each semantic beat to A-roll, B-roll, evidence, screen/UI, code motion, typography, or transition;
- preserve real-world evidence instead of replacing it with abstract motion;
- choose a compatible native Code Motion style family instead of reskinning finished templates;
- keep persistent objects and handoffs across adjacent shots;
- prevent the same template from being reused later with different copy;
- run a director-level QC after both upstream technical QC systems pass.

---

## Division of responsibility

```text
TalkCraft
= narrative / narration timing / real assets / SHOTBOOK / spoken-video rhythm

Remotion Code Motion Explainer
= abstract mechanisms / process / causality / UI / systems / editable Remotion motion

Video Director Orchestrator
= visual-role routing / native style family / continuity / template registry / unified director QC
```

The upstream Skills are read fresh at runtime. This repository does not store frozen copies of their rules.

---

## v0.1 hard rules

1. **Visual Role before Template.**
2. **Evidence before abstraction.**
3. Existing Code Motion templates keep their native visual design; do not reskin or edit upstream template source.
4. One Code Motion template may appear only once per final video as one contiguous instance.
5. Prefer one native Code Motion style family per film; a predeclared secondary family is the v0.1 maximum.
6. Adjacent major shots need a meaningful object, semantic, spatial, media, or deliberate chapter-reset handoff.
7. Add only one new primary user approval gate: the Director Pack.

---

## Core artifact: `DIRECTOR_PLAN.json`

It sits between TalkCraft's SHOTBOOK and implementation and records:

- visual role;
- asset status / evidence requirement;
- native style family;
- persistent objects;
- handoff in / out;
- Code Motion candidates;
- template usage registry;
- planned chapter resets;
- unified QC targets.

See [`templates/DIRECTOR_PLAN.example.json`](./templates/DIRECTOR_PLAN.example.json).

---

## Fast invocation

```text
Use Video Director Orchestrator v0.1 for this narrated video.
Reload the current video-talkcraft and remotion-code-motion-explainer Skills first.
Run TalkCraft through timing, asset planning, and SHOTBOOK, then build DIRECTOR_PLAN.
Choose the visual role before searching for a template.
Keep existing Code Motion templates in their native style and use each template at most once.
Prefer a single native style family and design handoffs between adjacent shots.
Combine SHOTBOOK, asset gaps, style family, template candidates, and continuity into one Director Pack for my approval.
After approval, continue through both upstream QC systems plus the unified director QC.
```

---

## Status

**v0.1.0 Experimental.**

The main calibration question is whether visual-role routing, native-style-family locking, one-template-per-film usage, and persistent-object handoffs can move a technically competent “70-point” edit toward a coherent 85+ film without adding excessive user interaction.
