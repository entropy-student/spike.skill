# Part 0 — 现实问题优先选题库（2026-10-08 复核版）

> 100 个有来源锚点的**待正式 Reviewer 接受的选题候选**：其中 67 个继承上一候选库初筛、33 个来自可检索监管案例或研究。所有条目只进入选题候选池，不自动代表完成 3–5 分钟独立故事审查，也不代表法规投诉一定被裁判认定为既成事实。

## 本轮执行与硬性边界

- 现行旧 100 库审查：删除低独立性/无明显观众价值的 26 个旧题（旧编号：H002、H005、H007、H013、H015、H018、H020、H023、H024、H026、H039、H052、H061、H065、H068、H070、H071、H077、H088、H091、H092、H094、H096、H098、H099、H100）；先保留 74、替换 26 条；后追加替换 7 个同构/微型问答，最终旧题 67 + 新例 33，继续维持候选池 100 条。**不能说本轮有 100 个已 PASS 的成片选题**。
- 与更早的旧 30 题补证：其中 17 条 EVIDENCE_PENDING 无一按原题自动升级；仅在可得到新的可靠资料时，按不同真实事实边界重建；14 个旧题未原样继承，另外 3 组实际重建均需要按新主机制审查。
- 来源分类：官方功能文件仅能证明具体可复现功能；监管案件需用“FTC 指控/监管称/已达成和解”区分行政指控与终局事实；个案不能证明普遍发生率；Pew 调查不能自行衍生出不曾测量的因果。
- 所有新素材的旧编号仅供追溯，不得用现行 H 编号回填已生成的 H002/H007 等制作包。历史文件与 Owner 接受资产不改动。
- 下一轮仍须按 Part 1 确认“现实问题证据 + 科技因果证据 + 五项硬检查 + D1–D5 + 3–5 分钟故事价值”；**证据足不代表能单独做一期**。候选数量不能替代正式 PASS。

### 现行重编号与来源

原旧库留存编号映射：H001→H001；H003→H002；H004→H003；H006→H004；H008→H005；H009→H006；H010→H007；H011→H008；H012→H009；H014→H010；H016→H011；H017→H012；H019→H013；H021→H014；H022→H015；H025→H016；H027→H017；H028→H018；H029→H019；H030→H020；H031→H021；H032→H022；H033→H023；H034→H024；H035→H025；H036→H026；H037→H027；H038→H028；H040→H029；H041→H030；H042→H031；H043→H032；H044→H033；H045→H034；H046→H035；H047→H036；H048→H037；H049→H038；H050→H039；H051→H040；H053→H041；H054→H042；H055→H043；H056→H044；H057→H045；H058→H046；H059→H047；H060→H048；H062→H049；H063→H050；H064→H051；H066→H052；H067→H053；H069→H054；H072→H055；H073→H056；H074→H057；H075→H058；H076→H059；H078→H060；H079→H061；H080→H062；H081→H063；H082→H064；H083→H065；H084→H066；H085→H067；H086→H068；H087→H069；H089→H070；H090→H071；H093→H072；H095→H073；H097→H074

---

## H001 — 照片与家庭

- 最终选题：**照片刚从手机删掉，为什么家人的 iCloud 设备也跟着没了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：家庭误删与同步删除
- Human Problem：把同步图库当成独立备份，误删导致家庭照片可访问性改变
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：备份直觉 vs 同步状态
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：iCloud Photos 同步删除会传播到启用它的设备
- 主机制：iCloud Photos 同步删除会传播到启用它的设备
- Audience Payoff：一个删除操作跨设备传播，不能以为另外的屏幕一定保留独立副本
- Meaning Fingerprint：`备份直觉 vs 同步状态｜iCloud Photos 同步删除会`
- Motif：整理手机→另一设备照片消失→核对共享同步开关
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-us/108782
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H001
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H002 — 照片与家庭

- 最终选题：**iCloud 显示照片还在，手机上为什么只有压缩版？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：存储优化与数据可见性
- Human Problem：为节约本机容量而优化相册后，离线/原图访问预期发生偏差
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：本地清晰度 vs 空间节约
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：优化存储按容量保留设备小体积副本，云端存原件
- 主机制：优化存储按容量保留设备小体积副本，云端存原件
- Audience Payoff：完整照片存于云端与本机压缩副本并不是同一份字节状态
- Meaning Fingerprint：`本地清晰度 vs 空间节约｜优化存储按容量保留设备小体积副本，云端`
- Motif：外出离线放大照片→发现需要取回原图
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-us/108782
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H003
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H003 — 照片与家庭

- 最终选题：**一家人共用照片库，为什么一个人删除照片会影响所有人？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：共享所有权与权限
- Human Problem：共享照片库中成员的删除行为影响其他参与者
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：共同协作 vs 误删连带
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：共享照片库成员可以删除照片；最近删除权限与原贡献者有关
- 主机制：共享照片库成员可以删除照片；最近删除权限与原贡献者有关
- Audience Payoff：共享编辑权限不等于每人拥有不受他人变更影响的备份
- Meaning Fingerprint：`共同协作 vs 误删连带｜共享照片库成员可以删除照片；最近删除权`
- Motif：家庭合影被移除→全员看不到→追问是谁可恢复
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-euro/118229
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H004
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H004 — 照片与家庭

- 最终选题：**一家人共用 iCloud 共享图库，为什么主账号空间满了其他人也不能继续编辑？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：共享资源与家庭关系
- Human Problem：共享照片库创建人的云空间不足会影响其他家庭成员继续同步
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：共享协作 vs 单一存储责任
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：共享图库由创建者支付存储容量，写入和更新依赖这一额度
- 主机制：iCloud 共享图库创建者空间用完后，所有成员新增与元数据更改不能正常同步
- Audience Payoff：共用容量让个人存储额度成为多人任务的单点依赖
- Meaning Fingerprint：`共享协作 vs 单一存储责任｜iCloud 共享图库创建者空间用完后`
- Motif：共同拍摄家庭活动→照片传不上→查主账户存储空间
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-euro/118229
- 证据适用边界：Apple 官方共享图库说明：创建者存储满会停止同步新增和元数据，不应推断已有照片必然立即消失。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H006
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H005 — 手机与硬件

- 最终选题：**明明插着充电器，为什么 iPhone 停在80%不充了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：电池寿命与即时充满
- Human Problem：临出门看到手机停在80%产生续航预期冲突
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：立即充满 vs 电池寿命
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：优化充电根据日常模式暂缓充满以降低满电停留时间
- 主机制：优化充电根据日常模式暂缓充满以降低满电停留时间
- Audience Payoff：电池寿命优化可能主动延迟/限制满充，不能等同充电器故障
- Meaning Fingerprint：`立即充满 vs 电池寿命｜优化充电根据日常模式暂缓充满以降低满电`
- Motif：睡前充电→早晨停80%→查看智能充电行为
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-ph/guide/iphone/iph9202bbd07/ios
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H008
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H006 — 手机与硬件

- 最终选题：**设置了屏幕使用时间，为什么孩子还能继续刷？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：儿童使用限制
- Human Problem：家长设置时长限制后发现孩子仍可申请额外时间
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：提醒规则 vs 硬性控制
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：部分屏幕时间限额可忽略，强制阻止需正确设置限制
- 主机制：部分屏幕时间限额可忽略，强制阻止需正确设置限制
- Audience Payoff：提示性提醒、允许请求和真正的强制阻止是不同权限状态
- Meaning Fingerprint：`提醒规则 vs 硬性控制｜部分屏幕时间限额可忽略，强制阻止需正确`
- Motif：家长设一小时→孩子继续使用→检查是否阻止
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/guide/iphone/set-schedules-with-screen-time-iphb0c7313c9/ios
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H009
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H007 — 手机与硬件

- 最终选题：**开了勿扰模式，为什么某个人的电话还能打进来？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：紧急联系优先级
- Human Problem：会议勿扰时仍有少数联系人来电
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：拒绝打扰 vs 关键联络
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：专注模式允许指定联系人和重复来电例外
- 主机制：专注模式允许指定联系人和重复来电例外
- Audience Payoff：勿扰是例外化通知策略而不是绝对通信断开
- Meaning Fingerprint：`拒绝打扰 vs 关键联络｜专注模式允许指定联系人和重复来电例外`
- Motif：工作时来电响起→检查允许名单和重复来电
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/guide/iphone/allow-or-silence-notifications-for-a-focus-iph21d43af5b/ios
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H010
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H008 — 手机与硬件

- 最终选题：**行李箱里的定位器为什么可能让陌生人的手机报警？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：隐私与安全误报
- Human Problem：随身追踪配件靠近陌生人时触发安全提醒
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：找回物品 vs 防止跟踪
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：跨平台未知追踪提醒会在符合条件时发出安全提示
- 主机制：跨平台未知追踪提醒会在符合条件时发出安全提示
- Audience Payoff：防跟踪系统以接近状态推断异常，提示不是认定本人有恶意
- Meaning Fingerprint：`找回物品 vs 防止跟踪｜跨平台未知追踪提醒会在符合条件时发出安`
- Motif：一起出门的行李→陌生人收到跟踪警告→检查物品身份
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/guide/personal-safety/detect-unwanted-trackers-ips139b15fd9/web
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H011
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H009 — 车载数据与保费

- 最终选题：**买了新车以为在用安全驾驶助手，为什么保险公司也可能知道你急刹车？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：车载数据与保费
- Human Process：消费者使用数字产品做出真实选择与授权
- Human Problem：FTC 指控通用汽车通过 OnStar 收集车速、急刹车与定位并分享给消费者报告机构
- 反常：本应更安全、便利或公正的服务带来未被预期的风险或代价
- Human Tension：安全服务 vs 数据变现
- Controlling Question：哪一个具体的技术、权限或数据状态改变了人的实际结果？
- 科技改变的过程：技术平台将人的身份、行为或数字服务转为可跨系统执行的数据流
- 主机制：车辆行驶行为和位置数据可被分享至保险风险评估链，不只是帮助车主自己回顾驾驶
- Audience Payoff：理解安全服务 vs 数据变现所涉及的真实产品/监管边界，而不把营销说法直接当成已验证结果
- Meaning Fingerprint：`安全服务 vs 数据变现｜车辆行驶行为和位置数据可被分享至保险风险评估链，不`
- Motif：开启车载服务→驾驶行为被记录→保险信息反映车辆数据
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-takes-action-against-general-motors-sharing-drivers-precise-location-driving-behavior-data
- 证据适用边界：仅以监管公开投诉、执法调查或和解披露的具体事实范围为限；应使用‘FTC 指控/调查发现’措辞，不把尚未判决的争议当作全部确定事实。
- Status：PASS_CANDIDATE
- 历史来源编号：从旧百题库 H012 位置换入新的独立现实案例，不能沿用原题身份
- 本轮复核说明：优先审核真实人的代价、主机制与同构；有清晰来源，但尚未完成正式 Part 1 全 Gate + Part 2 可讲性审查。

---

- 最终选题：**AirTag 分享给家人后，为什么共享的人不再收到陌生跟踪警报？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：共享与误报
- Human Problem：把物品定位器分享给家人后减少无谓安全提醒
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：共同定位 vs 风险警报
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：AirTag 共享组成员的该物品未知跟踪提醒被抑制，退出后恢复
- 主机制：AirTag 共享组成员的该物品未知跟踪提醒被抑制，退出后恢复
- Audience Payoff：受信任的共享访问会改变未知追踪判定条件
- Meaning Fingerprint：`共同定位 vs 风险警报｜AirTag 共享组成员的该物品未知跟`
- Motif：伴侣共享钥匙→解除共享→突然出现跟踪提示
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-ca/guide/personal-safety/ips0c073d231/web
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H012
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H010 — 手机与硬件

- 最终选题：**iPhone 检测出严重撞车后，为什么不用按确认也可能自动呼救？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：自动求救与人工确认
- Human Problem：发生严重事故时无法点击屏幕的人依赖系统求救
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：及时援救 vs 误报防线
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：严重碰撞警报在规定倒计时未取消时启动紧急呼叫
- 主机制：严重碰撞警报在规定倒计时未取消时启动紧急呼叫
- Audience Payoff：传感器检测到符合条件的严重碰撞，倒数结束可自动紧急呼叫
- Meaning Fingerprint：`及时援救 vs 误报防线｜严重碰撞警报在规定倒计时未取消时启动紧`
- Motif：碰撞提示→倒计时→紧急电话启动
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/guide/iphone/manage-crash-detection-iph948a628e9/ios
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H014
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H011 — 家庭与孩子

