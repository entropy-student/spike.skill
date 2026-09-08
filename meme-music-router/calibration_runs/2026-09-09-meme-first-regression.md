# Meme Music Router — Meme-first Regression Calibration

Date: 2026-09-09
Version target: v0.4.0

## Why this calibration exists

Two real execution failures exposed a structural problem in the old Router:

1. image-generation prompts became too long and descriptive;
2. music output changed the meme theme instead of amplifying it.

The root cause was not just wording quality. The workflow was too music-first and output-first.

---

## Failure 1 — Image prompt over-specification

Observed behavior:

- long prompt;
- repeated identity / costume / scene details already carried by reference images;
- too many negative constraints;
- more like a design brief than an execution prompt.

Correction:

- reference images carry identity details;
- final image prompt recommended 80–160 Chinese characters;
- hard maximum 200 Chinese characters;
- prompt keeps only subject + source scene + selected derivative + key must-preserve traits + one or two critical exclusions.

Regression rule:

> If final image prompt exceeds 200 Chinese characters, FAIL.

---

## Failure 2 — Xue Zhenzhu song theme drift

Source meme:

> 薛甄珠冲进办公室找凌玲 / 手撕小三。

Selected derivative:

> 印度电影歌舞版。

Bad output theme:

> 《把话摊开》

Why it failed:

- changed “找凌玲 / 手撕小三” into “沟通 / 讲清楚”;
- music became a new story theme;
- the original meme was no longer the main subject;
- the selected Indian-cinema derivative became mostly a style label.

Correct structure:

```text
WHAT:
找小三 / 找凌玲 / 冲进办公室手撕 / 护女儿上门算账

HOW:
印度电影式高能歌舞
```

Regression rule:

> Music may change HOW the meme is performed, but not WHAT meme is being performed.

---

## Architecture correction

Old tendency:

```text
hot meme
→ find / create music
→ image
→ lyrics
```

New v0.4.0:

```text
hot meme
→ lock meme_core
→ identify why it is funny
→ choose best presentation form
   image / dialogue / song / short video / mixed
→ amplify meme
→ recognition / binding / amplification tests
```

Music is optional.

---

## Required regression tests

### Test A — Theme Lock

Given:

```text
薛甄珠找凌玲 / 手撕小三 × 印度电影版
```

PASS:

- song title / hook clearly revolves around 找凌玲、找小三、上门手撕、护女儿算账;
- Indian-cinema style changes the performance mode.

FAIL:

- song becomes mainly about communication, dignity, empowerment, closure, or another generic theme.

### Test B — Meme Binding

Ask:

> If the character name is replaced, can this output fit many unrelated memes almost unchanged?

If yes → FAIL.

### Test C — Image Prompt Length

Final image-generation prompt >200 Chinese characters → FAIL.

### Test D — Selected Derivative Fidelity

For an “Indian version” derivative, output must preserve both:

- source meme recognition;
- Indian-cinema derivative recognition.

Only source scene or only generic Indian style → FAIL.

---

## Final calibration principle

> **The meme is the subject. The medium is the amplifier.**

> **Find the meme → lock the meme → choose the best way to play it → amplify it without replacing it.**
