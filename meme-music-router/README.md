# Meme Music Router（热梗音乐路由器）

> v0.4.1 是一个 **Meme-first 创意编排器**：先找到热梗，再锁梗核和作品名，最后让图片与音乐都服务这个梗。

## 一句话目标

> **找到热梗 → 锁定梗核 → 先给这期定一个准确有梗的名字 → 选择最好玩的演绎方式 → 把原梗放大。**

> **Meme first. Name locks the concept. Format amplifies it.**

---

## 核心流程

```text
Entertainment Rander（LIVE）
↓
找到 S+/S 热梗
↓
Meme Core Lock
→ 人物 / 场景
→ 核心动作 / 冲突 / 原句
→ 为什么好笑
→ parent / child 分开
↓
Creative Name Lock
→ episode_name
→ one_sentence_play
↓
Presentation Router
→ 图片 / 台词 / 歌曲 / 短视频 / Mixed
↓
用户确认“选题 + 名称 + 创意玩法”
↓
适合标准 Meme Music Episode 时
→ 名称
→ 带标题图片
→ 歌词
→ 旋律 / 曲风提示词
↓
Recognition / Binding / Amplification / Name Consistency Test
```

---

## 为什么先定名称

名称不是最后包装，而是整期作品的统一创意锚点。

例如：

```text
原梗：薛甄珠冲进办公室找凌玲 / 手撕小三
玩法：印度电影歌舞版
```

名称应继续绑定这个梗，例如：

- 《凌玲你出来》
- 《我今天就是来找凌玲》
- 《找小三·印度歌舞版》

而不是抽象成《把话摊开》。

名称确认后，图片标题、歌词主题、Hook、音乐提示词都必须继续围绕同一梗核。

---

## 标准四件套

只有当“图片 + 音乐”确实适合放大这个梗，或用户明确选择这一模式时，进入标准 Meme Music Episode。

最终固定交付：

1. **名称**
2. **图片**：必须显示该标题，并体现原梗 + 本期创意
3. **歌词**
4. **旋律 / 曲风提示词**

四项必须共享同一个 `creative_lock`。

不适合音乐化的梗直接跳过或走其他形式，不为了凑四件套强行做歌。

---

## 图片规则

图片必须同时保留：

```text
原梗识别度
+
本期二创版本识别度
+
已锁定作品标题
```

明确人物 / 名场面先找真实参考图。

最终生图 Prompt：

- 推荐 80–160 字
- **硬上限 200 字**
- 用参考图承担身份细节
- 标题必须准确使用 `episode_name`

详见：`references/IMAGE_REFERENCE_RULES.md`

---

## 歌曲规则

歌曲进入前先锁：

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

然后 LIVE 调用 `music-quality-radar`。

固定要求：

- 歌曲主题直接继承原梗核心动作 / 冲突 / 原句
- 歌词、Hook 不得另起一个与名称冲突的新主题
- 旋律 / 曲风提示词只回答“怎么用音乐把这个梗演得更有趣”
- 提示词推荐 200–350 字，硬上限 500 字

详见：`references/MUSIC_OUTPUT_RULES.md`

---

## 上游 Skills

| 需要什么 | 调用 |
|---|---|
| 判断近期热梗 | `entertainment-rander` |
| 需要判断当前热歌时 | `music-trend-radar` |
| 写词 / 旋律曲风提示词 / 音乐审查 | `music-quality-radar` |

所有实际调用必须现场重新读取 GitHub 当前版本。

详见：`references/LIVE_SKILL_INVOCATION_RULES.md`

---

## 输出语言

名称、图片标题、台词、歌词、Hook 不锁死中文。

> **哪种语言更能把梗玩好，就用哪种。**

详见：`references/LANGUAGE_FLEXIBILITY_RULES.md`

---

## 四个最终检查

1. **Meme Recognition**：一眼能认出在玩哪个梗吗？
2. **Meme Binding**：换个人名后还能套给大量其他梗吗？能则太泛。
3. **Amplification**：真的更好笑、更荒诞、更爽了吗？
4. **Name Consistency**：名称、图片、歌词、Hook、音乐提示词是否还在讲同一个梗 + 同一个创意？

---

## 当前状态

**v0.4.1 — Meme-first + Creative Name Lock / Calibrating**

> **热梗是主角；名称负责锁住概念；图片与音乐负责把它演出来。**