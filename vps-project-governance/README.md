# VPS Project Governance v0.2.0

当前正式版本：**v0.2.0 / ACTIVE_PROVISIONAL**

## 当前文件结构

```text
vps-project-governance/
├─ SKILL.md              # Skill 入口；不重复治理规则
├─ README.md             # 本说明
├─ metadata.yml          # 版本状态
├─ v0.2.0/               # 当前完整原始治理包
│  ├─ VNEXT.md           # 唯一完整运行规则
│  ├─ HANDOFF.md
│  ├─ DECISION_LOG.md
│  ├─ COVERAGE.md
│  ├─ RULE_MATRIX.md
│  ├─ CONFLICT_REGISTER.md
│  ├─ INVENTORY.md
│  └─ MAP.md
└─ history/
   └─ v0.1.6/            # 上一正式版本完整回滚包
```

## 关键原则

- **不要重新加工 VNEXT.md。** 当前 v0.2.0 直接使用已审计通过的原始文件。
- Reviewer 的实际读取方式、Gate、Evidence、Handoff、专项触发等规则全部定义在 `v0.2.0/VNEXT.md`。
- 其余 v0.2.0 文件用于审计和追溯，不是第二套 Governance。
- 旧 v0.1.6 完整保留在 `history/v0.1.6/`。

来源快照：`lab/amber-kite-27@eb6b45f8dac2594293be02fa7996387e96fa292b`
