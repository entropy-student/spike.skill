# Pre-Selection Intake & Research Contract

每次运行临时生成，不把任何用户画像写入 Skill。

## 最多 6 类高影响输入
1. Platform scope: XIANYU / XHS / BOTH
2. Product forms allowed
3. Business objective
4. Test budget / max loss / desired validation speed
5. Hard constraints / risk tolerance
6. Operator / acquisition / delivery assets

## 临时 Research Contract 字段
`platform_scope / product_forms / business_objective / test_budget / max_loss / validation_speed / time_horizon / hard_constraints / support_tolerance / policy_constraints / operator_assets / acquisition_assets / explicit_unknowns`

规则：
- 当前对话已知不重复问；
- 用户说“开放/你决定”记 OPEN；
- 缺失关键项记 UNKNOWN；
- 不从历史项目偷偷补；
- 用户输入只属于本次 Run。
