# Part 0 — 现实问题优先选题库

> 更新：2026-10-08；现行选题 100 题，逐题保留真实来源、对应机制与适用边界。本库是 Part 1 事实与去重审查后的选题候选池，不代表每一题都适合立即制作 3–5 分钟视频。只有经来源回读、D1–D5 与故事价值再审通过的题才可按 `PASS` 进入 Part 2。

## 本轮补证与重建

- 上一版 30 题中 17 个 `EVIDENCE_PENDING` 不原样继承；无可靠出处或来源与主张不匹配者，已从现行库移除。旧 30 题与其历史素材可通过 Git 历史追溯。
- 重新从产品官方帮助、监管执法与消费者建议、直接可访问的真实用户经历、研究中发现选题；不复用无法核验的来源，不因历史制作成本保留弱题。
- `VERIFIED_BEHAVIOR` 只能证明指定产品行为及条件；`OBSERVED_CASE` 只能证明特定事实或监管已讨论的风险；研究不等于所有用户都会遇到。选题若不能由故事自然承载，只做候选而非制作 PASS。
- 本版编号 H001–H100 仅适用于 2026-10-08 此库存。此前 94 题、30 题和 X 库素材包的同编号均为历史命名空间，严禁按编号自动映射。旧版原文及其删改差异由 Git 历史保留。
- D1–D5 审查重点：同一来源可能有不同真实机制（如云端删除、离线授权、诈骗身份冒充）；核心人的后果、主机制、观众收获如实质相同须进一步合并。同题不同产品不算新题。
- 审核状态词：`PASS` = 已通过来源证据和本轮基本 D1–D5 可入下一步写作的候选；`CANDIDATE / EDITORIAL_REVIEW` = 来源存在但故事收获与独立性仍需更严格的人类审阅。严禁把链接存在自动等同于正式 PASS。

---

## H001 — 照片与家庭

- 最终选题：**照片刚从手机删掉，为什么家人的 iCloud 设备也跟着没了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：照片与家庭：整理手机
- Human Problem：用户把同步照片库当成相互独立的副本
- 反常：备份直觉 vs 同步状态
- Human Tension：备份直觉 vs 同步状态
- Controlling Question：照片刚从手机删掉，为什么家人的 iCloud 设备也跟着没了？
- 科技改变的过程：iCloud Photos 同步删除会传播到启用它的设备
- 主机制：iCloud Photos 同步删除会传播到启用它的设备
- Audience Payoff：看懂照片刚从手机删掉，为什么家人的 iCloud 设备也跟着没了背后具体的权限、状态或事实边界
- Meaning Fingerprint：`备份直觉 vs 同步状态｜iCloud Photos 同步删除会`
- Motif：整理手机→另一设备照片消失→核对共享同步开关
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-us/108782
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H002 — 照片与家庭

- 最终选题：**删掉的合照还能找回，为什么过了恢复期限就不行了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：照片与家庭：误删合照
- Human Problem：用户误把最近删除当成永久垃圾箱备份
- 反常：可撤销窗口 vs 永久丢失
- Human Tension：可撤销窗口 vs 永久丢失
- Controlling Question：删掉的合照还能找回，为什么过了恢复期限就不行了？
- 科技改变的过程：照片的最近删除通常保留30天，超过恢复窗口不保证可找回
- 主机制：照片的最近删除通常保留30天，超过恢复窗口不保证可找回
- Audience Payoff：看懂删掉的合照还能找回，为什么过了恢复期限就不行了背后具体的权限、状态或事实边界
- Meaning Fingerprint：`可撤销窗口 vs 永久丢失｜照片的最近删除通常保留30天，超过恢复`
- Motif：误删合照→翻找最近删除→倒计时选择
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-us/104967
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H003 — 照片与家庭

- 最终选题：**iCloud 显示照片还在，手机上为什么只有压缩版？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：照片与家庭：外出离线放大照片
- Human Problem：用户以为优化存储就是将云端原件直接留在本机
- 反常：本地清晰度 vs 空间节约
- Human Tension：本地清晰度 vs 空间节约
- Controlling Question：iCloud 显示照片还在，手机上为什么只有压缩版？
- 科技改变的过程：优化存储按容量保留设备小体积副本，云端存原件
- 主机制：优化存储按容量保留设备小体积副本，云端存原件
- Audience Payoff：看懂iCloud 显示照片还在，手机上为什么只有压缩版背后具体的权限、状态或事实边界
- Meaning Fingerprint：`本地清晰度 vs 空间节约｜优化存储按容量保留设备小体积副本，云端`
- Motif：外出离线放大照片→发现需要取回原图
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-us/108782
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H004 — 照片与家庭

- 最终选题：**一家人共用照片库，为什么一个人删除照片会影响所有人？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：照片与家庭：家庭合影被移除
- Human Problem：共享家庭照片的删除权限比许多人预想更大
- 反常：共同协作 vs 误删连带
- Human Tension：共同协作 vs 误删连带
- Controlling Question：一家人共用照片库，为什么一个人删除照片会影响所有人？
- 科技改变的过程：共享照片库成员可以删除照片；最近删除权限与原贡献者有关
- 主机制：共享照片库成员可以删除照片；最近删除权限与原贡献者有关
- Audience Payoff：看懂一家人共用照片库，为什么一个人删除照片会影响所有人背后具体的权限、状态或事实边界
- Meaning Fingerprint：`共同协作 vs 误删连带｜共享照片库成员可以删除照片；最近删除权`
- Motif：家庭合影被移除→全员看不到→追问是谁可恢复
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-euro/118229
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H005 — 照片与家庭

- 最终选题：**退出家庭共享相册，为什么加入时间不同拿到的照片也不同？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：照片与家庭：短期家庭协作结束
- Human Problem：退出共享照片库时成员不了解副本归属
- 反常：共享方便 vs 离开后的所有权
- Human Tension：共享方便 vs 离开后的所有权
- Controlling Question：退出家庭共享相册，为什么加入时间不同拿到的照片也不同？
- 科技改变的过程：共享照片库创建者删除时按参与期限分配进入个人库的内容
- 主机制：共享照片库创建者删除时按参与期限分配进入个人库的内容
- Audience Payoff：看懂退出家庭共享相册，为什么加入时间不同拿到的照片也不同背后具体的权限、状态或事实边界
- Meaning Fingerprint：`共享方便 vs 离开后的所有权｜共享照片库创建者删除时按参与期限分配进`
- Motif：短期家庭协作结束→各自保存的照片范围不同
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-euro/118229
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H006 — 照片与家庭

- 最终选题：**一家人共用 iCloud 共享图库，为什么主账号空间满了其他人也不能继续编辑？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：照片与家庭：共同拍摄家庭活动
- Human Problem：成员误以为共享图库各自使用独立存储容量
- 反常：普通成员存储富余，共享图库却因创建者 iCloud 存储不足无法继续同步编辑
- Human Tension：共享协作 vs 单一存储责任
- Controlling Question：为什么别人的家庭照片库也会受到创建者云空间额度影响？
- 科技改变的过程：共享图库由创建者支付存储容量，写入和更新依赖这一额度
- 主机制：iCloud 共享图库创建者空间用完后，所有成员新增与元数据更改不能正常同步
- Audience Payoff：看懂一家人共用 iCloud 共享图库，为什么主账号空间满了其他人也不能继续编辑背后具体的权限、状态或事实边界
- Meaning Fingerprint：`共享协作 vs 单一存储责任｜iCloud 共享图库创建者空间用完后`
- Motif：共同拍摄家庭活动→照片传不上→查主账户存储空间
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-euro/118229
- 证据适用边界：Apple 官方共享图库说明：创建者存储满会停止同步新增和元数据，不应推断已有照片必然立即消失。
- Status：PASS_CANDIDATE

---

## H007 — 手机与硬件

- 最终选题：**iPhone 自动卸载了很久没用的 App，为什么重装后资料还在？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：手机与硬件：手机报警容量不足
- Human Problem：用户将卸载与彻底删除混为一谈
- 反常：清理容量 vs 保留个人内容
- Human Tension：清理容量 vs 保留个人内容
- Controlling Question：iPhone 自动卸载了很久没用的 App，为什么重装后资料还在？
- 科技改变的过程：卸载 App 释放程序空间但可保留文档数据
- 主机制：卸载 App 释放程序空间但可保留文档数据
- Audience Payoff：看懂iPhone 自动卸载了很久没用的 App，为什么重装后资料还在背后具体的权限、状态或事实边界
- Meaning Fingerprint：`清理容量 vs 保留个人内容｜卸载 App 释放程序空间但可保留文档`
- Motif：手机报警容量不足→App被卸载→重装资料还在
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-ca/108429
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H008 — 手机与硬件

- 最终选题：**明明插着充电器，为什么 iPhone 停在80%不充了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：手机与硬件：睡前充电
- Human Problem：用户误以为充电卡住就是电池坏了
- 反常：立即充满 vs 电池寿命
- Human Tension：立即充满 vs 电池寿命
- Controlling Question：明明插着充电器，为什么 iPhone 停在80%不充了？
- 科技改变的过程：优化充电根据日常模式暂缓充满以降低满电停留时间
- 主机制：优化充电根据日常模式暂缓充满以降低满电停留时间
- Audience Payoff：看懂明明插着充电器，为什么 iPhone 停在80%不充了背后具体的权限、状态或事实边界
- Meaning Fingerprint：`立即充满 vs 电池寿命｜优化充电根据日常模式暂缓充满以降低满电`
- Motif：睡前充电→早晨停80%→查看智能充电行为
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-ph/guide/iphone/iph9202bbd07/ios
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H009 — 手机与硬件

- 最终选题：**设置了屏幕使用时间，为什么孩子还能继续刷？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：手机与硬件：家长设一小时
- Human Problem：默认提醒式限额被误当成强制停用
- 反常：提醒规则 vs 硬性控制
- Human Tension：提醒规则 vs 硬性控制
- Controlling Question：设置了屏幕使用时间，为什么孩子还能继续刷？
- 科技改变的过程：部分屏幕时间限额可忽略，强制阻止需正确设置限制
- 主机制：部分屏幕时间限额可忽略，强制阻止需正确设置限制
- Audience Payoff：看懂设置了屏幕使用时间，为什么孩子还能继续刷背后具体的权限、状态或事实边界
- Meaning Fingerprint：`提醒规则 vs 硬性控制｜部分屏幕时间限额可忽略，强制阻止需正确`
- Motif：家长设一小时→孩子继续使用→检查是否阻止
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/guide/iphone/set-schedules-with-screen-time-iphb0c7313c9/ios
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H010 — 手机与硬件

- 最终选题：**开了勿扰模式，为什么某个人的电话还能打进来？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：手机与硬件：工作时来电响起
- Human Problem：用户以为勿扰等于所有来电一刀切
- 反常：拒绝打扰 vs 关键联络
- Human Tension：拒绝打扰 vs 关键联络
- Controlling Question：开了勿扰模式，为什么某个人的电话还能打进来？
- 科技改变的过程：专注模式允许指定联系人和重复来电例外
- 主机制：专注模式允许指定联系人和重复来电例外
- Audience Payoff：看懂开了勿扰模式，为什么某个人的电话还能打进来背后具体的权限、状态或事实边界
- Meaning Fingerprint：`拒绝打扰 vs 关键联络｜专注模式允许指定联系人和重复来电例外`
- Motif：工作时来电响起→检查允许名单和重复来电
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/guide/iphone/allow-or-silence-notifications-for-a-focus-iph21d43af5b/ios
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H011 — 手机与硬件

- 最终选题：**行李箱里的定位器为什么可能让陌生人的手机报警？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：手机与硬件：一起出门的行李
- Human Problem：随身的追踪器可能被误判为未知跟踪行为
- 反常：找回物品 vs 防止跟踪
- Human Tension：找回物品 vs 防止跟踪
- Controlling Question：行李箱里的定位器为什么可能让陌生人的手机报警？
- 科技改变的过程：跨平台未知追踪提醒会在符合条件时发出安全提示
- 主机制：跨平台未知追踪提醒会在符合条件时发出安全提示
- Audience Payoff：看懂行李箱里的定位器为什么可能让陌生人的手机报警背后具体的权限、状态或事实边界
- Meaning Fingerprint：`找回物品 vs 防止跟踪｜跨平台未知追踪提醒会在符合条件时发出安`
- Motif：一起出门的行李→陌生人收到跟踪警告→检查物品身份
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/guide/personal-safety/detect-unwanted-trackers-ips139b15fd9/web
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H012 — 手机与硬件

