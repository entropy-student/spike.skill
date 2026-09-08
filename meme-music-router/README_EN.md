# Meme Music Router

> A framework-level orchestrator for meme-driven music production. It does **not** redefine what counts as a hot meme, a trending song, or good music. It live-invokes the appropriate upstream Skill and turns the latest outputs into a complete workflow.

## Role

`Meme Music Router` acts as an Orchestrator / Workflow Framework.

It is responsible for:

- calling `entertainment-rander` for recent meme/hotspot candidates;
- calling `music-trend-radar` for recent or resurfacing songs when needed;
- combining person, scene, meme and music into production concepts;
- choosing between **Original** and **Adaptation**;
- managing confirmation, image, lyric and style-prompt handoffs;
- calling `music-quality-radar` at the actual music-content stage;
- assembling the final deliverables.

It is not responsible for storing or redefining:

- what a strong meme is;
- what a trending song is;
- what good music is;
- upstream scoring systems, platform weights, or music-quality methodology.

> **Upstream Skills make professional judgments. The Router decides when to call them and what to do with their results.**

---

## Upstream Skills

| Need | Upstream Skill | Router redefines the domain? |
|---|---|---|
| Recent memes / hotspots | `entertainment-rander` | No |
| Recent / resurfacing songs | `music-trend-radar` | No |
| Lyrics, arrangement and music quality | `music-quality-radar` | No |
| Workflow, concept combination, Original vs Adaptation | `meme-music-router` | Yes, at orchestration level |

---

## Mandatory live invocation

Every actual upstream Skill use must begin with a fresh read of the current GitHub version.

```text
Need a meme
→ fresh-read entertainment-rander
→ execute

Need a trending song
→ fresh-read music-trend-radar
→ execute

Need final lyrics / adaptation / style prompt
→ fresh-read music-quality-radar
→ execute
```

Previous reads, assistant memory, summaries and cached interpretations do not count as a Skill invocation.

See:

`references/LIVE_SKILL_INVOCATION_RULES.md`

---

## Two final production types

### Original

Create a new song when an existing song would be forced or when an original track serves the meme/person/scene better.

### Adaptation

Use an existing song when the source meme is musical, a current or classic song fits naturally, or the user explicitly chooses a song.

Legacy Route A/B/C/D reasoning may still help internally, but the production-facing output is simply:

```text
Original / Adaptation
```

---

## Default workflow

```text
User starts an episode
↓
Entertainment Rander (fresh read)
↓
Music Trend Radar (fresh read when needed)
↓
Router combines person × scene × music
→ Original / Adaptation
→ rank concepts
↓
User confirms
↓
Image stage
→ use source references when an identifiable person/character/object/scene exists
→ choose image text language for meme effect, not by default locale
↓
Music Quality Radar (fresh read again)
↓
Lyrics + style/arrangement prompt
→ choose lyric / hook language for meme effect
↓
Final delivery
```

---

## Flexible output language

Final presentation language is **not locked to Chinese**.

For meme images, captions, dialogue, lyrics, hooks, titles, or other visible/audible outputs, the Router may choose:

- Chinese;
- English;
- Chinese + English mixed;
- dialect / colloquial language;
- other language elements that clearly improve the meme.

The choice should follow the source meme, the selected derivative version, character identity, platform/audience context, rhythm, rhyme, contrast and comedic effect.

Core rule:

> **Use the language that makes the meme land best.**

Do not force Chinese for consistency, and do not add foreign language just to sound “international.”

See:

`references/LANGUAGE_FLEXIBILITY_RULES.md`

---

## Image rule

For identifiable people, characters, objects or iconic scenes:

> **Reference first. Recognition first. Style second.**

Image text is also language-flexible when text is needed.

See:

`references/IMAGE_REFERENCE_RULES.md`

---

## Music output rules

See:

`references/MUSIC_OUTPUT_RULES.md`

Fixed orchestration constraints:

- both Original and Adaptation must fresh-read `music-quality-radar` at the music-content node;
- use clear section labels such as `[Verse]`, `[Chorus]`, `[Bridge]`, `[Outro]` when needed;
- lyrics and hooks are not required to be Chinese;
- style/arrangement prompt target: **200–350 Chinese characters**;
- hard maximum: **500 Chinese characters**;
- keep only information that materially affects generation.

---

## Status

**v0.3.1 — Orchestrator Build / Calibrating**

Core additions in v0.3.1:

- flexible output-language policy for images, dialogue, lyrics, hooks and titles;
- language choice follows meme effectiveness rather than a fixed Chinese default;
- image and music output rules now reference the same language policy source of truth.
