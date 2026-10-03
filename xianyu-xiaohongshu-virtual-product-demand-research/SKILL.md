---
name: xianyu-xiaohongshu-virtual-product-demand-research
title: 闲鱼 / 小红书虚拟商品需求研究
description: 高频调用的闲鱼/小红书虚拟商品需求研究 Skill。默认从平台真实市场出发，记录可复核的买方需求证据与供给观察，输出具体商品类型、SKU 或 Offer 的需求目录；只有用户明确要求实际售卖/测试决策时才进入 Test Mode。
version: 2.1.0
language: zh-CN
---

# 闲鱼 / 小红书虚拟商品需求研究 v2.1

## 1. 默认目标

默认回答：

> **平台上哪些具体商品类型 / SKU / Offer 有买方需求证据？证据强到什么程度？**

默认终点是**可复核的需求目录**。不要求找货源、上架、真实成交测试，也不强行选冠军。

只有用户明确要求“哪个值得卖 / 测 / 优先做”时，才进入 **Test Mode**。

## 2. 四条总原则

1. **平台优先，而不是能力优先**
   - 先看平台原生市场、当前商品/Offer 和买方行为。
   - “我们会做什么”“某服务能否产品化”只能补充候选。

2. **买方需求和供给存在必须分开**
   - 多卖家、多挂单、官方类目可以证明“有供给/有市场面”，**不能单独证明有人买**。
   - Demand Level 只由买方侧或交易侧证据升级。

3. **Transaction > Intent > Attention > Supply**
   - 真实订单/平台交易数据 > 明确购买动作/有效询盘 > 想要/收藏/搜索 > 浏览/点赞 > 供给重复出现。
   - 卖家累计“卖出 X 件”不得冒充某个 SKU 销量。

4. **需求、风险、执行分开**
   - 需求强弱是一条轴；合规/版权/账号/交易风险是另一条轴。
   - 暂时找不到货源、授权、交付方案，不等于没有需求。

## 3. 每次调用先确定范围

从用户当前请求直接确定：

- `PLATFORM`: XIANYU / XHS / DUAL
- `SCOPE`: 虚拟商品 / 数字产品 / 服务产品化 / OPEN
- `MODE`: 默认 `MARKET_MAP`；明确要求实际售卖/测试决策时才用 `TEST`

只在缺失信息会显著改变结果时提问；否则用 `OPEN` / `UNKNOWN` 继续。

双平台分别判断，不能拿闲鱼证据证明小红书成立，反之亦然。

正式 Run 使用当前市场信息。涉及平台规则、类目资格、知识产权或账号风险时，核对当前官方规则；规则用于 `RISK_STATUS`，不抹掉已经观察到的买方需求。

## 4. Discovery：平台优先，但保留覆盖记录

正式研究按这个顺序：

~~~text
1. 官方平台类目 / 市场面
2. 当前直接商品 / SKU / Offer
3. 平台或第一方交易数据
4. 买方侧信号：付款、询盘、想要、收藏、搜索等
5. 多卖家 / 多商品供给重复出现
6. 问题、评论、求购和相邻需求
7. 服务转产品化 / Workflow / 能力相邻，只作补充
~~~

### 闲鱼
优先看：
- 具体商品、价格、购买结构；
- SKU 级或商品族级交易/买方信号；
- 多个独立商品上的“想要”等是否重复出现；
- 标题关键词和求购/询价是否代表明确需求。

### 小红书
优先看：
- 搜索中的重复问题和明确求购；
- 商品/店铺动作、合格私信；
- 多个独立账号是否出现同类买方意图；
- 点赞/收藏只按对应信号强度记录。

### 覆盖与停止
每次 Run 使用一张轻量底稿记录市场面：
- `SCANNED`
- `PARTIAL`
- `BLOCKED`
- `EXCLUDED`

重复调用时优先复用已有底稿，只刷新：
- 已过时或动态变化的关键证据；
- 会改变 D-Level / Demand Status 的 Critical Unknown；
- 上次为 PARTIAL/BLOCKED 的高价值市场面。

可以停止补证，当：
1. 相关市场面都已标注覆盖状态；
2. 高优先候选没有尚未处理、且可能改变结论的 Critical Unknown；
3. 对剩余空间使用至少两条实质不同的搜索/入口路径后，没有出现新的候选或能改变状态的买方证据。

访问受限时写清限制，不用推测补齐。

## 5. 每条证据必须有“适用范围”

最低记录字段见 `templates/RESEARCH_LEDGER_TEMPLATE.md`。

每条 Evidence 至少明确：
- 观察日期；
- 平台；
- URL / 商品 ID / 可定位来源；
- 原始观察事实；
- 信号类型与数值；
- 支持的商品粒度；
- Signal Lineage；
- 访问限制。

### Evidence Scope

- `FAMILY`：商品族
- `PRODUCT_TYPE`：具体商品类型
- `SKU`：具体 SKU
- `BUNDLE`：明确组合商品

**证据不得向更细粒度下传。**

例如：
- “AI 教程有成交”只能支持教程商品族；
- “AI 漫剧教程卖出 17k”可支持“AI 漫剧教程”；
- 不能因此自动证明“AI 漫剧教程 + 项目文件 + 工作流”这个组合。

更细组合若没有直接证据，必须标 `DERIVED_ADJACENT` 或 `UNKNOWN`。

## 6. Provenance、Demand Level 与 Confidence

### Provenance

