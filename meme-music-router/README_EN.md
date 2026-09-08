# Meme Music Router

> v0.4.1 is a **meme-first creative orchestrator**: find the meme first, lock the meme core and episode name, then make image and music serve that same concept.

## Core goal

> **Find a strong meme → lock the meme core → name the episode before production → choose the funniest treatment → amplify the meme.**

> **Meme first. Name locks the concept. Format amplifies it.**

---

## Core workflow

```text
Entertainment Rander (LIVE)
↓
Find S+/S memes
↓
Meme Core Lock
↓
Creative Name Lock
→ episode_name
→ one_sentence_play
↓
Presentation Router
→ image / dialogue / song / short video / mixed
↓
User confirms concept + name + treatment
↓
If suitable for a standard Meme Music Episode
→ Name
→ Titled image
→ Lyrics
→ Melody / style prompt
↓
Recognition / Binding / Amplification / Name Consistency Tests
```

---

## Why the name is locked early

The name is not final packaging. It is the creative anchor for the entire episode.

Example:

```text
Source meme: Xue Zhenzhu storms into the office to find Ling Ling / confront the mistress
Treatment: Indian-cinema musical version
```

Good directions remain bound to that meme, such as:

- “Ling Ling, Come Out”
- “I Came Here for Ling Ling”
- “Find the Mistress — Indian Musical Version”

A generic title like “Put Everything on the Table” fails because it changes the meme into a different theme.

Once confirmed, the image title, lyric theme, hook and music prompt must all stay under the same creative lock.

---

## Standard four-deliverable package

Only enter the standard Meme Music Episode when image + music genuinely amplify the meme, or the user explicitly chooses that mode.

Final deliverables:

1. **Episode name**
2. **Image** — must visibly include that title and show source meme + selected treatment
3. **Lyrics**
4. **Melody / style prompt**

All four share the same `creative_lock`.

Do not force a meme into music just to complete the package.

---

## Image rules

The image must preserve:

```text
source meme recognizability
+
selected derivative recognizability
+
locked episode title
```

Use source references for identifiable people and iconic scenes.

Final image prompt:

- recommended: 80–160 Chinese characters or equivalent brevity
- hard max: 200 Chinese characters or equivalent
- reference images should carry identity details
- the visible title must match `episode_name`

See: `references/IMAGE_REFERENCE_RULES.md`

---

## Music rules

Before calling `music-quality-radar`, lock:

```yaml
music_meme_lock:
  episode_name:
  meme_core:
  selected_derivative:
  music_role: amplifier
  song_theme:
  required_meme_anchor:
  forbidden_theme_drift:
```

Fixed rules:

- song theme inherits the meme action / conflict / iconic line
- lyrics and hook cannot invent a new theme that conflicts with the episode name
- melody / style prompt only explains how music should perform the meme
- prompt target: 200–350 Chinese characters; hard max 500

See: `references/MUSIC_OUTPUT_RULES.md`

---

## Upstream Skills

| Need | Skill |
|---|---|
| Recent meme judgment | `entertainment-rander` |
| Current song heat when relevant | `music-trend-radar` |
| Lyrics / melody-style prompt / music review | `music-quality-radar` |

Every actual upstream use starts with a fresh GitHub read.

---

## Flexible output language

Names, image titles, dialogue, lyrics and hooks are not locked to Chinese.

> **Use the language that makes the meme land best.**

See: `references/LANGUAGE_FLEXIBILITY_RULES.md`

---

## Final gates

1. **Meme Recognition** — can people recognize what meme is being played?
2. **Meme Binding** — could the same output fit many unrelated memes after only changing the name? If yes, it is too generic.
3. **Amplification** — did the treatment actually make the meme funnier, sharper, more absurd or more satisfying?
4. **Name Consistency** — do the name, image, lyrics, hook and music prompt still express the same meme + treatment?

---

## Status

**v0.4.1 — Meme-first + Creative Name Lock / Calibrating**

> **The meme is the subject. The name locks the concept. Image and music perform it.**