# Process Semantic Pack — Core Reference

> Curated from the uploaded handoff package. The unified Skill remains **INCOMPLETE**; full runtime/Visual Master assets are not migrated in this first repository pass.

## Stable state

- Semantic: **Process（流程）**
- Package: v1
- Visual Master: v1.7
- Templates: 10
- Status inside source pack: `STABLE BASELINE`
- Motion policy: `MOTION FIRST / SEMANTIC MOTION`

## Core definition

> **流程 = 一个对象、任务或输入，如何经过操作、判断、交接与状态推进，完成从输入到输出的转化。**

核心问题：

> **这件事到底是怎么一步一步完成的 / 下一步怎么走？**

流程不是时间、不是因果、不是路径、也不是分类。操作先后属于流程；真实时间中的长期演化属于时间；解释“为什么产生结果”属于因果。

## Grounding rules

流程模板不能因为“画得顺”就补写不存在的步骤。

`grounding_mode`：

- `verified_process`：有真实 SOP、业务规则、产品状态、操作记录等，可明确写步骤、先后、条件与真实数量。
- `conceptual_process`：只知道总体机制时，用抽象节点并明确“流程示意”，不写未经证实的精确步骤。
- `illustrative_demo`：仅用于展示模板能力，Demo 数字、任务和检查项不能迁移成事实。

高风险点：顺序、审核闸门、队列前提、筛选数量、状态模型都必须有真实依据。

## Template library

| # | 中文模板 | Template ID | 适用结构 |
|---|---|---|---|
| 01 | 步骤推进 | `process.step_progression` | 固定顺序，一步接一步 |
| 02 | 流水加工 | `process.pipeline_processing` | 同一对象经过多道加工工序 |
| 03 | 接力交接 | `process.role_handoff` | 任务在不同角色间依次移交 |
| 04 | 并行协作 | `process.parallel_merge` | 多个子任务同时推进后汇总 |
| 05 | 检查闸门 | `process.quality_gate` | 必须完成检查/审核才放行 |
| 06 | 循环迭代 | `process.iterative_loop` | 做一轮、检查、修改、再来一轮 |
| 07 | 装配合成 | `process.assembly_composition` | 多个部件逐步装入同一主体 |
| 08 | 队列处理 | `process.queue_processing` | 多任务共享有限处理资源，需要排队 |
| 09 | 筛选收敛 | `process.filter_convergence` | 同一批候选按规则逐轮淘汰 |
| 10 | 状态迁移 | `process.state_transition` | 同一对象在明确状态之间切换 |

### 容易混淆

- 步骤推进 vs 流水加工：前者重先后依赖，后者重同一对象被不同工序处理。
- 步骤推进 vs 状态迁移：前者是“做了什么”，后者是“处于什么状态”。
- 并行协作 vs 多因汇聚：前者是工作流程，后者是因果机制。
- 检查闸门 vs 条件触发：前者是审核/验收，后者是因果通路的条件门。
- 筛选收敛 vs 分类：筛选会淘汰对象，分类会保留对象。

## Motion grammar

1. Progress Fill
2. Connector Draw
3. Focus Handoff
4. Parallel Progress
5. Merge Pulse
6. Sequential Check
7. Gate Release
8. Loop Trace / Return
9. Snap / Lock
10. Queue Shift
11. Scan Sweep
12. Reject × + Drop
13. Reflow / Contract
14. State Transition
15. Completion Pop（仅用于真实完成/通过）

符号规则：`✓` 只用于完成/通过，`×` 只用于淘汰/不通过，`!` 只用于问题/异常；无明确状态语义时不要加。

## Narration sync

- 先把旁白拆成 2–6 个 Beat。
- 每个 Beat 至少绑定一个 `visual_action`。
- 后文事实不能在旁白说到之前完整出现。
- 画面负责数量差、空间距离、范围、关系与总结，不做逐字字幕。
- 最终 Remotion 用 SRT / voice timing 映射 `<Sequence from={...}>`，不要照搬网页 delay。

## Standard call protocol

```yaml
semantic: process
template_id:
grounding_mode:
narration_text:
narration_beats:
focus_thesis:
process_definition:
evidence:
assets:
style_profile:
output:
```

执行顺序：

1. 判断是否真为流程；
2. 核对流程真实性；
3. 选择 Template ID；
4. 写一句 `focus_thesis`；
5. 按原旁白顺序拆 Beat；
6. 选择能解释“下一步如何发生”的 Motion Grammar；
7. 按语义使用 ✓ / × / !；
8. 视觉预览原母版为 `process_gallery_master_v1_7.html`；
9. 最终映射到 Remotion；
10. 执行 QA。

## QA essentials

- 真正回答“怎么做 / 下一步怎么推进”。
- 不把因果、时间、路径、分类误当流程。
- 不虚构步骤、先后、审核条件、状态、数量、时间或阈值。
- 一页只有一个最终记忆点，焦点随流程 Beat 合理转移。
- 动作必须解释流程语义，不做纯装饰弹跳/粒子。
- 正式 1080p 信息文字原则上 ≥20px，Micro label 建议 ≥22px。
- 模板不匹配时退出，不硬套。

## Preservation notes

稳定 Template IDs：

```text
process.step_progression
process.pipeline_processing
process.role_handoff
process.parallel_merge
process.quality_gate
process.iterative_loop
process.assembly_composition
process.queue_processing
process.filter_convergence
process.state_transition
```

源包明确要求不要恢复已废弃结构，也不要把 `12 → 8 → 4 → 2` 等 Demo 数字当成事实。

下一语义路线在源包中标记为：**路径**。