- 最终选题：**AirTag 分享给家人后，为什么共享的人不再收到陌生跟踪警报？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：手机与硬件：伴侣共享钥匙
- Human Problem：用户忽略了共享位置也改变风险提醒逻辑
- 反常：共同定位 vs 风险警报
- Human Tension：共同定位 vs 风险警报
- Controlling Question：AirTag 分享给家人后，为什么共享的人不再收到陌生跟踪警报？
- 科技改变的过程：AirTag 共享组成员的该物品未知跟踪提醒被抑制，退出后恢复
- 主机制：AirTag 共享组成员的该物品未知跟踪提醒被抑制，退出后恢复
- Audience Payoff：看懂AirTag 分享给家人后，为什么共享的人不再收到陌生跟踪警报背后具体的权限、状态或事实边界
- Meaning Fingerprint：`共同定位 vs 风险警报｜AirTag 共享组成员的该物品未知跟`
- Motif：伴侣共享钥匙→解除共享→突然出现跟踪提示
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-ca/guide/personal-safety/ips0c073d231/web
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H013 — 手机与硬件

- 最终选题：**耳机丢了却显示‘最后位置’，为什么不代表它还在那里？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：手机与硬件：寻找耳机
- Human Problem：用户以为查找界面展示的是实时精确位置
- 反常：最后线索 vs 当前位置
- Human Tension：最后线索 vs 当前位置
- Controlling Question：耳机丢了却显示‘最后位置’，为什么不代表它还在那里？
- 科技改变的过程：不支持查找网络或离线的耳机会显示上次连接位置
- 主机制：不支持查找网络或离线的耳机会显示上次连接位置
- Audience Payoff：看懂耳机丢了却显示‘最后位置’，为什么不代表它还在那里背后具体的权限、状态或事实边界
- Meaning Fingerprint：`最后线索 vs 当前位置｜不支持查找网络或离线的耳机会显示上次连`
- Motif：寻找耳机→跑到地图地点→查设备离线说明
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-ca/guide/airpods/dev8e8b93d71/web
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H014 — 手机与硬件

- 最终选题：**iPhone 检测出严重撞车后，为什么不用按确认也可能自动呼救？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：手机与硬件：碰撞提示
- Human Problem：紧急联系的自动化同时要求留出误触取消窗口
- 反常：及时援救 vs 误报防线
- Human Tension：及时援救 vs 误报防线
- Controlling Question：iPhone 检测出严重撞车后，为什么不用按确认也可能自动呼救？
- 科技改变的过程：严重碰撞警报在规定倒计时未取消时启动紧急呼叫
- 主机制：严重碰撞警报在规定倒计时未取消时启动紧急呼叫
- Audience Payoff：看懂iPhone 检测出严重撞车后，为什么不用按确认也可能自动呼救背后具体的权限、状态或事实边界
- Meaning Fingerprint：`及时援救 vs 误报防线｜严重碰撞警报在规定倒计时未取消时启动紧`
- Motif：碰撞提示→倒计时→紧急电话启动
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/guide/iphone/manage-crash-detection-iph948a628e9/ios
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H015 — 家庭与孩子

- 最终选题：**孩子点了‘免费下载’，为什么还要家长批准？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：家庭与孩子
- Human Process：家庭与孩子：孩子下载免费游戏
- Human Problem：家庭账号设置中的免费应用也可能纳入购买审批
- 反常：独立探索 vs 家庭控制
- Human Tension：独立探索 vs 家庭控制
- Controlling Question：孩子点了‘免费下载’，为什么还要家长批准？
- 科技改变的过程：Ask to Buy 的特定设置对免费应用下载同样执行审批
- 主机制：Ask to Buy 的特定设置对免费应用下载同样执行审批
- Audience Payoff：看懂孩子点了‘免费下载’，为什么还要家长批准背后具体的权限、状态或事实边界
- Meaning Fingerprint：`独立探索 vs 家庭控制｜Ask to Buy 的特定设置对免费`
- Motif：孩子下载免费游戏→弹出家长审批
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-us/105055
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H016 — 家庭与孩子

- 最终选题：**一家人共享付费订阅，为什么最后扣的是组织者的卡？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：家庭与孩子
- Human Process：家庭与孩子：家人启用新订阅
- Human Problem：共享订阅的费用可能统一向家庭组织者收取
- 反常：家庭共享 vs 支付责任
- Human Tension：家庭共享 vs 支付责任
- Controlling Question：一家人共享付费订阅，为什么最后扣的是组织者的卡？
- 科技改变的过程：开启家庭购买共享时适用的订阅费用使用组织者付款方式
- 主机制：开启家庭购买共享时适用的订阅费用使用组织者付款方式
- Audience Payoff：看懂一家人共享付费订阅，为什么最后扣的是组织者的卡背后具体的权限、状态或事实边界
- Meaning Fingerprint：`家庭共享 vs 支付责任｜开启家庭购买共享时适用的订阅费用使用组`
- Motif：家人启用新订阅→组织者收到扣费记录
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-lamr/guide/iphone/iph6e7917d3f/ios
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H017 — 旅行与出行

- 最终选题：**地图早已下载到手机，为什么断网后就看不到实时拥堵？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：旅行与出行
- Human Process：旅行与出行：山区开车断网
- Human Problem：用户误以为离线地图具备在线交通更新能力
- 反常：离线可用 vs 实时数据
- Human Tension：离线可用 vs 实时数据
- Controlling Question：地图早已下载到手机，为什么断网后就看不到实时拥堵？
- 科技改变的过程：离线地图可用于指定道路导航但无法取得实时交通或替代路线
- 主机制：离线地图可用于指定道路导航但无法取得实时交通或替代路线
- Audience Payoff：看懂地图早已下载到手机，为什么断网后就看不到实时拥堵背后具体的权限、状态或事实边界
- Meaning Fingerprint：`离线可用 vs 实时数据｜离线地图可用于指定道路导航但无法取得实`
- Motif：山区开车断网→失去拥堵信息→决定是否离线行驶
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/maps/answer/6291838?hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H018 — 旅行与出行

- 最终选题：**离线地图能导航开车，为什么步行和公交却不行？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：旅行与出行
- Human Process：旅行与出行：到陌生城市没有网络
- Human Problem：用户把所有导航模式都当成静态地图计算
- 反常：地图下载 vs 出行模式完整性
- Human Tension：地图下载 vs 出行模式完整性
- Controlling Question：离线地图能导航开车，为什么步行和公交却不行？
- 科技改变的过程：Google Maps 离线状态不支持公交、步行与骑行路线
- 主机制：Google Maps 离线状态不支持公交、步行与骑行路线
- Audience Payoff：看懂离线地图能导航开车，为什么步行和公交却不行背后具体的权限、状态或事实边界
- Meaning Fingerprint：`地图下载 vs 出行模式完整性｜Google Maps 离线状态不支持`
- Motif：到陌生城市没有网络→切换公交失败→改方案
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/maps/answer/6291838?hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H019 — 旅行与出行

- 最终选题：**换了手机后，为什么过去去过的地方在电脑上也找不到？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：旅行与出行
- Human Process：旅行与出行：手机损坏
- Human Problem：用户以为 Google 地图时间线永久存放在统一网页账户
- 反常：设备隐私 vs 跨端可找回
- Human Tension：设备隐私 vs 跨端可找回
- Controlling Question：换了手机后，为什么过去去过的地方在电脑上也找不到？
- 科技改变的过程：时间线转向设备本地存储，电脑端已不可用且备份需另行开启
- 主机制：时间线转向设备本地存储，电脑端已不可用且备份需另行开启
- Audience Payoff：看懂换了手机后，为什么过去去过的地方在电脑上也找不到背后具体的权限、状态或事实边界
- Meaning Fingerprint：`设备隐私 vs 跨端可找回｜时间线转向设备本地存储，电脑端已不可用`
- Motif：手机损坏→电脑查看时间线→发现要找原设备或备份
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/maps/answer/6258979/google-maps-timeline-android
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H020 — 旅行与出行

- 最终选题：**换机后过去三年的轨迹突然消失，是地图删了还是没搬过来？**
- 选题类型：体验 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：旅行与出行
- Human Process：旅行与出行：换手机
- Human Problem：真实用户报告时间线迁移后失去历史记录
- 反常：迁移方便 vs 历史数据留存
- Human Tension：迁移方便 vs 历史数据留存
- Controlling Question：换机后过去三年的轨迹突然消失，是地图删了还是没搬过来？
- 科技改变的过程：设备本地时间线迁移及备份的开关与旧网页展示不同
- 主机制：设备本地时间线迁移及备份的开关与旧网页展示不同
- Audience Payoff：看懂换机后过去三年的轨迹突然消失，是地图删了还是没搬过来背后具体的权限、状态或事实边界
- Meaning Fingerprint：`迁移方便 vs 历史数据留存｜设备本地时间线迁移及备份的开关与旧网页`
- Motif：换手机→找旧轨迹→发现本地与云端备份不一致
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://support.google.com/maps/thread/346697488/google-maps-timeline-history-deleted?hl=en
- 证据适用边界：具体当事人自述仅能证明曾有此类经历，不能代表所有用户或地区。
- Status：PASS_CANDIDATE

---

## H021 — 旅行与出行

- 最终选题：**好心纠正地图商家的营业时间，为什么系统不立即照改？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：旅行与出行
- Human Process：旅行与出行：发现关门时间错误
- Human Problem：当事人以为提交修改就会直接展示在地图上
- 反常：众包纠错 vs 平台核验
- Human Tension：众包纠错 vs 平台核验
- Controlling Question：好心纠正地图商家的营业时间，为什么系统不立即照改？
- 科技改变的过程：地图地点修改需审核，结果可能通过、等待或被拒绝
- 主机制：地图地点修改需审核，结果可能通过、等待或被拒绝
- Audience Payoff：看懂好心纠正地图商家的营业时间，为什么系统不立即照改背后具体的权限、状态或事实边界
- Meaning Fingerprint：`众包纠错 vs 平台核验｜地图地点修改需审核，结果可能通过、等待`
- Motif：发现关门时间错误→报错→隔天仍旧未更新
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/maps/answer/7055486?co=GENIE.Platform%3DDesktop&hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H022 — 旅行与出行

- 最终选题：**地图的错误地址都有人举报了，为什么顾客还是被带到错误地点？**
- 选题类型：体验 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：旅行与出行
- Human Process：旅行与出行：到店客户走错
- Human Problem：地图错误地点被举报却未通过修正的真实营业者困扰
- 反常：数据自治 vs 平台可信审查
- Human Tension：数据自治 vs 平台可信审查
- Controlling Question：地图的错误地址都有人举报了，为什么顾客还是被带到错误地点？
- 科技改变的过程：地点编辑与重复地点合并受审核机制约束，不保证即时生效
- 主机制：地点编辑与重复地点合并受审核机制约束，不保证即时生效
- Audience Payoff：看懂地图的错误地址都有人举报了，为什么顾客还是被带到错误地点背后具体的权限、状态或事实边界
- Meaning Fingerprint：`数据自治 vs 平台可信审查｜地点编辑与重复地点合并受审核机制约束，`
- Motif：到店客户走错→店员申请改地址→编辑被拒
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://support.google.com/maps/thread/409266874/how-can-i-make-sure-a-duplicate-incorrect-address-gets-corrected-my-edit-got-denied-immediately?hl=en
- 证据适用边界：具体当事人自述仅能证明曾有此类经历，不能代表所有用户或地区。
- Status：PASS_CANDIDATE

---

## H023 — 旅行与出行

- 最终选题：**家人共享定位后，为什么可以设置‘到家了自动提醒我’？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：旅行与出行
- Human Process：旅行与出行：家长等孩子回家
- Human Problem：对行程的关心由临时询问变成持续位置事件订阅
- 反常：安全安心 vs 持续可见性
- Human Tension：安全安心 vs 持续可见性
- Controlling Question：家人共享定位后，为什么可以设置‘到家了自动提醒我’？
- 科技改变的过程：位置共享可为特定地点的进入/离开触发通知
- 主机制：位置共享可为特定地点的进入/离开触发通知
- Audience Payoff：看懂家人共享定位后，为什么可以设置‘到家了自动提醒我’背后具体的权限、状态或事实边界
- Meaning Fingerprint：`安全安心 vs 持续可见性｜位置共享可为特定地点的进入/离开触发通`
- Motif：家长等孩子回家→收到定位事件→讨论双方边界
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/maps/answer/11966807?hl=en_
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H024 — 旅行与出行

- 最终选题：**只是想分享‘我多久到’，为什么导航还能分享一路的位置？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：旅行与出行
- Human Process：旅行与出行：给朋友分享预计到达
- Human Problem：用户把 ETA 分享误当成只发送一个静态时间
- 反常：报平安 vs 行程暴露
- Human Tension：报平安 vs 行程暴露
- Controlling Question：只是想分享‘我多久到’，为什么导航还能分享一路的位置？
- 科技改变的过程：行程进度分享可包含当前定位与目的地，并随导航结束停止
- 主机制：行程进度分享可包含当前定位与目的地，并随导航结束停止
- Audience Payoff：看懂只是想分享‘我多久到’，为什么导航还能分享一路的位置背后具体的权限、状态或事实边界
- Meaning Fingerprint：`报平安 vs 行程暴露｜行程进度分享可包含当前定位与目的地，并`
- Motif：给朋友分享预计到达→看到实时位置更新→收回分享
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/maps/answer/15437054?co=GENIE.Platform%3DAndroid&hl=en-419
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H025 — 照片与家庭

