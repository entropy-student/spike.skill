---
name: meme-music-router
display_name: Meme Music Router（热梗音乐路由器）
description: 一个框架级音乐内容编排器。负责现场调用 Entertainment Rander、Music Trend Radar、Music Quality Radar，把它们的最新结果组织成【原创】或【改编】选题，并管理确认、配图、歌词与曲风提示词交接；不在自身重复保存热点、热歌或好音乐的专业定义。
version: 0.3.0
language: zh-CN
status: calibrating
---

# Meme Music Router（热梗音乐路由器）

## 1. 定位：它是编排层，不是专业裁判

`meme-music-router` 是整个“热梗 → 音乐选题 → 配图 → 歌曲内容”的 Orchestrator / Router / Workflow Framework。

它负责：

- 什么时候调用哪个上游 Skill；
- 把上游结果如何组合成选题；
- 决定最终走【原创】还是【改编】；
- 管理用户确认、图片、歌词、曲风提示词之间的流程；
- 保证不同 Skill 之间的输入输出能正确交接；
- 最终把多个专业结果组装成用户可直接使用的产物。

它 **不负责，也不应在自身保存**：

- 什么叫热梗；
- 热梗 S / A / B 的专业定义；
- 什么叫近期热门歌曲；
- 热歌榜单、平台权重、趋势判断方法；
- 什么叫好音乐；
- 旋律、编曲、歌词、制作等音乐质量细则；
- 上游 Skill 的评分表、专业术语或完整方法论。

这些内容属于各自上游 Skill。Router 只消费它们的当前输出。

> **上游 Skill 负责专业判断；Router 负责什么时候叫谁来、拿到结果以后怎么办。**

---

## 2. 上游调用契约

### 2.1 Entertainment Rander

当需要近期热梗 / 热点候选时：

```text
Router
→ 现场读取并调用 entertainment-rander
→ 接收其当前候选、等级、证据和结论
→ 不重新解释“什么叫热梗”
```

默认主制作池继续只接收其返回的 `S+ / S`；这是 Router 的入口门槛，不代表 Router 自己定义 S / S+。

### 2.2 Music Trend Radar

当需要近期热门歌曲候选、或需要确认某首歌是否当前仍热时：

```text
Router
→ 现场读取并调用 music-trend-radar
→ 接收其当前歌曲候选、等级、证据和结论
→ 不自己定义“什么叫热门歌曲”
```

默认选题搜索阶段可与 Entertainment Rander 一起调用；如果用户明确指定原创、指定歌曲或当前步骤不需要热歌判断，则可跳过。

### 2.3 Music Quality Radar

当选题已经确认，需要正式生成 / 改编歌词、生成曲风 / 编曲提示词，或审查音乐方案时：

```text
Router
→ 现场读取并调用 music-quality-radar
→ 按其当前版本执行音乐质量判断 / 改进
→ Router 不保存其音乐质量细则
```

---

## 3. 所有上游 Skill 必须现场读取

本 Router 采用：

`references/LIVE_SKILL_INVOCATION_RULES.md`

核心要求：

- 每一次实际调用上游 Skill 前，都重新读取 GitHub 当前版本；
- 当前任务依赖的 references / rules 也要现场读取；
- 历史读取、聊天记忆、摘要、缓存理解都不能代替；
- 如果读取失败，标记 `LIVE_SKILL_READ_FAILED`，不得假装已经调用。

此规则只约束 `meme-music-router` 调用上游 Skill，不自动作用于仓库其他 Skill。

---

## 4. Router 自己真正需要做的判断

Router 的高层判断只保留以下几类。

### 4.1 组合

把上游返回的：

```text
热梗 / 人物 / 场景
×
歌曲候选或原创可能性
```

组合成真正可制作的音乐选题。

### 4.2 最终类型只分两类

#### 【原创】

没有现成歌曲比原创更自然，或者原创更能服务这个人物 / 梗 / 场景。

#### 【改编】

使用一个已有歌曲作为音乐载体，包括：

- 梗本身就是歌曲；
- 近期热歌与梗天然适配；
- 经典歌曲与梗天然适配；
- 用户直接指定某首歌进行改编。

旧 Route A / B / C / D 可以作为内部思考来源，但最终制作输出统一只显示：

```text
【原创】
或
【改编】
```

### 4.3 创意关系

