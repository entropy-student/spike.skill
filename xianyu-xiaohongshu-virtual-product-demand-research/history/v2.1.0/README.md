# 闲鱼 / 小红书虚拟商品需求研究 v2.1

用于长期反复执行的轻量需求研究 Skill。

## 默认回答

> **平台上哪些具体商品类型 / SKU / Offer 有买方需求证据？证据强到什么程度？**

核心流程：

~~~text
平台市场
→ 具体商品 / SKU
→ 买方证据 + 供给观察分开
→ Evidence Scope + Signal Lineage
→ D4 / D3 / D2 / D1 / U
→ Demand Status + Risk Status
→ 可复核需求目录
~~~

## v2.1 最重要的修正

- 多卖家/多挂单只算 Supply，不能单独升级 D3/D4。
- 商品族交易证据不得下传到更细 SKU/Bundle。
- CONFIRMED_DEMAND 仅限 D4；PROBABLE_DEMAND = D3。
- Demand 与 Risk 两条轴分开。
- 新增单一轻量 Research Ledger，保留日期、原始事实、Scope、Lineage、覆盖与访问限制。
- 重复调用优先刷新旧底稿。
- Test Mode 区分 RESEARCH_NEXT 和 TEST_READY。

## 文件

~~~text
SKILL.md
references/EVIDENCE_RULES.md
references/OPTIONAL_TEST_MODE.md
templates/RESEARCH_LEDGER_TEMPLATE.md
templates/FINAL_CATALOG_TEMPLATE.md
examples/XIANYU_2026_10_CASE.md
history/v1.0.0/
history/v2.0.1/
~~~

v1.0 保留完整商业机会决策历史；v2.0.1 保留第一次轻量化版本；当前正式版本为 v2.1.0。
