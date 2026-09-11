# PocketBay TalkCraft SHOTBOOK · strict build

> Source: user-confirmed SHOTBOOK. Timing boundary typo around S07/S08 is corrected to the uploaded SRT because TalkCraft treats subtitle sentence boundaries as hard anchors.

## G0 风格档
- 1920×1080 · 30fps · TalkCraft 默认 Apple 骨架 + 科技编辑气质。
- 唯一强调色：#5B5FF2。浅/深幕交替；真实页面不重绘。
- 页面素材由 Playwright 在同一构建中直接拍摄；长页坐标由 DOM `getBoundingClientRect()` 记录。

### S01 · 0.000–11.250 · 钩子
- 素材：图（public/pages/home-hero.png）· 截图（public/pages/home-hero.png）· 文
- Recipe：slab-punch-title
- 层矩阵：G5 真实官网首屏极缓推；标题层只在语义拍进入；字幕层底部硬切。

### S02 · 11.250–17.708 · AI 编码工具汇聚
- 素材：图（public/stills/home-deploy.png）· 文
- Recipe：source-converge
- 层矩阵：G5 三来源曲线汇聚到产品代码；结果居中静置。

### S03 · 17.708–25.000 · 代码之后的问题
- 素材：文
- Recipe：word-slot-cycle
- 层矩阵：G5 句干钉死，单一词槽轮换四个问题，最终结论唯一过冲。

### S04 · 25.000–33.542 · 门槛后移
- 素材：文
- Recipe：title-demote-to-label
- 层矩阵：G5 标题先宣告再降格；三条内容按语义拍逐条生长。

### S05 · 33.542–45.417 · 后面整段链路
- 素材：图（public/pages/home-scroll.png）· 截图（public/pages/home-scroll.png）· 文
- Recipe：evidence-scroll-tour
- 层矩阵：G5 真实官网长页唯一持续运动；减速停靠与标注呼吸按原 Recipe。

### S06 · 45.417–56.667 · 部署能力边界
- 素材：V（public/stills/deploy-loop.mp4）· 图（public/pages/deploy-full.png）· 截图（public/pages/deploy-full.png）· 文
- Recipe：split-60-40-story
- 层矩阵：G5 左 60% 真部署页缓推，右 40% 三枚 chip 按口播出现。

### S07 · 56.667–62.292 · 反转
- 素材：文
- Recipe：strike-and-replace
- 层矩阵：G5 清场文字镜；部署能力被划掉，同位替换完整链路。

### S08 · 62.292–72.292 · 产品闭环
- 素材：文
- Recipe：step-timeline-vertical
- 层矩阵：G5 四步顺序时间线，线到哪亮哪；第四步唯一升级为空心环。

### S09 · 72.292–83.958 · 产品发行平台
- 素材：图（public/stills/home-deploy.png, public/stills/home-discover.png, public/stills/home-creator.png, public/stills/home-earn.png）· 文
- Recipe：source-converge
- 层矩阵：G5 四张真实官网区域统一缩略图沿曲线汇聚到“产品发行平台”。

### S10 · 83.958–93.958 · 最大风险
- 素材：图（public/pages/discover-scroll.png）· 截图（public/pages/discover-scroll.png）· 文
- Recipe：evidence-scroll-tour
- 层矩阵：G5 Discover 真实长页慢滚，停在应用区域；风险问题在页面静止后出现。

### S11 · 93.958–99.792 · 回音室风险
- 素材：图（public/stills/app-auto-ledger.png, public/stills/app-rednote-copy.png, public/stills/app-color-type.png）· 文
- Recipe：gallery-wall-dolly
- 层矩阵：G5 三张真实公开应用卡平级挂墙，停靠后必须拉回全景。

### S12 · 99.792–109.792 · 两项真实证据
- 素材：文
- Recipe：title-demote-to-label
- 层矩阵：G5 两项观察目标按口播生长；没有真实数据时只显示“待验证”，不造数字。

### S13 · 109.792–115.625 · 条件结论
- 素材：文
- Recipe：slab-punch-title
- 层矩阵：G5 块先到位、字后硬切；副行只做低层级说明。

### S14 · 115.625–120.000 · 最终金句
- 素材：图（public/stills/pocketbay-logo.png）· 文
- Recipe：lead-word-zoom-assemble
- 层矩阵：G5 “AI”首词独占后缩回补句；副行同窗出现；官方字标保持比例。

## 未完成 / 未采集清单
无。所有声明素材在 CI 的 Playwright 采集阶段生成；若任一文件缺失，preflight 必须 FAIL 并阻止渲染。
