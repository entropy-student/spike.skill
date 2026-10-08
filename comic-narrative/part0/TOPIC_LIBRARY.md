# Part 0 — 现实问题优先选题库

> 构建中的审查稿（本轮 Owner 授权 2026-10-08）。这轮先逐题建立来源，完成 D1–D5 和证据回读前，所有条目均为 PASS_CANDIDATE，不能视作最终 PASS，也不能用于下游生产。旧 30 题与旧编号、历史包都可以从 Git 历史恢复；不删除历史制作资产。

## H001 — 照片与家庭

- 最终选题：**照片刚从手机删掉，为什么家人的 iCloud 设备也跟着没了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：照片与家庭中相关决定与使用
- Human Problem：用户把同步照片库当成相互独立的副本
- 反常：备份直觉 vs 同步状态
- Human Tension：备份直觉 vs 同步状态
- Controlling Question：照片刚从手机删掉，为什么家人的 iCloud 设备也跟着没了？
- 科技改变的过程：iCloud Photos 同步删除会传播到启用它的设备
- 主机制：iCloud Photos 同步删除会传播到启用它的设备
- Audience Payoff：把备份直觉 vs 同步状态两端的边界讲清楚
- Meaning Fingerprint：`ICLOUD_001`
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
- Human Process：照片与家庭中相关决定与使用
- Human Problem：用户误把最近删除当成永久垃圾箱备份
- 反常：可撤销窗口 vs 永久丢失
- Human Tension：可撤销窗口 vs 永久丢失
- Controlling Question：删掉的合照还能找回，为什么过了恢复期限就不行了？
- 科技改变的过程：照片的最近删除通常保留30天，超过恢复窗口不保证可找回
- 主机制：照片的最近删除通常保留30天，超过恢复窗口不保证可找回
- Audience Payoff：把可撤销窗口 vs 永久丢失两端的边界讲清楚
- Meaning Fingerprint：`ICLOUDDEL_002`
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
- Human Process：照片与家庭中相关决定与使用
- Human Problem：用户以为优化存储就是将云端原件直接留在本机
- 反常：本地清晰度 vs 空间节约
- Human Tension：本地清晰度 vs 空间节约
- Controlling Question：iCloud 显示照片还在，手机上为什么只有压缩版？
- 科技改变的过程：优化存储按容量保留设备小体积副本，云端存原件
- 主机制：优化存储按容量保留设备小体积副本，云端存原件
- Audience Payoff：把本地清晰度 vs 空间节约两端的边界讲清楚
- Meaning Fingerprint：`ICLOUD_003`
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
- Human Process：照片与家庭中相关决定与使用
- Human Problem：共享家庭照片的删除权限比许多人预想更大
- 反常：共同协作 vs 误删连带
- Human Tension：共同协作 vs 误删连带
- Controlling Question：一家人共用照片库，为什么一个人删除照片会影响所有人？
- 科技改变的过程：共享照片库成员可以删除照片；最近删除权限与原贡献者有关
- 主机制：共享照片库成员可以删除照片；最近删除权限与原贡献者有关
- Audience Payoff：把共同协作 vs 误删连带两端的边界讲清楚
- Meaning Fingerprint：`ICLOUDSHARED_004`
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
- Human Process：照片与家庭中相关决定与使用
- Human Problem：退出共享照片库时成员不了解副本归属
- 反常：共享方便 vs 离开后的所有权
- Human Tension：共享方便 vs 离开后的所有权
- Controlling Question：退出家庭共享相册，为什么加入时间不同拿到的照片也不同？
- 科技改变的过程：共享照片库创建者删除时按参与期限分配进入个人库的内容
- 主机制：共享照片库创建者删除时按参与期限分配进入个人库的内容
- Audience Payoff：把共享方便 vs 离开后的所有权两端的边界讲清楚
- Meaning Fingerprint：`ICLOUDSHARED_005`
- Motif：短期家庭协作结束→各自保存的照片范围不同
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-euro/118229
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H006 — 照片与家庭

