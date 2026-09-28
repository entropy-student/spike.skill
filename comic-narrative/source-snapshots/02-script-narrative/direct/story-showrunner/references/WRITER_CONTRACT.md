# Writer Contract — Candidate v0.1

## Purpose

Turn locked KnowledgeCore + StoryPremise into natural spoken storytelling without changing causal truth.

## Input locks

Writer must preserve:
- key claims
- evidence boundaries
- causal mechanism
- protagonist desire
- causal story skeleton
- turning-point meaning
- requested content job / editorial mode

## Output

Required:
- title
- hook
- locked_spoken_script
- semantic_timing_hints
- claim_map
- terminology reveal strategy

The Writer does **not** own final SRT timestamps.

## Story-language rules

Prefer:
- concrete event before abstraction;
- character action before explanation;
- expectation/result gap;
- state change;
- progressive complication;
- terminology after intuition;
- spoken language that can actually be voiced.

Avoid:
- explainer-first openings;
- “first/second/third” lecture structure;
- repeated thesis sentences;
- generic motivational summary;
- adding unsupported facts;
- bolting an action checklist onto a story.

## Hook

Good:
- abnormal event
- contradiction
- consequence
- unusual decision
- strong desire with immediate friction

Weak:
- “今天介绍 X”
- “最近某领域很火”
- dictionary definition

## Dialogue/prose

Important lines should perform an action:
- test
- evade
- pressure
- justify
- bargain
- decide
- reveal
- reverse

If action/image already lets the audience infer the meaning, do not explain it again.

## Timing handoff

Writer may annotate:
- NORMAL
- BUILD
- PUNCH_SETUP
- PUNCH
- REVERSAL
- REACTION
- FINAL
- intentional pause

Timing Compiler converts these into production timing.

Forbidden:
- fixed chars/s as production timing authority;
- Writer-local guessed timestamps overriding Timing Compiler;
- routine “generate TTS then creatively rewrite SRT”.

## Return codes

- `RETURN_WRITER_CHANGED_KNOWLEDGE`
- `RETURN_SCRIPT_BECAME_EXPLAINER`
- `RETURN_HOOK_TOO_PASSIVE`
- `RETURN_DIALOGUE_TOO_ON_THE_NOSE`
- `RETURN_MECHANISM_BECAME_LECTURE`
- `RETURN_ACTION_BOLTED_ON`
