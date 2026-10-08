# Solo Business Engine v0.4｜封板说明

**封板日期**：2026-10-08。
**封板版本**：`0.4.0-business-model-candidate`。
**仓库目标位置**：`entropy-student/spike.skill` → `main` → `solo-business-engine/`。
**授权范围**：本轮用户明确要求“封板然后放在我们的github仓库里”。

## 封板定义
- 以本目录文件为研究/方法论候选版只读基线，后续新增研究、市场实测或修复应版本化，不回写、抹除既有证据。
- **非生产就绪**：尚无独立 Agent 行为盲测、本人实际获客成交、付款、退款与盈利重复性验证，不得声称自动赚钱系统已成立。
- 不变更仓库原 `acquisition-growth-radar/`，不将旧获客 Skill 的结论自动视为新系统成立。
- 核心目标：帮助个人持续发现、验证、经营可盈利且可复制的商业机会，逐步减少单位利润所需的本人时间投入。

## 权威入口
1. `SKILL.md`：规范主体与六种工作模式。
2. `BUSINESS_SYSTEM_OVERVIEW.md`：**精确可编辑的 Mermaid 主流程图**。
3. `references/04a_acquisition_router.md`：获客的购买阶段 × 来源 × 接触机制 × Offer 决策。
4. `references/10_business_model_architecture.md`、`11_productization_automation.md`、`12_compounding_and_portfolio.md`：商业模式、产品化、长期经营。
5. `review/V04_REVIEW.md`、`review/V04_QA_REPORT.md`：封板前已知问题和验证状态。
6. `assets/`：供阅读的图片脑图；若视觉文字与文本存在差异，**以原始规范和可编辑主图为准**。

## 封板验证
- `tests/static_contract_check.py`
- `tests/public_market_integrity_check.py`
- `tests/package_review_check.py`
- `tests/model_rule_guard.py`
- `FILE_MANIFEST.txt` 为本目录校验账簿；提交后需 GitHub fresh read-back。

## 未解除的风险
`INDEPENDENT_AGENT_BLIND_TEST=NOT_RUN`、`REAL_TRANSACTION=NOT_OBSERVED`、`REPEATABLE_PROFIT=NOT_VALIDATED`。
