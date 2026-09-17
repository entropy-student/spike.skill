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

版本：`v0.6.0`

状态：**Active Validated / Scanner V0 Evidence PASS**

理论骨架已经冻结。开发前规则、事实提取、真实网络端到端验证，以及 Scanner V0 的安全验证证据已经达到 Reviewer 通过条件。

当前验证资产：
- 77 条完整知识规则；
- 17 条首版可信规则；
- 51 条规则判断 Fixture：`51 / 51`；
- 静态 / 动态事实提取 Fixture；
- 多报价 / 订阅交易事实模型；
- 真实网络普通目标覆盖：`9 / 9`；
- 真实事实断言：`26 / 26`；
- 真实规则断言：`28 / 28`；
- 意外 ISSUE：`0`；
- 地区上下文误用：`0`；
- Scrapy / Chromium 连接时固定解析验证；
- WordPress 本地基线验证已成功。

验证证据：
- `validation/01-mtrs-rule-engine-synthetic-fixtures.md`
- `validation/02-real-network-fact-to-rule-e2e.md`
- `validation/03-g2-safe-scanner-v0-reviewer-pass.md`
- `references/09-real-site-gold-calibration.md`

开发前范围历史冻结：
- `references/10-pre-development-scope-freeze.md`

## 当前 Gate 状态

已通过：

```text
PASS_PRE_DEVELOPMENT_FOUNDATION_2026-09-17
PASS_G2_SAFE_SCANNER_V0_EVIDENCE_2026-09-17
PASS_G1_WORDPRESS_LOCAL_BASELINE_2026-09-17
```

旧 `G3 Rule Engine v0` 已被开发前规则校准与 G2 实现吸收：

`G3_RULE_ENGINE_V0 = MERGED / CLOSED`

下一产品 Gate：

`G4_WORDPRESS_SCANNER_TOP3_LOCAL_INTEGRATION`

但进入 G4 前必须先完成源码恢复检查：

> 当前 GitHub 主分支能够确认保存的是理论、Fixture、真实网络校准、G2 网络安全快照和 G1 WordPress 可重复验证资产；没有找到带 SQLite、/healthz、Job/Report API 的完整 Scanner V0 产品源码持久化提交。

因此当前恢复要求是：

`CONFIRM_OR_RESTORE_SCANNER_V0_CANONICAL_SOURCE`

这不是重新做理论或重新跑 G2，而是把已经验证过的完整实现固化到唯一源码位置。

## HOLD 状态

仍然 HOLD：
- WordPress ↔ Scanner 产品集成，直到 Scanner canonical source 被确认或恢复；
- 完整报告产品化；
- 模型解释层；
- 付费解锁；
- 正式支付；
- VPS 生产部署；
- 正式用户生产扫描；
- 商业上线。

## 当前正确下一步

```text
统一项目单一真相
↓
确认 / 恢复 Scanner V0 完整源码
↓
G4 WordPress → Scanner → Top 3 本地闭环
↓
完整修复队列 / 模型解释
↓
本地产品闭环 PASS
↓
VPS Onboarding / Storage Gate
```

不要重复：理论调研、77 条规则建设、51 Fixture、真实网络 Gold 校准、G1 WordPress CI、G2 网络安全验证。
