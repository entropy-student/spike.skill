# Research & Design Audit v2.0

## 本轮重新遍历后的核心结论

1. 没有一个“万能爆品发现器”。真正稳定的方法是把 Discovery 和 Decision 分开。
2. 趋势、社交出镜和榜单适合高召回发现；交易、VOC、竞争结构、获客和经济性才适合决策。
3. 多平台同时上涨可能来自同一底层事件，必须做 signal lineage 去重。
4. 不能只判断 Market Opportunity，还要单独判断 Operator Fit。
5. 选品必须包含 AOV/LTV/working capital，而不只是首单毛利。
6. 研究要用 Critical Unknown / Evidence Value 排优先级，避免 analysis paralysis。

## 外部资料吸收

- Shopify Product Research (2026)：强调市场需求、竞争、客户痛点、定价/利润和真实验证，而不是单一趋势数据。
- Shopify Product Validation：把 problem-solution fit、willingness to pay、scalable demand 作为验证核心，并推荐 waitlist/preorder 等真实行为。
- Google Trends 官方 FAQ：Trends 是抽样与归一化搜索兴趣，低量查询有噪声，不能等同绝对需求/销量。
- TikTok Creative Center：Top Products/Top Ads 用于趋势、广告与创意洞察；本 Skill 将其定义为 Discovery/Acquisition signal，而非利润证明。
- Etsy 2026 Trend Report / Marketplace Insights：平台内搜索和销售数据可用于品类/关键词动量，但属于 Etsy 渠道证据，不能无条件外推 DTC。
- Shopify JTBD/customer journey：用户购买的是功能、情绪和社会层面的“任务进展”，因此候选单位加入 Job + Trigger + Alternative。
- GitHub zach-product-research：值得借鉴 Top100、品牌集中、价格带、评论门槛、新品渗透、属性交叉空缺等 market-structure 分析。
- GitHub reddit-product-research：Reddit 更适合提取 pain、buying intent、language、risk 和 validation steps，不能当最终市场证明。
- Amazon product research skills：需求、竞争、利润、进入壁垒、季节性等框架可参考，但 Marketplace product score 不能直接用于 DTC。
- Reddit/ecommerce seller discussions：反复出现的共同经验是“没有魔法 winning-product tool”，应关注真实问题、创意空间、利润、持续性并用真实市场行为测试。社区证据只作为经验性补充。

## 对 v1.1 的修复

- 将 Trend→Scene→Product 从核心主流程降级为六个 Discovery Engine 之一。
- 新增 Discovery vs Decision 双循环。
- 新增 Signal Lineage，防止同一趋势事件被重复算证据。
- 新增 Reachable Market Depth 与相对品类 Momentum。
- 新增 AOV/LTV/Payback/Working Capital。
- 新增 Operator Fit 独立评分。
- 新增 Critical Unknown / EVSI 研究优先级。
- 新增 Floor Rule，防止总分掩盖 Payment/Economics 致命短板。
- 补齐 v1.1 中 SKILL.md 引用但包内缺失的 references/templates。


## v2.1.0 — 通用化与决策优先级升级
- 移除所有 run-specific / operator-specific 默认画像。
- 新增 Pre-Selection Intake Gate：最多 6 个高影响问题，只问当前未知项。
- Research Contract 改为每次运行临时生成，不持久化个人信息。
- 新增 Business Objective 与 Time Horizon。
- 新增 Cost of Being Wrong。
- Market Opportunity / Confidence / Operator Fit / Failure Cost 分开展示。
- 新增 Test Priority 层，不再依赖一个万能总分。
- 新增可选 Portfolio Mode。
- 删除带特定 operator 约束的历史 run；示例改为通用校准案例。
