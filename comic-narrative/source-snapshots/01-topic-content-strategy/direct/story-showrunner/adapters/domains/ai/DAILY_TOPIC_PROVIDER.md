# AI Daily Topic Provider — Candidate v0.2

## Role

AI-specific implementation of the generic TopicProvider.

It reads runtime state; it does not embed a fixed calendar in Skill source.

## Default resolution

1. explicit user topic
2. explicit user override
3. today's configured Calendar entry
4. fresh Human-world + AI/domain Topic Radar candidate that passes hard gates
5. Human-world-first Evergreen Bank fallback

## HOT override

A HOT signal may displace a planned Evergreen only when:
- source/freshness verified;
- Native X Interest / Human Process / WHY-Paradox / Human Tension / Changed Process pre-gates pass or are validly translated from a strong AI-first signal;
- human relevance passes;
- one-mechanism gate passes;
- storyability passes;
- D1–D5 duplicate gates pass, including cross-domain Meaning Duplicate;
- production can complete within useful half-life.

Otherwise retain planned Evergreen.

## Calendar states

Recommended:
- planned
- locked
- published
- displaced

Once an episode has entered locked downstream production, a normal Radar refresh must not silently replace it.

Published status requires real publication evidence.

## Runtime inputs

Logical:
- `runtime:topic_calendar`
- `runtime:topic_registry`
- `runtime:daily_ai_radar`
- `runtime:evergreen_bank`

Missing source:
`RETURN_TOPIC_SOURCE_UNRESOLVED`


## Candidate discovery contract — v0.2

Default discovery path:

```text
X Domain
→ Human Process Family
→ Observed Paradox
→ WHY
→ Human Tension
→ Meaning Fingerprint
→ AI Changed Process
→ AI Mechanism
→ Storyable Human Stakes
```

Compatibility path for strong AI signals:

```text
AI Signal
→ Audience Translation
→ Human Process / Human Problem
→ WHY / Human Tension
→ Meaning Fingerprint
→ Mechanism
```

Required semantic fields when available:
- `x_domain`
- `human_process_family`
- `observed_paradox`
- `why_question`
- `human_tension`
- `meaning_fingerprint`
- `controlling_question_seed`
- `human_process_before_ai`
- `ai_changed_process`

`meaning_fingerprint` is a dedup key, not a locked thesis.

D5 Meaning Duplicate:
different X domains may still be duplicate when they test essentially the same Human Tension / Controlling Question. Prefer the candidate with stronger evidence, storyability and reach; HOLD the others unless a materially different process/stakes/counter-idea justifies revisit.
