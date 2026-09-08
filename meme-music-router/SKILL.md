---
name: meme-music-router
display_name: Meme Music Router（热梗音乐路由器）
description: 一个 Meme-first 创意编排器。先现场调用 Entertainment Rander 找到真正值得玩的热梗并锁定梗核，再判断图片、台词、歌曲、短视频或混合形式中哪一种最能放大原梗；音乐只是可选演绎方式之一。需要音乐趋势或音乐质量时再现场调用对应 Skill。
version: 0.4.0
language: zh-CN
status: calibrating
---

# Meme Music Router（热梗音乐路由器）

## 1. 总目标：找到热梗，然后用最好玩的形式把它放大

本 Skill 的最高目标不是“把热梗做成歌”。

而是：

> **找到真正值得玩的热梗 → 搞清楚梗到底好笑在哪里 → 选择最有趣的演绎形式 → 把原梗放大。**

可选形式包括：

- 图片 / 梗图；
- 台词 / 对话 / 小剧场；
- 歌曲；
- 短视频 / 剧情演绎；
- 多种形式组合。

音乐是重要能力，但不是默认终点。

> **形式服从梗。梗不服从形式。**

创作核心规则见：

`references/MEME_AMPLIFICATION_RULES.md`

---

## 2. Router 的职责边界

Router 负责：

- 什么时候调用哪个上游 Skill；
- 接收上游最新专业判断；
- 锁定本期 `meme_core`；
- 区分 parent meme / child unit；
- 判断哪种呈现形式最能放大梗；
- 管理用户确认与图片 / 台词 / 音乐 / 视频交接；
- 保证最终作品不偏离原梗；
- 组装最终可使用产物。

Router 不负责自行定义：

- 什么叫热梗；
- S+/S/A/B 热梗标准；
- 什么叫近期热歌；
- 什么叫好音乐；
- 上游 Skill 的评分体系。

> **上游 Skill 负责专业判断；Router 负责梗核、形式选择、创意放大和工作流。**

---

## 3. 上游调用契约

### 3.1 Entertainment Rander｜默认第一入口

需要选题 / 热梗判断时：

```text
Router
→ 现场读取 entertainment-rander 当前版本
→ 接收当前候选、等级、证据、对象层级
→ Router 不重新定义热梗等级
```

默认主制作池优先使用上游返回的 `S+ / S`。

### 3.2 Music Trend Radar｜只有需要“当前热歌”时才调用

以下情况才调用：

- 想用近期热歌改编；
- 需要判断某首歌当前是否仍热；
- “歌曲热度”本身是创意关系的一部分。

如果最终是原创歌、经典歌、图片、台词或视频，而且不依赖当前歌曲热度，则跳过。

### 3.3 Music Quality Radar｜只有进入歌曲节点才调用

当最终选择歌曲形式，并需要：

- 原创歌词；
- 改编歌词；
- 曲风 / 编曲提示词；
- 音乐质量审查；

才现场读取当前 `music-quality-radar`。

它只负责在 **已锁定的梗主题** 内提高音乐质量，不能改变梗主题。

---

## 4. 所有上游 Skill 必须现场读取

遵循：

`references/LIVE_SKILL_INVOCATION_RULES.md`

要求：

- 每次实际调用前重新读取 GitHub 当前版本；
- 任务依赖 references 也现场读取；
- 历史读取、聊天记忆、摘要、缓存都不能替代；
- 读取失败标记 `LIVE_SKILL_READ_FAILED`，不得假装调用成功。

此规则只约束本 Router 的上游调用。

---

## 5. Meme Core Lock｜每一期先锁梗核

Entertainment 结果进入 Router 后，先记录：

```yaml
meme_core:
  source_meme:
  parent_meme_or_ecosystem:
  parent_tier:
  selected_child_unit:
  child_tier_if_separately_rated:
  gate_basis: parent | child
  core_person_or_character:
  core_action_or_conflict:
  iconic_line_or_object:
  why_it_is_funny:
  must_not_drift:
```

### Parent / Child 不得混淆

```text
parent meme / meme ecosystem
!=
single child clip / line / derivative
```

Parent 可以是 S，child 可以只有 A/B；Router 可以从 S parent 中选择强 child，但不能把 parent 的等级自动继承给 child。

如果 `core_action_or_conflict` 与 `why_it_is_funny` 说不清楚，不进入创作阶段。

---

## 6. Presentation Router｜先选最能放大梗的形式

锁定梗核后，Router 比较：

### 图片 / 梗图
适合：

- 一个画面就能产生强反差；
- 人物 / 场景识别度本身就是笑点；
- 文化 / 类型片移植主要是视觉笑点。

### 台词 / 对话 / 小剧场
适合：

- 原梗强在一句话、人物关系或嘴炮；
- 继续往下编台词比做歌更自然。

### 歌曲
适合：

- 原梗有强节奏、复读、旋律或歌词关系；
- 歌曲能产生第二层双关；
- 把冲突升级成歌舞本身就更好笑；
- 用户明确想做音乐化演绎。

歌曲内部再分：`original | adaptation`。

### 短视频 / 剧情演绎
适合：

- 梗依赖动作升级、前后反转、连续剧情；
- 单张图或一段歌无法完整放大笑点。

### Mixed
当两个以上形式组合明显更强时使用，例如：