- 最终选题：**清空 iCloud 网盘后后悔，为什么过了30天找回不了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：照片与家庭
- Human Process：照片与家庭中相关决定与使用
- Human Problem：用户认为所有云端文档都可以无限期恢复
- 反常：云端安全感 vs 删除窗口
- Human Tension：云端安全感 vs 删除窗口
- Controlling Question：清空 iCloud 网盘后后悔，为什么过了30天找回不了？
- 科技改变的过程：iCloud Drive 已删除文件只有有限恢复期，永久删除无法恢复
- 主机制：iCloud Drive 已删除文件只有有限恢复期，永久删除无法恢复
- Audience Payoff：把云端安全感 vs 删除窗口两端的边界讲清楚
- Meaning Fingerprint：`ICLOUDRESTORE_006`
- Motif：清理文档→次月想恢复→核对恢复条件
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.apple.com/en-ie/guide/icloud/mmae56ea1ca5/icloud
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H007 — 手机与硬件

- 最终选题：**iPhone 自动卸载了很久没用的 App，为什么重装后资料还在？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：手机与硬件
- Human Process：手机与硬件中相关决定与使用
- Human Problem：用户将卸载与彻底删除混为一谈
- 反常：清理容量 vs 保留个人内容
- Human Tension：清理容量 vs 保留个人内容
- Controlling Question：iPhone 自动卸载了很久没用的 App，为什么重装后资料还在？
- 科技改变的过程：卸载 App 释放程序空间但可保留文档数据
- 主机制：卸载 App 释放程序空间但可保留文档数据
- Audience Payoff：把清理容量 vs 保留个人内容两端的边界讲清楚
- Meaning Fingerprint：`IPHONEOFF_007`
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
- Human Process：手机与硬件中相关决定与使用
- Human Problem：用户误以为充电卡住就是电池坏了
- 反常：立即充满 vs 电池寿命
- Human Tension：立即充满 vs 电池寿命
- Controlling Question：明明插着充电器，为什么 iPhone 停在80%不充了？
- 科技改变的过程：优化充电根据日常模式暂缓充满以降低满电停留时间
- 主机制：优化充电根据日常模式暂缓充满以降低满电停留时间
- Audience Payoff：把立即充满 vs 电池寿命两端的边界讲清楚
- Meaning Fingerprint：`CHARGE_008`
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
- Human Process：手机与硬件中相关决定与使用
- Human Problem：默认提醒式限额被误当成强制停用
- 反常：提醒规则 vs 硬性控制
- Human Tension：提醒规则 vs 硬性控制
- Controlling Question：设置了屏幕使用时间，为什么孩子还能继续刷？
- 科技改变的过程：部分屏幕时间限额可忽略，强制阻止需正确设置限制
- 主机制：部分屏幕时间限额可忽略，强制阻止需正确设置限制
- Audience Payoff：把提醒规则 vs 硬性控制两端的边界讲清楚
- Meaning Fingerprint：`SCREENTIME_009`
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
- Human Process：手机与硬件中相关决定与使用
- Human Problem：用户以为勿扰等于所有来电一刀切
- 反常：拒绝打扰 vs 关键联络
- Human Tension：拒绝打扰 vs 关键联络
- Controlling Question：开了勿扰模式，为什么某个人的电话还能打进来？
- 科技改变的过程：专注模式允许指定联系人和重复来电例外
- 主机制：专注模式允许指定联系人和重复来电例外
- Audience Payoff：把拒绝打扰 vs 关键联络两端的边界讲清楚
- Meaning Fingerprint：`FOCUS_010`
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
- Human Process：手机与硬件中相关决定与使用
- Human Problem：随身的追踪器可能被误判为未知跟踪行为
- 反常：找回物品 vs 防止跟踪
- Human Tension：找回物品 vs 防止跟踪
- Controlling Question：行李箱里的定位器为什么可能让陌生人的手机报警？
- 科技改变的过程：跨平台未知追踪提醒会在符合条件时发出安全提示
- 主机制：跨平台未知追踪提醒会在符合条件时发出安全提示
- Audience Payoff：把找回物品 vs 防止跟踪两端的边界讲清楚
- Meaning Fingerprint：`AIRTAG_011`
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
- Human Process：手机与硬件中相关决定与使用
- Human Problem：用户忽略了共享位置也改变风险提醒逻辑
- 反常：共同定位 vs 风险警报
- Human Tension：共同定位 vs 风险警报
- Controlling Question：AirTag 分享给家人后，为什么共享的人不再收到陌生跟踪警报？
- 科技改变的过程：AirTag 共享组成员的该物品未知跟踪提醒被抑制，退出后恢复
- 主机制：AirTag 共享组成员的该物品未知跟踪提醒被抑制，退出后恢复
- Audience Payoff：把共同定位 vs 风险警报两端的边界讲清楚
- Meaning Fingerprint：`AIRTAGSHARE_012`
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
- Human Process：手机与硬件中相关决定与使用
- Human Problem：用户以为查找界面展示的是实时精确位置
- 反常：最后线索 vs 当前位置
- Human Tension：最后线索 vs 当前位置
- Controlling Question：耳机丢了却显示‘最后位置’，为什么不代表它还在那里？
- 科技改变的过程：不支持查找网络或离线的耳机会显示上次连接位置
- 主机制：不支持查找网络或离线的耳机会显示上次连接位置
- Audience Payoff：把最后线索 vs 当前位置两端的边界讲清楚
- Meaning Fingerprint：`AIRPODS_013`
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
- Human Process：手机与硬件中相关决定与使用
- Human Problem：紧急联系的自动化同时要求留出误触取消窗口
- 反常：及时援救 vs 误报防线
- Human Tension：及时援救 vs 误报防线
- Controlling Question：iPhone 检测出严重撞车后，为什么不用按确认也可能自动呼救？
- 科技改变的过程：严重碰撞警报在规定倒计时未取消时启动紧急呼叫
- 主机制：严重碰撞警报在规定倒计时未取消时启动紧急呼叫
- Audience Payoff：把及时援救 vs 误报防线两端的边界讲清楚
- Meaning Fingerprint：`CRASH_014`
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
- Human Process：家庭与孩子中相关决定与使用
- Human Problem：家庭账号设置中的免费应用也可能纳入购买审批
- 反常：独立探索 vs 家庭控制
- Human Tension：独立探索 vs 家庭控制
- Controlling Question：孩子点了‘免费下载’，为什么还要家长批准？
- 科技改变的过程：Ask to Buy 的特定设置对免费应用下载同样执行审批
- 主机制：Ask to Buy 的特定设置对免费应用下载同样执行审批
- Audience Payoff：把独立探索 vs 家庭控制两端的边界讲清楚
- Meaning Fingerprint：`FAMILY_015`
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
- Human Process：家庭与孩子中相关决定与使用
- Human Problem：共享订阅的费用可能统一向家庭组织者收取
- 反常：家庭共享 vs 支付责任
- Human Tension：家庭共享 vs 支付责任
- Controlling Question：一家人共享付费订阅，为什么最后扣的是组织者的卡？
- 科技改变的过程：开启家庭购买共享时适用的订阅费用使用组织者付款方式
- 主机制：开启家庭购买共享时适用的订阅费用使用组织者付款方式
- Audience Payoff：把家庭共享 vs 支付责任两端的边界讲清楚
- Meaning Fingerprint：`FAMILYBILL_016`
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
- Human Process：旅行与出行中相关决定与使用
- Human Problem：用户误以为离线地图具备在线交通更新能力
- 反常：离线可用 vs 实时数据
- Human Tension：离线可用 vs 实时数据
- Controlling Question：地图早已下载到手机，为什么断网后就看不到实时拥堵？
- 科技改变的过程：离线地图可用于指定道路导航但无法取得实时交通或替代路线
- 主机制：离线地图可用于指定道路导航但无法取得实时交通或替代路线
- Audience Payoff：把离线可用 vs 实时数据两端的边界讲清楚
- Meaning Fingerprint：`MAPSOFFLINE_017`
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
- Human Process：旅行与出行中相关决定与使用
- Human Problem：用户把所有导航模式都当成静态地图计算
- 反常：地图下载 vs 出行模式完整性
- Human Tension：地图下载 vs 出行模式完整性
- Controlling Question：离线地图能导航开车，为什么步行和公交却不行？
- 科技改变的过程：Google Maps 离线状态不支持公交、步行与骑行路线
- 主机制：Google Maps 离线状态不支持公交、步行与骑行路线
- Audience Payoff：把地图下载 vs 出行模式完整性两端的边界讲清楚
- Meaning Fingerprint：`MAPSOFFLINE_018`
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
- Human Process：旅行与出行中相关决定与使用
- Human Problem：用户以为 Google 地图时间线永久存放在统一网页账户
- 反常：设备隐私 vs 跨端可找回
- Human Tension：设备隐私 vs 跨端可找回
- Controlling Question：换了手机后，为什么过去去过的地方在电脑上也找不到？
- 科技改变的过程：时间线转向设备本地存储，电脑端已不可用且备份需另行开启
- 主机制：时间线转向设备本地存储，电脑端已不可用且备份需另行开启
- Audience Payoff：把设备隐私 vs 跨端可找回两端的边界讲清楚
- Meaning Fingerprint：`MAPSTIMELINE_019`
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
- Human Process：旅行与出行中相关决定与使用
- Human Problem：真实用户报告时间线迁移后失去历史记录
- 反常：迁移方便 vs 历史数据留存
- Human Tension：迁移方便 vs 历史数据留存
- Controlling Question：换机后过去三年的轨迹突然消失，是地图删了还是没搬过来？
- 科技改变的过程：设备本地时间线迁移及备份的开关与旧网页展示不同
- 主机制：设备本地时间线迁移及备份的开关与旧网页展示不同
- Audience Payoff：把迁移方便 vs 历史数据留存两端的边界讲清楚
- Meaning Fingerprint：`MAPSHISTORY_020`
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
- Human Process：旅行与出行中相关决定与使用
- Human Problem：当事人以为提交修改就会直接展示在地图上
- 反常：众包纠错 vs 平台核验
- Human Tension：众包纠错 vs 平台核验
- Controlling Question：好心纠正地图商家的营业时间，为什么系统不立即照改？
- 科技改变的过程：地图地点修改需审核，结果可能通过、等待或被拒绝
- 主机制：地图地点修改需审核，结果可能通过、等待或被拒绝
- Audience Payoff：把众包纠错 vs 平台核验两端的边界讲清楚
- Meaning Fingerprint：`MAPSEDIT_021`
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
- Human Process：旅行与出行中相关决定与使用
- Human Problem：地图错误地点被举报却未通过修正的真实营业者困扰
- 反常：数据自治 vs 平台可信审查
- Human Tension：数据自治 vs 平台可信审查
- Controlling Question：地图的错误地址都有人举报了，为什么顾客还是被带到错误地点？
- 科技改变的过程：地点编辑与重复地点合并受审核机制约束，不保证即时生效
- 主机制：地点编辑与重复地点合并受审核机制约束，不保证即时生效
- Audience Payoff：把数据自治 vs 平台可信审查两端的边界讲清楚
- Meaning Fingerprint：`MAPSWRONG_022`
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
- Human Process：旅行与出行中相关决定与使用
- Human Problem：对行程的关心由临时询问变成持续位置事件订阅
- 反常：安全安心 vs 持续可见性
- Human Tension：安全安心 vs 持续可见性
- Controlling Question：家人共享定位后，为什么可以设置‘到家了自动提醒我’？
- 科技改变的过程：位置共享可为特定地点的进入/离开触发通知
- 主机制：位置共享可为特定地点的进入/离开触发通知
- Audience Payoff：把安全安心 vs 持续可见性两端的边界讲清楚
- Meaning Fingerprint：`MAPSNOTICE_023`
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
- Human Process：旅行与出行中相关决定与使用
- Human Problem：用户把 ETA 分享误当成只发送一个静态时间
- 反常：报平安 vs 行程暴露
- Human Tension：报平安 vs 行程暴露
- Controlling Question：只是想分享‘我多久到’，为什么导航还能分享一路的位置？
- 科技改变的过程：行程进度分享可包含当前定位与目的地，并随导航结束停止
- 主机制：行程进度分享可包含当前定位与目的地，并随导航结束停止
- Audience Payoff：把报平安 vs 行程暴露两端的边界讲清楚
- Meaning Fingerprint：`MAPSSHARE_024`
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
- Human Process：照片与家庭中相关决定与使用
- Human Problem：用户误把‘释放设备空间’当成‘删除全部照片’
- 反常：设备清理 vs 云端副本
- Human Tension：设备清理 vs 云端副本
- Controlling Question：Google 相册删掉了手机原件，为什么云端照片还能看？
- 科技改变的过程：已备份照片可用释放空间操作仅移除本地副本
- 主机制：已备份照片可用释放空间操作仅移除本地副本
- Audience Payoff：把设备清理 vs 云端副本两端的边界讲清楚
- Meaning Fingerprint：`GPHOTOSFREE_025`
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
- Human Process：照片与家庭中相关决定与使用
- Human Problem：用户认为云端保留的图片自然也在本机可离线打开
- 反常：同步可见 vs 断网可用
- Human Tension：同步可见 vs 断网可用
- Controlling Question：相册照片存云端后，为什么没网时在原生相册看不见？
- 科技改变的过程：释放设备空间后某些本机图库与离线状态无法访问云端内容
- 主机制：释放设备空间后某些本机图库与离线状态无法访问云端内容
- Audience Payoff：把同步可见 vs 断网可用两端的边界讲清楚
- Meaning Fingerprint：`GPHOTOSFREE_026`
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
- Human Process：照片与家庭中相关决定与使用
- Human Problem：用户以为停止分享等于远端收件人手中副本也消失
- 反常：访问撤回 vs 既有副本
- Human Tension：访问撤回 vs 既有副本
- Controlling Question：取消共享相册后，为什么对方早已保存的照片还在？
- 科技改变的过程：Google Photos Partner Sharing 撤回不会自动删除对方已经保存到账户的照片
- 主机制：Google Photos Partner Sharing 撤回不会自动删除对方已经保存到账户的照片
- Audience Payoff：把访问撤回 vs 既有副本两端的边界讲清楚
- Meaning Fingerprint：`GPHOTOPARTNER_027`
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
- Human Process：云端协作中相关决定与使用
- Human Problem：用户把同步目录错当本地普通文件夹
- 反常：普通文件夹直觉 vs 云同步
- Human Tension：普通文件夹直觉 vs 云同步
- Controlling Question：在电脑的 OneDrive 文件夹删了文件，为什么云端也没了？
- 科技改变的过程：OneDrive 目录里的删除会改变云端同步状态
- 主机制：OneDrive 目录里的删除会改变云端同步状态
- Audience Payoff：把普通文件夹直觉 vs 云同步两端的边界讲清楚
- Meaning Fingerprint：`ONEDRIVEDELETE_028`
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
- Human Process：云端协作中相关决定与使用
- Human Problem：用户以为列表出现图标就意味着全部文件已下载
- 反常：随时可见 vs 实际离线拥有
- Human Tension：随时可见 vs 实际离线拥有
- Controlling Question：OneDrive 里‘有这份文件’，为什么电脑磁盘几乎不占空间？
- 科技改变的过程：文件按需功能保留占位项目，内容在访问时才下载
- 主机制：文件按需功能保留占位项目，内容在访问时才下载
- Audience Payoff：把随时可见 vs 实际离线拥有两端的边界讲清楚
- Meaning Fingerprint：`ONEDRIVEDELETE_029`
- Motif：出差时点开云端文件→因离线打不开→检查占位状态
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.microsoft.com/en-us/onedrive/delete-files-or-folders-in-onedrive
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H030 — 云端协作

