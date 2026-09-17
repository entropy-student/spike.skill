# 09 — 事实提取层架构

## 1. 目标

把“网页抓取”与“运营规则判断”彻底分开。

```text
网页
↓
事实提取层
↓
Normalized Facts
↓
规则判断层
↓
Issue / Pass / Suppress
```

规则判断层已经通过 51/51 合成 Fixture。

下一阶段只验证：

> 网页能否稳定转换成正确的标准化事实。

---

# 2. Scrapy 的职责

优先用于：
- HTTP 获取；
- 同源链接发现；
- 静态 / 服务端渲染页面；
- meta / canonical / robots；
- JSON-LD / 结构化数据；
- 价格 / 货币等可稳定 DOM 文本；
- 政策页发现；
- 内部链接状态；
- 批量页面抓取；
- 限流 / HTTP 状态记录。

Scrapy 输出的不是 Issue，而是 Fact。

例如：

```json
{
  "http_status": 200,
  "final_url": "...",
  "noindex": false,
  "visible_price": 49,
  "structured_price": 49,
  "return_policy_links": ["..."],
  "shipping_policy_links": ["..."]
}
```

---

# 3. 浏览器层职责

当事实依赖真实渲染 / 交互时使用浏览器层：
- JavaScript 后价格；
- 购买按钮点击；
- Variant 切换；
- 弹窗 / 遮罩；
- 移动视口；
- 动态购物车；
- 需要等待异步渲染的状态。

不能用纯 HTTP 抓取结果直接判断这些动态事实。

---

# 4. 统一访问状态

无论 Scrapy 或浏览器，都必须映射成：

- ACCESS_OK
- ACCESS_RATE_LIMITED
- ACCESS_BLOCKED
- ACCESS_GEO_REDIRECT
- ACCESS_LOGIN_REQUIRED
- ACCESS_JS_INCOMPLETE
- ACCESS_UNKNOWN_FAILURE

任何非 ACCESS_OK：

不得把“未发现”转换成“缺失 Issue”。

---

# 5. Normalized Fact Contract

事实必须：
- 有确定字段；
- 有来源 URL；
- 有提取方式；
- 有扫描上下文；
- 有 Unknown 状态；
- 不把推测写成事实。

示例：

```json
{
  "fact_id": "price-visible",
  "value": 49,
  "currency": "USD",
  "source_url": "https://example.com/products/a",
  "source_locator": "[data-price]",
  "extraction_mode": "browser",
  "status": "OBSERVED"
}
```

不要：

```json
{
  "price_is_bad": true
}
```

后者已经是判断，不是事实。

---

# 6. 下一阶段验证顺序

1. 先做静态 HTML Fixture；
2. Scrapy 提取；
3. 比较标准化事实；
4. 再做 JavaScript / 浏览器 Fixture；
5. 最后才接真实公开网站；
6. 全程保持 Rule Engine 不变。

如果真实站失败，先判断：

```text
Extractor Error?
Rule Error?
Access Incomplete?
Unknown?
```

禁止为了让真实站“看起来通过”而同时修改提取器和规则。
