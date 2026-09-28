# Proof & Claim｜证明与承诺

## 核心原则

**先证明，再承诺。**

对性能、比较、效率、安全、耐久、结果类表达，默认使用：

`HYPOTHESIS → OBSERVED → REPEATABLE → APPROVED`

### HYPOTHESIS
只是认为可能成立。不能当成事实宣传。

### OBSERVED
至少观察到一次，但可能是偶然或场景特例。

### REPEATABLE
在不同样本、时间或场景里重复出现。

### APPROVED
证据足以支持限定范围内的对外表达。

## Fact 与 Claim 分开

### Fact
可直接核验的客观信息，例如：

- 价格
- 尺寸
- 是否包含某功能
- 交付内容
- 服务周期
- 是否支持某接口

### Claim
需要额外证据的承诺，例如：

- 更快
- 更有效
- 更省钱
- 更安全
- 更容易
- 更耐用
- 比某替代方案更好

## Claim Scope

Claim 不能超过证据边界。

例如：

- 只在场景 A 验证，不应写“适用于所有场景”。
- 只观察到一次，不应写“稳定有效”。
- 只证明速度更快，不应顺带宣称质量更高。

## 反证优先

每个重要 Claim 都主动问：

- 什么情况下不成立？
- 对谁不适用？
- 有什么副作用、摩擦或失败模式？
- 有没有更便宜/更简单的替代方案？
- 哪个条件变化会推翻这个结论？

## Claim Registry 最低字段

- claim_id
- claim_text
- claim_type
- status
- evidence_refs
- scope_limit
- disallowed_wording
- owner
- updated_at

## 对外表达规则

- HYPOTHESIS：仅内部研究
- OBSERVED：可描述为一次观察，不可泛化
- REPEATABLE：可形成受限表达
- APPROVED：可作为稳定对外 Claim，但仍受 scope 限制