- 最终选题：**Google 相册删掉了手机原件，为什么云端照片还能看？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：照片与家庭：存储告急
- Human Problem：用户误把‘释放设备空间’当成‘删除全部照片’
- 反常：设备清理 vs 云端副本
- Human Tension：设备清理 vs 云端副本
- Controlling Question：Google 相册删掉了手机原件，为什么云端照片还能看？
- 科技改变的过程：已备份照片可用释放空间操作仅移除本地副本
- 主机制：已备份照片可用释放空间操作仅移除本地副本
- Audience Payoff：看懂Google 相册删掉了手机原件，为什么云端照片还能看背后具体的权限、状态或事实边界
- Meaning Fingerprint：`设备清理 vs 云端副本｜已备份照片可用释放空间操作仅移除本地副`
- Motif：存储告急→点释放空间→网页相册仍有照片
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/photos/answer/6128843?co=GENIE.Platform%3DAndroid&hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H026 — 照片与家庭

- 最终选题：**相册照片存云端后，为什么没网时在原生相册看不见？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：照片与家庭：登机前清理手机
- Human Problem：用户认为云端保留的图片自然也在本机可离线打开
- 反常：同步可见 vs 断网可用
- Human Tension：同步可见 vs 断网可用
- Controlling Question：相册照片存云端后，为什么没网时在原生相册看不见？
- 科技改变的过程：释放设备空间后某些本机图库与离线状态无法访问云端内容
- 主机制：释放设备空间后某些本机图库与离线状态无法访问云端内容
- Audience Payoff：看懂相册照片存云端后，为什么没网时在原生相册看不见背后具体的权限、状态或事实边界
- Meaning Fingerprint：`同步可见 vs 断网可用｜释放设备空间后某些本机图库与离线状态无`
- Motif：登机前清理手机→飞行模式翻找照片→发现本地无原件
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/photos/answer/6128843?co=GENIE.Platform%3DAndroid&hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H027 — 照片与家庭

- 最终选题：**取消共享相册后，为什么对方早已保存的照片还在？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：照片与家庭：结束共享
- Human Problem：用户以为停止分享等于远端收件人手中副本也消失
- 反常：访问撤回 vs 既有副本
- Human Tension：访问撤回 vs 既有副本
- Controlling Question：取消共享相册后，为什么对方早已保存的照片还在？
- 科技改变的过程：Google Photos Partner Sharing 撤回不会自动删除对方已经保存到账户的照片
- 主机制：Google Photos Partner Sharing 撤回不会自动删除对方已经保存到账户的照片
- Audience Payoff：看懂取消共享相册后，为什么对方早已保存的照片还在背后具体的权限、状态或事实边界
- Meaning Fingerprint：`访问撤回 vs 既有副本｜Google Photos Partn`
- Motif：结束共享→对方图库依然存图→追溯副本归属
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/photos/answer/7378858?co=GENIE.Platform%3DAndroid&hl=en-0
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H028 — 云端协作

- 最终选题：**在电脑的 OneDrive 文件夹删了文件，为什么云端也没了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：云端协作：清理文件夹
- Human Problem：用户把同步目录错当本地普通文件夹
- 反常：普通文件夹直觉 vs 云同步
- Human Tension：普通文件夹直觉 vs 云同步
- Controlling Question：在电脑的 OneDrive 文件夹删了文件，为什么云端也没了？
- 科技改变的过程：OneDrive 目录里的删除会改变云端同步状态
- 主机制：OneDrive 目录里的删除会改变云端同步状态
- Audience Payoff：看懂在电脑的 OneDrive 文件夹删了文件，为什么云端也没了背后具体的权限、状态或事实边界
- Meaning Fingerprint：`普通文件夹直觉 vs 云同步｜OneDrive 目录里的删除会改变云`
- Motif：清理文件夹→同事的共享链接失效→去回收站找回
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.microsoft.com/en-us/onedrive/delete-files-or-folders-in-onedrive
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H029 — 云端协作

- 最终选题：**OneDrive 里‘有这份文件’，为什么电脑磁盘几乎不占空间？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：云端协作：出差时点开云端文件
- Human Problem：用户以为列表出现图标就意味着全部文件已下载
- 反常：随时可见 vs 实际离线拥有
- Human Tension：随时可见 vs 实际离线拥有
- Controlling Question：OneDrive 里‘有这份文件’，为什么电脑磁盘几乎不占空间？
- 科技改变的过程：文件按需功能保留占位项目，内容在访问时才下载
- 主机制：文件按需功能保留占位项目，内容在访问时才下载
- Audience Payoff：看懂OneDrive 里‘有这份文件’，为什么电脑磁盘几乎不占空间背后具体的权限、状态或事实边界
- Meaning Fingerprint：`随时可见 vs 实际离线拥有｜文件按需功能保留占位项目，内容在访问时`
- Motif：出差时点开云端文件→因离线打不开→检查占位状态
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.microsoft.com/en-us/onedrive/delete-files-or-folders-in-onedrive
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H030 — 云端协作

- 最终选题：**OneDrive 合同版本被改坏了，为什么有人能恢复上个月的内容，有人却只能找回删除的文件？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：云端协作：文档被覆盖
- Human Problem：把版本恢复、整个云盘回滚和已删除文件回收当成同一个功能
- 反常：三种功能都叫恢复，适用的权益和时间窗口却不同
- Human Tension：云端可恢复 vs 权限和时限
- Controlling Question：被覆盖的合同还能找回上个月版本，为什么所有账户都未必能做到？
- 科技改变的过程：OneDrive 相关恢复功能与订阅资格、恢复期限及拥有者身份有关
- 主机制：OneDrive 的文件版本历史、整盘恢复和回收站各有不同授权、账户与时间窗口
- Audience Payoff：看懂OneDrive 合同版本被改坏了，为什么有人能恢复上个月的内容，有人却只能找回删除的文件背后具体的权限、状态或事实边界
- Meaning Fingerprint：`云端可恢复 vs 权限和时限｜OneDrive 的文件版本历史、整盘`
- Motif：文档被覆盖→想回到旧合同→发现账户权益不同
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.microsoft.com/en-us/onedrive/restore-your-onedrive-files
- 证据适用边界：Microsoft 365 的整盘还原与文件版本恢复通常有订阅要求；一般回收站恢复另有个人/组织保存期限。
- Status：PASS_CANDIDATE

---

## H031 — 云端协作

- 最终选题：**Google Drive 分享给同事的表格，为什么一删除对方也打不开了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：云端协作：项目交接后清理账户
- Human Problem：用户将访问权限误解成独立获得文档所有权
- 反常：能打开 vs 真正拥有
- Human Tension：能打开 vs 真正拥有
- Controlling Question：Google Drive 分享给同事的表格，为什么一删除对方也打不开了？
- 科技改变的过程：文件所有者永久删除会使分享对象失去访问
- 主机制：文件所有者永久删除会使分享对象失去访问
- Audience Payoff：看懂Google Drive 分享给同事的表格，为什么一删除对方也打不开了背后具体的权限、状态或事实边界
- Meaning Fingerprint：`能打开 vs 真正拥有｜文件所有者永久删除会使分享对象失去访问`
- Motif：项目交接后清理账户→协作者发现文件失踪
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/drive/answer/2375102?hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H032 — 云端协作

- 最终选题：**把 Google Drive 文件夹转给同事，为什么里面的文件不都跟着转了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：云端协作：员工离职移交项目
- Human Problem：用户误以为转让父文件夹自动转移所有子文件所有权
- 反常：容器控制权 vs 内容所有权
- Human Tension：容器控制权 vs 内容所有权
- Controlling Question：把 Google Drive 文件夹转给同事，为什么里面的文件不都跟着转了？
- 科技改变的过程：文件夹所有权转让不自动移交内部各个文件
- 主机制：文件夹所有权转让不自动移交内部各个文件
- Audience Payoff：看懂把 Google Drive 文件夹转给同事，为什么里面的文件不都跟着转了背后具体的权限、状态或事实边界
- Meaning Fingerprint：`容器控制权 vs 内容所有权｜文件夹所有权转让不自动移交内部各个文件`
- Motif：员工离职移交项目→同事发现部分素材仍属于旧账户
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/drive/answer/7166529?hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H033 — 云端协作

- 最终选题：**共享文件夹里只想藏一份文档，为什么不能直接给它更低权限？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：云端协作：文件夹给全组
- Human Problem：用户以为每一份文件权限能无条件覆盖上级共享规则
- 反常：协作便利 vs 最小可见范围
- Human Tension：协作便利 vs 最小可见范围
- Controlling Question：共享文件夹里只想藏一份文档，为什么不能直接给它更低权限？
- 科技改变的过程：共享文件夹内权限继承与有限权限文件夹功能受产品约束
- 主机制：共享文件夹内权限继承与有限权限文件夹功能受产品约束
- Audience Payoff：看懂共享文件夹里只想藏一份文档，为什么不能直接给它更低权限背后具体的权限、状态或事实边界
- Meaning Fingerprint：`协作便利 vs 最小可见范围｜共享文件夹内权限继承与有限权限文件夹功`
- Motif：文件夹给全组→财务附件想单独藏→改结构
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/drive/answer/7166529?hl=en
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H034 — 云端协作

- 最终选题：**飞机上编辑的在线文档为什么重新联网后没有出现修改？**
- 选题类型：体验 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：云端协作：飞机改稿
- Human Problem：真实用户报告离线文档更改重新联网后未保存
- 反常：离线工作 vs 同步保证
- Human Tension：离线工作 vs 同步保证
- Controlling Question：飞机上编辑的在线文档为什么重新联网后没有出现修改？
- 科技改变的过程：离线修改暂存于特定设备，离线同步失效可能丢失
- 主机制：离线修改暂存于特定设备，离线同步失效可能丢失
- Audience Payoff：看懂飞机上编辑的在线文档为什么重新联网后没有出现修改背后具体的权限、状态或事实边界
- Meaning Fingerprint：`离线工作 vs 同步保证｜离线修改暂存于特定设备，离线同步失效可`
- Motif：飞机改稿→落地换机→发现版本仍旧
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://support.google.com/docs/thread/174551542/lost-changes-made-to-offline-document?hl=en
- 证据适用边界：具体当事人自述仅能证明曾有此类经历，不能代表所有用户或地区。
- Status：PASS_CANDIDATE

---

## H035 — 娱乐与推荐

- 最终选题：**把 YouTube 观看历史全关掉，为什么首页可能只剩搜索框？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：娱乐与推荐
- Human Process：娱乐与推荐：清空历史
- Human Problem：用户以为隐藏观看记录只会减少隐私暴露
- 反常：隐私控制 vs 推荐所需信号
- Human Tension：隐私控制 vs 推荐所需信号
- Controlling Question：把 YouTube 观看历史全关掉，为什么首页可能只剩搜索框？
- 科技改变的过程：缺少有效观看历史且停用记录时首页推荐功能可能被移除
- 主机制：缺少有效观看历史且停用记录时首页推荐功能可能被移除
- Audience Payoff：看懂把 YouTube 观看历史全关掉，为什么首页可能只剩搜索框背后具体的权限、状态或事实边界
- Meaning Fingerprint：`隐私控制 vs 推荐所需信号｜缺少有效观看历史且停用记录时首页推荐功`
- Motif：清空历史→首页变空→理解推荐依赖什么
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/95725?hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H036 — 娱乐与推荐

- 最终选题：**只是帮朋友看了一段视频，为什么之后的视频推荐可能受影响？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：娱乐与推荐
- Human Process：娱乐与推荐：朋友借账号
- Human Problem：别人借用账号看视频会写入自身观看历史
- 反常：借设备方便 vs 兴趣信号混入
- Human Tension：借设备方便 vs 兴趣信号混入
- Controlling Question：只是帮朋友看了一段视频，为什么之后的视频推荐可能受影响？
- 科技改变的过程：YouTube 使用播放历史作为首页推荐的重要信号
- 主机制：YouTube 使用播放历史作为首页推荐的重要信号
- Audience Payoff：看懂只是帮朋友看了一段视频，为什么之后的视频推荐可能受影响背后具体的权限、状态或事实边界
- Meaning Fingerprint：`借设备方便 vs 兴趣信号混入｜YouTube 使用播放历史作为首页推`
- Motif：朋友借账号→首页出现新风格→清理历史
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/16089387?hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H037 — 娱乐与推荐

