# Validation Spine & Evidence Discipline｜商业验证主干与证据纪律

> 文件名保留 `01-evidence-ladder.md` 以兼容旧链接，但 v0.2 不再把所有概念视为一条纯线性 Evidence Ladder。

## 目的

防止把低等级信号越级解释成商业结论，同时区分：

- 价值事实
- 用户行为
- 商业可行性
- 影响行为的可控变量

---

## A. VALUE REALITY

### Problem Evidence

典型证据：搜索、抱怨、访谈、评论、客服/销售反馈。

能证明：问题/场景真实存在。

不能证明：用户会购买你的方案。

### Solution Proof

典型证据：真实测试、交付结果、Demo、对照、复现。

能证明：方案在明确边界下确实能产生目标结果。

不能证明：用户会注意、相信、购买或让商业模型成立。

---

## B. CUSTOMER BEHAVIOR

| 层级 | 典型信号 | 最多能证明 | 不能证明 |
|---|---|---|---|
| Attention | 展示、播放、停留 | 当前表达抓住注意 | 商业需求 |
| Interest | 点击、回复、收藏、询问 | 愿意进一步了解 | 愿意付费 |
| Intent | 注册、预约、加购、报价申请、开始试用 | 明确行动意向 | 最终成交 |
| Transaction | 真实付款、签约、付费试点 | 至少一次真实价值交换 | 可重复、可盈利 |

### 常见误判

- 播放高 → “市场有需求” ❌
- 点赞多 → “愿意购买” ❌
- 有询问 → “成交验证” ❌
- 有人加购 → “价格没问题” ❌
- 第一单 → “PMF 已验证” ❌

---

## Activation / Aha 是价值体验事件

Activation 不强制塞进 Attention → Interest → Intent → Transaction 的固定位置。

定义：

> **用户第一次亲自体验到核心价值的时刻。**

记录：

- `PRE_TRANSACTION`
- `POST_TRANSACTION`
- `BOTH`

例如：

- 免费 AI 工具：常在付款前发生
- 实物商品：常在收货/使用后发生
- 咨询：可能付款后才发生
- Freemium：可能前后各有一次价值体验

注册、打开 App、完成 onboarding 只有在它们本身代表“体验到核心价值”时，才算 Activation。

---

## C. BUSINESS VIABILITY

### Repeatability

多个独立用户、时间段、来源或场景中能否重复出现相似商业结果。

### Economics

CAC、贡献利润、退款/流失、交付成本、Payback 等是否成立。

Repeatability 与 Economics 不强制先后；出现真实 Transaction 后通常可以并行验证。

### Scale

只有当：

- 关键价值/行为证据足够
- Repeatability 足够
- Economics 足够
- 扩大投入后的边际结果仍可接受

才有资格进入 Scale。

短期 ROAS > 1 或一轮盈利不能自动证明可 Scale。

---

## Evidence 与 Lever 必须分开

Evidence 回答：

> **实际上发生了什么？**

Growth Lever 回答：

> **我们可以改什么？**

所以以下不是 Evidence 阶段：

- Message / Creative
- Offer
- Channel
- Trust
- Price
- Conversion Path
- Friction

这些属于影响证据结果的变量。

---

## Problem Evidence 研究字段

优先记录：

- Audience
- Situation
- Problem
- Trigger / Why now
- Existing solution
- Failed reason
- Exact language
- Objection
- Counterexample

## Saturation Stop Rule

当连续新增证据已经不再产生新的一级：

- Problem
- Situation
- Existing Alternative
- Failed Reason
- Objection

则停止广泛搜索，进入最小验证。

## 证据升级原则

每次升级前写清楚：

1. 当前证据来自哪里；
2. 它实际能证明什么；
3. 它仍然不能证明什么；
4. 当前最大的断点是什么；
5. 下一轮最低成本验证是什么。