- 最终选题：**一家人共享付费订阅，为什么最后扣的是组织者的卡？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：家庭与孩子
- Human Process：家庭账单授权
- Human Problem：全家使用会员却由一个组织者付费
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：家庭共享 vs 支付责任
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：开启家庭购买共享时适用的订阅费用使用组织者付款方式
- 主机制：开启家庭购买共享时适用的订阅费用使用组织者付款方式
- Audience Payoff：共享消费访问与资金付款责任由不同权限角色承担
- Meaning Fingerprint：`家庭共享 vs 支付责任｜开启家庭购买共享时适用的订阅费用使用组`
- Motif：家人启用新订阅→组织者收到扣费记录
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-lamr/guide/iphone/iph6e7917d3f/ios
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H016
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H012 — 旅行与出行

- 最终选题：**地图早已下载到手机，为什么断网后就看不到实时拥堵？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：旅行与出行
- Human Process：离线导航与实时更新
- Human Problem：脱网旅行仍可导航却看不到路况变化
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：离线可用 vs 实时数据
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：离线地图可用于指定道路导航但无法取得实时交通或替代路线
- 主机制：离线地图可用于指定道路导航但无法取得实时交通或替代路线
- Audience Payoff：地图本地静态数据与在线实时交通属于不同数据源
- Meaning Fingerprint：`离线可用 vs 实时数据｜离线地图可用于指定道路导航但无法取得实`
- Motif：山区开车断网→失去拥堵信息→决定是否离线行驶
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/maps/answer/6291838?hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H017
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H013 — 旅行与出行

- 最终选题：**换了手机后，为什么过去去过的地方在电脑上也找不到？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：旅行与出行
- Human Process：数据迁移与设备所有权
- Human Problem：换设备后历史出行记录无法按旧网页方式查看
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：设备隐私 vs 跨端可找回
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：时间线转向设备本地存储，电脑端已不可用且备份需另行开启
- 主机制：时间线转向设备本地存储，电脑端已不可用且备份需另行开启
- Audience Payoff：Google Timeline 从云端网页访问转为设备上存储后，备份与迁移条件改变
- Meaning Fingerprint：`设备隐私 vs 跨端可找回｜时间线转向设备本地存储，电脑端已不可用`
- Motif：手机损坏→电脑查看时间线→发现要找原设备或备份
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/maps/answer/6258979/google-maps-timeline-android
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H019
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H014 — 旅行与出行

- 最终选题：**好心纠正地图商家的营业时间，为什么系统不立即照改？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：旅行与出行
- Human Process：公共地图协作
- Human Problem：更正错误商家信息后还要等平台审核
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：众包纠错 vs 平台核验
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：地图地点修改需审核，结果可能通过、等待或被拒绝
- 主机制：地图地点修改需审核，结果可能通过、等待或被拒绝
- Audience Payoff：群众编辑建议不等于立即公开的事实数据
- Meaning Fingerprint：`众包纠错 vs 平台核验｜地图地点修改需审核，结果可能通过、等待`
- Motif：发现关门时间错误→报错→隔天仍旧未更新
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/maps/answer/7055486?co=GENIE.Platform%3DDesktop&hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H021
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H015 — 旅行与出行

- 最终选题：**地图的错误地址都有人举报了，为什么顾客还是被带到错误地点？**
- 选题类型：体验 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：旅行与出行
- Human Process：现实误导与审核失败
- Human Problem：错误地址已被举报但仍误导顾客
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：数据自治 vs 平台可信审查
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：地点编辑与重复地点合并受审核机制约束，不保证即时生效
- 主机制：地点编辑与重复地点合并受审核机制约束，不保证即时生效
- Audience Payoff：纠错建议遭拒/尚未生效时，导航显示仍维持旧错误
- Meaning Fingerprint：`数据自治 vs 平台可信审查｜地点编辑与重复地点合并受审核机制约束，`
- Motif：到店客户走错→店员申请改地址→编辑被拒
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://support.google.com/maps/thread/409266874/how-can-i-make-sure-a-duplicate-incorrect-address-gets-corrected-my-edit-got-denied-immediately?hl=en
- 证据适用边界：具体当事人自述仅能证明曾有此类经历，不能代表所有用户或地区。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H022
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H016 — 照片与家庭

- 最终选题：**Google 相册删掉了手机原件，为什么云端照片还能看？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：释放空间与资料留存
- Human Problem：用户想释放手机容量又怕照片一并消失
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：设备清理 vs 云端副本
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：已备份照片可用释放空间操作仅移除本地副本
- 主机制：已备份照片可用释放空间操作仅移除本地副本
- Audience Payoff：Google 相册删除设备副本与云图库中的备份实体由不同操作定义
- Meaning Fingerprint：`设备清理 vs 云端副本｜已备份照片可用释放空间操作仅移除本地副`
- Motif：存储告急→点释放空间→网页相册仍有照片
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/photos/answer/6128843?co=GENIE.Platform%3DAndroid&hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H025
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H017 — 照片与家庭

- 最终选题：**取消共享相册后，为什么对方早已保存的照片还在？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：撤回共享与传播
- Human Problem：结束关系后关掉共享仍拿不回对方已保存的照片
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：访问撤回 vs 既有副本
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：Google Photos Partner Sharing 撤回不会自动删除对方已经保存到账户的照片
- 主机制：Google Photos Partner Sharing 撤回不会自动删除对方已经保存到账户的照片
- Audience Payoff：访问权撤回不能追溯性撤销对方已经保存的独立副本
- Meaning Fingerprint：`访问撤回 vs 既有副本｜Google Photos Partn`
- Motif：结束共享→对方图库依然存图→追溯副本归属
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/photos/answer/7378858?co=GENIE.Platform%3DAndroid&hl=en-0
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H027
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H018 — 云端协作

- 最终选题：**在电脑的 OneDrive 文件夹删了文件，为什么云端也没了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：协作删除与数据丢失
- Human Problem：本地删除 OneDrive 文件造成跨终端数据消失
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：普通文件夹直觉 vs 云同步
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：OneDrive 目录里的删除会改变云端同步状态
- 主机制：OneDrive 目录里的删除会改变云端同步状态
- Audience Payoff：同步目录中删除被作为更新后的云端文件状态
- Meaning Fingerprint：`普通文件夹直觉 vs 云同步｜OneDrive 目录里的删除会改变云`
- Motif：清理文件夹→同事的共享链接失效→去回收站找回
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.microsoft.com/en-us/onedrive/delete-files-or-folders-in-onedrive
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H028
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H019 — 个人化价格

- 最终选题：**同一商品的价格为什么可能跟你之前搜索过什么有关？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：个人化价格
- Human Process：消费者使用数字产品做出真实选择与授权
- Human Problem：FTC 市场调查记录定价中介利用浏览、位置等细粒度消费者信号协助个性化定价
- 反常：本应更安全、便利或公正的服务带来未被预期的风险或代价
- Human Tension：统一标价 vs 个人画像定价
- Controlling Question：哪一个具体的技术、权限或数据状态改变了人的实际结果？
- 科技改变的过程：技术平台将人的身份、行为或数字服务转为可跨系统执行的数据流
- 主机制：个人行为数据可参与生成不同价格或折扣，价格不必只按公开库存需求决定
- Audience Payoff：理解统一标价 vs 个人画像定价所涉及的真实产品/监管边界，而不把营销说法直接当成已验证结果
- Meaning Fingerprint：`统一标价 vs 个人画像定价｜个人行为数据可参与生成不同价格或折扣，价格不必只按`
- Motif：两位用户查看价格→追踪个性化信号→确认实际定价条件
- Content Job：DISCOVERY
- Source / Signal：RESEARCH_OBSERVATION；https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-surveillance-pricing-study-indicates-wide-range-personal-data-used-set-individualized-consumer
- 证据适用边界：FTC 市场研究指出定价工具存在这些能力，但不证明任何指定商家一定在给两个具体用户不同报价；报告中部分案例是假设。
- Status：PASS_CANDIDATE
- 历史来源编号：从旧百题库 H029 位置换入新的独立现实案例，不能沿用原题身份
- 本轮复核说明：优先审核真实人的代价、主机制与同构；有清晰来源，但尚未完成正式 Part 1 全 Gate + Part 2 可讲性审查。

---

- 最终选题：**OneDrive 里‘有这份文件’，为什么电脑磁盘几乎不占空间？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：硬盘空间与云端占位
- Human Problem：电脑看到的云文件未必在本地占满空间
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：随时可见 vs 实际离线拥有
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：文件按需功能保留占位项目，内容在访问时才下载
- 主机制：文件按需功能保留占位项目，内容在访问时才下载
- Audience Payoff：Files On-Demand 使用按需获取与占位符机制分离文件名与实际本地内容
- Meaning Fingerprint：`随时可见 vs 实际离线拥有｜文件按需功能保留占位项目，内容在访问时`
- Motif：出差时点开云端文件→因离线打不开→检查占位状态
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.microsoft.com/en-us/onedrive/delete-files-or-folders-in-onedrive
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H029
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H020 — 云端协作

- 最终选题：**OneDrive 合同版本被改坏了，为什么有人能恢复上个月的内容，有人却只能找回删除的文件？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：版本恢复与争议举证
- Human Problem：合作文档改坏后不清楚找回版本或整盘回滚
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：云端可恢复 vs 权限和时限
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：OneDrive 相关恢复功能与订阅资格、恢复期限及拥有者身份有关
- 主机制：OneDrive 的文件版本历史、整盘恢复和回收站各有不同授权、账户与时间窗口
- Audience Payoff：版本、回收站、整盘恢复是不同粒度和保留条件的功能
- Meaning Fingerprint：`云端可恢复 vs 权限和时限｜OneDrive 的文件版本历史、整盘`
- Motif：文档被覆盖→想回到旧合同→发现账户权益不同
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.microsoft.com/en-us/onedrive/restore-your-onedrive-files
- 证据适用边界：Microsoft 365 的整盘还原与文件版本恢复通常有订阅要求；一般回收站恢复另有个人/组织保存期限。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H030
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H021 — 云端协作

- 最终选题：**Google Drive 分享给同事的表格，为什么一删除对方也打不开了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：文件所有权与团队交接
- Human Problem：多人长期共用云文档但所有者删除会影响其他人
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：能打开 vs 真正拥有
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：文件所有者永久删除会使分享对象失去访问
- 主机制：文件所有者永久删除会使分享对象失去访问
- Audience Payoff：共享访问与最终所有权及删除权并不相同
- Meaning Fingerprint：`能打开 vs 真正拥有｜文件所有者永久删除会使分享对象失去访问`
- Motif：项目交接后清理账户→协作者发现文件失踪
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/drive/answer/2375102?hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H031
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H022 — 云端协作

- 最终选题：**把 Google Drive 文件夹转给同事，为什么里面的文件不都跟着转了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：管理权交接与隐含关系
- Human Problem：转交云文件夹后发现其中部分文件仍由原成员持有
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：容器控制权 vs 内容所有权
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：文件夹所有权转让不自动移交内部各个文件
- 主机制：文件夹所有权转让不自动移交内部各个文件
- Audience Payoff：文件夹所有权变更不自动等于每个内部文件所有者变更
- Meaning Fingerprint：`容器控制权 vs 内容所有权｜文件夹所有权转让不自动移交内部各个文件`
- Motif：员工离职移交项目→同事发现部分素材仍属于旧账户
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/drive/answer/7166529?hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H032
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H023 — 云端协作

