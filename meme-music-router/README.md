# Meme Music Router（热梗音乐路由器）

> 一个框架级音乐内容编排器：**不自己定义什么是热梗、热歌或好音乐，只负责在正确的时间现场调用正确的 Skill，并把结果组织成完整作品。**

## 它的角色

`Meme Music Router` 更接近 Orchestrator / Workflow Framework，而不是另一个专业评分器。

它负责：

- 调用 `Entertainment Rander` 找近期热梗；
- 调用 `Music Trend Radar` 找 / 验证近期热歌；
- 把人物、场景、热点和歌曲组合成选题；
- 决定最终走【原创】还是【改编】；
- 管理用户确认、配图、歌词、曲风提示词之间的流程；
- 在歌曲内容阶段调用 `Music Quality Radar`；
- 把多个专业结果组装成最终交付。

它不负责：

- 定义什么叫热梗；
- 定义什么叫热门歌曲；
- 定义什么叫好音乐；
- 保存上游 Skill 的评分表、榜单权重或音乐审美细则。

> **上游 Skill 负责专业判断；Router 负责什么时候叫谁来，以及拿到结果以后怎么办。**

---

## 上游 Skills

| 需要什么 | Router 调谁 | Router 自己做不做专业判断 |
|---|---|---|
| 近期热梗 / 热点 | `entertainment-rander` | 不做 |
| 近期热歌 / 翻红歌曲 | `music-trend-radar` | 不做 |
| 歌词、编曲、音乐质量 | `music-quality-radar` | 不做 |
| 整体流程、创意组合、原创/改编选择 | `meme-music-router` | 做 |

---

## 最重要的运行规则：每次都现场读取

Router 每一次真正调用上游 Skill 时，都必须重新读取 GitHub 当前版本。

```text
需要热梗
→ 现场读取 entertainment-rander
→ 执行

需要热歌
→ 现场读取 music-trend-radar
→ 执行

需要正式写词 / 改词 / 曲风提示词
→ 现场读取 music-quality-radar
→ 执行
```

不能使用：

- 上一次读过的版本；
- 助手记忆；
- 对 Skill 的摘要；
- 缓存理解。

详细规则见：

`references/LIVE_SKILL_INVOCATION_RULES.md`

---

## 最终制作类型只有两个

### 【原创】

当原创比硬套现成歌曲更自然时，直接创作属于这个梗 / 人物 / 场景的新歌。

### 【改编】

使用已有歌曲作为载体，包括：

- 梗本身就是歌曲；
- 近期热歌天然适配；
- 经典歌曲天然适配；
- 用户直接指定歌曲。

旧的 Route A / B / C / D 只可作为内部思考来源；用户最终看到的生产类型统一为：

```text
【原创】 / 【改编】
```

---

## 默认工作流

```text
用户发起一期
↓
Entertainment Rander（现场读取）
↓
Music Trend Radar（需要时现场读取）
↓
Router 做高层组合
→ 人物 × 场景 × 音乐
→ 【原创】/【改编】
→ 候选排序
↓
用户确认
↓
配图
→ 涉及明确人物 / 角色 / 物品 / 场景时先找真实来源参考
↓
Music Quality Radar（再次现场读取当前版本）
↓
歌词 + 曲风 / 编曲提示词
↓
最终交付
```

---

## 配图规则

涉及真实人物、影视角色、具体物品或经典场景时：

> **Reference first. Recognition first. Style second.**

先确认真实来源和最有辨识度的视觉特征，再生成图片，不允许把具体角色自由重设计成“概念相似的陌生人”。

详见：

`references/IMAGE_REFERENCE_RULES.md`

---

## 歌曲输出规则

歌曲内容节点遵循：

`references/MUSIC_OUTPUT_RULES.md`

固定要求：

- 【原创】和【改编】都要现场重新读取 `music-quality-radar`；
- 歌词使用必要的 `[Verse]` / `[Chorus]` / `[Bridge]` / `[Outro]` 等标签；
- 曲风 / 编曲提示词推荐 **200–350 字**；
- 硬上限 **500 字**；
- 能短就短，只保留真正影响生成结果的信息。

---

## 一句话调用

```text
按 Meme Music Router 跑一期热梗音乐选题。
所有上游 Skill 都必须在实际调用时现场读取 GitHub 当前版本；
Entertainment Rander 负责热梗，Music Trend Radar 负责热歌，Music Quality Radar 负责最终音乐质量；
Router 只做整体编排、创意组合、【原创】/【改编】选择和最终交付。
```

---

## 当前状态

**v0.3.0 — Orchestrator Build / Calibrating**

本版本的核心变化：

- Router 从“保存很多上游标准”改为“现场调用上游能力”；
- 删除对热梗、热歌、好音乐的重复专业定义；
- 所有上游 Skill 在每次实际使用时重新读取当前版本；
- 最终制作类型统一为【原创】与【改编】；
- 保留图片 Reference-first 与曲风提示词 ≤500 字规则；
- Router 专注于整个流程的方向、路由、交接和最终成品。
