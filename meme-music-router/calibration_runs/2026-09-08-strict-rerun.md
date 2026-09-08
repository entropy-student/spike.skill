# Meme Music Router — Strict Calibration Rerun

Date: 2026-09-08
Status: calibration reset / strict rerun

## Why this rerun exists

Earlier calibration rounds sometimes described a result as "using a Skill" when the upstream Skill had not been freshly re-read at the exact execution node. Those results may contain assistant-memory drift.

This rerun follows `meme-music-router` v0.3.0 and `references/LIVE_SKILL_INVOCATION_RULES.md`.

## Scope

This run recalibrates **topic selection and creative routing**, not finished audio quality.

Live sources read for this run:

- `meme-music-router/SKILL.md` — v0.3.0
- `meme-music-router/references/LIVE_SKILL_INVOCATION_RULES.md`
- `entertainment-rander/SKILL.md` — v1.0.0
- `music-trend-radar/SKILL.md`
- `music-trend-radar/references/SCORING.md`
- `music-trend-radar/references/TIERING.md`
- `music-trend-radar/references/SOURCE_POLICY.md`

`music-quality-radar` is intentionally **not used to grade the topic combinations themselves**. It must be re-read later when a confirmed topic enters the lyrics / arrangement / music-quality node.

## Critical correction: parent meme vs child unit

Do not mix these two objects:

```text
parent meme / meme ecosystem
!=
single child clip / line / derivative
```

A parent ecosystem may be Entertainment S while a single child unit is only A or B. Router may still select a strong child unit **from an S parent ecosystem**, but must not relabel the child itself as Entertainment S.

---

## Recalibrated cases

| Case | Entertainment source object | Strict source result | Router creative result | Final correction |
|---|---|---|---|---|
| 唐艺昕 × 祺贵人 ×「你嘴巴多毒我才不在乎」× 告发名场面 | the lyric/meme and its derivative ecosystem | **S** | **S** | KEEP. Remains a valid S anchor. |
| 杨洋「反正你也播不了」×《Always Online》 | parent: `花少2考古`; child: the single line/clip | parent **S**; child roughly **B / early derivative unit** | **S** | KEEP creative S, but never call the single line itself Entertainment S. Gate through the S parent ecosystem. |
| 薛甄珠手撕凌玲“印度版” × 原创高能戏剧歌 | parent: `我的前半生考古` / 薛甄珠多国再创作; child: single India version | parent **S**; single India version roughly **A** | **S (conditional on parent source)** | KEEP only when scoped to the S parent ecosystem. A single India upload alone does not justify an S source label. |
| 周兴哲 ×《永不失联的爱》魔性二创 × 本人接梗 | exact current magic-parody meme | **A (观察中，具 S 潜力)** | creative relationship can be **S**, but source gate fails default S/S+ pool | DOWNGRADE from default-main-pool S/S+ potential. Re-evaluate if derivative forms keep expanding. |
| 栾念肚子痛 / “要生胡巴了” × 原创 | exact current meme | **A (观察中)** | **A / A+ idea-space**, but source gate fails | KEEP AS OBSERVATION ONLY. Old decision that it should not enter default production remains correct. |
| 郑钦文 0:5 → 7:5 × 原创逆转歌 | the match comeback itself | **below B as an entertainment meme / primarily a sports event**; separate “詹俊转台” is a different meme object | music idea may be **A**, but source gate fails | DOWNGRADE / REMOVE from default meme-music pool unless a separate entertainment meme unit emerges and passes Entertainment Rander. |
| 许晴 ×《我怀念的》 | parent: `花少2考古`; child: current 许晴考古素材 | parent **S**; child is a usable subunit | **A** | DOWNGRADE from A/A+ to A. Source is strong, but the song relationship is replaceable by many nostalgia/emotional songs, so it should not enter the default high-tier output. |

---

## Clean anchors after rerun

### Confirmed strong anchor

**唐艺昕 × 祺贵人 × 当前歌词梗 × 告发名场面 = Router S**

Reason: source meme itself passes Entertainment S and the same-person / classic-role loop is direct and hard to replace.

### Confirmed creative S with corrected source labeling

**杨洋「反正你也播不了」×《Always Online》 = Router S**

But the source chain must be recorded as:

```text
Entertainment parent: 花少2考古 = S
selected child unit: 杨洋「反正你也播不了」
Router creative combination: S
```

Do not write:

```text
杨洋「反正你也播不了」 = Entertainment S
```

### Conditional S

**薛甄珠印度风版本 × 原创高能戏剧音乐 = Router S only when selected from the broader S parent ecosystem (`我的前半生`考古 / 薛甄珠多国再创作).**

---

## Invalidated / downgraded old assumptions

1. `周兴哲魔性二创 = default S/S+ production candidate` is not yet supported by the current strict Entertainment gate. Keep as A observation until more derivative ecology appears.
2. `郑钦文0:5→7:5` is an extraordinary sports event, but extraordinary event != entertainment meme. Do not route it into the default meme-music production pool without a separate meme object passing the gate.
3. `许晴 × 我怀念的` should not be treated as A+ by default. The parent hotspot is strong, but the song pairing is too replaceable.
4. Never inherit the parent ecosystem's Entertainment tier onto a child clip automatically.

## Rule produced by this rerun

Before Router uses an Entertainment result, always store:

```yaml
entertainment_handoff:
  parent_meme_or_ecosystem:
  parent_tier:
  selected_child_unit:
  child_tier_if_separately_rated:
  gate_basis: parent | child
```

This prevents future parent/child tier contamination.