- 最终选题：**共享文件夹里只想藏一份文档，为什么不能直接给它更低权限？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：权限继承与私密文件
- Human Problem：想只限制某个文档却受到父目录权限继承限制
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：协作便利 vs 最小可见范围
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：共享文件夹内权限继承与有限权限文件夹功能受产品约束
- 主机制：共享文件夹内权限继承与有限权限文件夹功能受产品约束
- Audience Payoff：子文件默认继承上层访问权，隔离需要专门权限边界
- Meaning Fingerprint：`协作便利 vs 最小可见范围｜共享文件夹内权限继承与有限权限文件夹功`
- Motif：文件夹给全组→财务附件想单独藏→改结构
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/drive/answer/7166529?hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H033
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H024 — 云端协作

- 最终选题：**飞机上编辑的在线文档为什么重新联网后没有出现修改？**
- 选题类型：体验 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：断网协作与版本一致性
- Human Problem：飞机上离线修改文档却发现改动没有正常同步
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：离线工作 vs 同步保证
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：离线修改暂存于特定设备，离线同步失效可能丢失
- 主机制：离线修改暂存于特定设备，离线同步失效可能丢失
- Audience Payoff：离线本机更改与同步服务器成功确认属于不同状态
- Meaning Fingerprint：`离线工作 vs 同步保证｜离线修改暂存于特定设备，离线同步失效可`
- Motif：飞机改稿→落地换机→发现版本仍旧
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://support.google.com/docs/thread/174551542/lost-changes-made-to-offline-document?hl=en
- 证据适用边界：具体当事人自述仅能证明曾有此类经历，不能代表所有用户或地区。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H034
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H025 — 娱乐与推荐

- 最终选题：**把 YouTube 观看历史全关掉，为什么首页可能只剩搜索框？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：娱乐与推荐
- Human Process：个性化推荐与历史隐私
- Human Problem：删除观看历史后发现主页推荐变少
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：隐私控制 vs 推荐所需信号
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：缺少有效观看历史且停用记录时首页推荐功能可能被移除
- 主机制：缺少有效观看历史且停用记录时首页推荐功能可能被移除
- Audience Payoff：个性化推荐依赖历史反馈，主动不留痕可同时减少信号
- Meaning Fingerprint：`隐私控制 vs 推荐所需信号｜缺少有效观看历史且停用记录时首页推荐功`
- Motif：清空历史→首页变空→理解推荐依赖什么
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/95725?hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H035
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H026 — 娱乐与推荐

- 最终选题：**只是帮朋友看了一段视频，为什么之后的视频推荐可能受影响？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：娱乐与推荐
- Human Process：借给他人使用与口味漂移
- Human Problem：临时帮朋友看视频却干扰了自己的推荐内容
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：借设备方便 vs 兴趣信号混入
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：YouTube 使用播放历史作为首页推荐的重要信号
- 主机制：YouTube 使用播放历史作为首页推荐的重要信号
- Audience Payoff：观看历史对平台构成偏好信号，算法不知谁临时使用
- Meaning Fingerprint：`借设备方便 vs 兴趣信号混入｜YouTube 使用播放历史作为首页推`
- Motif：朋友借账号→首页出现新风格→清理历史
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/16089387?hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H036
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H027 — 娱乐与推荐

- 最终选题：**点了‘不感兴趣’，为什么还可能看到同类型视频？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：娱乐与推荐
- Human Process：内容纠偏与推荐反馈
- Human Problem：点不感兴趣仍收到相似视频而失望
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：推荐倾向 vs 强制过滤
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：YouTube 的不感兴趣是调整偏好信号而非全站硬封锁
- 主机制：YouTube 的不感兴趣是调整偏好信号而非全站硬封锁
- Audience Payoff：负反馈用于排序权重，不等于全平台封锁该类别
- Meaning Fingerprint：`推荐倾向 vs 强制过滤｜YouTube 的不感兴趣是调整偏好信`
- Motif：连续点不喜欢→仍出现类似视频→检查控制范围
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/6342839?hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H037
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H028 — 娱乐与推荐

- 最终选题：**在二手交易平台看中商品，卖家要求平台外转账，为什么买家保障可能一起失效？**
- 选题类型：判断 / 实用
- Entry：HUMAN_WORLD_FIRST
- X：二手交易 / 支付保障
- Human Process：二手交易和支付保障
- Human Problem：卖家要求跳出平台交易，交易失败无法申请站内保障
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：交易自由与手续费 vs 平台保护
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：平台交易保障与其内置支付、证据及争议处理流程绑定
- 主机制：部分购物平台的买家保障只适用受支持的站内付款，私下转账可能不在保护范围内
- Audience Payoff：交易纠纷保护以符合条件的站内支付和履约记录为前提
- Meaning Fingerprint：`交易自由与手续费 vs 平台保护｜部分购物平台的买家保障只适用受支持的站`
- Motif：卖家要求便宜点私下付→买家付款→货未寄出→发现争议平台不受理
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://consumer.ftc.gov/articles/buying-online-marketplace
- 证据适用边界：FTC 消费者建议明确提醒平台外付款可能失去该平台保障；需要说明具体平台的例外及保护条款。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H038
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H029 — 创作与版权

- 最终选题：**YouTube 视频设为‘不公开’，为什么拿到链接的人仍然能转给别人？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：链接传播与隐私边界
- Human Problem：不公开作品在群聊被反复转发
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：传播便利 vs 真正访问限制
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：Unlisted 依赖持有链接即可访问并可再次分享
- 主机制：Unlisted 依赖持有链接即可访问并可再次分享
- Audience Payoff：Unlisted 只是取消公开发现入口，持链者仍可能扩散
- Meaning Fingerprint：`传播便利 vs 真正访问限制｜Unlisted 依赖持有链接即可访问`
- Motif：发私密试看链接→链接外传→选择真正私密模式
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/157177?co=GENIE.Platform%3DAndroid&hl=en&ref_type=adv
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H040
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H030 — 创作与版权

- 最终选题：**视频设置了私密，为什么平台仍可能审核版权和违规内容？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：平台审核与私人内容
- Human Problem：把作品设置私密却不能阻止平台合规审核
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：不公开展示 vs 平台内部审核
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：YouTube 系统和人员仍可为版权广告适宜及滥用审查私密视频
- 主机制：YouTube 系统和人员仍可为版权广告适宜及滥用审查私密视频
- Audience Payoff：对公众不可见与平台无法检测是不同的权限层
- Meaning Fingerprint：`不公开展示 vs 平台内部审核｜YouTube 系统和人员仍可为版权广`
- Motif：上传私人测试片→收到审核→区分观众权限和平台审查
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/157177?co=GENIE.Platform%3DAndroid&hl=en&ref_type=adv
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H041
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H031 — 创作与版权

- 最终选题：**视频收到 Content ID 声明，为什么不一定等于账号吃了一次版权警告？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：版权申诉与创作生计
- Human Problem：创作者担心收到Content ID是否必然影响账号
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：版权分成处理 vs 平台处罚
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：Content ID 版权声明与移除请求/版权警告是不同流程
- 主机制：Content ID 版权声明与移除请求/版权警告是不同流程
- Audience Payoff：自动内容匹配声明和正式版权警告属于不同流程
- Meaning Fingerprint：`版权分成处理 vs 平台处罚｜Content ID 版权声明与移除请`
- Motif：上传有背景音乐的视频→版权声明→查处理路径
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/6013276?co=GENIE.Platform%3DAndroid&hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H042
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H032 — 创作与版权

- 最终选题：**同一段音乐在某国还能播放，为什么换个国家视频就被屏蔽？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：地区许可与内容可见
- Human Problem：在海外旅游打开同一视频却被限制播放
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：全球公开 vs 地区版权许可
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：内容版权人可对不同地域设置盈利、追踪或屏蔽规则
- 主机制：内容版权人可对不同地域设置盈利、追踪或屏蔽规则
- Audience Payoff：地区版权人可对同一作品分别配置授权策略
- Meaning Fingerprint：`全球公开 vs 地区版权许可｜内容版权人可对不同地域设置盈利、追踪或`
- Motif：外地朋友打不开视频→查看地区版权策略
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/6013276?co=GENIE.Platform%3DAndroid&hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H043
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H033 — 创作与版权

- 最终选题：**明明视频没有改，为什么版权申诉一升级反而出现被下架风险？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：版权申诉风险
- Human Problem：创作者为维权申诉反而接触更正式的版权移除流程
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：维权机会 vs 升级代价
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：版权主张方收到申诉后可按流程发布正式移除请求，可能带来警告
- 主机制：版权主张方收到申诉后可按流程发布正式移除请求，可能带来警告
- Audience Payoff：争议升级可引向更高权限的正式法律请求而非保证胜诉
- Meaning Fingerprint：`维权机会 vs 升级代价｜版权主张方收到申诉后可按流程发布正式移`
- Motif：决定申诉→收到新处理通知→核对权利依据
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/12104471?co=GENIE.Platform%3DDesktop&hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H044
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H034 — 创作与版权

- 最终选题：**自动字幕连十句话都识别对了，为什么一个人名仍可能被写错？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：识别错误与人物身份
- Human Problem：自动字幕小概率写错专名导致认错人
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：总体准确率 vs 关键称谓准确
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：自动字幕识别易受口音、发音、噪声等影响，不能保证专名正确
- 主机制：自动字幕识别易受口音、发音、噪声等影响，不能保证专名正确
- Audience Payoff：语音识别平均正确率不能保证稀有人名与其他语境同样稳健
- Meaning Fingerprint：`总体准确率 vs 关键称谓准确｜自动字幕识别易受口音、发音、噪声等影响`
- Motif：上传访谈→嘉宾名字识别错→人工校对
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/6373554?hl=en-GB
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H045
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H035 — 创作与版权

- 最终选题：**YouTube 自动配音可能已经上线，为什么原作者还不知道？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：自动配音授权
- Human Problem：原视频被系统新增多语言音轨而作者未察觉
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：跨语言覆盖 vs 作者逐条控制
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：符合条件的作品可自动生成并依发布设置上线其他语言音轨
- 主机制：符合条件的作品可自动生成并依发布设置上线其他语言音轨
- Audience Payoff：创作者发布和自动配音设置可允许系统预生成额外语言
- Meaning Fingerprint：`跨语言覆盖 vs 作者逐条控制｜符合条件的作品可自动生成并依发布设置上`
- Motif：视频旧内容被自动配音→发现配音轨→调整发布设置
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/15569972?co=GENIE.Platform%3DDesktop&hl=en%40Dilshan_Ali_7
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H046
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H036 — 创作与版权

- 最终选题：**明明获得素材作者许可，为什么搬运合集仍可能失去变现资格？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：授权与变现资格
- Human Problem：授权转载内容仍被平台判定重复使用影响变现
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：拥有使用权 vs 提供独创价值
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：YouTube 的重复使用内容变现规则与版权授权是不同判断
- 主机制：YouTube 的重复使用内容变现规则与版权授权是不同判断
- Audience Payoff：拥有版权使用许可不等于符合独立创作贡献的收益规则
- Meaning Fingerprint：`拥有使用权 vs 提供独创价值｜YouTube 的重复使用内容变现规则`
- Motif：申请变现被拒→核对原创贡献而非只看授权
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/1311392?hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H047
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H037 — 创作与版权

- 最终选题：**AI 一天能生成几百篇文章，为什么网站反而可能被搜索平台处罚？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：低成本内容生产与搜索污染
- Human Problem：大量生成模板文章未必产生搜索增益
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：产量自动化 vs 用户价值
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：Google 将主要为操纵排名而规模化生产低价值页面视为垃圾内容
- 主机制：Google 将主要为操纵排名而规模化生产低价值页面视为垃圾内容
- Audience Payoff：以操纵排序为主要目的的规模化低价值页面触发垃圾内容政策
- Meaning Fingerprint：`产量自动化 vs 用户价值｜Google 将主要为操纵排名而规模化`
- Motif：网站批量上新→流量下降→核对搜索垃圾政策
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://developers.google.com/search/docs/fundamentals/using-gen-ai-content?hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H048
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H038 — 娱乐与推荐

- 最终选题：**电影已经下载到手机，为什么坐上飞机却显示‘已过期’？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：娱乐与推荐
- Human Process：数字离线购买与许可
- Human Problem：下载电影后在飞机上发现授权已过期
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：离线副本 vs 授权时间
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：Netflix 下载内容存在有效期与授权变化，过期需要重新下载
- 主机制：Netflix 下载内容存在有效期与授权变化，过期需要重新下载
- Audience Payoff：本地已有文件与合法播放所需的时限许可分属不同条件
- Meaning Fingerprint：`离线副本 vs 授权时间｜Netflix 下载内容存在有效期与授`
- Motif：机场无网打开下载→发现已过期→重排观影
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://help.netflix.com/en/node/54865
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H049
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H039 — 支付与订阅

