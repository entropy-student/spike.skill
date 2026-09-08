---
name: music-taste-profiler
description: >
  Analyze a user's authorized playlists, liked songs, or exported music history to build
  a plain-language music taste profile. Use when the user asks what music they like,
  why certain songs appeal to them, or wants recommendations/generation based on their taste.
version: "0.1"
category: music
---

# Music Taste Profiler（音乐口味画像）

## Goal

Turn a user's real listening collection into a clear answer to:

> **“What kind of music do I actually like, and what recurring musical traits make it work for me?”**

This is a preference profiler, not a music-quality judge.

When quality judgment is needed, call the sibling skill:

`../music-quality-radar/SKILL.md`

---

## Trigger

Use this Skill when the user asks to:

- analyze their music taste
- infer preferred genres/styles from playlists
- read authorized NetEase / QQ Music / Kugou / Soda Music playlists
- compare multiple personal playlists
- explain why they keep liking similar songs
- generate recommendations or music prompts based on their taste

Do NOT use it for:

- evaluating a single song's quality only → use Music Quality Radar
- reading private playlists without explicit authorization
- pretending to have access to a platform that is not actually connected

---

# 1. Data acquisition

## Preferred sources

Use authorized personal data when available.

Recommended adapter reference:

- `guohuiyuan/music-lib`
- Supports normalized song/playlist access across multiple Chinese music platforms.

Current useful personal-playlist capabilities documented by music-lib:

| Platform | Personal playlists | QR login |
|---|---:|---:|
| NetEase Cloud Music | yes | yes |
| QQ Music | yes | yes (QQ / WeChat) |
| Kugou | yes | yes |
| Soda Music | yes | unstable / do not promise |

If direct platform access is unavailable, accept:

- exported playlist files
- playlist links that are public
- CSV / JSON song lists
- screenshots
- pasted song + artist lists
- manual description of preferences

## Authorization rule

Before reading private data, the user must explicitly authorize access.

Never ask the user to paste long-lived secrets into chat if another safer method exists.

Never print or summarize:

- cookies
- tokens
- session IDs
- raw authentication payloads

---

# 2. Normalize the data

Convert incoming data into a common conceptual shape:

```text
source
playlist_name
track_name
artist_name
album_name
liked_or_favorited
play_count_or_duration (if available)
added_at (if available)
```

Not every source provides every field. Missing fields are acceptable.

## Deduplication

The same track may exist across several playlists or platforms.

Deduplicate mainly by:

`normalized track name + normalized artist name`

But preserve a count of how often the same song appears across playlists. Repeated appearance is a useful preference signal.

---

# 3. Weight the evidence

Use stronger evidence before weaker evidence.

Suggested priority:

1. explicitly liked/favorited tracks
2. frequently played tracks, if true play history exists
3. songs appearing in multiple personal playlists
4. songs in carefully named personal playlists
5. one-off additions
6. public playlists the user merely follows

Do not invent play frequency when only playlist membership is known.

Do not assume a song in a playlist means the user loves it equally.

---

# 4. Build the taste profile

Analyze recurring patterns in plain language.

## A. Style / genre

Examples:

- 华语流行
- J-pop
- indie pop
- R&B
- rock
- folk
- electronic
- ACG / anime-related music
- soundtrack / OST

Avoid over-labeling micro-genres unless evidence is strong.

## B. Mood preference

Examples:

- 温柔
- 忧郁
- 热烈
- 青春感
- 治愈
- 怀旧
- 浪漫
- 克制
- 黑暗
- 轻松

Look for combinations, not single tags.

Good:

> “偏爱温柔、忧郁，但通常不是绝望型。”

Bad:

> “你喜欢悲伤音乐。”

## C. Melody vs rhythm

Ask:

- Do memorable melodic lines dominate?
- Or are groove, beat and rhythmic energy the main attraction?

Output in ordinary language:

> “你明显更吃旋律，而不是纯节奏炸场。”

## D. Vocal preference

Infer cautiously from recurring artists/tracks:

- male / female / mixed
- youthful / mature
- clear / breathy / husky / powerful
- restrained / dramatic

Do not infer identity traits about the user from singer gender.

## E. Language

Estimate broad language distribution only if data supports it:

- Chinese
- Japanese
- English
- Korean
- instrumental

## F. Arrangement preference

Look for recurring preferences such as:

