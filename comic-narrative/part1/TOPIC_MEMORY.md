# Part 1 — Topic Memory / 去重与选题记忆（简化 Draft）

Status: `DRAFT / REGRESSION_TESTED / AWAITING_OWNER_CONFIRMATION`

## 1. 为什么要记忆

不能因为标题、领域或 AI 名词换了，就把同一个内容当成新选题。

---

## 2. 五层去重

### D1 — 同一信号
同一新闻、同一事件、同一来源被多家转载。

### D2 — 同一题
核心机制 + 人的问题 + 观众收获基本相同。

### D3 — 同一角度
技术对象不同，但实际上仍在讲同一个人类问题。

### D4 — 同一故事/视觉母题
例如连续反复使用同一种老板秘书、左右对比、办公室碰壁结构。

D4 不一定禁止选题，但要提醒下游换故事表达。

### D5 — 同一意义
跨领域仍可能是同一个问题。

例如：

```text
美食：推荐最优 → 少了探索
音乐：推荐最优 → 少了探索
购物：推荐最优 → 少了探索
```

如果核心都在问：

`OPTIMIZATION_VS_EXPLORATION`

则默认视为同一 Meaning。

---

## 3. 两个核心指纹

### Topic Fingerprint

```text
主机制
+ human_process
+ human_problem
+ audience_payoff
```

### Meaning Fingerprint

```text
human_tension
+ controlling question
```

Meaning Fingerprint 只用于判断是否“灵魂重复”，不能当最终观点。

---

## 4. 什么时候允许重讲

以下任一发生实质变化，可以 `REVISIT_ALLOWED`：

- 机制真的变了；
- 出现新的人的后果；
- 目标受众不同；
- 内容任务不同；
- 上一期留下了明确未解决需求；
- 新热点让旧问题重新重要；
- human process / stakes / counter-idea 已发生实质变化。

只是换标题、换领域、换例子，不算新题。

---

## 5. 三种运行记录不要混

### Daily Radar
今天出现了什么新信号。

### Calendar
准备哪天讲什么。

### Topic Registry
以前见过什么、讲过什么、从什么角度讲、结果怎样。

> **Calendar 不能代替 Topic Registry。**

进入下游生产并锁定的题，普通 Daily Radar 不得静默替换。

只有真实发布证据才能标记为 published。

---

## 6. 最小 Registry 记录

```yaml
topic_id:
aliases:
human_process:
human_problem:
main_mechanism:
audience_payoff:
meaning_fingerprint:
story_motif:
visual_motif:
first_seen:
last_published:
status:
revisit_reason:
performance:
```
