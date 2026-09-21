# AI Daily Topic Provider — Candidate v0.1

## Role

AI-specific implementation of the generic TopicProvider.

It reads runtime state; it does not embed a fixed calendar in Skill source.

## Default resolution

1. explicit user topic
2. explicit user override
3. today's configured Calendar entry
4. fresh AI Topic Radar candidate that passes hard gates
5. Evergreen Bank fallback

## HOT override

A HOT signal may displace a planned Evergreen only when:
- source/freshness verified;
- human relevance passes;
- one-mechanism gate passes;
- storyability passes;
- duplicate gate passes;
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