- 最终选题：**点了‘不感兴趣’，为什么还可能看到同类型视频？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：娱乐与推荐
- Human Process：娱乐与推荐：连续点不喜欢
- Human Problem：用户把负面反馈当成永久全局禁止某类内容
- 反常：推荐倾向 vs 强制过滤
- Human Tension：推荐倾向 vs 强制过滤
- Controlling Question：点了‘不感兴趣’，为什么还可能看到同类型视频？
- 科技改变的过程：YouTube 的不感兴趣是调整偏好信号而非全站硬封锁
- 主机制：YouTube 的不感兴趣是调整偏好信号而非全站硬封锁
- Audience Payoff：看懂点了‘不感兴趣’，为什么还可能看到同类型视频背后具体的权限、状态或事实边界
- Meaning Fingerprint：`推荐倾向 vs 强制过滤｜YouTube 的不感兴趣是调整偏好信`
- Motif：连续点不喜欢→仍出现类似视频→检查控制范围
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/6342839?hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H038 — 娱乐与推荐

- 最终选题：**在二手交易平台看中商品，卖家要求平台外转账，为什么买家保障可能一起失效？**
- 选题类型：判断 / 实用
- Entry：HUMAN_WORLD_FIRST
- X：二手交易 / 支付保障
- Human Process：二手交易 / 支付保障：卖家要求便宜点私下付
- Human Problem：买家为节省费用直接向卖家转账，丧失平台保护条件
- 反常：买卖双方仍然相同，换一种支付渠道却可能失去平台兜底
- Human Tension：交易自由与手续费 vs 平台保护
- Controlling Question：为什么同一个卖家、同一件商品，绕过付款系统会改变保障？
- 科技改变的过程：平台交易保障与其内置支付、证据及争议处理流程绑定
- 主机制：部分购物平台的买家保障只适用受支持的站内付款，私下转账可能不在保护范围内
- Audience Payoff：看懂在二手交易平台看中商品，卖家要求平台外转账，为什么买家保障可能一起失效背后具体的权限、状态或事实边界
- Meaning Fingerprint：`交易自由与手续费 vs 平台保护｜部分购物平台的买家保障只适用受支持的站`
- Motif：卖家要求便宜点私下付→买家付款→货未寄出→发现争议平台不受理
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://consumer.ftc.gov/articles/buying-online-marketplace
- 证据适用边界：FTC 消费者建议明确提醒平台外付款可能失去该平台保障；需要说明具体平台的例外及保护条款。
- Status：PASS_CANDIDATE

---

## H039 — 娱乐与推荐

- 最终选题：**删除 YouTube 搜索记录，为什么连同一天的观看记录也可能一起消失？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：娱乐与推荐
- Human Process：娱乐与推荐：想删敏感搜索
- Human Problem：用户只想移除几个搜索词却连播放历史也受到影响
- 反常：精准清理 vs 历史连带
- Human Tension：精准清理 vs 历史连带
- Controlling Question：删除 YouTube 搜索记录，为什么连同一天的观看记录也可能一起消失？
- 科技改变的过程：在 YouTube 的特定删除操作中搜索历史与观看历史会同时间段清理
- 主机制：在 YouTube 的特定删除操作中搜索历史与观看历史会同时间段清理
- Audience Payoff：看懂删除 YouTube 搜索记录，为什么连同一天的观看记录也可能一起消失背后具体的权限、状态或事实边界
- Meaning Fingerprint：`精准清理 vs 历史连带｜在 YouTube 的特定删除操作中搜`
- Motif：想删敏感搜索→视频观看记录不见→核对清除范围
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/57711?hl=en-GB
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H040 — 创作与版权

- 最终选题：**YouTube 视频设为‘不公开’，为什么拿到链接的人仍然能转给别人？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：创作与版权：发私密试看链接
- Human Problem：创作者把非公开链接误当成仅指定好友可看
- 反常：传播便利 vs 真正访问限制
- Human Tension：传播便利 vs 真正访问限制
- Controlling Question：YouTube 视频设为‘不公开’，为什么拿到链接的人仍然能转给别人？
- 科技改变的过程：Unlisted 依赖持有链接即可访问并可再次分享
- 主机制：Unlisted 依赖持有链接即可访问并可再次分享
- Audience Payoff：看懂YouTube 视频设为‘不公开’，为什么拿到链接的人仍然能转给别人背后具体的权限、状态或事实边界
- Meaning Fingerprint：`传播便利 vs 真正访问限制｜Unlisted 依赖持有链接即可访问`
- Motif：发私密试看链接→链接外传→选择真正私密模式
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/157177?co=GENIE.Platform%3DAndroid&hl=en&ref_type=adv
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H041 — 创作与版权

- 最终选题：**视频设置了私密，为什么平台仍可能审核版权和违规内容？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：创作与版权：上传私人测试片
- Human Problem：用户以为不向观众公开就不受平台自动检查
- 反常：不公开展示 vs 平台内部审核
- Human Tension：不公开展示 vs 平台内部审核
- Controlling Question：视频设置了私密，为什么平台仍可能审核版权和违规内容？
- 科技改变的过程：YouTube 系统和人员仍可为版权广告适宜及滥用审查私密视频
- 主机制：YouTube 系统和人员仍可为版权广告适宜及滥用审查私密视频
- Audience Payoff：看懂视频设置了私密，为什么平台仍可能审核版权和违规内容背后具体的权限、状态或事实边界
- Meaning Fingerprint：`不公开展示 vs 平台内部审核｜YouTube 系统和人员仍可为版权广`
- Motif：上传私人测试片→收到审核→区分观众权限和平台审查
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/157177?co=GENIE.Platform%3DAndroid&hl=en&ref_type=adv
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H042 — 创作与版权

- 最终选题：**视频收到 Content ID 声明，为什么不一定等于账号吃了一次版权警告？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：创作与版权：上传有背景音乐的视频
- Human Problem：创作者将自动版权匹配与正式下架处罚混为一谈
- 反常：版权分成处理 vs 平台处罚
- Human Tension：版权分成处理 vs 平台处罚
- Controlling Question：视频收到 Content ID 声明，为什么不一定等于账号吃了一次版权警告？
- 科技改变的过程：Content ID 版权声明与移除请求/版权警告是不同流程
- 主机制：Content ID 版权声明与移除请求/版权警告是不同流程
- Audience Payoff：看懂视频收到 Content ID 声明，为什么不一定等于账号吃了一次版权警告背后具体的权限、状态或事实边界
- Meaning Fingerprint：`版权分成处理 vs 平台处罚｜Content ID 版权声明与移除请`
- Motif：上传有背景音乐的视频→版权声明→查处理路径
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/6013276?co=GENIE.Platform%3DAndroid&hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H043 — 创作与版权

- 最终选题：**同一段音乐在某国还能播放，为什么换个国家视频就被屏蔽？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：创作与版权：外地朋友打不开视频
- Human Problem：观众以为同一版权声明对全球只有一个结果
- 反常：全球公开 vs 地区版权许可
- Human Tension：全球公开 vs 地区版权许可
- Controlling Question：同一段音乐在某国还能播放，为什么换个国家视频就被屏蔽？
- 科技改变的过程：内容版权人可对不同地域设置盈利、追踪或屏蔽规则
- 主机制：内容版权人可对不同地域设置盈利、追踪或屏蔽规则
- Audience Payoff：看懂同一段音乐在某国还能播放，为什么换个国家视频就被屏蔽背后具体的权限、状态或事实边界
- Meaning Fingerprint：`全球公开 vs 地区版权许可｜内容版权人可对不同地域设置盈利、追踪或`
- Motif：外地朋友打不开视频→查看地区版权策略
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/6013276?co=GENIE.Platform%3DAndroid&hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H044 — 创作与版权

- 最终选题：**明明视频没有改，为什么版权申诉一升级反而出现被下架风险？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：创作与版权：决定申诉
- Human Problem：创作者把申诉等同于毫无额外后果的客服纠错
- 反常：维权机会 vs 升级代价
- Human Tension：维权机会 vs 升级代价
- Controlling Question：明明视频没有改，为什么版权申诉一升级反而出现被下架风险？
- 科技改变的过程：版权主张方收到申诉后可按流程发布正式移除请求，可能带来警告
- 主机制：版权主张方收到申诉后可按流程发布正式移除请求，可能带来警告
- Audience Payoff：看懂明明视频没有改，为什么版权申诉一升级反而出现被下架风险背后具体的权限、状态或事实边界
- Meaning Fingerprint：`维权机会 vs 升级代价｜版权主张方收到申诉后可按流程发布正式移`
- Motif：决定申诉→收到新处理通知→核对权利依据
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/12104471?co=GENIE.Platform%3DDesktop&hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H045 — 创作与版权

- 最终选题：**自动字幕连十句话都识别对了，为什么一个人名仍可能被写错？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：创作与版权：上传访谈
- Human Problem：人名错误比普通词错误更影响理解与尊重
- 反常：总体准确率 vs 关键称谓准确
- Human Tension：总体准确率 vs 关键称谓准确
- Controlling Question：自动字幕连十句话都识别对了，为什么一个人名仍可能被写错？
- 科技改变的过程：自动字幕识别易受口音、发音、噪声等影响，不能保证专名正确
- 主机制：自动字幕识别易受口音、发音、噪声等影响，不能保证专名正确
- Audience Payoff：看懂自动字幕连十句话都识别对了，为什么一个人名仍可能被写错背后具体的权限、状态或事实边界
- Meaning Fingerprint：`总体准确率 vs 关键称谓准确｜自动字幕识别易受口音、发音、噪声等影响`
- Motif：上传访谈→嘉宾名字识别错→人工校对
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/6373554?hl=en-GB
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H046 — 创作与版权

- 最终选题：**YouTube 自动配音可能已经上线，为什么原作者还不知道？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：创作与版权：视频旧内容被自动配音
- Human Problem：创作者不理解不同自动配音资格与默认发布选项
- 反常：跨语言覆盖 vs 作者逐条控制
- Human Tension：跨语言覆盖 vs 作者逐条控制
- Controlling Question：YouTube 自动配音可能已经上线，为什么原作者还不知道？
- 科技改变的过程：符合条件的作品可自动生成并依发布设置上线其他语言音轨
- 主机制：符合条件的作品可自动生成并依发布设置上线其他语言音轨
- Audience Payoff：看懂YouTube 自动配音可能已经上线，为什么原作者还不知道背后具体的权限、状态或事实边界
- Meaning Fingerprint：`跨语言覆盖 vs 作者逐条控制｜符合条件的作品可自动生成并依发布设置上`
- Motif：视频旧内容被自动配音→发现配音轨→调整发布设置
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/15569972?co=GENIE.Platform%3DDesktop&hl=en%40Dilshan_Ali_7
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H047 — 创作与版权

- 最终选题：**明明获得素材作者许可，为什么搬运合集仍可能失去变现资格？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：创作与版权：申请变现被拒
- Human Problem：用户误以为版权许可等于平台认可其原创价值
- 反常：拥有使用权 vs 提供独创价值
- Human Tension：拥有使用权 vs 提供独创价值
- Controlling Question：明明获得素材作者许可，为什么搬运合集仍可能失去变现资格？
- 科技改变的过程：YouTube 的重复使用内容变现规则与版权授权是不同判断
- 主机制：YouTube 的重复使用内容变现规则与版权授权是不同判断
- Audience Payoff：看懂明明获得素材作者许可，为什么搬运合集仍可能失去变现资格背后具体的权限、状态或事实边界
- Meaning Fingerprint：`拥有使用权 vs 提供独创价值｜YouTube 的重复使用内容变现规则`
- Motif：申请变现被拒→核对原创贡献而非只看授权
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/youtube/answer/1311392?hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H048 — 创作与版权

- 最终选题：**AI 一天能生成几百篇文章，为什么网站反而可能被搜索平台处罚？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：创作与版权
- Human Process：创作与版权：网站批量上新
- Human Problem：站长把批量生产效率错当成搜索排名通行证
- 反常：产量自动化 vs 用户价值
- Human Tension：产量自动化 vs 用户价值
- Controlling Question：AI 一天能生成几百篇文章，为什么网站反而可能被搜索平台处罚？
- 科技改变的过程：Google 将主要为操纵排名而规模化生产低价值页面视为垃圾内容
- 主机制：Google 将主要为操纵排名而规模化生产低价值页面视为垃圾内容
- Audience Payoff：看懂AI 一天能生成几百篇文章，为什么网站反而可能被搜索平台处罚背后具体的权限、状态或事实边界
- Meaning Fingerprint：`产量自动化 vs 用户价值｜Google 将主要为操纵排名而规模化`
- Motif：网站批量上新→流量下降→核对搜索垃圾政策
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://developers.google.com/search/docs/fundamentals/using-gen-ai-content?hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H049 — 娱乐与推荐

