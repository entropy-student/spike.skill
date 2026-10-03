# Signal Ledger & Lineage

每条证据记录：
`candidate_id / platform / signal_type / market / date_window / source / lineage_group / fact / supports_or_refutes / strength / confidence / notes`

## Signal hierarchy
`Transaction > committed purchase action > qualified inquiry > search intent > problem/workaround > attention`

## Lineage 去重
以下常见情况不得算多份独立证据：
- 同一卖家多个账号/多条商品；
- 同一资料被大量搬运；
- 同一热点造成多个关键词/笔记同时上涨；
- 同一投放活动带来的评论、搜索和内容增长；
- 同一群聊/社群截图被多处引用。

## 平台误读
- 闲鱼：挂单数量不是销量；“想要/收藏/浏览”等若无法确认成交，只能按对应行为层级记录。
- 小红书：点赞/收藏/评论求资料属于 Attention/Intent，不是 Payment。
- 价格极低的交易证据要同时检查人工成本、退款/售后和灰产可能性。
