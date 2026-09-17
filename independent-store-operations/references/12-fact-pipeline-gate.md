# 12 — 事实提取 Gate

## 当前 Gate

`PASS_CANDIDATE_FACT_PIPELINE_LOCAL_FIXTURES`

支持证据：
- MTRS 规则判断：51/51；
- 静态事实提取：12/12；
- 静态事实→规则端到端：12/12；
- 动态浏览器事实：8/8。

## 这并不证明

- 真实网站抓取成功率；
- WAF / 429 处理在真实网络中有效；
- 多页面 crawl 策略正确；
- 真实站 Precision ≥90%；
- 任何商业因果结论。

## 下一 Gate

`REAL_NETWORK_FACT_EXTRACTION_DRY_RUN`

目标：

1. 使用真实公开独立站；
2. 记录地区 / 货币 / final URL / 时间 / 视口；
3. 把公开页面提取成 normalized facts；
4. 人工对照事实是否正确；
5. 不先追求发现问题数量；
6. 优先统计事实提取 Precision。

## 首轮验收门槛

- Access-state 误报：0；
- Claim overreach：0；
- 明确事实字段 Precision：目标 ≥95%；
- 规则 Issue Precision：目标 ≥90%；
- 地区 / 货币上下文缺失时必须 fail-closed。

只有该 Gate PASS 后，才允许讨论解除商业 Scanner 开发 HOLD。