Router 可以判断“这个组合是否自然、是否有第二层意思、是否值得做”，但不应重新判断上游领域本身的专业等级。

优先寻找：

- 同一人物的现实热点与经典角色 / 旧经历形成回环；
- 歌进入场景后产生新的解释；
- 单人物 / 单场景能快速理解；
- 没有自然适配歌曲时，不为了蹭热歌强行改编。

### 4.4 候选排序

Router 可以给自己的“创意组合”做优先级排序，例如 S+ / S / A+；该等级只表示组合创意强弱，不代表重新定义 Entertainment 或 Music 的等级。

默认主输出保留高潜力方案，普通方案可隐藏。

---

## 5. 默认完整工作流

```text
用户发起一期
↓
现场调用 Entertainment Rander
→ 得到近期热梗 / 热点候选
↓
按需要现场调用 Music Trend Radar
→ 得到近期热门歌曲候选
↓
Meme Music Router
→ 组合人物 / 场景 / 歌曲
→ 选择【原创】或【改编】
→ 排序高潜力选题
↓
用户确认本期方案
↓
图片步骤
→ 按当前图片规则执行
→ 涉及明确来源人物 / 角色 / 物品 / 场景时，遵循 references/IMAGE_REFERENCE_RULES.md
↓
歌曲内容步骤
→ 现场重新读取 Music Quality Radar
↓
【原创】
→ 完整原创歌词 + 曲风 / 编曲提示词

【改编】
→ 基于用户提供的原曲歌词 / 结构改写
→ 改编歌词 + 曲风 / 编曲提示词
↓
最终交付
```

图片是独立工作节点；具体是自动生成还是先询问，以 Router 当前 metadata / 图片规则为准，不在本节重复硬编码。

---

## 6. 歌曲内容输出契约

歌曲内容阶段遵循：

`references/MUSIC_OUTPUT_RULES.md`

Router 只保存输出接口，不保存 Music Quality Radar 的专业细则。

固定要求：

- 【原创】与【改编】都必须在该执行节点现场调用当前 `music-quality-radar`；
- 歌词使用 `[Verse]`、`[Pre-Chorus]`、`[Chorus]`、`[Bridge]`、`[Outro]` 等必要段落标签；
- 曲风 / 编曲提示词硬上限 **500 字**；
- 默认尽量精简到 **200–350 字**；
- 最终提示词要可直接复制给音乐生成模型。

### 改编版权边界

如果用户要改编受版权保护歌曲：

- 优先使用用户自己提供的歌词 / 结构；
- 用户只提供歌名时，不由 Router 从网上抓取并复现整首歌词；
- 可以等待用户提供歌词 / 结构，或只在合法范围内处理已有片段与高层结构。

---

## 7. 交接数据

Router 只需要传递够用的高层信息。

```yaml
selection:
  hotspot_result_from: entertainment-rander
  music_trend_result_from: music-trend-radar | null
  final_type: original | adaptation
  core_person_or_character:
  core_scene:
  source_song_if_any:
  one_sentence_concept:

image_handoff:
  reference_rules: references/IMAGE_REFERENCE_RULES.md

music_handoff:
  target_skill: music-quality-radar
  live_read_required: true
  output_rules: references/MUSIC_OUTPUT_RULES.md
```

不要把上游 Skill 的评分体系全文复制进交接数据。

---

## 8. Kill Rules

出现以下情况视为 Router 执行错误：

1. 需要上游专业判断，却没有现场调用对应 Skill；
2. 用“之前读过 / 我记得”代替本轮读取；
3. Router 自己重新发明“什么是热梗 / 热歌 / 好音乐”；
4. 把上游 Skill 的完整评分标准复制到 Router 并长期缓存；
5. 上游当前结果与 Router 记忆冲突时仍沿用旧记忆；
6. 明明没有自然歌曲载体，却为了完成流程强行改编；
7. 歌曲内容阶段没有重新调用当前 Music Quality Radar；
8. 曲风 / 编曲提示词超过 500 字；
9. 图片涉及明确梗来源，却脱离真实人物 / 角色 / 物品 / 场景自由重设计。

---

## 9. 核心原则

> **Router 不需要比上游 Skill 更懂它们的专业细节。**
>
> **Router 需要比它们更清楚整个流程应该怎样组织。**

它的价值不是“记住更多标准”，而是：

> **现场调用正确的专业能力 → 做高层创意决策 → 管理工作流 → 输出完整成品。**
