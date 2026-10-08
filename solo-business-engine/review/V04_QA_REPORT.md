# v0.4 QA 报告（2026-10-08）

## 实际检验结果
- `tests/static_contract_check.py`：PASS；24 个基础文件契约，7 个 CSV 结构，20 个旧版合成场景。
- `tests/public_market_integrity_check.py`：PASS；沿用的 7 条公开记录不包含我们本人实际接触/交易，不能当成交。
- `tests/package_review_check.py`：PASS；41 个 Markdown 文件通过相对链接检查，0 个失效内部引用。测试针对 v0.4 标题约束已更新。
- `tests/model_rule_guard.py`：PASS；20 个**新增商业模型场景的输入和预期断言存在且格式正常**，2 个新 CSV、4 个必要参考模块可找到，核心关键词存在。**这不等于 LLM 已经逐案做出正确判断。**
- 总账：两种场景池分别保留，不能以 v0.3 的公开试验替换 v0.4 的真实交易实验。

## 当前未通过/未执行的 Gate
- 独立第二 Agent 的盲测：NOT_RUN。参见 `tests/ROUTER_BLIND_TEST_PROTOCOL.md`。
- 真实报价、支付、退款、交付验收：NOT_RUN。
- 真实不同经营模式的 A/B 或配对客户实验：NOT_RUN。
- Owner 实际每单/每周所有人工时间、自动化维护成本：NOT_MEASURED。
- 全面系统文献综述：NOT_PERFORMED。

## 评审结论
`PASS_RESEARCH_CANDIDATE / NOT_PRODUCTION_VALIDATED`。可以作为只读机会发现、商业模式设计与实验规划的研究候选；无法证明可持续赚取利润。**不建议现在覆盖仓库原 Skill**；应先通过真实 Agent 行为与实际经济数据验证。