- 最终选题：**电影已经下载到手机，为什么坐上飞机却显示‘已过期’？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：娱乐与推荐
- Human Process：娱乐与推荐：机场无网打开下载
- Human Problem：下载完成被用户当成永久离线所有权
- 反常：离线副本 vs 授权时间
- Human Tension：离线副本 vs 授权时间
- Controlling Question：电影已经下载到手机，为什么坐上飞机却显示‘已过期’？
- 科技改变的过程：Netflix 下载内容存在有效期与授权变化，过期需要重新下载
- 主机制：Netflix 下载内容存在有效期与授权变化，过期需要重新下载
- Audience Payoff：看懂电影已经下载到手机，为什么坐上飞机却显示‘已过期’背后具体的权限、状态或事实边界
- Meaning Fingerprint：`离线副本 vs 授权时间｜Netflix 下载内容存在有效期与授`
- Motif：机场无网打开下载→发现已过期→重排观影
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://help.netflix.com/en/node/54865
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H050 — 支付与订阅

- 最终选题：**已经把 App 从手机删除了，为什么订阅还在收费？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：删掉健身应用
- Human Problem：卸载应用不代表取消应用商店的付费协议
- 反常：删除软件 vs 停止支付授权
- Human Tension：删除软件 vs 停止支付授权
- Controlling Question：已经把 App 从手机删除了，为什么订阅还在收费？
- 科技改变的过程：Google Play 的订阅需在对应订阅管理页面取消
- 主机制：Google Play 的订阅需在对应订阅管理页面取消
- Audience Payoff：看懂已经把 App 从手机删除了，为什么订阅还在收费背后具体的权限、状态或事实边界
- Meaning Fingerprint：`删除软件 vs 停止支付授权｜Google Play 的订阅需在对应`
- Motif：删掉健身应用→下一月扣款→回到账单管理
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/googleplay/answer/7018481?co=GENIE.Platform%3DAndroid&hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H051 — 支付与订阅

- 最终选题：**Google Play 订阅已经取消，为什么会员权益还能用到年底？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：取消年度会员
- Human Problem：用户以为取消订阅立即撤回之前买到的剩余服务期
- 反常：停止续订 vs 已付款服务权利
- Human Tension：停止续订 vs 已付款服务权利
- Controlling Question：Google Play 订阅已经取消，为什么会员权益还能用到年底？
- 科技改变的过程：Google Play 取消续费后通常仍可使用已经支付的订阅期间
- 主机制：Google Play 取消续费后通常仍可使用已经支付的订阅期间
- Audience Payoff：看懂Google Play 订阅已经取消，为什么会员权益还能用到年底背后具体的权限、状态或事实边界
- Meaning Fingerprint：`停止续订 vs 已付款服务权利｜Google Play 取消续费后通常`
- Motif：取消年度会员→仍能播放→搞清到期时间
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/googleplay/answer/7018481?co=GENIE.Platform%3DAndroid&hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H052 — 支付与订阅

- 最终选题：**刚买的付费 App 想退款，为什么过了48小时渠道就不一样？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：装软件才发现不适合
- Human Problem：用户把应用商店退款申请当成没有时间条件的通用入口
- 反常：即时后悔 vs 有条件退款权利
- Human Tension：即时后悔 vs 有条件退款权利
- Controlling Question：刚买的付费 App 想退款，为什么过了48小时渠道就不一样？
- 科技改变的过程：Google Play 退款渠道和受理方式与购买时间及商品政策有关
- 主机制：Google Play 退款渠道和受理方式与购买时间及商品政策有关
- Audience Payoff：看懂刚买的付费 App 想退款，为什么过了48小时渠道就不一样背后具体的权限、状态或事实边界
- Meaning Fingerprint：`即时后悔 vs 有条件退款权利｜Google Play 退款渠道和受理`
- Motif：装软件才发现不适合→第3天退款→查询开发者渠道
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/googleplay/answer/15574908?hl=en
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H053 — 支付与订阅

- 最终选题：**订阅显示月付，取消时为什么突然有一笔提前解约费？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：为短期任务订软件
- Human Problem：消费者以为按月扣款就能逐月自由退出
- 反常：收费频率 vs 合同期限
- Human Tension：收费频率 vs 合同期限
- Controlling Question：订阅显示月付，取消时为什么突然有一笔提前解约费？
- 科技改变的过程：FTC 指控 Adobe 部分计划为年度承诺按月支付且未明确提示解约费用
- 主机制：FTC 指控 Adobe 部分计划为年度承诺按月支付且未明确提示解约费用
- Audience Payoff：看懂订阅显示月付，取消时为什么突然有一笔提前解约费背后具体的权限、状态或事实边界
- Meaning Fingerprint：`收费频率 vs 合同期限｜FTC 指控 Adobe 部分计划为年`
- Motif：为短期任务订软件→打算取消→发现年度费用
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://consumer.ftc.gov/consumer-alerts/2024/05/adobe-used-hidden-fee-trap-people-paying-subscription-plans-ftc-says
- 证据适用边界：只陈述监管指控或已记录体验，不认定所有商家有同样行为。
- Status：PASS_CANDIDATE

---

## H054 — 支付与订阅

- 最终选题：**办会员只想买一次东西，为什么结账后却多了一份自动续费？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：买必需品
- Human Problem：部分消费者报告不知情被纳入会员自动续费
- 反常：一次消费 vs 持续订阅
- Human Tension：一次消费 vs 持续订阅
- Controlling Question：办会员只想买一次东西，为什么结账后却多了一份自动续费？
- 科技改变的过程：FTC 指控 Amazon Prime 采用误导性界面促成注册与困难取消
- 主机制：FTC 指控 Amazon Prime 采用误导性界面促成注册与困难取消
- Audience Payoff：看懂办会员只想买一次东西，为什么结账后却多了一份自动续费背后具体的权限、状态或事实边界
- Meaning Fingerprint：`一次消费 vs 持续订阅｜FTC 指控 Amazon Prime`
- Motif：买必需品→查到会员账单→追溯结算按钮
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://www.ftc.gov/legal-library/browse/cases-proceedings/2123050-amazoncom-inc-rosca-ftc-v
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H055 — 支付与订阅

- 最终选题：**买菜广告写免费送货，为什么最后订单上还有好几种费用？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：按免费配送广告下单
- Human Problem：消费者从免配送承诺推断最终费用为零
- 反常：宣传免运费 vs 真实总价
- Human Tension：宣传免运费 vs 真实总价
- Controlling Question：买菜广告写免费送货，为什么最后订单上还有好几种费用？
- 科技改变的过程：FTC 对 Instacart 的指控涉及免费配送的展示与附加费用之间的落差
- 主机制：FTC 对 Instacart 的指控涉及免费配送的展示与附加费用之间的落差
- Audience Payoff：看懂买菜广告写免费送货，为什么最后订单上还有好几种费用背后具体的权限、状态或事实边界
- Meaning Fingerprint：`宣传免运费 vs 真实总价｜FTC 对 Instacart 的指控`
- Motif：按免费配送广告下单→结账总价上涨→拆出费用
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://search.ftc.gov/news-events/news/press-releases/2025/12/instacart-pay-60-million-consumer-refunds-settle-ftc-lawsuit-over-allegations-it-engaged-deceptive
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H056 — 支付与订阅

- 最终选题：**支付平台显示‘退款已发出’，为什么信用卡还没有收到钱？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：商家退款
- Human Problem：用户把支付平台处理结束当成银行入账结束
- 反常：卖方退款动作 vs 银行到账
- Human Tension：卖方退款动作 vs 银行到账
- Controlling Question：支付平台显示‘退款已发出’，为什么信用卡还没有收到钱？
- 科技改变的过程：PayPal 退款返回原支付渠道后仍受发卡行结算时差影响
- 主机制：PayPal 退款返回原支付渠道后仍受发卡行结算时差影响
- Audience Payoff：看懂支付平台显示‘退款已发出’，为什么信用卡还没有收到钱背后具体的权限、状态或事实边界
- Meaning Fingerprint：`卖方退款动作 vs 银行到账｜PayPal 退款返回原支付渠道后仍受`
- Motif：商家退款→平台完成→卡账单还没变
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://www.paypal.com/us/cshelp/article/where-is-my-refund-help130
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H057 — 支付与订阅

- 最终选题：**原价退款了，为什么跨币种订单拿回来的钱却少了一点？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：海外买礼物退货
- Human Problem：用户误以为跨境退款固定使用支付日的汇率
- 反常：名义原币退款 vs 实收本币金额
- Human Tension：名义原币退款 vs 实收本币金额
- Controlling Question：原价退款了，为什么跨币种订单拿回来的钱却少了一点？
- 科技改变的过程：PayPal 外汇退款可能按照退款时汇率重新换算
- 主机制：PayPal 外汇退款可能按照退款时汇率重新换算
- Audience Payoff：看懂原价退款了，为什么跨币种订单拿回来的钱却少了一点背后具体的权限、状态或事实边界
- Meaning Fingerprint：`名义原币退款 vs 实收本币金额｜PayPal 外汇退款可能按照退款时汇`
- Motif：海外买礼物退货→退款折算金额不同→对比汇率
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://www.paypal.com/us/cshelp/article/where-is-my-refund-help130
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H058 — 支付与订阅

- 最终选题：**信用卡已经注销，原路退款为什么不一定就丢了？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：换银行卡后退货
- Human Problem：用户以为原卡不存在就无法接受退款
- 反常：卡号失效 vs 清算路径存续
- Human Tension：卡号失效 vs 清算路径存续
- Controlling Question：信用卡已经注销，原路退款为什么不一定就丢了？
- 科技改变的过程：支付服务仍可向原卡通道发起退款，由发卡机构处理对应账户
- 主机制：支付服务仍可向原卡通道发起退款，由发卡机构处理对应账户
- Audience Payoff：看懂信用卡已经注销，原路退款为什么不一定就丢了背后具体的权限、状态或事实边界
- Meaning Fingerprint：`卡号失效 vs 清算路径存续｜支付服务仍可向原卡通道发起退款，由发卡`
- Motif：换银行卡后退货→商家原路退→向银行确认入账
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://www.paypal.com/us/cshelp/article/where-is-my-refund-help130
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H059 — 支付与订阅

- 最终选题：**酒店还没结账，银行卡额度为什么已被占了一大块？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：办理入住
- Human Problem：旅客把预授权冻结误当成酒店已经正式扣款
- 反常：费用保障 vs 可用余额
- Human Tension：费用保障 vs 可用余额
- Controlling Question：酒店还没结账，银行卡额度为什么已被占了一大块？
- 科技改变的过程：酒店可用预授权暂占信用额度，最终支付需另行清算
- 主机制：酒店可用预授权暂占信用额度，最终支付需另行清算
- Audience Payoff：看懂酒店还没结账，银行卡额度为什么已被占了一大块背后具体的权限、状态或事实边界
- Meaning Fingerprint：`费用保障 vs 可用余额｜酒店可用预授权暂占信用额度，最终支付需`
- Motif：办理入住→看到占款短信→分辨真实消费
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://stripe.com/resources/more/card-authorization-explained
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H060 — 支付与订阅

- 最终选题：**加油站只加了半箱油，银行卡为什么先显示一笔临时扣款？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：刷卡加油
- Human Problem：加油前商户可能不知道最终实际消费金额
- 反常：先预估额度 vs 最终价格
- Human Tension：先预估额度 vs 最终价格
- Controlling Question：加油站只加了半箱油，银行卡为什么先显示一笔临时扣款？
- 科技改变的过程：预授权先冻结一定额度，最终收费按交易结算
- 主机制：预授权先冻结一定额度，最终收费按交易结算
- Audience Payoff：看懂加油站只加了半箱油，银行卡为什么先显示一笔临时扣款背后具体的权限、状态或事实边界
- Meaning Fingerprint：`先预估额度 vs 最终价格｜预授权先冻结一定额度，最终收费按交易结`
- Motif：刷卡加油→先收到占款通知→等待实际结算
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://www.paypal.com/us/legalhub/paypal/consumer-debitcard-agreement?locale.x=en_US
- 证据适用边界：示例以美国 PayPal 借记卡在加油泵付款产生预授权暂扣为准，不推广所有银行和国家。
- Status：PASS_CANDIDATE

---

## H061 — 支付与订阅

- 最终选题：**自己明明有钱，线上付款为什么还是会被银行卡拒绝？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：付款失败
- Human Problem：用户误以为额度足够就保证支付成功
- 反常：有余额 vs 授权成功
- Human Tension：有余额 vs 授权成功
- Controlling Question：自己明明有钱，线上付款为什么还是会被银行卡拒绝？
- 科技改变的过程：支付授权还要评估卡状态、反欺诈、有效期等因素
- 主机制：支付授权还要评估卡状态、反欺诈、有效期等因素
- Audience Payoff：看懂自己明明有钱，线上付款为什么还是会被银行卡拒绝背后具体的权限、状态或事实边界
- Meaning Fingerprint：`有余额 vs 授权成功｜支付授权还要评估卡状态、反欺诈、有效期`
- Motif：付款失败→检查额度没问题→银行给出安全拒绝原因
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://stripe.com/resources/more/card-authorization-explained
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H062 — 支付与订阅

