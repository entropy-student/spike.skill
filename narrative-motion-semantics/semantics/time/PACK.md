# Time Semantic Pack — Core Reference

> Curated from the uploaded Narrative Motion Gallery 时间语义交接调用包。统一 Skill 当前仍标记 **INCOMPLETE**。

## Stable state

- Semantic: **Time（时间）**
- Package: v1
- Visual Master: v3.0
- Templates: 9
- Source-pack status: `STABLE BASELINE`
- Style: Narrative Motion Gallery / Stripe Pearl 2.0
- Output: 16:9 / 1920×1080 / Remotion-ready

## Core definition

> **时间 = 同一对象在相对较长的真实时间中发生演变。**

基础结构通常是：

```text
过去 → 中间变化 → 现在 → 可选未来
```

但“时间”不等于“一条时间轴”。最关键的问题是：

> **同一个对象，随着真实时间到底发生了什么变化？**

### 不属于时间的常见情况

- 只有年份：年份本身不构成时间语义。
- 只是操作先后：通常是流程。
- 核心在解释为什么变化：通常是因果。
- 只是 A 与 B 两个时期静态比较：可能更适合对比。
- 从核心向外围扩张：通常是路径。
- 四个状态只是并列类型：通常是分类。

### 时间语义最低成立条件

1. 有一个持续存在的主体；
2. 主体处在真实时间关系中；
3. 不同阶段之间存在演化、累积、交替、周期或速度变化；
4. 观看顺序具有时间不可逆性，或明确的周期性；
5. 未来若出现，必须区分事实与推演。

## Template library

| # | 中文模板 | Template ID | 适用内容 |
|---|---|---|---|
| 01 | 主体形态演化 | `time.subject_evolution` | 同一个主体的角色、形态或定位长期变化 |
| 02 | 环境换代 | `time.environment_shift` | 主体相对稳定，但用户/需求/媒介/制度环境长期变化 |
| 03 | 能力层层累积 | `time.capability_accretion` | 旧能力保留，新能力持续叠加 |
| 04 | 互动节奏变密 | `time.interaction_density` | 互动从低频、偶发变成更高频、更持续 |
| 05 | 关键转折 | `time.milestone_pivot` | 某个节点真正改变后续轨迹 |
| 06 | 档案素材接力 | `time.archive_sequence` | 用跨年代真实素材直接证明变化 |
| 07 | 新旧形态交替 | `time.old_new_handoff` | 旧方式与新方式共存，随后主导权发生交接 |
| 08 | 周期循环回归 | `time.cycle_recurrence` | 同一对象按真实周期反复进入不同状态 |
| 09 | 变化速度分段 | `time.velocity_phases` | 慢变化、加速、成熟稳定等速度阶段不同 |

当前停止在 9 个：新增模板只有在出现现有 9 个无法自然表达的新时间信息拓扑时才成立，不能为了视觉皮肤增加模板。

## Selection discipline

选择时间模板前优先确认：

- 持续主体是谁？
- 真正的时间跨度是什么？
- 哪些变化是事实，哪些是未来推演？
- 是主体变了、环境变了、能力叠加、互动节奏变化、关键转折、档案证据、新旧交替、周期，还是变化速度改变？

如果只有“先后顺序”但没有真实时间演变，应退出时间语义。

## Narration sync

- 按原旁白顺序拆 Beat，不为了画面交换信息顺序。
- 时间节点、阶段标签、真实素材应在对应旁白到达后出现。
- 后文事实不得提前完整泄露。
- 未来推演必须明确区别于历史事实。
- 真实档案素材优先承担时间证据，MG 用于连接关系和强调变化。

## Standard call protocol

典型输入至少需要：

```yaml
semantic: time
template_id:
narration_text:
narration_beats:
focus_thesis:
subject:
time_span:
known_facts:
future_projection:
assets:
style_profile:
output:
```

执行顺序：

1. 判断是否真的存在“同一主体 + 真实时间演变”；
2. 写一句 `focus_thesis`；
3. 选择 `time.*` Template ID；
4. 区分事实 / 推演；
5. 按旁白拆时间 Beat；
6. 决定真实素材与 MG 的分工；
7. 视觉预览原母版为 `time_gallery_master_v3_0.html`；
8. 最终映射到 Remotion；
9. 执行 QA。

## QA essentials

- 时间不被误写成年份列表。
- 持续主体明确。
- 真实时间顺序与旁白顺序一致。
- 未来与历史事实清楚区分。
- 无数据时不伪装成统计。
- 一页只有一个最终记忆点。
- 模板不匹配时退出，不硬套。
- 关键文字满足视频可读性，不通过缩小字体塞信息。

## Stable Template IDs

```text
time.subject_evolution
time.environment_shift
time.capability_accretion
time.interaction_density
time.milestone_pivot
time.archive_sequence
time.old_new_handoff
time.cycle_recurrence
time.velocity_phases
```
