# VPS Project Governance v0.2.0

当前正式版本：**v0.2.0 / ACTIVE_PROVISIONAL**

## 当前文件结构

```text
vps-project-governance/
├─ SKILL.md
├─ README.md
├─ metadata.yml
├─ v0.2.0/
│  └─ VNEXT.md                   # 唯一正式运行规则
└─ history/
   ├─ v0.1.6/                    # 上一正式版本完整回滚包
   └─ v0.2.0-refactor/           # 本次重构原始审计材料
      ├─ HANDOFF.md
      ├─ DECISION_LOG.md
      ├─ COVERAGE.md
      ├─ RULE_MATRIX.md
      ├─ CONFLICT_REGISTER.md
      ├─ INVENTORY.md
      └─ MAP.md
```

## 关键原则

- **不要重新加工 VNEXT.md。** 当前 v0.2.0 直接使用已审计通过的原始文件。
- Reviewer 的实际读取方式、Gate、Evidence、Handoff、专项触发等规则全部定义在 `v0.2.0/VNEXT.md`。
- `history/v0.2.0-refactor/` 仅用于审计和追溯，日常运行不读。
- 旧 v0.1.6 完整保留在 `history/v0.1.6/`。

来源快照：`lab/amber-kite-27@eb6b45f8dac2594293be02fa7996387e96fa292b`
