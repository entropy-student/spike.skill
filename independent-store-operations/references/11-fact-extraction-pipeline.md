# 11 — 事实提取流水线

## 目标

把自动扫描严格拆成两层：

```text
网页
↓
事实提取层
↓
标准化事实对象
↓
MTRS 规则判断层
↓
PASS / ISSUE / NOT_APPLICABLE / AUDIT_INCOMPLETE
```

事实提取层只负责“页面到底有什么”，不得直接输出商业结论。

## A. 静态抓取层

未来优先使用 Scrapy 负责：
- HTTP 状态；
- redirect / final URL；
- response headers；
- HTML body；
- link discovery；
- crawl frontier。

HTML 统一进入标准解析器提取：
- title / canonical / noindex；
- 可见价格 / 货币；
- Product / Offer JSON-LD；
- price / currency / availability；
- 退货 / 配送 / 联系链接；
- 内部链接；
- 直接购买 / 询价 / 缺货信号；
- 订阅、首期价、标准价、周期、自动续费、试用、取消等文本信号。

## B. 浏览器升级层

只有静态层不足时才升级浏览器：
- JavaScript 渲染后价格；
- CTA 真实交互；
- 弹窗 / 遮罩；
- 移动端视口；
- 动态 Variant；
- 动态购物车。

目标：不要所有页面默认使用重浏览器。

## C. 统一规则接口

Scrapy / 浏览器最终都必须转换为同一 normalized facts schema。

规则层不得依赖“事实来自 Scrapy 还是浏览器”。

## D. Fail-closed

出现：
- 429；
- WAF / bot block；
- 登录要求；
- JS 未完整；
- 地区上下文不足；

先进入 Access State。

任何非完整状态不得生成“页面缺少 X”的结论。

## 当前本地 Fixture 结果

- 静态 HTML 事实提取：12 / 12 PASS；
- 静态事实 → 规则判断端到端：12 / 12 PASS；
- 动态浏览器 Fixture：8 / 8 PASS；
- MTRS 规则判断合成 Fixture：51 / 51 PASS。

这些结果只证明开发前 Fixture 一致性，不证明真实互联网 Precision。
