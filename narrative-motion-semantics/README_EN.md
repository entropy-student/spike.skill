<div align="center">

# 🎬 Narrative Motion Semantics（叙事动效语义库）

### Semantic templates and invocation system for Narrative Motion Gallery

**Treat motion design as an information-semantics problem before treating it as visual decoration.**

[简体中文](./README.md) · [English](./README_EN.md) · [Full Skill Rules](./SKILL.md)

![Version](https://img.shields.io/badge/version-v0.1-orange?style=flat-square)
![Status](https://img.shields.io/badge/status-INCOMPLETE-red?style=flat-square)
![Semantics](https://img.shields.io/badge/semantics-4-blueviolet?style=flat-square)

</div>

> [!WARNING]
> **Status: INCOMPLETE.** Four semantic packs are currently integrated: Process, Time, Comparison, and Causal. The individual imported packs may be stable baselines, but the unified cross-semantic Skill is not yet considered complete.

## Included semantics

| Semantic | Core question | Templates |
|---|---|---:|
| **Process** | How is this completed or advanced step by step? | 10 |
| **Time** | How does the same subject change through real time? | 9 |
| **Comparison** | What difference or relationship should the viewer actually remember? | 10 |
| **Causal** | Through what mechanism does a cause produce an effect? | 10 |

Total: **39 existing templates**.

## Core workflow

```text
Narration / information
    ↓
Identify the actual relationship
    ↓
Process / Time / Comparison / Causal
    ↓
Choose information topology
    ↓
Choose Template ID
    ↓
Narration sync + semantic motion
    ↓
Visual Master / Remotion
    ↓
QA
```

Do not choose Time merely because years appear, Process merely because arrows appear, or Comparison merely because two objects appear.

## Quick invocation

```text
Use Narrative Motion Semantics to analyze this narration.
First determine whether its primary semantic is Process, Time, Comparison, or Causal.
Explain why, reject the nearest alternatives, then select the best Template ID
and prepare the inputs required by the corresponding Call Protocol.
```

## Repository layout

Each semantic is consolidated into `GUIDE.md`, `MODULES.md`, and `RUNTIME.md` so the package can be read directly in GitHub while preserving source-path headings. Standalone visual-master HTML is not yet migrated into this unified Skill.

## Current incomplete areas

- cross-semantic routing on complex narration;
- mixed-semantic segmentation and primary/secondary semantics;
- additional semantic families such as path, data, and classification;
- unified runtime schema across all packs;
- migration/management of standalone visual-master HTML;
- unified Visual Master → Remotion production interface;
- calibration with more real production cases.

### Semantic first. Motion second.
