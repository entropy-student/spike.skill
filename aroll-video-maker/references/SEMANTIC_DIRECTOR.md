# Semantic Director Reference

This reference defines how Aroll Video Maker decides whether narration should hold, reuse, reframe, or generate a genuinely new visual state.

## Core rule

Do not segment visuals by punctuation alone.

For each narration span, compare the current semantic state with the previous accepted visual state across these dimensions:

1. subject / character
2. action
3. emotion
4. time
5. location / environment
6. causal or contrast relation
7. punchline / reaction
8. visual metaphor opportunity
9. evidence / UI / object emphasis
10. whether the existing color master still communicates the meaning clearly

## Hard new-beat triggers

A new Visual Beat is strongly justified when at least one of these occurs:

- clear time jump;
- clear location change;
- character action changes meaningfully;
- emotional state reverses or becomes the main information;
- A/B contrast needs separate visual states;
- a reaction is itself the payoff;
- a punchline needs a dedicated visual;
- an abstract idea benefits from a distinct visual metaphor;
- evidence, object, screen, UI or detail must become the visual subject.

## Reuse / hold triggers

Prefer the existing image when:

- narration only elaborates the same idea;
- the same character remains in the same state and place;
- the difference can be communicated by crop, punch-in, pan, opacity or local emphasis;
- changing the image would add variety but no new meaning;
- a callback to an earlier frame creates stronger continuity.

## Split test

Ask:

> If this narration were muted, would the viewer need to see a visibly different state to understand the change?

If yes, a new Visual Beat may be justified.
If no, prefer reuse or shot variation.

## Merge test

Ask:

> Can one accepted color master still communicate all adjacent narration spans without creating a false state or hiding an important reversal?

If yes, merge / hold.

## Image-generation test

Even when a new Visual Beat exists, do not automatically generate a new image.

Ask:

> Can an already accepted color master express this beat through crop, reframe, callback, grayscale, mask, or local emphasis?

If yes, reuse it.
If no, generate one new color master.

## Example A — One sentence → several beats

Narration:

> 昨天它还回答得很正常，今天却突然像变笨了一样。

Possible plan:

```text
V01 yesterday / normal AI use
V02 today / changed state
V03 protagonist reaction
V04 optional visual metaphor for degraded intelligence
```

This is valid because time, state and reaction change.

## Example B — Several sentences → one image

Narration:

> 我又试了几个问题。答案还是很敷衍。甚至连前面说过的内容都忘了。

If all three lines describe the same person at the same desk observing the same failure state, one color master may span the entire passage. Use a hold plus crop / punch-in rather than generating three near-duplicates.

## Example C — Same image → multiple shots

Color master:

> protagonist sitting at desk, confused by an abnormal AI response.

Shots:

```text
S01 medium framing
S02 crop to face
S03 crop to laptop
S04 callback later in the video
```

No additional image generation is required.

## Anti-patterns

Reject these rationales for a new image by themselves:

- “the sentence ended”;
- “the shot has lasted two seconds”;
- “we need more movement”;
- “a close-up would be nice”;
- “the next clause starts with 但是 / 然后 / 所以”;
- “the current image has already appeared once”.

A new image needs new visual meaning, not merely new punctuation or variety.

## Rhythm guardrails

These are guardrails, not targets:

- very short shots are acceptable for reaction bursts, punchlines and deliberate rapid cutting;
- long holds are acceptable for explanation when the frame remains semantically correct;
- if a frame feels visually stale but semantics have not changed, try a new shot from the same master before generating a new master;
- avoid uniform shot lengths across the whole video.

## Decision summary

```text
Narration span
↓
Has visual meaning changed?
├─ NO → HOLD / REUSE / REFRAME
└─ YES
   ↓
Can an existing accepted master express it?
   ├─ YES → REUSE / CALLBACK / CROP
   └─ NO → generate exactly one new color master
```