- 最终选题：**已经把 App 从手机删除了，为什么订阅还在收费？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：订阅意愿与续费授权
- Human Problem：用户卸载付费App后仍被系统定期扣费
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：删除软件 vs 停止支付授权
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：Google Play 的订阅需在对应订阅管理页面取消
- 主机制：Google Play 的订阅需在对应订阅管理页面取消
- Audience Payoff：移除客户端与撤销应用商店订阅付款许可是不同状态
- Meaning Fingerprint：`删除软件 vs 停止支付授权｜Google Play 的订阅需在对应`
- Motif：删掉健身应用→下一月扣款→回到账单管理
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/googleplay/answer/7018481?co=GENIE.Platform%3DAndroid&hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H050
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H040 — 儿童机器人玩具

- 最终选题：**孩子为了操控机器人玩具打开定位，为什么另一家公司也可能拿到位置？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：儿童机器人玩具
- Human Process：消费者使用数字产品做出真实选择与授权
- Human Problem：FTC 指控 Apitor 玩具伴侣 App 嵌入第三方 SDK、未正确取得家长同意即共享儿童定位
- 反常：本应更安全、便利或公正的服务带来未被预期的风险或代价
- Human Tension：玩具控制 vs 第三方定位收集
- Controlling Question：哪一个具体的技术、权限或数据状态改变了人的实际结果？
- 科技改变的过程：技术平台将人的身份、行为或数字服务转为可跨系统执行的数据流
- 主机制：第三方 SDK 可在宿主应用授权下获得定位数据并传向外部公司
- Audience Payoff：理解玩具控制 vs 第三方定位收集所涉及的真实产品/监管边界，而不把营销说法直接当成已验证结果
- Meaning Fingerprint：`玩具控制 vs 第三方定位收集｜第三方 SDK 可在宿主应用授权下获得定位数据并传`
- Motif：连接智能玩具→允许位置→第三方数据收集→家长知情权
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-takes-action-against-robot-toy-maker-allowing-collection-childrens-data-without-parental-consent
- 证据适用边界：仅以监管公开投诉、执法调查或和解披露的具体事实范围为限；应使用‘FTC 指控/调查发现’措辞，不把尚未判决的争议当作全部确定事实。
- Status：PASS_CANDIDATE
- 历史来源编号：从旧百题库 H051 位置换入新的独立现实案例，不能沿用原题身份
- 本轮复核说明：优先审核真实人的代价、主机制与同构；有清晰来源，但尚未完成正式 Part 1 全 Gate + Part 2 可讲性审查。

---

- 最终选题：**Google Play 订阅已经取消，为什么会员权益还能用到年底？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：取消续费与已付款权益
- Human Problem：取消会员后仍能用到付款到期日
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：停止续订 vs 已付款服务权利
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：Google Play 取消续费后通常仍可使用已经支付的订阅期间
- 主机制：Google Play 取消续费后通常仍可使用已经支付的订阅期间
- Audience Payoff：停止未来扣款并不立即取消已经付费的服务期
- Meaning Fingerprint：`停止续订 vs 已付款服务权利｜Google Play 取消续费后通常`
- Motif：取消年度会员→仍能播放→搞清到期时间
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/googleplay/answer/7018481?co=GENIE.Platform%3DAndroid&hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H051
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H041 — 支付与订阅

- 最终选题：**订阅显示月付，取消时为什么突然有一笔提前解约费？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：合同承诺与费用隐蔽
- Human Problem：年度承诺按月付款被误解为可随时无成本取消
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：收费频率 vs 合同期限
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：FTC 指控 Adobe 部分计划为年度承诺按月支付且未明确提示解约费用
- 主机制：FTC 指控 Adobe 部分计划为年度承诺按月支付且未明确提示解约费用
- Audience Payoff：付款频率不等于合同期限，提前终止条款可能不同
- Meaning Fingerprint：`收费频率 vs 合同期限｜FTC 指控 Adobe 部分计划为年`
- Motif：为短期任务订软件→打算取消→发现年度费用
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://consumer.ftc.gov/consumer-alerts/2024/05/adobe-used-hidden-fee-trap-people-paying-subscription-plans-ftc-says
- 证据适用边界：只陈述监管指控或已记录体验，不认定所有商家有同样行为。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H053
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H042 — 支付与订阅

- 最终选题：**办会员只想买一次东西，为什么结账后却多了一份自动续费？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：默认加入与明确同意
- Human Problem：消费者原只想一次购物却被注册为续费会员
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：一次消费 vs 持续订阅
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：FTC 指控 Amazon Prime 采用误导性界面促成注册与困难取消
- 主机制：FTC 指控 Amazon Prime 采用误导性界面促成注册与困难取消
- Audience Payoff：预设勾选和诱导性界面会模糊用户是否主动授权
- Meaning Fingerprint：`一次消费 vs 持续订阅｜FTC 指控 Amazon Prime`
- Motif：买必需品→查到会员账单→追溯结算按钮
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://www.ftc.gov/legal-library/browse/cases-proceedings/2123050-amazoncom-inc-rosca-ftc-v
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H054
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H043 — 支付与订阅

- 最终选题：**买菜广告写免费送货，为什么最后订单上还有好几种费用？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：广告价与结算价
- Human Problem：卖场宣称配送免费，结账仍有其他服务费
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：宣传免运费 vs 真实总价
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：FTC 对 Instacart 的指控涉及免费配送的展示与附加费用之间的落差
- 主机制：FTC 对 Instacart 的指控涉及免费配送的展示与附加费用之间的落差
- Audience Payoff：费用分类与页面展示时机可能造成承诺与账单落差
- Meaning Fingerprint：`宣传免运费 vs 真实总价｜FTC 对 Instacart 的指控`
- Motif：按免费配送广告下单→结账总价上涨→拆出费用
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://search.ftc.gov/news-events/news/press-releases/2025/12/instacart-pay-60-million-consumer-refunds-settle-ftc-lawsuit-over-allegations-it-engaged-deceptive
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H055
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H044 — 支付与订阅

- 最终选题：**支付平台显示‘退款已发出’，为什么信用卡还没有收到钱？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：退款系统与银行结算
- Human Problem：卖家退款已发但买家尚未收到款项
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：卖方退款动作 vs 银行到账
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：PayPal 退款返回原支付渠道后仍受发卡行结算时差影响
- 主机制：PayPal 退款返回原支付渠道后仍受发卡行结算时差影响
- Audience Payoff：商家发起退款与银行最终入账有不同处理阶段
- Meaning Fingerprint：`卖方退款动作 vs 银行到账｜PayPal 退款返回原支付渠道后仍受`
- Motif：商家退款→平台完成→卡账单还没变
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://www.paypal.com/us/cshelp/article/where-is-my-refund-help130
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H056
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H045 — 支付与订阅

- 最终选题：**原价退款了，为什么跨币种订单拿回来的钱却少了一点？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：跨币种支付汇率差
- Human Problem：退款后拿回原币折算金额和付款不同
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：名义原币退款 vs 实收本币金额
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：PayPal 外汇退款可能按照退款时汇率重新换算
- 主机制：PayPal 外汇退款可能按照退款时汇率重新换算
- Audience Payoff：跨币种退款的交易汇率可能随结算时间和支付通道改变
- Meaning Fingerprint：`名义原币退款 vs 实收本币金额｜PayPal 外汇退款可能按照退款时汇`
- Motif：海外买礼物退货→退款折算金额不同→对比汇率
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://www.paypal.com/us/cshelp/article/where-is-my-refund-help130
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H057
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H046 — 演唱会抢票

- 最终选题：**演唱会明明限制每人买四张，为什么黄牛还能攒出上千个账号抢票？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：演唱会抢票
- Human Process：消费者使用数字产品做出真实选择与授权
- Human Problem：FTC 起诉 Ticketmaster 涉嫌容许票贩用大量账号和代理IP绕过购票限额
- 反常：本应更安全、便利或公正的服务带来未被预期的风险或代价
- Human Tension：普通观众 vs 系统化抢票
- Controlling Question：哪一个具体的技术、权限或数据状态改变了人的实际结果？
- 科技改变的过程：技术平台将人的身份、行为或数字服务转为可跨系统执行的数据流
- 主机制：实名与每账号限购在多账号、代理IP和平台风控不足时可能被绕开
- Audience Payoff：理解普通观众 vs 系统化抢票所涉及的真实产品/监管边界，而不把营销说法直接当成已验证结果
- Meaning Fingerprint：`普通观众 vs 系统化抢票｜实名与每账号限购在多账号、代理IP和平台风控不足时`
- Motif：粉丝排队→票快速售罄→二手票高价出现→审查代理和批量账号
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://search.ftc.gov/news-events/news/press-releases/2025/09/ftc-sues-live-nation-ticketmaster-engaging-illegal-ticket-resale-tactics-deceiving-artists-consumers
- 证据适用边界：仅以监管公开投诉、执法调查或和解披露的具体事实范围为限；应使用‘FTC 指控/调查发现’措辞，不把尚未判决的争议当作全部确定事实。
- Status：PASS_CANDIDATE
- 历史来源编号：从旧百题库 H058 位置换入新的独立现实案例，不能沿用原题身份
- 本轮复核说明：优先审核真实人的代价、主机制与同构；有清晰来源，但尚未完成正式 Part 1 全 Gate + Part 2 可讲性审查。

---

- 最终选题：**信用卡已经注销，原路退款为什么不一定就丢了？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：原卡失效与款项去向
- Human Problem：已注销的信用卡退款出现到账焦虑
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：卡号失效 vs 清算路径存续
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：支付服务仍可向原卡通道发起退款，由发卡机构处理对应账户
- 主机制：支付服务仍可向原卡通道发起退款，由发卡机构处理对应账户
- Audience Payoff：交易网络仍能路由原渠道退款到发行机构处理，是否入账取决于账户情况
- Meaning Fingerprint：`卡号失效 vs 清算路径存续｜支付服务仍可向原卡通道发起退款，由发卡`
- Motif：换银行卡后退货→商家原路退→向银行确认入账
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://www.paypal.com/us/cshelp/article/where-is-my-refund-help130
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H058
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H047 — 支付与订阅

- 最终选题：**酒店还没结账，银行卡额度为什么已被占了一大块？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：酒店预授权与可用资金
- Human Problem：旅行酒店预先占额导致其他消费额度突然不足
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：费用保障 vs 可用余额
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：酒店可用预授权暂占信用额度，最终支付需另行清算
- 主机制：酒店可用预授权暂占信用额度，最终支付需另行清算
- Audience Payoff：预授权影响可用额度不代表已完成实际消费扣款
- Meaning Fingerprint：`费用保障 vs 可用余额｜酒店可用预授权暂占信用额度，最终支付需`
- Motif：办理入住→看到占款短信→分辨真实消费
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://stripe.com/resources/more/card-authorization-explained
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H059
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H048 — 网站托管安全

- 最终选题：**网站服务商宣传安全防护获奖，为什么客户网站还是可能被黑？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：网站托管安全
- Human Process：消费者使用数字产品做出真实选择与授权
- Human Problem：FTC 指控 GoDaddy 未实施部分基础防护措施造成多次入侵
- 反常：本应更安全、便利或公正的服务带来未被预期的风险或代价
- Human Tension：外包安全 vs 实际责任
- Controlling Question：哪一个具体的技术、权限或数据状态改变了人的实际结果？
- 科技改变的过程：技术平台将人的身份、行为或数字服务转为可跨系统执行的数据流
- 主机制：服务商安全承诺与实际 MFA、监控、连接防护落实水平并非一回事
- Audience Payoff：理解外包安全 vs 实际责任所涉及的真实产品/监管边界，而不把营销说法直接当成已验证结果
- Meaning Fingerprint：`外包安全 vs 实际责任｜服务商安全承诺与实际 MFA、监控、连接防护落实水`
- Motif：选择主机→相信安全声明→网站遭入侵→查看安全审计
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2025/05/ftc-finalizes-order-godaddy-over-data-security-failures
- 证据适用边界：仅以监管公开投诉、执法调查或和解披露的具体事实范围为限；应使用‘FTC 指控/调查发现’措辞，不把尚未判决的争议当作全部确定事实。
- Status：PASS_CANDIDATE
- 历史来源编号：从旧百题库 H060 位置换入新的独立现实案例，不能沿用原题身份
- 本轮复核说明：优先审核真实人的代价、主机制与同构；有清晰来源，但尚未完成正式 Part 1 全 Gate + Part 2 可讲性审查。

