# VPS Project Governance v0.2.0

当前正式 Governance：**v0.2.0 / ACTIVE_PROVISIONAL**。

## 唯一规则入口

- Canonical rule source: `SKILL.md`
- 不再维护独立 active addenda。
- `history/` 仅用于审计和回滚，**不是当前规则来源**。

## Reviewer 每轮怎么读

1. 读 `SKILL.md` 的 header、§0–§10、§11 trigger table、§12–§13。
2. 检查 §11 的全部专项触发条件。
3. 只完整读取被触发的 §11A–§11F；不确定是否触发时按触发处理。
4. 再读取当前项目的 `REVIEWER_HANDOFF`、当前 Gate 和需要的 accepted Evidence。

Executor 不需要重新解释整套 Governance；它只执行 Reviewer 给出的当前 Gate 和明确输入。

## 项目运行时核心记录

- `REVIEWER_HANDOFF`：Reviewer 接受的当前项目状态。
- `EXECUTION_EVIDENCE`：实际执行和验证证据。
- 当前 Gate：本轮允许做什么、做到哪里、怎么验收。
- 不再要求长期维护 `EXECUTOR_HANDOFF`。

## 历史与回滚

旧正式版 v0.1.6 已完整归档到：

`history/v0.1.6/`

迁移前 main commit：

`a2de260ffbff6c1978d71545308289b40e339ac3`

详细回滚说明见 `history/v0.1.6/ROLLBACK.md`。

本次 v0.2.0 来源于 shadow ref：

`lab/amber-kite-27@eb6b45f8dac2594293be02fa7996387e96fa292b`