- 最终选题：**四笔免息分期各自不贵，为什么总还款安排容易挤在同一个月？**
- 选题类型：判断 / 反思
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：先后四次分期购物
- Human Problem：多笔小额分期可以形成同时到期的资金压力
- 反常：小额便利 vs 总体现金流
- Human Tension：小额便利 vs 总体现金流
- Controlling Question：四笔免息分期各自不贵，为什么总还款安排容易挤在同一个月？
- 科技改变的过程：CFPB 观察到先买后付借贷的多笔使用与还款风险
- 主机制：CFPB 观察到先买后付借贷的多笔使用与还款风险
- Audience Payoff：看懂四笔免息分期各自不贵，为什么总还款安排容易挤在同一个月背后具体的权限、状态或事实边界
- Meaning Fingerprint：`小额便利 vs 总体现金流｜CFPB 观察到先买后付借贷的多笔使用`
- Motif：先后四次分期购物→月底发现多笔同时扣
- Content Job：DISCOVERY
- Source / Signal：RESEARCH_OBSERVATION；https://www.consumerfinance.gov/data-research/research-reports/buy-now-pay-later-market-trends-and-consumer-impacts/
- 证据适用边界：只采纳研究或监管文件实际讨论的风险与边界，不把关联改成普遍因果。
- Status：PASS_CANDIDATE

---

## H063 — 支付与订阅

- 最终选题：**按时还了四期免息，为什么信用分数可能完全没加分？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：付款计划完成
- Human Problem：消费者把按时分期等同于每笔都会建立征信
- 反常：还款认真 vs 征信可见
- Human Tension：还款认真 vs 征信可见
- Controlling Question：按时还了四期免息，为什么信用分数可能完全没加分？
- 科技改变的过程：不少 BNPL 贷款未向三大信用局报告正常还款
- 主机制：不少 BNPL 贷款未向三大信用局报告正常还款
- Audience Payoff：看懂按时还了四期免息，为什么信用分数可能完全没加分背后具体的权限、状态或事实边界
- Meaning Fingerprint：`还款认真 vs 征信可见｜不少 BNPL 贷款未向三大信用局报告`
- Motif：付款计划完成→查信用报告→没有对应记录
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://www.consumerfinance.gov/ask-cfpb/will-a-buy-now-pay-later-bnpl-loan-impact-my-credit-scores-en-2117/
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H064 — 支付与订阅

- 最终选题：**先买后付的商品已经退货，为什么分期账单处理并不总是同时结束？**
- 选题类型：判断 / 反思
- Entry：HUMAN_WORLD_FIRST
- X：支付与订阅
- Human Process：支付与订阅：网购退款
- Human Problem：退货和信贷合同结算是两个不同平台状态
- 反常：商家退货 vs 借贷关系结束
- Human Tension：商家退货 vs 借贷关系结束
- Controlling Question：先买后付的商品已经退货，为什么分期账单处理并不总是同时结束？
- 科技改变的过程：CFPB 指出 BNPL 退款与争议处理在消费者保护方面存在边界
- 主机制：CFPB 指出 BNPL 退款与争议处理在消费者保护方面存在边界
- Audience Payoff：看懂先买后付的商品已经退货，为什么分期账单处理并不总是同时结束背后具体的权限、状态或事实边界
- Meaning Fingerprint：`商家退货 vs 借贷关系结束｜CFPB 指出 BNPL 退款与争议处`
- Motif：网购退款→下期账单仍待处理→追查放款方
- Content Job：DISCOVERY
- Source / Signal：RESEARCH_OBSERVATION；https://www.consumerfinance.gov/archive/newsroom/cfpb-study-details-the-rapid-growth-of-buy-now-pay-later-lending/
- 证据适用边界：只采纳研究或监管文件实际讨论的风险与边界，不把关联改成普遍因果。
- Status：PASS_CANDIDATE

---

## H065 — 购物与物流

- 最终选题：**包裹超过预计送达日却没有收到，为什么不能立刻跳过卖家找平台？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：购物与物流
- Human Process：购物与物流：包裹延迟
- Human Problem：消费者以为延迟即刻由平台全额兜底
- 反常：运输承诺 vs 平台申诉程序
- Human Tension：运输承诺 vs 平台申诉程序
- Controlling Question：包裹超过预计送达日却没有收到，为什么不能立刻跳过卖家找平台？
- 科技改变的过程：eBay 未收到货的申诉流程有截止日期及先找卖家的步骤
- 主机制：eBay 未收到货的申诉流程有截止日期及先找卖家的步骤
- Audience Payoff：看懂包裹超过预计送达日却没有收到，为什么不能立刻跳过卖家找平台背后具体的权限、状态或事实边界
- Meaning Fingerprint：`运输承诺 vs 平台申诉程序｜eBay 未收到货的申诉流程有截止日期`
- Motif：包裹延迟→商家回应期→平台介入
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://www.ebay.com/help/buying/returns-items-not-received-refunds-buyers/item-not-received?id=4042
- 证据适用边界：根据官方条件、版本和权限成立，不外推其他平台。
- Status：PASS_CANDIDATE

---

## H066 — 购物与物流

- 最终选题：**收货地址下错了，为什么交易平台不直接替你把包裹改送新地址？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：购物与物流
- Human Process：购物与物流：搬家没改地址
- Human Problem：用户以为平台可在付款后无条件更换收货点
- 反常：提交订单 vs 履约状态锁定
- Human Tension：提交订单 vs 履约状态锁定
- Controlling Question：收货地址下错了，为什么交易平台不直接替你把包裹改送新地址？
- 科技改变的过程：eBay 错误送货地址通常要求联系卖家取消后用正确地址重买
- 主机制：eBay 错误送货地址通常要求联系卖家取消后用正确地址重买
- Audience Payoff：看懂收货地址下错了，为什么交易平台不直接替你把包裹改送新地址背后具体的权限、状态或事实边界
- Meaning Fingerprint：`提交订单 vs 履约状态锁定｜eBay 错误送货地址通常要求联系卖家`
- Motif：搬家没改地址→卖家已出单→决定是否取消
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://www.ebay.com/help/buying/shipping-delivery/changing-shipping-details-purchase?id=4028
- 证据适用边界：eBay 官方流程：出货前买家可联系卖家申请取消后重新下单；不是全部订单永远不能改地址。
- Status：PASS_CANDIDATE

---

## H067 — 账号安全

- 最终选题：**手机丢了，明明记得 Google 密码，为什么还是可能登不进账号？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：账号安全
- Human Process：账号安全：原手机丢失
- Human Problem：失去绑定手机的用户需要第二因素或恢复通道
- 反常：防盗保护 vs 本人恢复
- Human Tension：防盗保护 vs 本人恢复
- Controlling Question：手机丢了，明明记得 Google 密码，为什么还是可能登不进账号？
- 科技改变的过程：Google 两步验证需要另一验证方法、备份码或账户恢复
- 主机制：Google 两步验证需要另一验证方法、备份码或账户恢复
- Audience Payoff：区分防盗保护 vs 本人恢复的机制与条件
- Meaning Fingerprint：`防盗保护 vs 本人恢复｜Google 两步验证需要另一验证方法`
- Motif：原手机丢失→新机登录→找备用验证
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/accounts/answer/185834?hl=en
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H068 — 账号安全

- 最终选题：**硬件安全密钥丢了，为什么高安全登录反而更难找回？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：账号安全
- Human Process：账号安全：安全钥匙遗失
- Human Problem：高级保护用户意外丢失身份认证物件
- 反常：远程安全 vs 实体备份
- Human Tension：远程安全 vs 实体备份
- Controlling Question：硬件安全密钥丢了，为什么高安全登录反而更难找回？
- 科技改变的过程：高级保护丢失主密钥需用备用密钥或恢复程序
- 主机制：高级保护丢失主密钥需用备用密钥或恢复程序
- Audience Payoff：区分远程安全 vs 实体备份的机制与条件
- Meaning Fingerprint：`远程安全 vs 实体备份｜高级保护丢失主密钥需用备用密钥或恢复程`
- Motif：安全钥匙遗失→账户锁住→求助备用密钥
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/accounts/answer/185834?hl=en
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H069 — 账号安全

- 最终选题：**重新打印了一批谷歌备份码，为什么旧纸条上的十个码全部失效？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：账号安全
- Human Process：账号安全：更换安全纸条
- Human Problem：旧版恢复码被误以为长期可复用
- 反常：恢复通行 vs 主动轮换
- Human Tension：恢复通行 vs 主动轮换
- Controlling Question：重新打印了一批谷歌备份码，为什么旧纸条上的十个码全部失效？
- 科技改变的过程：新生成一批备份码会使旧一批自动无效
- 主机制：新生成一批备份码会使旧一批自动无效
- Audience Payoff：区分恢复通行 vs 主动轮换的机制与条件
- Meaning Fingerprint：`恢复通行 vs 主动轮换｜新生成一批备份码会使旧一批自动无效`
- Motif：更换安全纸条→试旧码→被拒
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/accounts/answer/1187538?hl=en
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H070 — 账号安全

- 最终选题：**备份验证码昨晚已经用过一次，为什么今天不能再用？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：账号安全
- Human Process：账号安全：第一次扫码恢复成功
- Human Problem：用户误把备份码当永久口令
- 反常：备用登录 vs 防重放
- Human Tension：备用登录 vs 防重放
- Controlling Question：备份验证码昨晚已经用过一次，为什么今天不能再用？
- 科技改变的过程：Google 每个备份码都是单次使用凭证
- 主机制：Google 每个备份码都是单次使用凭证
- Audience Payoff：区分备用登录 vs 防重放的机制与条件
- Meaning Fingerprint：`备用登录 vs 防重放｜Google 每个备份码都是单次使用凭`
- Motif：第一次扫码恢复成功→第二次使用失败
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/accounts/answer/1187538?hl=en
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H071 — 账号安全

- 最终选题：**连续收到几条登录短信验证码，为什么最早那条反而失效？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：账号安全
- Human Process：账号安全：信号不好反复点击
- Human Problem：用户因网络延迟重复请求验证码
- 反常：重发方便 vs 旧码作废
- Human Tension：重发方便 vs 旧码作废
- Controlling Question：连续收到几条登录短信验证码，为什么最早那条反而失效？
- 科技改变的过程：Google 多次请求验证码时仅最新一条有效
- 主机制：Google 多次请求验证码时仅最新一条有效
- Audience Payoff：区分重发方便 vs 旧码作废的机制与条件
- Meaning Fingerprint：`重发方便 vs 旧码作废｜Google 多次请求验证码时仅最新一`
- Motif：信号不好反复点击→旧短信先到→登录失败
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/accounts/answer/185834?hl=en
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H072 — 账号安全

- 最终选题：**两步验证明明开着，为什么把短信验证码告诉骗子仍会被盗号？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：账号安全
- Human Process：账号安全：假银行打电话
- Human Problem：用户把银行验证短信交给冒充官方的骗子
- 反常：防盗验证 vs 社交诱骗
- Human Tension：防盗验证 vs 社交诱骗
- Controlling Question：两步验证明明开着，为什么把短信验证码告诉骗子仍会被盗号？
- 科技改变的过程：当前有效 OTP 被骗子转用于登录或转账验证
- 主机制：当前有效 OTP 被骗子转用于登录或转账验证
- Audience Payoff：区分防盗验证 vs 社交诱骗的机制与条件
- Meaning Fingerprint：`防盗验证 vs 社交诱骗｜当前有效 OTP 被骗子转用于登录或转`
- Motif：假银行打电话→索码→账户被冒用
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://consumer.ftc.gov/consumer-alerts/2024/03/whats-verification-code-why-would-someone-ask-me-it
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE

---

## H073 — 账号安全

- 最终选题：**只是一家小网站泄露了密码，为什么其他账户也可能跟着出事？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：账号安全
- Human Process：账号安全：某网站数据泄露
- Human Problem：多处使用同一密码造成连锁风险
- 反常：复用便捷 vs 连锁盗用
- Human Tension：复用便捷 vs 连锁盗用
- Controlling Question：只是一家小网站泄露了密码，为什么其他账户也可能跟着出事？
- 科技改变的过程：泄露的用户名密码可在其他平台尝试登录
- 主机制：泄露的用户名密码可在其他平台尝试登录
- Audience Payoff：区分复用便捷 vs 连锁盗用的机制与条件
- Meaning Fingerprint：`复用便捷 vs 连锁盗用｜泄露的用户名密码可在其他平台尝试登录`
- Motif：某网站数据泄露→邮箱被撞库→重新设独立密码
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://consumer.ftc.gov/consumer-alerts/2022/10/have-you-been-affected-data-breach-read
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H074 — 骗局与信任