---

- 最终选题：**加油站只加了半箱油，银行卡为什么先显示一笔临时扣款？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：加油站预授权
- Human Problem：只是加了少量汽油卡上却显示较大预扣
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：先预估额度 vs 最终价格
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：预授权先冻结一定额度，最终收费按交易结算
- 主机制：预授权先冻结一定额度，最终收费按交易结算
- Audience Payoff：加油站可能用较高预授权上限先验证账户，再按实际交易结算
- Meaning Fingerprint：`先预估额度 vs 最终价格｜预授权先冻结一定额度，最终收费按交易结`
- Motif：刷卡加油→先收到占款通知→等待实际结算
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://www.paypal.com/us/legalhub/paypal/consumer-debitcard-agreement?locale.x=en_US
- 证据适用边界：示例以美国 PayPal 借记卡在加油泵付款产生预授权暂扣为准，不推广所有银行和国家。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H060
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H049 — 支付与订阅

- 最终选题：**四笔免息分期各自不贵，为什么总还款安排容易挤在同一个月？**
- 选题类型：判断 / 反思
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：分期叠加与负担
- Human Problem：每笔小额分期不贵但同时持有多笔贷款
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：小额便利 vs 总体现金流
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：CFPB 观察到先买后付借贷的多笔使用与还款风险
- 主机制：CFPB 观察到先买后付借贷的多笔使用与还款风险
- Audience Payoff：每笔短期支付安排的便利遮蔽总体并行义务
- Meaning Fingerprint：`小额便利 vs 总体现金流｜CFPB 观察到先买后付借贷的多笔使用`
- Motif：先后四次分期购物→月底发现多笔同时扣
- Content Job：DISCOVERY
- Source / Signal：RESEARCH_OBSERVATION；https://www.consumerfinance.gov/data-research/research-reports/buy-now-pay-later-market-trends-and-consumer-impacts/
- 证据适用边界：只采纳研究或监管文件实际讨论的风险与边界，不把关联改成普遍因果。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H062
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H050 — 支付与订阅

- 最终选题：**按时还了四期免息，为什么信用分数可能完全没加分？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：信用评分记录
- Human Problem：按时还 BNPL 未必帮助建立信用分数
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：还款认真 vs 征信可见
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：不少 BNPL 贷款未向三大信用局报告正常还款
- 主机制：不少 BNPL 贷款未向三大信用局报告正常还款
- Audience Payoff：信贷表现只有进入相关信用报告链才能影响指标
- Meaning Fingerprint：`还款认真 vs 征信可见｜不少 BNPL 贷款未向三大信用局报告`
- Motif：付款计划完成→查信用报告→没有对应记录
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://www.consumerfinance.gov/ask-cfpb/will-a-buy-now-pay-later-bnpl-loan-impact-my-credit-scores-en-2117/
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H063
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H051 — 支付与订阅

- 最终选题：**先买后付的商品已经退货，为什么分期账单处理并不总是同时结束？**
- 选题类型：判断 / 反思
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：退货与分期
- Human Problem：商品退了分期却仍显示还款计划
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：商家退货 vs 借贷关系结束
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：CFPB 指出 BNPL 退款与争议处理在消费者保护方面存在边界
- 主机制：CFPB 指出 BNPL 退款与争议处理在消费者保护方面存在边界
- Audience Payoff：商家的退款确认和分期贷方账单更新可能不同步
- Meaning Fingerprint：`商家退货 vs 借贷关系结束｜CFPB 指出 BNPL 退款与争议处`
- Motif：网购退款→下期账单仍待处理→追查放款方
- Content Job：DISCOVERY
- Source / Signal：RESEARCH_OBSERVATION；https://www.consumerfinance.gov/archive/newsroom/cfpb-study-details-the-rapid-growth-of-buy-now-pay-later-lending/
- 证据适用边界：只采纳研究或监管文件实际讨论的风险与边界，不把关联改成普遍因果。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H064
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H052 — 购物与物流

- 最终选题：**收货地址下错了，为什么交易平台不直接替你把包裹改送新地址？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：购物与物流
- Human Process：订单锁定与配送纠错
- Human Problem：发现旧地址时平台要求取消订单再重买
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：提交订单 vs 履约状态锁定
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：eBay 错误送货地址通常要求联系卖家取消后用正确地址重买
- 主机制：eBay 错误送货地址通常要求联系卖家取消后用正确地址重买
- Audience Payoff：下单后履约责任和物流派送数据不一定允许买家直接改写
- Meaning Fingerprint：`提交订单 vs 履约状态锁定｜eBay 错误送货地址通常要求联系卖家`
- Motif：搬家没改地址→卖家已出单→决定是否取消
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://www.ebay.com/help/buying/shipping-delivery/changing-shipping-details-purchase?id=4028
- 证据适用边界：eBay 官方流程：出货前买家可联系卖家申请取消后重新下单；不是全部订单永远不能改地址。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H066
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H053 — 账号安全

- 最终选题：**手机丢了，明明记得 Google 密码，为什么还是可能登不进账号？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：账号安全
- Human Process：手机丢失与账户恢复
- Human Problem：手机丢了即使知道密码也不能轻易进入账户
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：防盗保护 vs 本人恢复
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：Google 两步验证需要另一验证方法、备份码或账户恢复
- 主机制：Google 两步验证需要另一验证方法、备份码或账户恢复
- Audience Payoff：双重验证将登录凭证绑定独立验证因子；恢复需要其他证明
- Meaning Fingerprint：`防盗保护 vs 本人恢复｜Google 两步验证需要另一验证方法`
- Motif：原手机丢失→新机登录→找备用验证
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/accounts/answer/185834?hl=en
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H067
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H054 — 儿童视频标记

- 最终选题：**孩子看的动画明明面向儿童，为什么 YouTube 却可能把它当作成人视频投放个性化广告？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：儿童视频标记
- Human Process：消费者使用数字产品做出真实选择与授权
- Human Problem：FTC 指控迪士尼部分面向儿童的视频被不恰当标为非儿童内容，使相关数据收集和个性化广告功能继续
- 反常：本应更安全、便利或公正的服务带来未被预期的风险或代价
- Human Tension：内容分级 vs 儿童隐私
- Controlling Question：哪一个具体的技术、权限或数据状态改变了人的实际结果？
- 科技改变的过程：技术平台将人的身份、行为或数字服务转为可跨系统执行的数据流
- 主机制：上传者的视频受众分类会影响平台是否开放个性化广告及儿童隐私保护
- Audience Payoff：理解内容分级 vs 儿童隐私所涉及的真实产品/监管边界，而不把营销说法直接当成已验证结果
- Meaning Fingerprint：`内容分级 vs 儿童隐私｜上传者的视频受众分类会影响平台是否开放个性化广告及`
- Motif：儿童看动画→视频错标→个性化追踪触发→平台审核与监管
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://search.ftc.gov/news-events/news/press-releases/2025/12/court-approves-order-requiring-disney-pay-10-million-settle-ftc-allegations-firm-enabled-unlawful
- 证据适用边界：仅以监管公开投诉、执法调查或和解披露的具体事实范围为限；应使用‘FTC 指控/调查发现’措辞，不把尚未判决的争议当作全部确定事实。
- Status：PASS_CANDIDATE
- 历史来源编号：从旧百题库 H069 位置换入新的独立现实案例，不能沿用原题身份
- 本轮复核说明：优先审核真实人的代价、主机制与同构；有清晰来源，但尚未完成正式 Part 1 全 Gate + Part 2 可讲性审查。

---

- 最终选题：**重新打印了一批谷歌备份码，为什么旧纸条上的十个码全部失效？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：账号安全
- Human Process：备份身份凭证有效性
- Human Problem：保存多年前的谷歌备份码却发现不可用了
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：恢复通行 vs 主动轮换
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：新生成一批备份码会使旧一批自动无效
- 主机制：新生成一批备份码会使旧一批自动无效
- Audience Payoff：重新生成恢复码使旧序列失效，备份必须维护有效状态
- Meaning Fingerprint：`恢复通行 vs 主动轮换｜新生成一批备份码会使旧一批自动无效`
- Motif：更换安全纸条→试旧码→被拒
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/accounts/answer/1187538?hl=en
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H069
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H055 — 账号安全

- 最终选题：**两步验证明明开着，为什么把短信验证码告诉骗子仍会被盗号？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：账号安全
- Human Process：验证码与社交工程
- Human Problem：受害者把验证码交给冒充客服/熟人的骗子
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：防盗验证 vs 社交诱骗
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：当前有效 OTP 被骗子转用于登录或转账验证
- 主机制：当前有效 OTP 被骗子转用于登录或转账验证
- Audience Payoff：动态验证码只能证明拥有当期数字，不验证输入者真实意图
- Meaning Fingerprint：`防盗验证 vs 社交诱骗｜当前有效 OTP 被骗子转用于登录或转`
- Motif：假银行打电话→索码→账户被冒用
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://consumer.ftc.gov/consumer-alerts/2024/03/whats-verification-code-why-would-someone-ask-me-it
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H072
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H056 — 账号安全

- 最终选题：**只是一家小网站泄露了密码，为什么其他账户也可能跟着出事？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：账号安全
- Human Process：密码复用与连锁风险
- Human Problem：单个小网站泄露让其他大网站账户也有危险
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：复用便捷 vs 连锁盗用
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：泄露的用户名密码可在其他平台尝试登录
- 主机制：泄露的用户名密码可在其他平台尝试登录
- Audience Payoff：同一组用户凭证被自动化重复试登录造成跨站入侵风险
- Meaning Fingerprint：`复用便捷 vs 连锁盗用｜泄露的用户名密码可在其他平台尝试登录`
- Motif：某网站数据泄露→邮箱被撞库→重新设独立密码
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://consumer.ftc.gov/consumer-alerts/2022/10/have-you-been-affected-data-breach-read
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H073
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H057 — 骗局与信任

- 最终选题：**电话里明明是孙子的声音，为什么不一定真是他打来的？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：拟声诈骗与亲密信任
- Human Problem：亲人电话声音听起来很像，但身份可能是伪造
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：熟悉音色 vs 可靠身份
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：骗子可通过语音克隆模拟亲人声音制造紧急事件
- 主机制：骗子可通过语音克隆模拟亲人声音制造紧急事件
- Audience Payoff：声音克隆能制造可听似真但无法证明拨号者身份的线索
- Meaning Fingerprint：`熟悉音色 vs 可靠身份｜骗子可通过语音克隆模拟亲人声音制造紧急`
- Motif：求救电话→要求钱款→另一路确认
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H074
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H058 — 骗局与信任

- 最终选题：**兼职 App 显示赚了几百元，为什么提现前还要你先充值？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：虚假佣金与充值骗局
- Human Problem：任务平台显示可提现收益却要求用户先付款
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：账面收益 vs 真正到账
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：任务平台展示假的佣金并要求用户充钱解锁提现
- 主机制：任务平台展示假的佣金并要求用户充钱解锁提现
- Audience Payoff：后台收益数字可伪造，充值解锁将受害者真钱转入骗子控制
- Meaning Fingerprint：`账面收益 vs 真正到账｜任务平台展示假的佣金并要求用户充钱解锁`
- Motif：点赞任务→虚拟利润→先充加密货币
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://consumer.ftc.gov/consumer-alerts/2025/08/how-spot-avoid-task-scams
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H075
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H059 — 骗局与信任

