# Independent Store Operations — START HERE

这是一个面向独立站 / DTC 的**运营诊断与知识中枢 Skill**。

它不负责重新做选品，也不是“100 条转化率技巧”。它解决的是：

> 一个独立站为什么表现成现在这样？我们真正知道什么、哪些只是风险、下一条最值得补的证据是什么、应该直接修、先测量、先研究，还是做实验？

## 与现有 Skill 的关系

```text
Independent Store Product Opportunity
决定：卖什么、给谁、为什么值得验证
          ↓
Independent Store Operations
决定：运营模型、诊断、站内问题、内容知识、证据边界
          ↓
Acquisition Growth Radar
决定：哪个表达 / 渠道 / 报价真正推动真实行为
```

工程层另交给：
- `payment-integration-governance`
- `vps-project-governance`

内容表达可继续交给：
- `short-form-spoken-script`

## 当前理论框架

```text
S1 人群与入口
↓
S2 商品发现
↓
S3 商品决策
↓
S4 信任与风险
↓
S5 报价与购物篮
↓
S6 结账与支付
↓
S7 履约与购买后
↓
S8 留存与传播
```

横向系统：
- 数据
- 经济性
- 内容
- 技术体验
- 搜索发现
- 合规与完整性

## 核心纪律

1. 页面事实 ≠ 根因。
2. 行业研究 ≠ 本店因果。
3. 漏斗告诉你“哪里掉”，不自动告诉你“为什么掉”。
4. 公开扫描最多稳定做到 L0/L1；本店行为数据才进入 L2；实验才进入 L3。
5. “最佳实践”必须区分基础卫生规则、条件规则和商业实验规则。
6. 不做万能网站总分。
7. 不做虚假的收入损失估算。
8. 内容不是独立宣传模块，而是购买决策信息、证明和风险解释的表达层。
9. 转化率不是最终目标，贡献利润和重复价值必须同时看。

## 当前成熟度

版本：`v0.5.2`

状态：**Theory Frozen / Real-site Gold Prepared**

理论骨架已经冻结，后续主要通过真实站点、正反样本、人工审计和自动检测结果继续校准，不再频繁重构总框架。

当前开发前验证资产：
- 77 条完整知识规则；
- 17 条首版可信规则；
- 51 条规则判断 Fixture；
- 静态事实提取 Fixture；
- 动态浏览器事实 Fixture；
- 多报价 / 订阅交易事实模型；
- 11 个真实公开站点、52 条事实断言的 Gold Set。

真实站 Gold Set：
- `references/09-real-site-gold-calibration.md`
- `templates/real-site-gold-v0.1.json`

下一 Gate：`REAL_NETWORK_FACT_EXTRACTION_PRECISION`

在能够运行真实网络 Scrapy / 浏览器抓取的执行环境中，自动抓取这些固定 URL，并与 Gold Set 对照。只有真实事实提取准确率达到目标、抓取失败误报为网站问题为 0，才允许继续向正式扫描器开发推进。