- 最终选题：**电话里明明是孙子的声音，为什么不一定真是他打来的？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：骗局与信任：求救电话
- Human Problem：家属听到熟悉音色会降低身份戒心
- 反常：熟悉音色 vs 可靠身份
- Human Tension：熟悉音色 vs 可靠身份
- Controlling Question：电话里明明是孙子的声音，为什么不一定真是他打来的？
- 科技改变的过程：骗子可通过语音克隆模拟亲人声音制造紧急事件
- 主机制：骗子可通过语音克隆模拟亲人声音制造紧急事件
- Audience Payoff：区分熟悉音色 vs 可靠身份的机制与条件
- Meaning Fingerprint：`熟悉音色 vs 可靠身份｜骗子可通过语音克隆模拟亲人声音制造紧急`
- Motif：求救电话→要求钱款→另一路确认
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://consumer.ftc.gov/consumer-alerts/2023/03/scammers-use-ai-enhance-their-family-emergency-schemes
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE

---

## H075 — 骗局与信任

- 最终选题：**兼职 App 显示赚了几百元，为什么提现前还要你先充值？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：骗局与信任：点赞任务
- Human Problem：任务骗局用虚假收益与小额实付培养信任
- 反常：账面收益 vs 真正到账
- Human Tension：账面收益 vs 真正到账
- Controlling Question：兼职 App 显示赚了几百元，为什么提现前还要你先充值？
- 科技改变的过程：任务平台展示假的佣金并要求用户充钱解锁提现
- 主机制：任务平台展示假的佣金并要求用户充钱解锁提现
- Audience Payoff：区分账面收益 vs 真正到账的机制与条件
- Meaning Fingerprint：`账面收益 vs 真正到账｜任务平台展示假的佣金并要求用户充钱解锁`
- Motif：点赞任务→虚拟利润→先充加密货币
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://consumer.ftc.gov/consumer-alerts/2025/08/how-spot-avoid-task-scams
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE

---

## H076 — 骗局与信任

- 最终选题：**停车场扫了付款二维码，为什么钱可能到了骗子账户？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：骗局与信任：停车扫码
- Human Problem：停车场正规二维码被覆盖换成仿冒二维码
- 反常：线下可信场所 vs 可替换链接
- Human Tension：线下可信场所 vs 可替换链接
- Controlling Question：停车场扫了付款二维码，为什么钱可能到了骗子账户？
- 科技改变的过程：扫码者被重定向到骗子模仿的收费页面
- 主机制：扫码者被重定向到骗子模仿的收费页面
- Audience Payoff：区分线下可信场所 vs 可替换链接的机制与条件
- Meaning Fingerprint：`线下可信场所 vs 可替换链接｜扫码者被重定向到骗子模仿的收费页面`
- Motif：停车扫码→站点名称异样→查看贴纸
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://consumer.ftc.gov/consumer-alerts/2026/09/see-qr-code-parked-somewhere-dont-scan-ityet
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE

---

## H077 — 骗局与信任

- 最终选题：**快递通知催你扫码改地址，为什么其实可能在偷账户密码？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：骗局与信任：假配送短信
- Human Problem：伪造物流问题制造扫码紧迫感
- 反常：配送焦虑 vs 链接真假
- Human Tension：配送焦虑 vs 链接真假
- Controlling Question：快递通知催你扫码改地址，为什么其实可能在偷账户密码？
- 科技改变的过程：诈骗二维码指向仿冒登录页索取凭证
- 主机制：诈骗二维码指向仿冒登录页索取凭证
- Audience Payoff：区分配送焦虑 vs 链接真假的机制与条件
- Meaning Fingerprint：`配送焦虑 vs 链接真假｜诈骗二维码指向仿冒登录页索取凭证`
- Motif：假配送短信→扫码→仿冒网站
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE

---

## H078 — 骗局与信任

- 最终选题：**超市货架上买的礼品卡，为什么充值后余额可能被别人花光？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：骗局与信任：买卡送人
- Human Problem：未启用的卡号可能早被骗子抄走
- 反常：实体货架 vs 数字凭证失密
- Human Tension：实体货架 vs 数字凭证失密
- Controlling Question：超市货架上买的礼品卡，为什么充值后余额可能被别人花光？
- 科技改变的过程：骗子提前窃取PIN并等待合法购买者充值
- 主机制：骗子提前窃取PIN并等待合法购买者充值
- Audience Payoff：区分实体货架 vs 数字凭证失密的机制与条件
- Meaning Fingerprint：`实体货架 vs 数字凭证失密｜骗子提前窃取PIN并等待合法购买者充值`
- Motif：买卡送人→余额归零→查卡包装
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://consumer.ftc.gov/consumer-alerts/2024/12/check-out-gift-cards-you-buy-them
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE

---

## H079 — 骗局与信任

- 最终选题：**网上买车交了订金，为什么到经销商店里竟然查无订单？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：骗局与信任：网上付钱
- Human Problem：用户受伪造经销商网站的视觉可信度欺骗
- 反常：仿真官网 vs 真实商户
- Human Tension：仿真官网 vs 真实商户
- Controlling Question：网上买车交了订金，为什么到经销商店里竟然查无订单？
- 科技改变的过程：骗子克隆库存图片、品牌Logo与评论骗取预付款
- 主机制：骗子克隆库存图片、品牌Logo与评论骗取预付款
- Audience Payoff：区分仿真官网 vs 真实商户的机制与条件
- Meaning Fingerprint：`仿真官网 vs 真实商户｜骗子克隆库存图片、品牌Logo与评论骗`
- Motif：网上付钱→到场提车→店铺否认
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://consumer.ftc.gov/consumer-alerts/2026/09/scammers-are-spoofing-car-dealership-websites-what-you-need-know
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE

---

## H080 — 骗局与信任

- 最终选题：**银行‘风控专员’说要把钱转入安全账户，为什么越照做越危险？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：骗局与信任：紧急电话
- Human Problem：消费者主动把存款转去诈骗账户
- 反常：保护自己 vs 误转资产
- Human Tension：保护自己 vs 误转资产
- Controlling Question：银行‘风控专员’说要把钱转入安全账户，为什么越照做越危险？
- 科技改变的过程：冒充银行安全专员制造风险要求转出资金
- 主机制：冒充银行安全专员制造风险要求转出资金
- Audience Payoff：区分保护自己 vs 误转资产的机制与条件
- Meaning Fingerprint：`保护自己 vs 误转资产｜冒充银行安全专员制造风险要求转出资金`
- Motif：紧急电话→转账保护→钱被取走
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://consumer.ftc.gov/consumer-alerts/2024/03/never-move-your-money-protect-it-thats-scam
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE

---

## H081 — 骗局与信任

- 最终选题：**电脑出现病毒提示，又转接‘警方’，为什么最后要你转走存款？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：骗局与信任
- Human Process：骗局与信任：弹窗
- Human Problem：用户将多个假身份当作真实互相印证
- 反常：权威层级 vs 实为同伙
- Human Tension：权威层级 vs 实为同伙
- Controlling Question：电脑出现病毒提示，又转接‘警方’，为什么最后要你转走存款？
- 科技改变的过程：诈骗使用假系统弹窗和多次冒充权威套取款项
- 主机制：诈骗使用假系统弹窗和多次冒充权威套取款项
- Audience Payoff：区分权威层级 vs 实为同伙的机制与条件
- Meaning Fingerprint：`权威层级 vs 实为同伙｜诈骗使用假系统弹窗和多次冒充权威套取款`
- Motif：弹窗→客服→假警方→银行账户
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://consumer.ftc.gov/consumer-alerts/2024/03/new-tech-support-scammers-want-your-life-savings
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE

---

## H082 — 购物与口碑

- 最终选题：**商品有几百条生动五星评论，为什么评论者可能根本不存在？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：购物与口碑
- Human Process：购物与口碑：准备购买
- Human Problem：买家误认自动生成假评论为真实买家经历
- 反常：评论文本 vs 真实体验
- Human Tension：评论文本 vs 真实体验
- Controlling Question：商品有几百条生动五星评论，为什么评论者可能根本不存在？
- 科技改变的过程：AI生成或假账号可制造从未购买者的评论
- 主机制：AI生成或假账号可制造从未购买者的评论
- Audience Payoff：区分评论文本 vs 真实体验的机制与条件
- Meaning Fingerprint：`评论文本 vs 真实体验｜AI生成或假账号可制造从未购买者的评论`
- Motif：准备购买→发现模式化账号→追查评价来源
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials?bui=N1fJnibGCA855boYsj14aw
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE

---

## H083 — 购物与口碑

- 最终选题：**商家说给五星就返现，为什么它和普通求好评不一样？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：购物与口碑
- Human Process：购物与口碑：商品包装里的返现卡片
- Human Problem：以好评情绪作为奖励条件扭曲口碑
- 反常：主动评价 vs 指定倾向
- Human Tension：主动评价 vs 指定倾向
- Controlling Question：商家说给五星就返现，为什么它和普通求好评不一样？
- 科技改变的过程：针对特定正向或负向评价付费受FTC规则禁止
- 主机制：针对特定正向或负向评价付费受FTC规则禁止
- Audience Payoff：区分主动评价 vs 指定倾向的机制与条件
- Meaning Fingerprint：`主动评价 vs 指定倾向｜针对特定正向或负向评价付费受FTC规则`
- Motif：商品包装里的返现卡片→回看五星数据
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials?bui=N1fJnibGCA855boYsj14aw
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE

---

## H084 — 购物与口碑

- 最终选题：**Gmail 邮件明明设置了机密模式，为什么收件人仍可能拍照留下副本？**
- 选题类型：判断 / 实用
- Entry：HUMAN_WORLD_FIRST
- X：隐私沟通 / 邮件
- Human Process：隐私沟通 / 邮件：机密方式发送敏感内容
- Human Problem：用户把程序禁止转发误认为物理上禁止截屏
- 反常：邮件应用限制复制下载，内容仍可通过屏幕拍照流出
- Human Tension：界面权限 vs 现实截屏
- Controlling Question：邮件禁止复制就能阻止内容流出吗？
- 科技改变的过程：客户端可限制复制转发，却无法控制对屏幕的外部拍摄
- 主机制：Gmail 机密模式禁部分复制转发操作，但无法阻止截图或摄像头记录
- Audience Payoff：区分独立反馈 vs 内部利益的机制与条件
- Meaning Fingerprint：`界面权限 vs 现实截屏｜Gmail 机密模式禁部分复制转发操作`
- Motif：机密方式发送敏感内容→对方拍照→重新思考分享边界
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/mail/answer/7674059?co=GENIE.Platform%3DDesktop&hl=en-GB
- 证据适用边界：只支持 Gmail 机密模式能限制界面操作、不能阻止外部复制的官方事实，不主张现实中每个接收者都会截屏。
- Status：PASS_CANDIDATE

---

## H085 — 购物与口碑

- 最终选题：**购物网站说展示了全部评价，为什么低分评论却可能被藏起来？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：购物与口碑
- Human Process：购物与口碑：店铺零差评
- Human Problem：商家压制负面评价却声称平台展示全部
- 反常：完整口碑 vs 单边筛选
- Human Tension：完整口碑 vs 单边筛选
- Controlling Question：购物网站说展示了全部评价，为什么低分评论却可能被藏起来？
- 科技改变的过程：误导性删除差评和全量展示虚假声称受到限制
- 主机制：误导性删除差评和全量展示虚假声称受到限制
- Audience Payoff：区分完整口碑 vs 单边筛选的机制与条件
- Meaning Fingerprint：`完整口碑 vs 单边筛选｜误导性删除差评和全量展示虚假声称受到限`
- Motif：店铺零差评→买家投诉负面评价消失
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials?bui=N1fJnibGCA855boYsj14aw
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE

---

## H086 — 购物与口碑

- 最终选题：**一个博主粉丝几十万，为什么里面可能根本没那么多真人？**
- 选题类型：判断 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：购物与口碑
- Human Process：购物与口碑：商单报价
- Human Problem：指标被虚假购买粉丝污染
- 反常：数字热度 vs 真实受众
- Human Tension：数字热度 vs 真实受众
- Controlling Question：一个博主粉丝几十万，为什么里面可能根本没那么多真人？
- 科技改变的过程：买卖虚假粉丝或播放量可以夸大商业影响力
- 主机制：买卖虚假粉丝或播放量可以夸大商业影响力
- Audience Payoff：区分数字热度 vs 真实受众的机制与条件
- Meaning Fingerprint：`数字热度 vs 真实受众｜买卖虚假粉丝或播放量可以夸大商业影响力`
- Motif：商单报价→审核粉丝来源→发现机器人
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE（监管文件）；https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials?bui=N1fJnibGCA855boYsj14aw
- 证据适用边界：监管案例支持风险的存在，不能把攻击手法写成所有人一定遭遇。
- Status：PASS_CANDIDATE

---

## H087 — AI与隐私