- 最终选题：**停车场扫了付款二维码，为什么钱可能到了骗子账户？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：停车扫码与站点真伪
- Human Problem：停车二维码看似便捷却引向假缴费页
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：线下可信场所 vs 可替换链接
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：扫码者被重定向到骗子模仿的收费页面
- 主机制：扫码者被重定向到骗子模仿的收费页面
- Audience Payoff：物理贴纸上的二维码可被替换，目标网址不再可信
- Meaning Fingerprint：`线下可信场所 vs 可替换链接｜扫码者被重定向到骗子模仿的收费页面`
- Motif：停车扫码→站点名称异样→查看贴纸
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://consumer.ftc.gov/consumer-alerts/2026/09/see-qr-code-parked-somewhere-dont-scan-ityet
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H076
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H060 — 骗局与信任

- 最终选题：**超市货架上买的礼品卡，为什么充值后余额可能被别人花光？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：礼品卡支付与预激活
- Human Problem：买来未拆封礼品卡激活后却被提前盗用
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：实体货架 vs 数字凭证失密
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：骗子提前窃取PIN并等待合法购买者充值
- 主机制：骗子提前窃取PIN并等待合法购买者充值
- Audience Payoff：实体卡PIN泄漏可让骗子在合法购买后快速消费
- Meaning Fingerprint：`实体货架 vs 数字凭证失密｜骗子提前窃取PIN并等待合法购买者充值`
- Motif：买卡送人→余额归零→查卡包装
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://consumer.ftc.gov/consumer-alerts/2024/12/check-out-gift-cards-you-buy-them
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H078
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H061 — 骗局与信任

- 最终选题：**网上买车交了订金，为什么到经销商店里竟然查无订单？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：车辆预订与假官网
- Human Problem：买车人在假经销商网站交押金却查无订单
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：仿真官网 vs 真实商户
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：骗子克隆库存图片、品牌Logo与评论骗取预付款
- 主机制：骗子克隆库存图片、品牌Logo与评论骗取预付款
- Audience Payoff：骗子复制商家品牌、库存图并构造虚假收款入口
- Meaning Fingerprint：`仿真官网 vs 真实商户｜骗子克隆库存图片、品牌Logo与评论骗`
- Motif：网上付钱→到场提车→店铺否认
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://consumer.ftc.gov/consumer-alerts/2026/09/scammers-are-spoofing-car-dealership-websites-what-you-need-know
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H079
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H062 — 骗局与信任

- 最终选题：**银行‘风控专员’说要把钱转入安全账户，为什么越照做越危险？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：冒充客服与安全转账
- Human Problem：‘资金保护’通知促使用户转出原本安全的存款
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：保护自己 vs 误转资产
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：冒充银行安全专员制造风险要求转出资金
- 主机制：冒充银行安全专员制造风险要求转出资金
- Audience Payoff：冒充银行客服借安全指令将受害者主动付款变成诈骗转账
- Meaning Fingerprint：`保护自己 vs 误转资产｜冒充银行安全专员制造风险要求转出资金`
- Motif：紧急电话→转账保护→钱被取走
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://consumer.ftc.gov/consumer-alerts/2024/03/never-move-your-money-protect-it-thats-scam
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H080
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H063 — 骗局与信任

- 最终选题：**电脑出现病毒提示，又转接‘警方’，为什么最后要你转走存款？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：跨身份诈骗链
- Human Problem：电脑弹病毒警告后再接‘警方’要求转账
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：权威层级 vs 实为同伙
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：诈骗使用假系统弹窗和多次冒充权威套取款项
- 主机制：诈骗使用假系统弹窗和多次冒充权威套取款项
- Audience Payoff：连续转换技术支持和执法机构身份增加假权威可信度
- Meaning Fingerprint：`权威层级 vs 实为同伙｜诈骗使用假系统弹窗和多次冒充权威套取款`
- Motif：弹窗→客服→假警方→银行账户
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://consumer.ftc.gov/consumer-alerts/2024/03/new-tech-support-scammers-want-your-life-savings
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H081
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H064 — 购物与口碑

- 最终选题：**商品有几百条生动五星评论，为什么评论者可能根本不存在？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：购物与口碑
- Human Process：AI评价虚假真实性
- Human Problem：五星评价显示出完整个人经历但评论者可能并不存在
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：评论文本 vs 真实体验
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：AI生成或假账号可制造从未购买者的评论
- 主机制：AI生成或假账号可制造从未购买者的评论
- Audience Payoff：AI生成虚构评价能制造不存在的消费者经历
- Meaning Fingerprint：`评论文本 vs 真实体验｜AI生成或假账号可制造从未购买者的评论`
- Motif：准备购买→发现模式化账号→追查评价来源
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials?bui=N1fJnibGCA855boYsj14aw
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H082
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H065 — 购物与口碑

- 最终选题：**商家说给五星就返现，为什么它和普通求好评不一样？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：购物与口碑
- Human Process：返现评价与利益冲突
- Human Problem：商家要求五星才给优惠造成真实评分偏离
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：主动评价 vs 指定倾向
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：针对特定正向或负向评价付费受FTC规则禁止
- 主机制：针对特定正向或负向评价付费受FTC规则禁止
- Audience Payoff：按观点方向附条件奖励影响评价信息的独立性
- Meaning Fingerprint：`主动评价 vs 指定倾向｜针对特定正向或负向评价付费受FTC规则`
- Motif：商品包装里的返现卡片→回看五星数据
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials?bui=N1fJnibGCA855boYsj14aw
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H083
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H066 — 购物与口碑

- 最终选题：**Gmail 邮件明明设置了机密模式，为什么收件人仍可能拍照留下副本？**
- 选题类型：判断 / 实用
- Entry：HUMAN_WORLD_FIRST
- X：隐私沟通 / 邮件
- Human Process：机密邮件与信息控制
- Human Problem：发Gmail机密邮件仍无法防止对方用其他设备记录
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：界面权限 vs 现实截屏
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：客户端可限制复制转发，却无法控制对屏幕的外部拍摄
- 主机制：Gmail 机密模式禁部分复制转发操作，但无法阻止截图或摄像头记录
- Audience Payoff：限制界面复制按钮不能阻止被授权阅读者对屏幕拍摄
- Meaning Fingerprint：`界面权限 vs 现实截屏｜Gmail 机密模式禁部分复制转发操作`
- Motif：机密方式发送敏感内容→对方拍照→重新思考分享边界
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/mail/answer/7674059?co=GENIE.Platform%3DDesktop&hl=en-GB
- 证据适用边界：只支持 Gmail 机密模式能限制界面操作、不能阻止外部复制的官方事实，不主张现实中每个接收者都会截屏。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H084
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H067 — 购物与口碑

- 最终选题：**购物网站说展示了全部评价，为什么低分评论却可能被藏起来？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：购物与口碑
- Human Process：差评抑制与消费者信息
- Human Problem：商家宣称评价全面却删掉低分评论
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：完整口碑 vs 单边筛选
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：误导性删除差评和全量展示虚假声称受到限制
- 主机制：误导性删除差评和全量展示虚假声称受到限制
- Audience Payoff：以非对称方式过滤评论会使展示样本失真
- Meaning Fingerprint：`完整口碑 vs 单边筛选｜误导性删除差评和全量展示虚假声称受到限`
- Motif：店铺零差评→买家投诉负面评价消失
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials?bui=N1fJnibGCA855boYsj14aw
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H085
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H068 — 购物与口碑

- 最终选题：**一个博主粉丝几十万，为什么里面可能根本没那么多真人？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：购物与口碑
- Human Process：虚假粉丝与商业信用
- Human Problem：合作广告的账号表面几十万粉丝实际存在大量造假
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：数字热度 vs 真实受众
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：买卖虚假粉丝或播放量可以夸大商业影响力
- 主机制：买卖虚假粉丝或播放量可以夸大商业影响力
- Audience Payoff：购买机器人粉丝制造虚假影响力证明
- Meaning Fingerprint：`数字热度 vs 真实受众｜买卖虚假粉丝或播放量可以夸大商业影响力`
- Motif：商单报价→审核粉丝来源→发现机器人
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials?bui=N1fJnibGCA855boYsj14aw
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H086
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H069 — AI与隐私

- 最终选题：**ChatGPT 里删了对话，为什么资料库文件却还在？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：AI与隐私
- Human Process：聊天删除与资料库管理
- Human Problem：对话删了上传文件却可能留在独立资料库
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：聊天清理 vs 文件独立保存
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：资料库保存文件与聊天记录分别管理
- 主机制：资料库保存文件与聊天记录分别管理
- Audience Payoff：聊天记录和Library文件是不同存储对象、删除生命周期不同
- Meaning Fingerprint：`聊天清理 vs 文件独立保存｜资料库保存文件与聊天记录分别管理`
- Motif：删聊天→资料库仍见原文件→独立清理
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://help.openai.com/en/articles/8983778-how-are-files-vs-chats-retained
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H087
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H070 — 云端协作

- 最终选题：**Word 选择‘无标记’，为什么发给别人后旧修改仍然能被看到？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：修订痕迹与职场信息
- Human Problem：Word选无标记发送合同后对方仍能看见早期修改
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：视觉干净 vs 文档留痕
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：No Markup 仅隐藏修订，接受或拒绝修订才真正移除
- 主机制：No Markup 仅隐藏修订，接受或拒绝修订才真正移除
- Audience Payoff：隐藏可视标注不等于接受/删除底层修订记录
- Meaning Fingerprint：`视觉干净 vs 文档留痕｜No Markup 仅隐藏修订，接受或`
- Motif：合同定稿→他人打开修订→紧急清理
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.microsoft.com/en-us/word/accept-or-reject-tracked-changes-in-word
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H089
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H071 — 云端协作

- 最终选题：**Dropbox 明明点了‘移除我的访问’，为什么旧链接还打得开？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：撤销共享与持链访问
- Human Problem：Dropbox离开共享文档后旧公开链接仍可以访问
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：我的视图 vs 分享链接本身
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：移除个人访问不影响分享者的活跃链接
- 主机制：移除个人访问不影响分享者的活跃链接
- Audience Payoff：撤销个人访问和取消任何人持链权限是两种独立操作
- Meaning Fingerprint：`我的视图 vs 分享链接本身｜移除个人访问不影响分享者的活跃链接`
- Motif：删我的共享入口→用旧链接仍进入
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://help.dropbox.com/share/remove-access
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H090
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H072 — 娱乐与推荐

- 最终选题：**Spotify 的歌全下载了，为什么一个月不联网后可能无法离线听？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：娱乐与推荐
- Human Process：数字音乐离线授权
- Human Problem：付费下载的离线歌却在长期断网后无法播放
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：本地有文件 vs 定期联网授权
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：Spotify 下载内容需至少每30天联网校验
- 主机制：Spotify 下载内容需至少每30天联网校验
- Audience Payoff：流媒体离线缓存需要定期与服务端重新核验订阅授权
- Meaning Fingerprint：`本地有文件 vs 定期联网授权｜Spotify 下载内容需至少每30天`
- Motif：远途无网→音乐失效→恢复联网
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.spotify.com/us/article/listen-offline/
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H093
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H073 — 日常沟通

- 最终选题：**出差几天后发现一封机密邮件过期了，为什么收件箱有邮件却看不到正文？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：机密邮件 / 信息有效期
- Human Process：机密邮件与过期访问
- Human Problem：收件人在出差后错过机密邮件有效期
- 反常：现实中的预期与系统实际行为发生偏差；限定在所引来源可支持的具体条件
- Human Tension：已送达的消息 vs 有限期访问授权
- Controlling Question：面对这一真实事件，普通人如何区分界面直觉、已完成的动作与系统实际状态？
- 科技改变的过程：机密邮件由服务端控制消息访问权限，过期后可失效
- 主机制：Gmail 机密模式支持设过期时间和撤销访问，收件箱条目不是永久阅读授权
- Audience Payoff：邮件可保留元数据但内容访问权限已因过期被撤销
- Meaning Fingerprint：`已送达的消息 vs 有限期访问授权｜Gmail 机密模式支持设过期时间和撤`
- Motif：收到了合同→出差回来打开→显示已失效
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/mail/answer/7674059?co=GENIE.Platform%3DDesktop&hl=en-GB
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H095
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H074 — 医院摄像头泄露

