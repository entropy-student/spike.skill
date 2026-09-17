# 14 — Scrapy 真实网络 Dry Run 规范

## 目标版本

当前官方稳定文档：Scrapy 2.19.0。

正式运行时建议独立虚拟环境安装：

```bash
pip install Scrapy
```

## 角色边界

Scrapy 只负责网络与静态抓取：
- HTTP 状态；
- redirect / final URL；
- response headers；
- HTML body；
- link discovery；
- bounded crawl。

HTML 再进入统一事实解析器。

需要 JavaScript / 点击 / 移动布局时才升级浏览器层。

## 安全前置 Gate

### URL
只允许：
- http
- https
- 80 / 443

禁止：
- file://
- ftp://
- localhost
- 私网 IP
- loopback
- link-local
- metadata endpoints
- reserved / multicast / unspecified IP
- 非标准端口

### DNS
解析结果中只要出现非公网 IP：
拒绝请求。

所有 redirect 目标必须重新校验。

### Crawl
- 同源发现；
- 页数上限；
- 深度上限；
- timeout；
- 低并发；
- delay；
- robots.txt；
- 无登录；
- 无表单提交；
- 无 checkout submit；
- 无真实支付。

## DNS Rebinding 注意

“请求前 DNS 检查”本身不足以完全解决 DNS rebinding 的 TOCTOU 窗口。

正式生产还需要：
- connection-time destination IP enforcement；或
- 可信 resolver / IP pinning；或
- 容器 / 网络层 egress policy。

在此之前不得宣称 SSRF 防护完整 PASS。

## 当前 Fixture

URL / IP 安全规则：21 / 21 PASS。

这只是单元测试，不是生产安全认证。

## 当前 Gate

`PASS_CANDIDATE_SCRAPY_DRYRUN_NETWORK_GUARD_FIXTURES`

真实网络自动抓取：
`NOT_EXECUTED`