- 最终选题：**ChatGPT 里删了对话，为什么资料库文件却还在？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：AI与隐私
- Human Process：AI与隐私：删聊天
- Human Problem：用户将删除聊天误解为删除其中的文件
- 反常：聊天清理 vs 文件独立保存
- Human Tension：聊天清理 vs 文件独立保存
- Controlling Question：ChatGPT 里删了对话，为什么资料库文件却还在？
- 科技改变的过程：资料库保存文件与聊天记录分别管理
- 主机制：资料库保存文件与聊天记录分别管理
- Audience Payoff：区分聊天清理 vs 文件独立保存的机制与条件
- Meaning Fingerprint：`聊天清理 vs 文件独立保存｜资料库保存文件与聊天记录分别管理`
- Motif：删聊天→资料库仍见原文件→独立清理
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://help.openai.com/en/articles/8983778-how-are-files-vs-chats-retained
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H088 — AI与隐私

- 最终选题：**把 ChatGPT 聊天归档，为什么不代表内容已经删除？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：AI与隐私
- Human Process：AI与隐私：归档旧对话
- Human Problem：归档只是隐藏侧栏聊天
- 反常：界面隐藏 vs 数据删除
- Human Tension：界面隐藏 vs 数据删除
- Controlling Question：把 ChatGPT 聊天归档，为什么不代表内容已经删除？
- 科技改变的过程：归档与删除的保留策略不同，归档通常持续保留
- 主机制：归档与删除的保留策略不同，归档通常持续保留
- Audience Payoff：区分界面隐藏 vs 数据删除的机制与条件
- Meaning Fingerprint：`界面隐藏 vs 数据删除｜归档与删除的保留策略不同，归档通常持续`
- Motif：归档旧对话→仍可搜索→改为删除
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://help.openai.com/en/articles/8983778-how-are-files-vs-chats-retained
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H089 — 云端协作

- 最终选题：**Word 选择‘无标记’，为什么发给别人后旧修改仍然能被看到？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：云端协作：合同定稿
- Human Problem：用户将显示过滤当作内容净化
- 反常：视觉干净 vs 文档留痕
- Human Tension：视觉干净 vs 文档留痕
- Controlling Question：Word 选择‘无标记’，为什么发给别人后旧修改仍然能被看到？
- 科技改变的过程：No Markup 仅隐藏修订，接受或拒绝修订才真正移除
- 主机制：No Markup 仅隐藏修订，接受或拒绝修订才真正移除
- Audience Payoff：区分视觉干净 vs 文档留痕的机制与条件
- Meaning Fingerprint：`视觉干净 vs 文档留痕｜No Markup 仅隐藏修订，接受或`
- Motif：合同定稿→他人打开修订→紧急清理
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.microsoft.com/en-us/word/accept-or-reject-tracked-changes-in-word
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H090 — 云端协作

- 最终选题：**Dropbox 明明点了‘移除我的访问’，为什么旧链接还打得开？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：云端协作：删我的共享入口
- Human Problem：用户以为取消个人权限等于关闭公开链接
- 反常：我的视图 vs 分享链接本身
- Human Tension：我的视图 vs 分享链接本身
- Controlling Question：Dropbox 明明点了‘移除我的访问’，为什么旧链接还打得开？
- 科技改变的过程：移除个人访问不影响分享者的活跃链接
- 主机制：移除个人访问不影响分享者的活跃链接
- Audience Payoff：区分我的视图 vs 分享链接本身的机制与条件
- Meaning Fingerprint：`我的视图 vs 分享链接本身｜移除个人访问不影响分享者的活跃链接`
- Motif：删我的共享入口→用旧链接仍进入
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://help.dropbox.com/share/remove-access
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H091 — 旅行与出行

- 最终选题：**Google 地图轨迹明明一直开着，为什么几个月前的去向可能自动消失？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：旅行与出行
- Human Process：旅行与出行：查去年出行
- Human Problem：用户误认为位置历史无限期保留
- 反常：长期记录 vs 自动清理周期
- Human Tension：长期记录 vs 自动清理周期
- Controlling Question：Google 地图轨迹明明一直开着，为什么几个月前的去向可能自动消失？
- 科技改变的过程：Timeline 按用户的自动删除设置定期清除旧记录
- 主机制：Timeline 按用户的自动删除设置定期清除旧记录
- Audience Payoff：区分长期记录 vs 自动清理周期的机制与条件
- Meaning Fingerprint：`长期记录 vs 自动清理周期｜Timeline 按用户的自动删除设置`
- Motif：查去年出行→已被清理→看设置
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/maps/answer/6258979/google-maps-timeline-android
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H092 — 手机与硬件

- 最终选题：**手机明明插着充电，却停在八成，为什么可能是天气太热？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：手机与硬件：汽车暴晒后充电
- Human Problem：用户以为充电停止就是硬件故障
- 反常：即时满电 vs 热安全
- Human Tension：即时满电 vs 热安全
- Controlling Question：手机明明插着充电，却停在八成，为什么可能是天气太热？
- 科技改变的过程：iPhone 可因温度过高暂停充电
- 主机制：iPhone 可因温度过高暂停充电
- Audience Payoff：区分即时满电 vs 热安全的机制与条件
- Meaning Fingerprint：`即时满电 vs 热安全｜iPhone 可因温度过高暂停充电`
- Motif：汽车暴晒后充电→暂停→凉下恢复
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-la/105105
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H093 — 娱乐与推荐

- 最终选题：**Spotify 的歌全下载了，为什么一个月不联网后可能无法离线听？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：娱乐与推荐
- Human Process：娱乐与推荐：远途无网
- Human Problem：用户以为下载永久可在本地授权播放
- 反常：本地有文件 vs 定期联网授权
- Human Tension：本地有文件 vs 定期联网授权
- Controlling Question：Spotify 的歌全下载了，为什么一个月不联网后可能无法离线听？
- 科技改变的过程：Spotify 下载内容需至少每30天联网校验
- 主机制：Spotify 下载内容需至少每30天联网校验
- Audience Payoff：区分本地有文件 vs 定期联网授权的机制与条件
- Meaning Fingerprint：`本地有文件 vs 定期联网授权｜Spotify 下载内容需至少每30天`
- Motif：远途无网→音乐失效→恢复联网
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.spotify.com/us/article/listen-offline/
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H094 — 娱乐与推荐

- 最终选题：**Spotify 歌下载好了，为什么卸载重装 App 后还得全部重下？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：娱乐与推荐
- Human Process：娱乐与推荐：手机重置
- Human Problem：App 下载文件不等于普通音乐文件
- 反常：应用重装 vs 离线缓存
- Human Tension：应用重装 vs 离线缓存
- Controlling Question：Spotify 歌下载好了，为什么卸载重装 App 后还得全部重下？
- 科技改变的过程：重装 Spotify 可能丢失应用内部的离线音乐缓存
- 主机制：重装 Spotify 可能丢失应用内部的离线音乐缓存
- Audience Payoff：区分应用重装 vs 离线缓存的机制与条件
- Meaning Fingerprint：`应用重装 vs 离线缓存｜重装 Spotify 可能丢失应用内部`
- Motif：手机重置→准备登机→离线音乐不见
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.spotify.com/us/article/listen-offline/
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H095 — 日常沟通

- 最终选题：**出差几天后发现一封机密邮件过期了，为什么收件箱有邮件却看不到正文？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：机密邮件 / 信息有效期
- Human Process：机密邮件 / 信息有效期：收到了合同
- Human Problem：收到邮件时以为文件能一直留在收件箱内反复打开
- 反常：邮件条目存在，发件人设定的访问期限却已到期
- Human Tension：已送达的消息 vs 有限期访问授权
- Controlling Question：已经寄出的邮件还能由发送方设定过期访问吗？
- 科技改变的过程：机密邮件由服务端控制消息访问权限，过期后可失效
- 主机制：Gmail 机密模式支持设过期时间和撤销访问，收件箱条目不是永久阅读授权
- Audience Payoff：区分转发限制 vs 内容捕获的机制与条件
- Meaning Fingerprint：`已送达的消息 vs 有限期访问授权｜Gmail 机密模式支持设过期时间和撤`
- Motif：收到了合同→出差回来打开→显示已失效
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/mail/answer/7674059?co=GENIE.Platform%3DDesktop&hl=en-GB
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H096 — 日常沟通

- 最终选题：**Gmail 预定发送时换了时区，为什么邮件仍按原时区发出？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：日常沟通
- Human Process：日常沟通：跨国出差
- Human Problem：旅行者把发信时间理解成动态跟随当前时区
- 反常：定时承诺 vs 时区基准
- Human Tension：定时承诺 vs 时区基准
- Controlling Question：Gmail 预定发送时换了时区，为什么邮件仍按原时区发出？
- 科技改变的过程：Gmail 定时发信基于设定时区而非当前位置
- 主机制：Gmail 定时发信基于设定时区而非当前位置
- Audience Payoff：区分定时承诺 vs 时区基准的机制与条件
- Meaning Fingerprint：`定时承诺 vs 时区基准｜Gmail 定时发信基于设定时区而非当`
- Motif：跨国出差→安排发送→时差造成困扰
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/mail/answer/9214606?hl=en-3
- 证据适用边界：产品/平台条件以所引官方页面为准，不推断所有版本普遍如此。
- Status：PASS_CANDIDATE

---

## H097 — 职场协作

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

---

## H098 — 音乐

- 最终选题：**在第六台设备上下载 Spotify 歌曲，为什么最早那台的离线音乐可能消失？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：音乐
- Human Process：音乐：换新机
- Human Problem：用户以为每台设备的离线下载各自独立
- 反常：跨设备便利 vs 授权设备上限
- Human Tension：跨设备便利 vs 授权设备上限
- Controlling Question：在第六台设备上下载 Spotify 歌曲，为什么最早那台的离线音乐可能消失？
- 科技改变的过程：Spotify 限制高级订阅可下载音乐的设备数量，超过限制可能移除最久未使用设备的下载
- 主机制：Spotify 限制高级订阅可下载音乐的设备数量，超过限制可能移除最久未使用设备的下载
- Audience Payoff：看懂在第六台设备上下载 Spotify 歌曲，为什么最早那台的离线音乐可能消失背后具体的权限、状态或事实边界
- Meaning Fingerprint：`跨设备便利 vs 授权设备上限｜Spotify 限制高级订阅可下载音乐`
- Motif：换新机→旧平板离线列表清空
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.spotify.com/us/article/listen-offline/
- 证据适用边界：只针对来源官方所列对应产品、版本与条件，不把机制推广到其他应用。
- Status：PASS_CANDIDATE

---

## H099 — 日常沟通

- 最终选题：**Gmail 明明设置上午九点准时发送，为什么也可能晚几分钟？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：日常沟通
- Human Process：日常沟通：卡点发送报名材料
- Human Problem：发送者把排队任务的时间视为毫秒级实时送达保证
- 反常：计划时间 vs 服务实际执行
- Human Tension：计划时间 vs 服务实际执行
- Controlling Question：Gmail 明明设置上午九点准时发送，为什么也可能晚几分钟？
- 科技改变的过程：Gmail 官方明确提醒定时邮件可能比预设时间晚数分钟发出
- 主机制：Gmail 官方明确提醒定时邮件可能比预设时间晚数分钟发出
- Audience Payoff：看懂Gmail 明明设置上午九点准时发送，为什么也可能晚几分钟背后具体的权限、状态或事实边界
- Meaning Fingerprint：`计划时间 vs 服务实际执行｜Gmail 官方明确提醒定时邮件可能比`
- Motif：卡点发送报名材料→邮件延后→查看调度说明
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/mail/answer/9214606?hl=en-3
- 证据适用边界：只针对来源官方所列对应产品、版本与条件，不把机制推广到其他应用。
- Status：PASS_CANDIDATE

---

## H100 — 日常沟通

- 最终选题：**Gmail 里取消了一封预约发送的邮件，为什么它没有消失，而是回到了草稿箱？**
- 选题类型：机制 / 体验
- Entry：HUMAN_WORLD_FIRST
- X：日常沟通
- Human Process：日常沟通：预约发信
- Human Problem：用户把取消一个定时任务理解成删除邮件正文
- 反常：计划被取消，但写好的内容保留
- Human Tension：取消执行 vs 保留内容
- Controlling Question：取消定时发送后为何还可以继续编辑原文？
- 科技改变的过程：预约发送被取消时，Gmail 将消息从队列移回草稿
- 主机制：Gmail 的取消预约发送操作会将邮件转换回草稿，而不是永久删除
- Audience Payoff：看懂Gmail 里取消了一封预约发送的邮件，为什么它没有消失，而是回到了草稿箱背后具体的权限、状态或事实边界
- Meaning Fingerprint：`取消执行 vs 保留内容｜Gmail 的取消预约发送操作会将邮件`
- Motif：预约发信→发现错别字→取消预约→编辑草稿重新排程
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.google.com/mail/answer/9214606?hl=en-3
- 证据适用边界：只针对来源官方所列对应产品、版本与条件，不把机制推广到其他应用。
- Status：PASS_CANDIDATE

---