- 最终选题：**医院里的摄像头原本为了安全，为什么黑客可能看见患者的私密影像？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：医院摄像头泄露
- Human Process：消费者使用数字产品做出真实选择与授权
- Human Problem：FTC 指控 Verkada 网络摄像头安全措施不足，入侵者访问十余万路摄像头
- 反常：本应更安全、便利或公正的服务带来未被预期的风险或代价
- Human Tension：病人安全 vs 隐私泄露
- Controlling Question：哪一个具体的技术、权限或数据状态改变了人的实际结果？
- 科技改变的过程：技术平台将人的身份、行为或数字服务转为可跨系统执行的数据流
- 主机制：联网安防设备的集中后台如果缺乏有效密码、权限和网络保护，会扩大攻击者访问面
- Audience Payoff：理解病人安全 vs 隐私泄露所涉及的真实产品/监管边界，而不把营销说法直接当成已验证结果
- Meaning Fingerprint：`病人安全 vs 隐私泄露｜联网安防设备的集中后台如果缺乏有效密码、权限和网络`
- Motif：医院装安防摄像头→平台管理后台被入侵→患者画面暴露
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2024/08/ftc-takes-action-against-security-camera-firm-verkada-over-charges-it-failed-secure-videos-other
- 证据适用边界：仅以监管公开投诉、执法调查或和解披露的具体事实范围为限；应使用‘FTC 指控/调查发现’措辞，不把尚未判决的争议当作全部确定事实。
- Status：PASS_CANDIDATE
- 历史来源编号：从旧百题库 H097 位置换入新的独立现实案例，不能沿用原题身份
- 本轮复核说明：优先审核真实人的代价、主机制与同构；有清晰来源，但尚未完成正式 Part 1 全 Gate + Part 2 可讲性审查。

---

- 最终选题：**Zoom 开了‘主持人前入会’，为什么同事还在等候室？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：职场协作
- Human Process：职场协作：主持人迟到
- Human Problem：主持人错误假设单一选项决定提前入会
- 反常：提前参加 vs 等候室安全
- Human Tension：提前参加 vs 等候室安全
- Controlling Question：Zoom 开了‘主持人前入会’，为什么同事还在等候室？
- 科技改变的过程：Zoom 等候室设置可能覆盖主持人前入会设置
- 主机制：Zoom 等候室设置可能覆盖主持人前入会设置
- Audience Payoff：区分提前参加 vs 等候室安全的机制与条件
- Meaning Fingerprint：`提前参加 vs 等候室安全｜Zoom 等候室设置可能覆盖主持人前入`
- Motif：主持人迟到→同事卡住→检查冲突设置
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0082131
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE
- 历史来源编号：2026-10-08 旧百题库 H097
- 本轮复核说明：来源足以构成具体现实信号；仍须在正式 PASS 前检验独立冲突、可讲性、D1–D5，单一 FAQ 不可自动生产。

---

## H075 — 游戏误购

- 最终选题：**玩《堡垒之夜》时只是想预览商品，为什么按一下按钮就被扣钱？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：游戏误购
- Human Process：游戏误购：消费者在做选择、交钱或保护自己
- Human Problem：商品浏览和购买确认被混在容易误触的界面动作中
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：预览 vs 授权购买
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：购买前缺少明确确认动作；不能把所有游戏买入都说成同类问题
- Audience Payoff：明白预览 vs 授权购买背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`预览 vs 授权购买｜购买前缺少明确确认动作；不能把所有游戏买入都`
- Motif：浏览→误触→账单争议→寻找确认流程
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2024/12/ftc-sends-refund-payments-consumers-impacted-epic-games-unlawful-billing-practices
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H076 — 游戏支付争议

- 最终选题：**游戏里的误扣款向银行投诉后，为什么玩家反而可能失去账号？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：游戏支付争议
- Human Process：游戏支付争议：消费者在做选择、交钱或保护自己
- Human Problem：监管报告的特定游戏投诉中，争议交易后账号被锁定
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：纠纷求助 vs 内容访问
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：账单争议处理和账户访问是不同平台状态
- Audience Payoff：明白纠纷求助 vs 内容访问背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`纠纷求助 vs 内容访问｜账单争议处理和账户访问是不同平台状态`
- Motif：误买→拒付争议→失去游戏权限→重新核对处理规则
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2023/03/ftc-finalizes-order-requiring-fortnite-maker-epic-games-pay-245-million-tricking-users-making
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H077 — 抽卡真实花费

- 最终选题：**抽卡明明只需游戏币，为什么孩子很难算清已经花了多少钱？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：抽卡真实花费
- Human Process：抽卡真实花费：消费者在做选择、交钱或保护自己
- Human Problem：监管指控游戏采用多层虚拟币兑换模糊实际开箱成本
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：虚拟币便利 vs 真实成本
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：现实现金需跨多层虚拟货币兑换，弱化费用可见性
- Audience Payoff：明白虚拟币便利 vs 真实成本背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`虚拟币便利 vs 真实成本｜现实现金需跨多层虚拟货币兑换，弱化费用可见性`
- Motif：充值→多轮兑换→追逐限定角色→核对实际金额
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2025/01/genshin-impact-game-developer-will-be-banned-selling-lootboxes-teens-under-16-without-parental
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H078 — 匿名社交

- 最终选题：**匿名提问箱突然收到暧昧留言，为什么付钱才发现可能没人发过？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：匿名社交
- Human Process：匿名社交：消费者在做选择、交钱或保护自己
- Human Problem：监管指控匿名消息产品使用自动生成的假来信诱导付费
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：真实关注 vs 机器伪装
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：机器人伪装熟人来信并售卖所谓发件人身份提示
- Audience Payoff：明白真实关注 vs 机器伪装背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`真实关注 vs 机器伪装｜机器人伪装熟人来信并售卖所谓发件人身份提示`
- Motif：收到匿名消息→猜熟人→付费解密→得到无用提示
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-alleges-sendit-app-its-ceo-unlawfully-collected-personal-data-children-deceived-users-about
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H079 — AI营销承诺

- 最终选题：**广告商被告知手机会偷听聊天精准投广告，为什么官方调查说服务并不靠录音？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：AI营销承诺
- Human Process：AI营销承诺：消费者在做选择、交钱或保护自己
- Human Problem：监管指控有关公司夸大 AI ‘主动聆听’定向营销能力
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：能力营销 vs 事实机制
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：营销服务对客户的技术能力陈述与实际所用数据来源不一致
- Audience Payoff：明白能力营销 vs 事实机制背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`能力营销 vs 事实机制｜营销服务对客户的技术能力陈述与实际所用数据来`
- Motif：采购广告方案→相信偷听定位→监管发现功能主张不成立
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2026/08/ftc-finalizes-orders-cox-media-group-two-other-firms-settling-charges-they-deceived-customers-about
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H080 — AI检测

- 最终选题：**AI 文本检测器号称能识别机器写作，为什么监管检测结果接近猜硬币？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：AI检测
- Human Process：AI检测：消费者在做选择、交钱或保护自己
- Human Problem：监管针对特定产品准确率宣传提出无证据指控
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：真假判断 vs 检测可信度
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：特定检测器的测试表现不足以支撑其营销准确率
- Audience Payoff：明白真假判断 vs 检测可信度背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`真假判断 vs 检测可信度｜特定检测器的测试表现不足以支撑其营销准确率`
- Motif：把文章交检测→按结果怀疑作者→查看真实测试
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://search.ftc.gov/news-events/news/press-releases/2025/04/ftc-order-requires-workado-back-artificial-intelligence-detection-claims
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H081 — 人脸识别宣传

- 最终选题：**厂家说人脸识别‘零偏见’，为什么监管机构要求先拿出测试？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：人脸识别宣传
- Human Process：人脸识别宣传：消费者在做选择、交钱或保护自己
- Human Problem：FTC 称具体厂商缺少其号称的零性别/种族偏差依据
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：技术宣传 vs 可检验性能
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：模型准确度和群体公平性须经可靠、分群检验而不是广告宣称
- Audience Payoff：明白技术宣传 vs 可检验性能背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`技术宣传 vs 可检验性能｜模型准确度和群体公平性须经可靠、分群检验而不`
- Motif：企业采购→看到零偏差承诺→审查验证证据
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-order-prohibiting-intellivision-making-deceptive-claims-about-its-facial-recognition
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H082 — 现金预支

- 最终选题：**现金预支 App 说几分钟就能借到钱，为什么实际到账额可能远低于广告？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：现金预支
- Human Process：现金预支：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 Cleo AI 误导用户可借额度与到账速度
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：紧急现金需求 vs 实际可得
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：营销宣传承诺与实际账户可获得的预支额度存在落差
- Audience Payoff：明白紧急现金需求 vs 实际可得背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`紧急现金需求 vs 实际可得｜营销宣传承诺与实际账户可获得的预支额度存在落`
- Motif：急需钱→申请预支→金额少于期待→发现订阅障碍
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/legal-library/browse/cases-proceedings/cleo-ai-inc-ftc-v
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H083 — 算法信用额度

- 最终选题：**借钱软件说算法会不断提高额度，为什么监管称实际提升要靠人工操作？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：算法信用额度
- Human Process：算法信用额度：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 FloatMe 对提高信用预支上限的算法承诺无据
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：自动提升期待 vs 人工现实
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：实际额度变更工作流与其自动化营销宣称不一致
- Audience Payoff：明白自动提升期待 vs 人工现实背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`自动提升期待 vs 人工现实｜实际额度变更工作流与其自动化营销宣称不一致`
- Motif：支付月费→期待额度自动涨→申请无果→发现人工流程
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://search.ftc.gov/news-events/news/press-releases/2024/01/ftc-acts-stop-floatmes-deceptive-free-money-promises-discriminatory-cash-advance-practices-baseless
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H084 — 转账诈骗维权

- 最终选题：**转账 App 用户报了诈骗，为什么客服反而让他们回去找银行？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：转账诈骗维权
- Human Process：转账诈骗维权：消费者在做选择、交钱或保护自己
- Human Problem：CFPB 指称 Cash App 将部分欺诈消费者引导银行申诉又拒绝相关退款
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：求助流程 vs 责任归属
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：支付应用与合作银行的投诉责任被来回转移
- Audience Payoff：明白求助流程 vs 责任归属背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`求助流程 vs 责任归属｜支付应用与合作银行的投诉责任被来回转移`
- Motif：被骗→App投诉→银行投诉→再次被退回
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.consumerfinance.gov/archive/newsroom/cfpb-orders-operator-of-cash-app-to-pay-175-million-and-fix-its-failures-on-fraud/
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H085 — 抽奖误导

- 最终选题：**明明是免费抽奖，为什么填写到一半总觉得不买东西就没法中奖？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：抽奖误导
- Human Process：抽奖误导：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 PCH 的数字流程让用户误认购买可提高中奖机会
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：免费资格 vs 购买压力
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：流程次序与提示文案模糊了抽奖资格和购物之间的独立性
- Audience Payoff：明白免费资格 vs 购买压力背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`免费资格 vs 购买压力｜流程次序与提示文案模糊了抽奖资格和购物之间的`
- Motif：参加免费抽奖→被引导购物→担心不买没报名
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/legal-library/browse/cases-proceedings/182-3145-publishers-clearing-house-llc-pch-ftc-v
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H086 — 超市误识别

- 最终选题：**只是进药店买东西，为什么人脸识别系统可能把顾客当作盗窃嫌疑人？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：超市误识别
- Human Process：超市误识别：消费者在做选择、交钱或保护自己
- Human Problem：FTC 调查指出 Rite Aid 部署的识别系统产生大量假阳性
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：预防盗窃 vs 无辜顾客
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：低质量图像与阈值/复核管理不足导致误匹配被当作可行动的风险标签
- Audience Payoff：明白预防盗窃 vs 无辜顾客背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`预防盗窃 vs 无辜顾客｜低质量图像与阈值/复核管理不足导致误匹配被当`
- Motif：进店→系统告警→被员工怀疑→查明假阳性
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://search.ftc.gov/news-events/news/press-releases/2023/12/rite-aid-banned-using-ai-facial-recognition-after-ftc-says-retailer-deployed-technology-without
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H087 — 浏览隐私

