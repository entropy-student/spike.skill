# Meme Music Router

> Starting with v0.4.0, this is no longer a router that assumes every meme should become a song. It is a **meme-first creative orchestrator**.

## Core goal

> **Find a strong meme → lock the meme core → choose the funniest presentation form → amplify the meme.**

Possible forms:

- image / meme poster
- dialogue / mini-sketch
- song
- short video
- mixed format

Music is optional.

---

## Core workflow

```text
Entertainment Rander (LIVE)
↓
Find S+/S meme candidates
↓
Meme Core Lock
→ person / scene
→ core action / conflict / iconic line
→ why it is funny
→ parent meme vs child unit
→ must-not-drift items
↓
Presentation Router
→ image / dialogue / song / short video / mixed
↓
Call only the upstream Skills required by that form
↓
Generate
↓
Meme Recognition / Binding / Amplification Tests
```

> **Meme first. Format second. Quality third.**

---

## Why v0.4.0 changed the architecture

A failure pattern in the previous workflow was:

```text
hot meme
→ force it into music
→ make the song theme more “artistic”
→ lose the meme itself
```

Calibration example:

```text
Source meme: Xue Zhenzhu storms into the office to confront Ling Ling / the mistress
Selected derivative: Indian-cinema musical version
Wrong song theme: “Put Everything on the Table”
```

The song was no longer about the original meme conflict.

Correct logic:

```text
WHAT is being played: find Ling Ling / confront the mistress / storm into the office
HOW it is played: Indian-cinema song-and-dance
```

> **Music amplifies the meme. Music does not replace the meme.**

See:

`references/MEME_AMPLIFICATION_RULES.md`

---

## Upstream Skills

| Need | Skill |
|---|---|
| Recent meme judgment | `entertainment-rander` |
| Current song heat, only when relevant | `music-trend-radar` |
| Lyrics / arrangement / music review, only after song is selected | `music-quality-radar` |

Every actual upstream use starts with a fresh GitHub read:

`references/LIVE_SKILL_INVOCATION_RULES.md`

---

## Image rules

The image must preserve both:

```text
source meme recognizability
+
selected derivative recognizability
```

For identifiable people or iconic scenes, source references come first.

Final image prompt:

- recommended: 80–160 Chinese characters or equivalent brevity
- **hard max: 200 Chinese characters or equivalent**
- let reference images carry identity details instead of repeating them in a long prompt

See:

`references/IMAGE_REFERENCE_RULES.md`

---

## Music rules

Only enter the music node when music is actually the best meme amplifier.

Before calling `music-quality-radar`, lock:

```yaml
music_meme_lock:
  meme_core:
  selected_derivative:
  music_role: amplifier
  song_theme:
  required_meme_anchor:
  forbidden_theme_drift:
```

Fixed requirements:

- song theme must directly inherit the meme action / conflict / iconic line
- title, hook and chorus should carry clear meme anchors
- do not replace the meme with a generic new theme such as communication, growth, dignity, or empowerment unless that is already part of the meme
- style/arrangement prompt target: 200–350 Chinese characters; hard max 500

See:

`references/MUSIC_OUTPUT_RULES.md`

---

## Flexible output language

Images, dialogue, lyrics, hooks and titles are not locked to Chinese.

> **Use the language that makes the meme land best.**

See:

`references/LANGUAGE_FLEXIBILITY_RULES.md`

---

## Final gates

### Meme Recognition
Can people who know the source recognize what meme is being played without extra explanation?

### Meme Binding
If you swap the character name, could the same output fit many unrelated memes almost unchanged?

If yes, it is too generic.

### Amplification
Did the chosen format actually make the meme funnier, sharper, more absurd, more satisfying, or easier to spread?

“Prettier / more musical / more professional” alone is not enough.

---

## Status

**v0.4.0 — Meme-first Orchestrator / Calibrating**

> **The meme is the subject. Every generation capability is only a performance tool.**
