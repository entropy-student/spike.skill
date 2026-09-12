# Calibration 001 — Pet Care 45s

## Result

The hybrid director approach is viable. The first pass exposed one missing template-routing rule and was automatically corrected before the calibration was closed.

## Pass 1 finding

`WideCausalTagMap` matched the causal semantics, but the native component visibly assumes a presenter/A-roll subject. With no A-roll input available, the rendered placeholder presenter weakened polish and violated the intended asset-appropriateness standard.

## Correction

The shot was rerouted to `WideProcessPillBuilder`, which can operate from text / step-list / SRT inputs. The upstream component source and canonical colors remain unchanged.

Final Code Motion block:

- `WideHudChapterTitle` — once
- `WideProcessPillBuilder` — once
- Primary family: `VibeCutReferenceShots`
- Source modification: none

## Director score

Calibration score: **86 / 100** — calibration PASS, not production-final.

Main remaining limitation: TalkCraft subtitle chrome is not overlaid on the Code Motion block because this test prioritizes native-template visual integrity. A future version should define subtitle treatment as global video chrome rather than reskinning upstream templates.

## Rule extracted

A Code Motion candidate must pass its **supported-input / visible-subject contract** in addition to semantic fit, family fit, and uniqueness. Preview placeholders must not silently reach production output.