- sparse / spacious
- gradually layered
- dense and explosive
- acoustic
- piano-led
- guitar-led
- synth-heavy
- orchestral / cinematic

## G. Lyric preference

When lyrics or representative songs are known, infer whether the user tends to like:

- concrete imagery
- story-like lyrics
- direct confession
- poetic / abstract writing
- youth / nostalgia
- regret / longing
- everyday-life details

## H. Familiarity vs exploration

Use only real evidence:

- concentration on a small set of artists
- many different artists
- wide language/style spread
- repeated classics vs recent discoveries

Do not call someone “high exploration” without enough data.

---

# 5. Link with Music Quality Radar

Taste and quality must remain separate.

Select roughly 5–10 representative tracks from the user's strongest preference clusters.

For each representative track, use Music Quality Radar only to explain:

- what is musically distinctive about it
- which of those traits recur across the user's favorites

Do NOT turn the entire library into a quality ranking.

The purpose is to discover statements like:

> “You do not simply like ballads. You repeatedly prefer ballads with a strong singable melody, restrained verses, a clear emotional lift into the chorus, and relatively uncluttered arrangements.”

This cross-step is the main value of combining the two skills.

---

# 6. Confidence

Always state confidence.

Suggested interpretation:

| Evidence size | Confidence |
|---|---|
| 10–30 tracks | preliminary |
| 30–100 tracks | usable |
| 100–300 tracks | fairly stable |
| 300+ tracks | high |

These are guidance ranges, not statistical guarantees.

Lower confidence when:

- playlists are highly themed
- only one playlist is available
- no liked/favorite data exists
- many tracks are duplicates
- most metadata is missing

---

# 7. Output format

Default output should be easy to read.

## Your Music Profile

**一句话总结：**  
用 1–2 句话说清用户最核心的音乐偏好。

### 你最喜欢的

- 曲风：
- 情绪：
- 旋律 / 节奏：
- 人声：
- 编曲：
- 歌词：
- 语言：

### 真正反复出现的 3–5 个特点

1.
2.
3.

### 最能代表你的歌

Choose 3–8 representative tracks and explain why each represents the profile.

### 你可能并不是“喜欢 X”，而是喜欢 X 里的这一类

This is the most important interpretive section.

Example:

> 你不是泛泛地喜欢“日系音乐”，而是更偏爱其中旋律明确、青春感强、略带遗憾、清亮人声、最后有情绪释放的一类。

### 你可能不太吃的类型

Only include when there is enough negative/absence evidence. Phrase cautiously.

### 置信度

State evidence size and confidence.

---

# 8. Recommendation mode

If the user asks for recommendations after profiling:

1. preserve the core taste
2. include ~70–80% safe matches
3. include ~20–30% adjacent exploration
4. explain why each recommendation fits
5. do not recommend only the same artists already present

If the user asks to generate music instead:

turn the taste profile into a music-generation brief:

```text
genre/style
mood
melodic character
vocal character
arrangement arc
lyric themes
what to avoid
```

---

# 9. Privacy rules

- Explicit authorization is required for private playlists.
- Use least-privilege access.
- Do not expose credentials.
- Do not include full raw listening history in the final answer by default.
- Prefer aggregated traits.
- Do not retain credentials in Skill data.
- If authorization is revoked, stop further access.

---

# 10. Platform reality check

Do not describe unofficial session-cookie access as equivalent to a formal OAuth authorization flow.

For Chinese music platforms, many open-source implementations use:

> user scans official login QR → local integration receives session cookie → user's own playlists are read

This is technically useful for prototypes, but productization requires:

- platform terms review
- credential security design
- rate-limit handling
- failure/expiry handling
- legal/licensing review

For `music-lib`, also review its AGPL-3.0 license and repository disclaimer before embedding it into a commercial product.

---

# 11. Quick invocation prompt

> 调用 Music Taste Profiler，分析我授权的音乐歌单。优先读取“我喜欢”和个人歌单，去重后找出反复出现的音乐偏好。不要只告诉我曲风名称，也不要堆专业术语。请判断我偏爱的旋律、情绪、人声、编曲、歌词和语言特点，并挑选 5–10 首代表歌曲联动 Music Quality Radar，解释这些歌共同为什么容易打中我。最后用普通话总结“我真正喜欢的不是某个大类，而是这个大类里的哪一种”，并说明数据量与置信度。
