# Comparison Semantic Pack — Core Reference

> Curated from the uploaded Narrative Motion Gallery 对比语义交接调用包。统一 Skill 当前仍标记 **INCOMPLETE**。

## Stable state

- Semantic: **Comparison（对比）**
- Package: v1
- Visual Master: v6.1
- Templates: 10
- Source pack: stable comparison baseline
- Style: Narrative Motion Gallery / Stripe Pearl 2.0
- Output: 16:9 / 1920×1080 / Remotion-ready

## Core principle

> **对比不是“把 A 和 B 左右摆出来”，而是让观众真正看懂它们之间最重要的差异、位置、重叠、缺口或变化关系。**

每次选择模板前回答四个问题：

1. 这段是在比较几个对象？
2. 比较的是一个维度、多个维度、范围、位置、路径还是缺口？
3. 观众最难理解的关系是什么？
4. 这一页最后只应该记住什么？

只有四个问题都明确后，才选择 Template ID。

## Template library

| # | Template ID | 适用内容 | 最终强调 |
|---|---|---|---|
| 01 | `comparison.focus_handoff` | 两个对象/状态按旁白先后出现，焦点从 A 转移到 B | A 建立 → A 退灰 → B 成为新焦点 → 形成关系 |
| 02 | `comparison.converging_dimensions` | 两个对象在 3–6 个统一维度比较 | 多个维度共同指向的结构性变化 |
| 03 | `comparison.health_radius` | 前后变化重点是范围、边界、能力半径扩大/缩小 | 边界发生了什么变化 |
| 04 | `comparison.key_difference` | 有真实数值，重点是哪个差异最重要/最大 | 关键差值，而不是 A/B 身份色 |
| 05 | `comparison.fork_difference` | 两个结果来自同一起点但形成不同路径 | 同一起点后为何走向不同终点 |
| 06 | `comparison.focused_continuum` | 3 个以上对象共享一个主维度 | 目标对象在连续尺度上的位置 |
| 07 | `comparison.overlap_lens` | 两个对象既有共同区域，又有独有属性 | 真正的重叠区域 |
| 08 | `comparison.clean_target_move` | 两个维度共同决定位置，重点是目标往哪里移动 | 当前位置 → 目标象限的迁移方向 |
| 09 | `comparison.missing_link` | 当前与目标之间缺少若干连接/能力/条件 | 中间缺失的连接 |
| 10 | `comparison.same_object_two_scenes` | 同一对象在不同条件/场景/人群下行为不同 | 对象不变，触发条件和行为路径变化 |

## Selection discipline

对比 ≠ 必须左右两栏。

优先识别真实信息拓扑：

- 焦点交接
- 多维收敛
- 范围/边界变化
- 关键差值
- 路径分叉
- 连续尺度位置
- 重叠区域
- 目标位置迁移
- 当前到目标的缺口
- 同一对象在不同场景中的行为差异

模板不匹配时新建模板，不把文案硬塞进现有结构。

## Focus / color rules

- 一页只有一个真正的最终记忆点。
- 重点可以是一个关系，而不是一个模块。
- 身份尽量靠标签和空间表达；颜色优先表达“差异在哪里”。
- 量化对比中，除非 A/B 已形成长期固定色彩编码，不建议默认紫=A、红=B。
- 若文案没有编辑性优先级，可默认突出最大绝对/相对差异，但意义更重要时允许人工覆盖。

## Narration sync

- 旁白先讲什么，画面先建立什么。
- 如果是 A → B 的叙事，A 先建立；随后 A 退到中性，B 接棒成为新焦点。
- 不要一开始把 Past/Now/Conclusion 或 A/B/结论全部摆出来。
- 结论应该由前文关系推导出来，而不是突然出现。

## Standard call protocol

推荐输入：

```yaml
semantic: comparison
template_id:
narration_text:
narration_beats:
focus_thesis:
objects:
dimensions:
evidence:
data:
assets:
style_profile:
output:
```

执行顺序：

1. 判断真正需要比较的对象与关系；
2. 写一句 `focus_thesis`；
3. 识别最接近的信息拓扑；
4. 选择 `comparison.*` Template ID；
5. 对数值/事实做 grounding；
6. 按旁白拆 Beat；
7. 决定焦点如何转移；
8. 视觉预览原母版为 `comparison_gallery_master_v6_1.html`；
9. 最终映射到 Remotion；
10. 执行 QA。

## QA essentials

- 不因为有两个对象就机械做左右对比。
- 一页只有一个最终重点。
- 焦点转移与旁白顺序一致。
- 数据差异必须真实，不能用视觉伪造大小关系。
- 对比维度必须统一、可比。
- 重点色服务于关键关系，不做彩虹式身份配色。
- 画面不是旁白复写，而是旁白的第二叙事层。
- 文字不靠缩小制造“高级感”，避免几何碰撞。

## Stable Template IDs

```text
comparison.focus_handoff
comparison.converging_dimensions
comparison.health_radius
comparison.key_difference
comparison.fork_difference
comparison.focused_continuum
comparison.overlap_lens
comparison.clean_target_move
comparison.missing_link
comparison.same_object_two_scenes
```
