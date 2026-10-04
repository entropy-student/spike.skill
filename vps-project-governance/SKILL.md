---
name: vps-project-governance
description: >
  VPS/Docker/Shared VPS 项目治理 v0.2.7。用于 Owner-Reviewer-Executor、Gate、Evidence、
  rollback、SSH/Secret、部署、自动化、Provider/payment 与项目 closeout。
---

# VPS Project Governance v0.2.7

> STATUS=ACTIVE_PROVISIONAL
> CANONICAL_OPERATIONAL_RULES=main:vps-project-governance/VNEXT.md
> PREVIOUS_VERSION=v0.2.6
> PREVIOUS_VERSION_ARCHIVE=vps-project-governance/history/vnext/v0.2.6.md
> INCIDENT_ARCHIVE=vps-project-governance/history/incidents/

## 加载要求

1. **所有实际治理规则都以 `VNEXT.md` 为准。**
2. 不得把本文件当成第二套规则，也不得自行重新摘要、改写或补全 `VNEXT.md`。
3. Reviewer 严格按 `VNEXT.md` 自己定义的加载模型工作：读取通用部分、扫描所有专项触发器，只加载命中的专项正文。
4. `history/incidents/` 与其他 `history/` 内容均为非规范历史材料，默认不进入 Reviewer 日常读取；只有追溯类似问题、规则来源或 Owner 明确要求时才查。
5. 如果 `SKILL.md` 与 `VNEXT.md` 在操作规则上冲突，以 `VNEXT.md` 为准。

本文件仅承担 Skill 入口与当前版本声明。
