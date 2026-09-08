# Causal Semantic Pack — Core Reference

> Curated from the uploaded Narrative Motion Gallery 因果语义交接调用包。统一 Skill 当前仍标记 **INCOMPLETE**。

## Stable state

- Semantic: **Causal（因果）**
- Package: v1
- Visual Master: v3.4
- Templates: 10
- Source-pack status: `STABLE BASELINE`
- Motion policy: `MOTION FIRST`
- Style: Narrative Motion Gallery / Stripe Pearl 2.0
- Output: 16:9 / 1920×1080 / Remotion-ready

## Core definition

> **因果 = 原因如何通过某种机制产生结果。**

不是简单：

```text
A → B
```

而是：

```text
原因
↓
作用机制
↓
结果
```

如果只知道“先发生 A，后发生 B”，还不够构成因果。

## Minimum causal conditions

1. 有明确的原因或推动因素；
2. 有明确的结果；
3. 原因与结果之间存在可解释机制；
4. 视觉不能仅凭箭头制造“因果感”；
5. 真实因果主张必须有证据边界；
6. 概念性机制图不能伪装成已经验证的结论。

### 与其他语义的边界

- **流程**：怎么做 / 先做什么后做什么
- **时间**：同一对象随真实时间如何变化
- **对比**：A 与 B 有什么不同
- **数据**：量值 / 趋势 / 关系
- **因果**：为什么会产生结果，以及机制如何发生

## Template library

| # | 中文模板 | Template ID | 适用结构 |
|---|---|---|---|
| 01 | 链式传导 | `causal.chain_transmission` | 原因经过一个或多个中间机制，逐环传递到结果 |
| 02 | 多因汇聚 | `causal.multi_cause_convergence` | 多个独立原因进入共同机制，共同推动同一结果 |
| 03 | 一因多果 | `causal.one_cause_many_effects` | 同一原因沿不同作用通道产生多个结果 |
| 04 | 阈值触发 | `causal.threshold_trigger` | 原因持续累积，跨过临界点后结果突然释放 |
| 05 | 放大器效应 | `causal.amplifier_effect` | 原始刺激较小，经中间机制后影响显著放大 |
| 06 | 隐藏中介 | `causal.hidden_mediator` | 表面 A→C，实际 A 先作用 B，再由 B 影响 C |
| 07 | 正反馈循环 | `causal.positive_feedback_loop` | 结果回流强化起点，下一轮更强 |
| 08 | 制衡反馈 | `causal.balancing_feedback` | 结果触发反向力量，把系统拉回新的平衡 |
| 09 | 条件触发 | `causal.conditional_gate` | 原因已存在，但关键条件成立后通路才打开 |
| 10 | 延迟显现 | `causal.delayed_manifestation` | 原因已发生，结果需要传播/积累/等待后才出现 |

新增模板的唯一理由：出现一个高频、重要、现有 10 个都无法自然表达的新因果信息拓扑。

## Evidence discipline

- 因果措辞必须匹配证据强度。
- “相关”“先后发生”“共同变化”不自动等于“导致”。
- 若只是概念模型，应明确标为 mechanism illustration / conceptual model。
- 视觉补充不能引入没有来源的新事实、数值或具体对象。
- 因果箭头必须对应真实、可解释的作用通路，而不是装饰连接线。

## Motion-first rules

因果画面要让机制“发生”，而不只是把原因和结果摆出来。

常用 Motion Grammar：

- influence propagation / chain transmission
- convergence
- branching
- threshold accumulation + release
- amplification
- mediator reveal
- feedback return
- balancing counter-force
- conditional gate open/close
- delayed propagation

动作必须帮助回答：

> **这个原因到底通过什么方式，把结果推出来？**

## Narration sync

- 先建立原因，再让机制出现，最后才形成结果。
- 后文的结果不能在旁白解释机制之前完整泄露。
- 可以提前启动不承载事实的预备动作，但具体文字/数值/对象应在对应旁白后出现。
- 最终 Remotion 时间轴绑定 SRT / voice timing，不复制网页 CSS delay。

## Standard call protocol

典型输入：

```yaml
semantic: causal
template_id:
grounding_mode:
narration_text:
narration_beats:
focus_thesis:
cause:
mechanism:
effect:
evidence_strength:
evidence:
assets:
style_profile:
output:
```

执行顺序：

1. 判断是不是因果，而不是流程/时间/对比；
2. 明确原因、机制、结果；
3. 核对证据强度；
4. 写一句 `focus_thesis`；
5. 选择 `causal.*` Template ID；
6. 按旁白拆 Beat；
7. 选择真正让机制发生的 Motion Grammar；
8. 视觉预览原母版为 `causal_gallery_master_v3_4.html`；
9. 最终映射到 Remotion；
10. 执行 QA。

## QA essentials

- 因果 ≠ A→B 箭头。
- 原因、机制、结果三者边界清楚。
- 因果措辞与证据强度匹配。
- 机制必须能在画面中被理解或发生。
- 不把相关性、时间先后、对比差异冒充因果。
- 一页只有一个最终记忆点。
- 动效帮助理解机制，不做无意义的 bounce / glow / 粒子。
- 关键文字满足视频可读性并避免几何碰撞。

## Stable Template IDs

```text
causal.chain_transmission
causal.multi_cause_convergence
causal.one_cause_many_effects
causal.threshold_trigger
causal.amplifier_effect
causal.hidden_mediator
causal.positive_feedback_loop
causal.balancing_feedback
causal.conditional_gate
causal.delayed_manifestation
```