```text
梗图封面 + 45秒歌舞短视频
```

核心判断：

> **哪种形式能让原梗更好笑、更荒诞、更爽、更容易理解和传播？**

不能因为系统里有音乐能力就强行做歌。

---

## 7. Meme Amplification Gate｜形式不能改变梗

所有输出遵循：

`references/MEME_AMPLIFICATION_RULES.md`

### Theme Lock

最终作品主题必须直接继承：

- `core_action_or_conflict`；或
- `iconic_line_or_object`。

禁止把原梗抽象成一个更“像作品”的新主题。

#### 校准反例

```text
原梗：薛甄珠冲进办公室找凌玲 / 手撕小三
选中二创：印度电影歌舞版
```

错误：

```text
歌曲主题：《把话摊开》
```

因为主题变成了“沟通 / 讲清楚”。

正确主题仍应围绕：

```text
找小三 / 找凌玲 / 冲进办公室手撕 / 护女儿上门算账
```

印度电影歌舞只是演绎方式。

---

## 8. 图片节点

遵循：

- `references/MEME_AMPLIFICATION_RULES.md`
- `references/IMAGE_REFERENCE_RULES.md`
- `references/LANGUAGE_FLEXIBILITY_RULES.md`

固定要求：

- 明确人物 / 场景先找真实参考；
- 同时保留原梗 + 选中二创版本；
- 最终生图 Prompt **硬上限 200 字**，推荐 80–160 字；
- 参考图承担身份细节，不用 Prompt 重复所有造型信息；
- 图片必须放大梗，而不是只变漂亮。

---

## 9. 歌曲节点

只有当歌曲被判断为合适的放大形式时进入。

遵循：

- `references/MEME_AMPLIFICATION_RULES.md`
- `references/MUSIC_OUTPUT_RULES.md`
- `references/LANGUAGE_FLEXIBILITY_RULES.md`

进入前固定生成：

```yaml
music_meme_lock:
  meme_core:
  selected_derivative:
  music_role: amplifier
  music_type: original | adaptation
  song_theme:
  required_meme_anchor:
  forbidden_theme_drift:
```

然后现场读取 `music-quality-radar`。

固定原则：

> **Music Quality Radar 优化“怎样把这个梗写成好歌”，不能把“这个梗”改掉。**

曲风 / 编曲提示词：

- 推荐 200–350 字；
- 硬上限 500 字。

---

## 10. 输出语言灵活性

最终呈现不固定中文。

图片文字、台词、歌词、Hook、标题等根据：

- 原梗语言；
- 二创版本；
- 人物身份；
- 节奏 / 押韵；
- 笑点与传播效果；

选择中文、英文、中英混合、方言或其他更有效的表达。

详见：

`references/LANGUAGE_FLEXIBILITY_RULES.md`

> **Language serves the meme.**

---

## 11. 默认完整工作流

```text
用户发起一期
↓
LIVE 调用 Entertainment Rander
↓
得到 S+/S 热梗候选
↓
锁定 meme_core
→ parent / child
→ 核心人物
→ 核心动作 / 冲突 / 原句
→ 为什么好笑
→ 不可漂移项
↓
Router 比较最佳演绎形式
→ 图片 / 台词 / 歌曲 / 短视频 / Mixed
↓
如需要当前热歌
→ LIVE 调用 Music Trend Radar
↓
形成高潜力创意方案
↓
用户确认
↓
按选定形式执行

图片
→ reference-first
→ Prompt ≤200字

歌曲
→ music_meme_lock
→ LIVE 调用 Music Quality Radar
→ 歌词 + 曲风提示词

台词 / 视频
→ 始终锁定 meme_core
↓
最终执行 Meme Recognition / Binding / Amplification Test
↓
交付
```

---

## 12. 最终三项测试

### Meme Recognition Test
去掉解释，熟悉原梗的人还能认出“在玩什么”吗？

### Meme Binding Test
只换人物名字，作品是否几乎可原样套给大量其他梗？

- 是 → 太泛，重做。

### Amplification Test
这个形式有没有把原梗变得更有趣、更荒诞、更爽、更容易传播？

- 只是更漂亮 / 更像歌曲 / 更专业 → 不通过。

---

## 13. Kill Rules

出现以下情况视为 Router 执行错误：

1. 需要上游专业判断却没有现场调用；
2. 用记忆 / 摘要代替 LIVE Skill；
3. Router 重新定义热梗 / 热歌 / 好音乐；
4. Parent / Child 等级污染；
5. 没锁定 `meme_core` 就开始创作；
6. 默认强行把梗做成歌曲；
7. 图片 / 音乐 / 台词反过来改写原梗主题；
8. 作品换个人名就能泛用到大量其他梗；
9. 选中的具体二创版本在最终作品中消失；
10. 生图 Prompt 超过 200 字；
11. 歌曲节点没有现场调用 Music Quality Radar；
12. Music Quality Radar 优化过程中发生 Theme Drift；
13. 曲风 / 编曲提示词超过 500 字；
14. 为了统一中文或国际化而破坏梗。

---

## 14. 核心原则

> **Meme first. Format second. Quality third.**

更完整地说：

> **找到真正的热梗 → 锁定梗核 → 选择最有趣的演绎方式 → 用图片 / 台词 / 音乐 / 视频放大它 → 不让形式抢走梗 → 用真实反馈继续校准。**