- `PLATFORM_TRANSACTION`：平台/第一方交易数据
- `PLATFORM_CATEGORY`：官方类目/市场面
- `DIRECT_SKU`：当前直接商品/Offer
- `RELATED_RESULTS_CLUSTER`：相关/推荐商品簇
- `DERIVED_ADJACENT`：相邻需求推导

Provenance 说明“证据来自哪里”，**不等于需求强度**。

### Demand Level

Demand Level 只看买方/交易侧证据：

- **D4**：同一 Evidence Scope 上存在可归属的交易/付款证据，或平台第一方交易数据直接支持该 Scope。
- **D3**：同一 Scope 上有多个独立的买方侧意图证据复现；例如不同卖家/商品上分别出现可归属的想要、询盘、求购等。
- **D2**：同一 Scope 上只有一个可归属的买方侧意图/注意力信号。
- **D1**：只观察到供给、类目或商品存在，没有买方侧证据。
- **U**：证据不足或无法归属。

**纯多卖家、多挂单，即使很多，也最高只能 D1。**

### Confidence

Confidence 只描述“结论是否可复核/可归属”，不升级 D-Level：

- `HIGH`：来源可定位、时间明确、粒度匹配、Lineage 清楚、访问完整。
- `MEDIUM`：存在一项重要限制。
- `LOW`：动态推荐页、访问不完整、Lineage/粒度不清或推导较多。

Counterevidence 如果推翻原先的独立性、粒度或买方归属，必须**下调 D-Level / Demand Status**，不能只降 Confidence。

## 7. Demand Status 与 Risk Status 分列

### Demand Status

- `CONFIRMED_DEMAND`：仅 D4。
- `PROBABLE_DEMAND`：D3。
- `WATCHLIST`：D2 / D1 / U，保留但不能声称需求已被充分证明。

### Risk Status

独立记录：

- `NO_FLAG_OBSERVED`：本轮没有发现明显风险；**不等于完成法律/平台审查**。
- `REVIEW_REQUIRED`：规则、版权、账号、交易模式等需要进一步核验。
- `HIGH_RISK`：已观察到明显违规/侵权/规避等风险。
- `UNKNOWN`：未核验。

一个商品可以同时是：

~~~text
Demand Status = CONFIRMED_DEMAND
Risk Status = HIGH_RISK
~~~

不要再用一个状态同时表达“需求强弱”和“能不能做”。

## 8. SKU 粒度

输出必须足够具体，可以直接搜索，但不能比证据更具体。

太宽：
- 软件
- 教程
- 教育资料

合理：
- AI 漫剧制作教程
- 院校/专业考研复试资料包
- 日系胶片 Lightroom / PS 人像预设

只有证据明确支持时，才继续细化为：
- 某平台会员月卡；
- 某机型 LUT；
- 某个“教程 + 模板 + 项目文件”的 Bundle。

## 9. 默认输出：Market Map

标准输出：

| 商品类型 / SKU | 平台 | 价格带 | Buyer Evidence | Supply Observation | Scope | D-Level | Confidence | Demand Status | Risk Status | Counterevidence |
|---|---|---:|---|---|---|---|---|---|---|---|

不强制 Top N，也不强制唯一冠军。

研究底稿必须保留来源、日期、原始事实、Lineage、覆盖状态和访问限制；用户只要简短答案时，可以只展示高层结果。

## 10. 可选 Test Mode

只有用户明确要求“值得卖 / 测 / 优先做”时启用。

先区分用户问的是：

- **值得继续研究哪个？** → 输出 `RESEARCH_NEXT`
- **已经值得做真实市场测试吗？** → 检查 `TEST_READY`

`TEST_READY` 至少要求：
1. Demand Level >= D3；
2. 当前平台规则/交易路径没有 Critical Unknown；
3. 粗略经济性成立，关键成本已知；
4. Delivery / Rights / Risk 没有未处理的关键阻断；
5. 本次明确给出的操盘资源与约束不冲突。

只要上述任一关键项仍 UNKNOWN，就不能叫 `TEST_READY`，应为 `RESEARCH_NEXT` 或 `HOLD`。

Test Mode 允许多个 `TEST_READY`，不强制唯一赢家。只有用户明确要求“只选一个”时，才可从 TEST_READY 中给出一个 `PRIORITY_TEST`。

详见 `references/OPTIONAL_TEST_MODE.md`。

## 11. 禁止误读

- 卖家多 ≠ 买家多。
- 供给重复 ≠ D3。
- “想要”/收藏 ≠ 订单。
- 浏览/点赞 ≠ 付款。
- 推荐页 ≠ 搜索深度或市场份额。
- 一个爆款 SKU ≠ 整个品类都强。
- 商品族证据 ≠ 具体 SKU / Bundle 证据。
- 平台 A 证据 ≠ 平台 B 证据。
- 相邻需求 ≠ 具体 SKU 已验证。
- 没找到货源 ≠ 没有需求。
- 风险高 ≠ 需求低；两者分开记录。
- 数据不足就写 `UNKNOWN`。

## 12. 文件使用

日常默认：
1. `SKILL.md`
2. `references/EVIDENCE_RULES.md`
3. `templates/RESEARCH_LEDGER_TEMPLATE.md`
4. `templates/FINAL_CATALOG_TEMPLATE.md`

进入 Test Mode 才读：
5. `references/OPTIONAL_TEST_MODE.md`

需要理解方法演进时才读：
6. `examples/XIANYU_2026_10_CASE.md`

历史：
- `history/v1.0.0/`
- `history/v2.0.1/`