- 最终选题：**被覆盖的合同还能找回上个月版本，为什么所有账户都未必能做到？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：云端协作中相关决定与使用
- Human Problem：用户以为云存储的版本恢复权限对所有用户相同
- 反常：云端可恢复 vs 权限和时限
- Human Tension：云端可恢复 vs 权限和时限
- Controlling Question：被覆盖的合同还能找回上个月版本，为什么所有账户都未必能做到？
- 科技改变的过程：OneDrive 相关恢复功能与订阅资格、恢复期限及拥有者身份有关
- 主机制：OneDrive 相关恢复功能与订阅资格、恢复期限及拥有者身份有关
- Audience Payoff：把云端可恢复 vs 权限和时限两端的边界讲清楚
- Meaning Fingerprint：`ONEDRIVERESTORE_030`
- Motif：文档被覆盖→想回到旧合同→发现账户权益不同
- Content Job：DISCOVERY
- Source / Signal：VERIFIED_BEHAVIOR；https://support.microsoft.com/en-us/onedrive/restore-your-onedrive-files
- 证据适用边界：只针对该官方文档所载产品、条件和功能；不外推其他服务、版本或用户。
- Status：PASS_CANDIDATE

---

## H031 — 云端协作

- 最终选题：**Google Drive 分享给同事的表格，为什么一删除对方也打不开了？**
- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：云端协作
- Human Process：云端协作中相关决定与使用
- Human Problem：用户将访问权限误解成独立获得文档所有权
- 反常：能打开 vs 真正拥有
- Human Tension：能打开 vs 真正拥有
- Controlling Question：Google Drive 分享给同事的表格，为什么一删除对方也打不开了？
- 科技改变的过程：文件所有者永久删除会使分享对象失去访问
- 主机制：文件所有者永久删除会使分享对象失去访问
- Audience Payoff：把能打开 vs 真正拥有两端的边界讲清楚
- Meaning Fingerprint：`GDRIVEDELETE_031`
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
- Human Process：云端协作中相关决定与使用
- Human Problem：用户误以为转让父文件夹自动转移所有子文件所有权
- 反常：容器控制权 vs 内容所有权
- Human Tension：容器控制权 vs 内容所有权
- Controlling Question：把 Google Drive 文件夹转给同事，为什么里面的文件不都跟着转了？
- 科技改变的过程：文件夹所有权转让不自动移交内部各个文件
- 主机制：文件夹所有权转让不自动移交内部各个文件
- Audience Payoff：把容器控制权 vs 内容所有权两端的边界讲清楚
- Meaning Fingerprint：`GDRIVESHARE_032`
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
- Human Process：云端协作中相关决定与使用
- Human Problem：用户以为每一份文件权限能无条件覆盖上级共享规则
- 反常：协作便利 vs 最小可见范围
- Human Tension：协作便利 vs 最小可见范围
- Controlling Question：共享文件夹里只想藏一份文档，为什么不能直接给它更低权限？
- 科技改变的过程：共享文件夹内权限继承与有限权限文件夹功能受产品约束
- 主机制：共享文件夹内权限继承与有限权限文件夹功能受产品约束
- Audience Payoff：把协作便利 vs 最小可见范围两端的边界讲清楚
- Meaning Fingerprint：`GDRIVESHARE_033`
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
- Human Process：云端协作中相关决定与使用
- Human Problem：真实用户报告离线文档更改重新联网后未保存
- 反常：离线工作 vs 同步保证
- Human Tension：离线工作 vs 同步保证
- Controlling Question：飞机上编辑的在线文档为什么重新联网后没有出现修改？
- 科技改变的过程：离线修改暂存于特定设备，离线同步失效可能丢失
- 主机制：离线修改暂存于特定设备，离线同步失效可能丢失
- Audience Payoff：把离线工作 vs 同步保证两端的边界讲清楚
- Meaning Fingerprint：`DOCSOFFLINE_034`
- Motif：飞机改稿→落地换机→发现版本仍旧
- Content Job：DISCOVERY
- Source / Signal：OBSERVED_CASE；https://support.google.com/docs/thread/174551542/lost-changes-made-to-offline-document?hl=en
- 证据适用边界：具体当事人自述仅能证明曾有此类经历，不能代表所有用户或地区。
- Status：PASS_CANDIDATE

---

