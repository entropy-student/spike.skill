# Meme Music Router（热梗音乐路由器）

> v0.4.0 开始，它不再是“默认把热梗做成歌”的 Router，而是一个 **Meme-first 创意编排器**。

## 一句话目标

> **找到真正的热梗 → 锁定梗核 → 选择最好玩的演绎形式 → 把原梗放大。**

形式可以是：

- 图片 / 梗图
- 台词 / 小剧场
- 歌曲
- 短视频
- Mixed

音乐只是可选放大方式之一。

---

## 核心架构

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
→ 不可漂移项
↓
Presentation Router
→ 图片 / 台词 / 歌曲 / 短视频 / Mixed
↓
只调用当前形式需要的上游 Skill
↓
输出
↓
Meme Recognition / Binding / Amplification Test
```

> **Meme first. Format second. Quality third.**

---

## 为什么要做这次 v0.4.0 重构

旧流程容易变成：

```text
热梗
→ 想办法做歌
→ 歌曲主题越来越像“作品”
→ 原梗反而被稀释
```

真实校准反例：

```text
原梗：薛甄珠冲进办公室找凌玲 / 手撕小三
选中二创：印度电影歌舞版
错误主题：《把话摊开》
```

问题不是歌不好，而是**主题漂移了**。

正确逻辑：

```text
演什么：找小三 / 找凌玲 / 上门手撕
怎么演：印度电影歌舞
```

> **音乐是梗的放大器，不是新的主题生成器。**

详见：

`references/MEME_AMPLIFICATION_RULES.md`

---

## 上游 Skills

| 需要什么 | 调用 |
|---|---|
| 判断近期热梗 | `entertainment-rander` |
| 需要判断当前热歌时 | `music-trend-radar` |
| 最终选择歌曲后，写词 / 编曲 / 审查 | `music-quality-radar` |

所有实际调用都必须现场重新读取 GitHub 当前版本：

`references/LIVE_SKILL_INVOCATION_RULES.md`

---

## 图片规则

图片必须同时保留：

```text
原梗识别度
+
本期选中二创版本识别度
```

明确人物 / 名场面先找真实参考图。

**最终生图 Prompt：**

- 推荐 80–160 字
- **硬上限 200 字**
- 用参考图承担身份细节，不写成长篇说明书

详见：

`references/IMAGE_REFERENCE_RULES.md`

---

## 歌曲规则

只有歌曲确实最适合放大这个梗，才进入音乐节点。

进入前必须锁定：

```yaml
music_meme_lock:
  meme_core:
  selected_derivative:
  music_role: amplifier
  song_theme:
  required_meme_anchor:
  forbidden_theme_drift:
```

然后现场调用 `music-quality-radar`。

固定要求：

- 歌曲主题直接继承原梗核心动作 / 冲突 / 原句
- 标题、Hook、副歌优先出现明确梗锚点
- 不把原梗抽象成“沟通、成长、体面、女性力量”等新主题，除非它本来就是梗
- 曲风 / 编曲提示词推荐 200–350 字，硬上限 500 字

详见：

`references/MUSIC_OUTPUT_RULES.md`

---

## 输出语言

图片、台词、歌词、Hook、标题等不锁死中文。

> **哪种语言更能把梗玩好，就用哪种。**

详见：

`references/LANGUAGE_FLEXIBILITY_RULES.md`

---

## 三个最终检查

### 1. Meme Recognition
去掉解释，还能一眼认出在玩哪个梗吗？

### 2. Meme Binding
换个人名，这个作品还能原样套给大量其他梗吗？

如果能，说明太泛。

### 3. Amplification
所选形式有没有让原梗更好笑、更荒诞、更爽、更容易传播？

只是“更漂亮 / 更像歌 / 更专业”不算通过。

---

## 一句话调用

```text
按 Meme Music Router v0.4.0 跑一期。
先 LIVE 调用 Entertainment Rander 找热梗并锁定 meme_core，
再判断图片、台词、歌曲、短视频或 Mixed 哪种形式最能放大原梗；
形式不能改写梗。只有需要热歌或歌曲创作时，再 LIVE 调用 Music Trend / Music Quality。
```

---

## 当前状态

**v0.4.0 — Meme-first Orchestrator / Calibrating**

本版最重要的变化：

> **热梗是主角，所有生成能力都是演绎工具。**
