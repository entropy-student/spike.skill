# Narrative Motion Semantics（叙事动效语义库） v0.1 — INCOMPLETE

> 用于把旁白 / 信息先归类为正确的叙事语义，再选择对应 Narrative Motion Gallery 模板与调用协议的 Skill。

> [!WARNING]
> **整体状态：INCOMPLETE / 未完成。** 当前只统一了流程、时间、对比、因果四个语义包。不要宣称已覆盖所有叙事关系，也不要把四包各自的 STABLE_BASELINE 误解为统一 Skill 已完成。

## 1. 什么时候使用

当用户需要：

- 给旁白、脚本、知识视频设计信息动效；
- 判断一段内容适合流程、时间、对比还是因果表达；
- 从 Narrative Motion Gallery 中选择语义模板；
- 把文案 / SRT 映射成可 Remotion 化的结构；
- 复盘某个动效为什么“看起来有动，但没有解释关系”；
- 复用四个语义包里的 Template ID、Call Protocol、runtime 或 QA。

## 2. 当前边界

当前只处理四类主语义：

- `process.*` — 流程
- `time.*` — 时间
- `comparison.*` — 对比
- `causal.*` — 因果

如果内容本质属于路径、数据、分类或其他尚未纳入的语义：

1. 不要硬套四类模板；
2. 明确标记 `UNSUPPORTED_SEMANTIC / INCOMPLETE`；
3. 可以给出最接近语义，但必须说明不等价。

## 3. 第一原则：Semantic First

不要先问“哪张模板最好看”。

先问：

> **这段信息真正要让观众理解的关系是什么？**

然后才选择视觉拓扑和 Motion Grammar。

## 4. 四类语义路由

### Process｜流程

核心问题：
> **怎么做 / 下一步怎么推进？**

常见信号：步骤、操作、加工、角色交接、并行、审核闸门、循环、排队、筛选、状态迁移。

读取：`semantics/process/GUIDE.md` → `MODULES.md` → 必要时 `RUNTIME.md`。

### Time｜时间

核心问题：
> **同一对象随真实时间发生了什么变化？**

最低要求通常包括持续主体 + 真实时间关系 + 演化/累积/交替/周期/速度变化。

读取：`semantics/time/GUIDE.md` → `MODULES.md` → 必要时 `RUNTIME.md`。

### Comparison｜对比

核心问题：
> **多个对象 / 状态之间，真正重要的差异、位置、重叠或缺口是什么？**

读取：`semantics/comparison/GUIDE.md` → `MODULES.md` → 必要时 `RUNTIME.md`。

### Causal｜因果

核心问题：
> **原因通过什么机制产生结果？**

只有 A 在 B 之前发生，不足以证明因果。视觉也不能用箭头凭空制造因果。

读取：`semantics/causal/GUIDE.md` → `MODULES.md` → 必要时 `RUNTIME.md`。

## 5. 最容易混淆的边界

### 流程 vs 时间
- 操作先后 → 流程
- 同一主体在真实时间中的长期变化 → 时间

### 流程 vs 因果
- “怎么做” → 流程
- “为什么产生这个结果 / 机制如何作用” → 因果

### 时间 vs 对比
- 两个时期只是静态 A/B 差异 → 可能是对比
- 重点是同一主体如何沿真实时间演变 → 时间

### 对比 vs 因果
- 有差异不等于存在因果
- 只有能解释原因 → 机制 → 结果时才进入因果

## 6. 标准执行流程

1. 读取用户旁白 / 信息 / SRT / 目标；
2. 写出一句 `Focus Thesis`：观众最后只应该记住什么；
3. 判断主语义；
4. 至少排除一个最容易混淆的替代语义；
5. 读取对应 `GUIDE.md`；
6. 读取对应 `MODULES.md`；
7. 选择稳定 Template ID，而不是按“第几个模板”调用；
8. 按原 Call Protocol 准备真实输入；
9. 必要时读取 `RUNTIME.md` 获取 invoke schema / registry / tokens；
10. 映射到 Remotion / 动效实现；
11. 按原 QA 规则检查。

## 7. 模板选择纪律

- 模板代表**信息拓扑**，不是视觉皮肤；
- 不因为箭头、卡片、时间轴长得像就选模板；
- 一页只保留一个最终记忆点；
- 旁白先讲什么，画面原则上先建立什么；
- 动效必须承担关系变化，而不是所有元素统一 fade；
- 模板不匹配时退出，不硬套。

## 8. Grounding / Evidence

- 流程步骤、顺序、状态、检查条件不得凭视觉补写；
- 时间事实与未来推演必须区分；
- 对比维度和数值必须有来源或明确为示意；
- 因果措辞必须匹配证据强度；概念机制不能伪装成已验证因果。

## 9. 混合语义

当前统一路由仍在建设中，采用保守规则：

1. 优先找“这一页的最终记忆点”对应的主语义；
2. 如果一页同时承担两个独立关系，优先拆页 / 拆段；
3. 必须组合时，标记 `primary_semantic` 与 `secondary_semantic`；
4. 不把两个模板机械叠加；
5. 复杂混合案例标记 `NEEDS_CALIBRATION`。

## 10. 推荐输出

```text
Focus Thesis：
Primary Semantic：
Secondary Semantic（如有）：
为什么：
为什么不是最接近的另一语义：
Template ID：
需要的真实输入：
Motion 需要表达的关系：
Call Protocol：
QA 风险：
当前是否受 INCOMPLETE 边界影响：
```

## 11. 加载原则

不要一次把四套包全部加载进上下文。

默认只读：

1. 本 `SKILL.md`
2. 对应语义的 `GUIDE.md`
3. 对应语义的 `MODULES.md`
4. 必要时再读 `RUNTIME.md`

## 12. 当前完成度

已整理：

- Process：10 templates
- Time：9 templates
- Comparison：10 templates
- Causal：10 templates
- 四个上传包的 Markdown / JSON 规则被整理进可直接阅读的参考包

仍未完成：

- standalone Visual Master HTML 正式迁移
- 跨语义路由校准
- 混合语义稳定策略
- 路径 / 数据 / 分类等后续语义
- 统一 runtime schema
- 统一 Remotion production adapter

因此版本状态保持：

> **v0.1 — INCOMPLETE / 未完成**
