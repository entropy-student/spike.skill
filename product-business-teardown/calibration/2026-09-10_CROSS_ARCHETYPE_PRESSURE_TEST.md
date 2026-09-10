# Product Business Teardown（产品商业拆解）压力测试与校准记录

## 目的
验证同一套商业拆解框架是否能跨越完全不同的产品规模与商业机器，并确认单一小商品 / SKU 在没有公司财报的情况下仍然可以被有效分析。

## 样本

### Spotify — 订阅 + 广告 + 内容授权
关键结论：Premium 是更强的公开毛利贡献引擎；Free 同时承担获客、广告库存和付费转化池作用。版权方价值索取必须作为一级经济变量。收入、毛利、营业利润与战略价值不能混为一谈。

### Airbnb — Marketplace
关键结论：Gross Booking Value 是生态交易总额，不是 Airbnb 收入。平台必须拆成 `GBV/GMV → 代收代付 → 服务费/Take Rate → Recognized Revenue → 直接交易成本 → 利润层级`。

### YETI — 实物品牌，DTC + Wholesale
关键结论：DTC 可能拥有更高毛利，但同时承担更多履约、支付、Marketplace 和营销成本。渠道毛利不等于渠道贡献利润。

### Duolingo — Freemium App
关键结论：免费用户不能简单理解为“不付钱的人”。免费层可以同时承担获客、口碑传播、广告库存、转化池与产品/数据反馈。

### GitLab — Open Source / Enterprise Software
关键结论：Packaging 是商业模式的一部分。必须分析什么保持免费、什么买家痛点触发付费、什么能力进入付费层，以及什么计价指标随价值增长。高 SaaS 毛利不等于 GAAP 盈利。

### Small Product — Pilates Grip Socks
证据环境：Marketplace Listing + 公开社区讨论，不依赖公司财报。

产品级拆解：
- 使用者/付款者：Pilates / barre / Lagree 参与者；
- 影响者/Gatekeeper：工作室和教练，部分场馆要求或鼓励穿 grip socks；
- Job：抓地/安全、卫生与社交舒适、工作室规则、风格/身份；
- 常见抱怨：抓地弱、脚在袜子里滑、尺码、耐用度、清洗后防滑衰减；
- 公开可见的设计型产品存在约 $19.90/双的定价，同时有大量更廉价的大众替代；
- Value Capture：商品加价、更好的抓地与版型、设计、组合装/收藏、礼赠、Studio/Retail 分销；
- 卖家真实毛利/贡献利润：UNKNOWN（无私有成本数据）；
- 可能成本栈：面料 + 防滑加工 + 包装 + 运费 + 履约 + 平台/支付 + 退货 + Creator/Affiliate/折扣；
- 脆弱点：切换成本低、廉价替代多、功能容易复制。

关键结论：没有公司财报不影响产品级商业拆解成立。小商品仍然可以解释用户任务、产品机制、价格与价值捕获、成本栈、渠道、重复购买/替换和可复制性，只需把真实卖家收入/利润保留为 UNKNOWN。

## v0.2 因压力测试新增
1. Financial Ladder；
2. Marketplace Volume-to-Revenue Bridge；
3. Channel Economics；
4. Packaging & Cross-Subsidy Architecture；
5. Critical Dependency / Partner Claim Map；
6. Small Product / Sparse Evidence Mode。

## 决策
保留一个统一的 Product Business Teardown Skill，但提供两条深度路径：
- Company / Platform Track；
- Product / SKU Track。

不拆成两个独立 Skill。