- 最终选题：**安装防跟踪软件本来为保护隐私，为什么它反而可能出售浏览记录？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：浏览隐私
- Human Process：浏览隐私：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 Avast 以保护隐私宣传同时收集出售浏览数据
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：防追踪承诺 vs 自身数据销售
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：第三方追踪防护和应用自身收集出售数据是独立信任边界
- Audience Payoff：明白防追踪承诺 vs 自身数据销售背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`防追踪承诺 vs 自身数据销售｜第三方追踪防护和应用自身收集出售数据是独立信`
- Motif：安装保护软件→打开设置→发现销售记录被监管调查
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2024/06/ftc-finalizes-order-avast-banning-it-selling-or-licensing-web-browsing-data-advertising-requiring-it
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H088 — 处方隐私

- 最终选题：**只是想查药价，为什么药物信息可能被用于社交平台广告？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：处方隐私
- Human Process：处方隐私：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 GoodRx 将处方/药品与个人标识信息提供广告平台
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：便捷取药 vs 健康隐私
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：健康服务数据与广告定向系统之间发生未授权共享
- Audience Payoff：明白便捷取药 vs 健康隐私背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`便捷取药 vs 健康隐私｜健康服务数据与广告定向系统之间发生未授权共享`
- Motif：查询处方优惠→收到敏感药品定向广告→调查信息流向
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2023/02/ftc-enforcement-action-bar-goodrx-sharing-consumers-sensitive-health-info-advertising
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H089 — 家庭摄像头隐私

- 最终选题：**装了室内安防摄像头保护孩子，为什么公司员工却可能看见卧室视频？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：家庭摄像头隐私
- Human Process：家庭摄像头隐私：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 Ring 允许部分员工与承包商访问消费者私密影像
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：家庭安全 vs 公司内部权限
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：缺乏访问权限最小化与审核隔离，让内部人员越权浏览摄像头内容
- Audience Payoff：明白家庭安全 vs 公司内部权限背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`家庭安全 vs 公司内部权限｜缺乏访问权限最小化与审核隔离，让内部人员越权`
- Motif：购买摄像头→上传云端→不知情内部访问→监管调查
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2023/05/ftc-says-ring-employees-illegally-surveilled-customers-failed-stop-hackers-taking-control-users
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H090 — 儿童语音隐私

- 最终选题：**父母明明删了孩子对 Alexa 说的话，为什么语音文字记录可能仍保存多年？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：儿童语音隐私
- Human Process：儿童语音隐私：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 Amazon 未在家长提出删除后完整删除儿童语音文字数据
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：删除权 vs 算法训练留存
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：表面删除操作与后台转录文本/训练数据的真实生命周期不一致
- Audience Payoff：明白删除权 vs 算法训练留存背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`删除权 vs 算法训练留存｜表面删除操作与后台转录文本/训练数据的真实生`
- Motif：家长点击删除→以为声音消失→发现转录仍保存
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://search.ftc.gov/news-events/news/press-releases/2023/05/ftc-doj-charge-amazon-violating-childrens-privacy-law-keeping-kids-alexa-voice-recordings-forever
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H091 — AI创业承诺

- 最终选题：**AI 客服被宣传能让小老板月入百万，为什么投入大笔钱却未能兑现？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：AI创业承诺
- Human Process：AI创业承诺：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 Air AI 的 AI 创收与退款保证宣传误导小企业
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：技术红利期待 vs 商业事实
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：未来收益承诺与可验证客户收益分布/真实退款条件分离
- Audience Payoff：明白技术红利期待 vs 商业事实背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`技术红利期待 vs 商业事实｜未来收益承诺与可验证客户收益分布/真实退款条`
- Motif：被收益广告吸引→买高价方案→收入不达标→退款争议
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2025/08/ftc-sues-stop-air-ai-using-deceptive-claims-about-business-growth-earnings-potential-refund
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H092 — AI法律服务

- 最终选题：**买了‘机器人律师’会员，为什么监管要求它停止声称能替代真人律师？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：AI法律服务
- Human Process：AI法律服务：消费者在做选择、交钱或保护自己
- Human Problem：FTC 裁定具体公司的律师替代宣传缺少充分测试
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：自动文书 vs 专业责任
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：自动生成法律文书不等于通过专业法律执业水准的可靠验证
- Audience Payoff：明白自动文书 vs 专业责任背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`自动文书 vs 专业责任｜自动生成法律文书不等于通过专业法律执业水准的`
- Motif：订阅法律工具→信任营销→审查其测试与适用限制
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2025/02/ftc-finalizes-order-donotpay-prohibits-deceptive-ai-lawyer-claims-imposes-monetary-relief-requires
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H093 — 评价收集时机

- 最终选题：**刚点完‘付款’，还没收到货，为什么商品页面就出现一条‘买家好评’？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：评价收集时机
- Human Process：评价收集时机：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 Sitejabber 将购买时收集的结账评价呈现为使用后产品评价
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：结账满意 vs 产品质量
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：交易体验评分与收到实物后的使用满意度不是同一测量对象
- Audience Payoff：明白结账满意 vs 产品质量背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`结账满意 vs 产品质量｜交易体验评分与收到实物后的使用满意度不是同一`
- Motif：付款→立刻被要求打分→其他买家以为是真实使用评价
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://search.ftc.gov/news-events/news/press-releases/2024/11/ftc-order-against-ai-enabled-review-platform-sitejabber-will-ensure-consumers-get-truthful-accurate
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H094 — 位置经纪交易

- 最终选题：**我只是在手机上授权了一个定位 App，为什么陌生公司能知道我去过哪些敏感场所？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：位置经纪交易
- Human Process：位置经纪交易：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 Kochava 收集出售可追踪敏感地点访问的精确定位数据
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：本地权限 vs 下游转售
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：跨应用数据采购/经纪可聚合个体设备位置轨迹
- Audience Payoff：明白本地权限 vs 下游转售背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`本地权限 vs 下游转售｜跨应用数据采购/经纪可聚合个体设备位置轨迹`
- Motif：打开定位权限→跨App交易→访问敏感地点可被推断
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2026/05/ftc-ban-kochava-subsidiary-selling-sensitive-location-data-settle-charges-they-sold-location-data
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H095 — 旅游隐藏费用

- 最终选题：**订机票时 VIP 服务明明是可选项，为什么结账却被悄悄算进总价？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：旅游隐藏费用
- Human Process：旅游隐藏费用：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 Hopper 预先勾选并隐蔽收费选项
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：自愿加购 vs 隐性默认
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：预选勾选与分层报价把被动默认转为付费
- Audience Payoff：明白自愿加购 vs 隐性默认背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`自愿加购 vs 隐性默认｜预选勾选与分层报价把被动默认转为付费`
- Motif：看到低价→一路结账→账单冒出服务费→追查默认勾选
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2026/07/travel-app-hopper-pay-35-million-settle-ftc-allegations-it-charged-fees-without-consent-deceived
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H096 — 订阅取消失败

- 最终选题：**线上辅导会员明明点了取消，为什么部分用户仍然继续收到扣款？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：订阅取消失败
- Human Process：订阅取消失败：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 Chegg 对大量用户取消请求仍继续收费
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：取消动作 vs 系统履约
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：取消请求被界面接受并不等于实际后端扣款授权终止
- Audience Payoff：明白取消动作 vs 系统履约背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`取消动作 vs 系统履约｜取消请求被界面接受并不等于实际后端扣款授权终`
- Motif：点击取消→再次扣款→核对商户处理记录
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2025/09/ed-tech-provider-chegg-pay-75-million-settle-ftc-allegations-concerning-unlawful-cancellation
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H097 — 职场AI效用

- 最终选题：**员工觉得 AI 能明显加快工作，为什么不认为质量也同样提高？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：职场AI效用
- Human Process：职场AI效用：消费者在做选择、交钱或保护自己
- Human Problem：Pew 2025 调查中AI用户更常认为提速显著，而非品质改善同样显著
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：速度 vs 质量
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：生成/编辑效率提升与人类评价最终质量是两个不同指标
- Audience Payoff：明白速度 vs 质量背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`速度 vs 质量｜生成/编辑效率提升与人类评价最终质量是两个不`
- Motif：调查AI使用者→比较提速与质量评价→思考真正产出
- Content Job：DISCOVERY
- Source / Signal：RESEARCH_OBSERVATION；https://www.pewresearch.org/social-trends/2025/02/25/workers-experience-with-ai-chatbots-in-their-jobs/
- 证据适用边界：Pew 调查仅呈现调查对象报告的使用感受，不证明效率提高直接造成品质下降。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H098 — AI引用事故

- 最终选题：**律师把 AI 找来的法律引用写进法庭文件，为什么可能反而连累案件？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：AI引用事故
- Human Process：AI引用事故：消费者在做选择、交钱或保护自己
- Human Problem：真实司法报道记录法院文件出现疑似 AI 生成的错误法律引证
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：引用外观 vs 证据存在
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：语言模型输出的引证格式不能替代文献存在性与法律适用性核对
- Audience Payoff：明白引用外观 vs 证据存在背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`引用外观 vs 证据存在｜语言模型输出的引证格式不能替代文献存在性与法`
- Motif：准备法律文书→引用错误→法官核查→当事人权益受牵连
- Content Job：DISCOVERY
- Source / Signal：REPORTED_CASE；https://www.reuters.com/legal/litigation/judge-warns-ai-could-stunt-lawyers-training-harm-their-clients-2026-10-02/
- 证据适用边界：路透报道是具体司法案件，不代表所有法律工作者或所有模型。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H099 — 交友数据承诺

- 最终选题：**交友 App 承诺保护个人照片，为什么照片库却可能流入没有业务关系的公司？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：交友数据承诺
- Human Process：交友数据承诺：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 OkCupid 未遵守隐私承诺，将数百万用户照片供无关第三方使用
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：亲密交友需求 vs 数据流转
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：隐私政策和具体数据分享合同/权限机制存在落差
- Audience Payoff：明白亲密交友需求 vs 数据流转背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`亲密交友需求 vs 数据流转｜隐私政策和具体数据分享合同/权限机制存在落差`
- Motif：上传交友照片→以为仅用于匹配→第三方获海量素材
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://search.ftc.gov/news-events/news/press-releases/2026/03/ftc-takes-action-against-match-okcupid-deceiving-users-sharing-personal-data-third-party
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

## H100 — 未成年匿名App

- 最终选题：**孩子只是玩匿名留言软件，为什么平台可能未经家长同意收集照片和生日？**
- 选题类型：判断 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：未成年匿名App
- Human Process：未成年匿名App：消费者在做选择、交钱或保护自己
- Human Problem：FTC 指控 Sendit 明知有13岁以下用户，却未取得适当家长同意便收集个人信息
- 反常：用户预期得到便利、保护或承诺服务，现实中却发生与期待相反的结果
- Human Tension：儿童社交便利 vs 数据同意权
- Controlling Question：谁作出了决定、承诺在哪一步失效、真实后果由什么流程触发？
- 科技改变的过程：数字平台将身份、支付、信息或交易变为可自动执行与验证的流程
- 主机制：实名年龄与家长授权保护在面向未成年人的产品实际落地失效
- Audience Payoff：明白儿童社交便利 vs 数据同意权背后的关键操作条件，能分清可观察事实、宣传承诺与实际后果
- Meaning Fingerprint：`儿童社交便利 vs 数据同意权｜实名年龄与家长授权保护在面向未成年人的产品实`
- Motif：注册匿名App→填入生日和账号→家长才发现数据收集
- Content Job：DISCOVERY
- Source / Signal：REGULATORY_CASE；https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-alleges-sendit-app-its-ceo-unlawfully-collected-personal-data-children-deceived-users-about
- 证据适用边界：监管公开调查/投诉/和解仅支持所涉主体及时间段；以 FTC 指控为事实描述，不将指控当作普遍已证实行为或最终司法认定。
- Status：PASS_CANDIDATE
- 历史来源编号：新增案例
- 本轮复核说明：能追溯具体真实材料且具有人物后果，但不得未经逐条 Part 1 D1–D5 和故事价值核查就自动进入制作。

---

