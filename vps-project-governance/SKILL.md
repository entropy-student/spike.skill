---
name: vps-project-governance
description: >
  VPS/Docker/Shared VPS 项目治理 v0.2.0。用于 Owner-Reviewer-Executor、Gate、Evidence、
  rollback、SSH/Secret、部署、自动化、Provider/payment 与项目 closeout。
---

# VPS Project Governance v0.2.0

> STATUS=ACTIVE_PROVISIONAL
> CANONICAL_OPERATIONAL_RULES=main:vps-project-governance/v0.2.0/VNEXT.md
> SOURCE_SNAPSHOT=lab/amber-kite-27@eb6b45f8dac2594293be02fa7996387e96fa292b
> PREVIOUS_VERSION=v0.1.6
> PREVIOUS_VERSION_ARCHIVE=vps-project-governance/history/v0.1.6/
> REFACTOR_AUDIT_ARCHIVE=vps-project-governance/history/v0.2.0-refactor/

## 加载要求

1. **所有实际治理规则都以 `v0.2.0/VNEXT.md` 为准。**
2. 不得把本文件当成第二套规则，也不得自行重新摘要、改写或补全 `VNEXT.md`。
3. `VNEXT.md` 顶部保留的 `SHADOW_NON_OPERATIONAL / SHADOW_AUTHORITY=NONE` 是被提升前的原始审计快照元数据；本文件的正式 promotion 记录只覆盖这些“是否生效”的状态字段，**不改变 VNEXT 的任何操作规则**。
4. Reviewer 严格按 `VNEXT.md` 自己定义的加载模型工作：读取通用部分、扫描所有专项触发器，只加载命中的专项正文。
5. `history/v0.2.0-refactor/` 保存本次重构的 7 份原始审计材料；默认不读取，只在追溯、审计或核对设计决定时使用。
6. `history/` 仅用于历史审计和回滚，不属于当前规则来源。

如果 `SKILL.md` 与 `VNEXT.md` 在**操作规则**上出现冲突，必须以 `VNEXT.md` 为准；本文件仅承担 Skill 入口与 promotion 状态声明。
