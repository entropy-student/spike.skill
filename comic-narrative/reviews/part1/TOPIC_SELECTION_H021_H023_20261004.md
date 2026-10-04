# Part 1 — H021–H023 选题确认 Review

> Date: 2026-10-04  
> Current Part 1: `part1/TOPIC_STRATEGY.md`  
> Historical comparison base: `part0/TOPIC_LIBRARY.md` H001–H020  
> Result: **3 PASS**

## 结论

本轮确认 3 个 Evergreen 选题，均通过 Part 1 五项硬检查与 Part 0 D1–D5 历史复查。

选择时额外考虑了后续完整流水线测试价值：三题的人物场景、核心机制、视觉难点和情绪强度不同，适合验证 Part 2 → Part 4 的泛化能力，而不是继续只测酒店/天气一类 UI 与平台机制题。

---

## H021 — 降噪耳机

### 最终选题

**为什么降噪耳机能压住飞机轰鸣，却压不住旁边的人声？**

### Part 1 结构

- 选题类型：机制 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：耳机 / 通勤 / 飞行
- Human Process：在持续噪声环境里听音 / 隔绝环境声
- Human Problem：用户容易把“主动降噪”理解成所有声音都能被同等消除
- 反常：发动机、空调等持续轰鸣明显变小，但附近的人声仍容易穿进来
- Human Tension：统一静音预期 vs 不同声音的可预测性 / 频率结构
- Controlling Question：降噪耳机是在“消灭所有声音”，还是只特别擅长抵消某一类声音？
- 科技改变的过程：麦克风实时采集环境声，DSP 生成相位相反的信号进行主动抵消
- 主机制：ANC 对稳定、可预测的低频持续噪声最有效；快速变化、频率范围更宽的人声更难实时抵消
- Audience Payoff：理解为什么“降噪强”不等于“任何声音都消失”，也知道产品体验差异来自声音类型而不只是耳机好坏
- Meaning Fingerprint：`UNIVERSAL_SILENCE_EXPECTATION_VS_SIGNAL_PREDICTABILITY`
- Motif：飞机/地铁持续轰鸣 → 戴上耳机后底噪突然退去 → 邻座开口仍能听见 → 展开麦克风 / 反相信号 / 不同声音变化速度
- Content Job：DISCOVERY

### 五项硬检查

1. 人会关心且受众适配：PASS；即使去掉技术名词，“为什么轰鸣没了但人声还在”仍是直接体验问题。
2. 真的有 WHY：PASS；“降噪”与“仍能听见人声”存在清晰预期落差。
3. 科技在因果链且机制准确：PASS；主动降噪的核心就是采集环境声并生成相反信号，官方资料明确说明它对稳定低频更有效。
4. 一条只讲一个主机制：PASS；只讲“稳定低频更容易被 ANC 抵消”，不展开耳塞密封、编码、通透模式等支线。
5. 能讲成故事且有非平凡收获：PASS；有行动、即时结果和反常体验，结尾能解释产品能力边界。

### D1–D5

- D1：Evergreen，跳过。
- D2：与 H001–H020 无同一 Topic Fingerprint。
- D3：无同一人的问题 / 同一主要结论；与既有设备题 H016/H020 的收获不同。
- D4：无明显重复故事母题。
- D5：历史库无 `UNIVERSAL_SILENCE_EXPECTATION_VS_SIGNAL_PREDICTABILITY` 同义题。
- 结果：`PASS`。

### 事实来源

- Bose, `What Is Active Noise Cancellation?`：ANC 使用麦克风分析环境声并输出相反信号；稳定低频噪声最容易被削弱。
  - https://www.bose.com/stories/what-is-active-noise-cancellation
- Sony, `What is Noise-Cancellation and what can I expect?`：恒定低/中频更适合降噪；人声快速变化使处理更困难。
  - https://www.sony.com/electronics/support/wireless-headphones-bluetooth-headphones/wh-1000xm5/articles/00203389

---

## H022 — 手机夜景

### 最终选题

**为什么手机夜景一拍，现场明明很暗，照片却像突然开了灯？**

### Part 1 结构

- 选题类型：机制 / 惊奇
- Entry：HUMAN_WORLD_FIRST
- X：手机摄影 / 夜景
- Human Process：记录当下场景
- Human Problem：用户直觉上把按一次快门理解为记录一个瞬间，却忽略现代手机会在背后采集和合并多帧
- 反常：现实现场很暗，最终照片却更亮、更干净、细节更多
- Human Tension：单次瞬间记录 vs 多帧计算合成
- Controlling Question：手机夜景拍到的是“那一瞬间”，还是很多帧共同算出来的一张照片？
- 科技改变的过程：夜景模式根据手抖与场景运动选择曝光，并连续采集多帧后合并、降噪、调整亮度与颜色
- 主机制：多帧计算摄影把多张较暗但较清晰 / 不同曝光的图像信息合并，从而增加有效光线与降低噪声
- Audience Payoff：理解为什么夜景照片能比单帧更亮更清楚，也理解为什么拍夜景时需要尽量稳定、运动物体更难处理
- Meaning Fingerprint：`SINGLE_MOMENT_VS_MULTI_FRAME_COMPUTATION`
- Motif：昏暗街道肉眼所见 → 主角举手机 → 快门后出现明显更亮的照片 → 时间倒带展开多张连续帧 → 合并成最终夜景
- Content Job：DISCOVERY

### 五项硬检查

1. 人会关心且受众适配：PASS；是几乎所有手机用户都能直接观察到的现象。
2. 真的有 WHY：PASS；现场亮度与照片亮度存在强烈反常。
3. 科技在因果链且机制准确：PASS；Google 官方明确描述 Night Sight 连拍多帧并合并，以兼顾亮度、噪声和运动模糊。
4. 一条只讲一个主机制：PASS；只讲多帧计算摄影，不扩展传感器尺寸、镜头光圈、RAW pipeline 等支线。
5. 能讲成故事且有非平凡收获：PASS；从“照片怎么比现场亮”进入“现代手机照片不是单一瞬间”的理解。

### D1–D5

- D1：Evergreen，跳过。
- D2：历史库无同一 Topic Fingerprint。
- D3：不同于 H014 家庭记忆，也不同于 H016 智能穿戴测量；这里核心是摄影记录过程本身被计算化。
- D4：无重复 Motif。
- D5：历史库无 `SINGLE_MOMENT_VS_MULTI_FRAME_COMPUTATION` 同义题。
- 结果：`PASS`。

### 事实来源

- Google Pixel, `See the light with Night Sight`：Night Sight 会拍摄一组暗但较清晰的照片并合并成更亮的照片。
  - https://blog.google/products-and-platforms/devices/pixel/see-light-night-sight/
- Google Pixel, `How we made Pixel’s Night Sight even faster`：描述预快门帧、长曝光帧、HDR+ with Bracketing 合并与 ML 降噪。
  - https://blog.google/products-and-platforms/devices/pixel/night-sight-ai-faster/

---

## H023 — AI 修老照片

### 最终选题

**AI 把模糊老照片修得越清楚，为什么有时候反而越不像本人？**

### Part 1 结构

- 选题类型：机制 / 判断
- Entry：HUMAN_WORLD_FIRST
- X：家庭照片 / AI 图像修复
- Human Process：保存人物记忆 / 恢复受损影像
- Human Problem：原图里已经缺失的面部细节无法直接“找回来”，生成式修复必须借助先验去推断合理细节
- 反常：照片清晰度大幅上升，本应更接近原貌，却可能在五官或身份感上更不像本人
- Human Tension：清晰度 vs 忠实度
- Controlling Question：当原图本来就没有足够细节时，AI 是在恢复事实，还是在补出一个“看起来合理”的版本？
- 科技改变的过程：生成式人脸修复从训练数据中学到面部先验，并用这些先验补全低质量输入中缺失的细节
- 主机制：Generative Facial Prior 可以生成真实感更强的面部细节，但在信息严重缺失时必须在 realness 与 fidelity 之间权衡
- Audience Payoff：理解“更清晰”不等于“更真实”，尤其面对家人老照片时应把生成式修复视为重建而不是原始证据恢复
- Meaning Fingerprint：`CLARITY_VS_FIDELITY`
- Motif：翻出模糊家庭老照片 → 一键修复后所有人先惊叹 → 与记忆/其他照片对比发现鼻子、嘴型或脸部细节变了 → 回到原图指出那些信息本来就不存在
- Content Job：TRUST

### 五项硬检查

1. 人会关心且受众适配：PASS；“把家人旧照修清楚”是直接的人类需求，不依赖技术圈兴趣。
2. 真的有 WHY：PASS；清晰度上升却可能身份忠实度下降，预期落差强。
3. 科技在因果链且机制准确：PASS；CVPR GFPGAN 明确以生成式人脸先验补充低质量输入，并强调 realness / fidelity 的平衡。
4. 一条只讲一个主机制：PASS；只讲生成式先验在缺失细节上的推断，不扩展色彩化、超分辨率、去划痕等多条算法。
5. 能讲成故事且有非平凡收获：PASS；家庭记忆场景有行动和后果，最终建立对 AI 修复证据边界的判断。

### D1–D5

- D1：Evergreen，跳过。
- D2：与 H014 都涉及家庭照片，但 Topic Fingerprint 不同：H014 是记忆资料保存 vs 主动纪念；H023 是图像修复中的清晰度 vs 身份忠实度。
- D3：观众收获不同；不是“是否主动纪念”，而是“生成式修复并不等于事实恢复”。
- D4：H014 的 Motif 是自动整理照片后很少再打开；H023 是受损旧照修复前后对照，不重复。
- D5：`CLARITY_VS_FIDELITY` 与历史库无同义 Meaning Fingerprint。
- 结果：`PASS`。

### 事实来源

- CVPR 2021, `Towards Real-World Blind Face Restoration With Generative Facial Prior`：GFPGAN 使用预训练人脸 GAN 中的生成式先验，并明确讨论 realness 与 fidelity 的平衡。
  - https://openaccess.thecvf.com/content/CVPR2021/html/Wang_Towards_Real-World_Blind_Face_Restoration_With_Generative_Facial_Prior_CVPR_2021_paper.html
- 2026 社区信号：近期老照片 AI 修复讨论中，用户反复提到“更清晰但不像原本人”的身份漂移体验；只作为需求/讨论信号，不作为机制事实来源。

---

## 测试价值对比

| 选题 | 主要测试价值 | 视觉难点 | 机制解释难度 | 推荐优先级 |
|---|---|---|---|---|
| H023 AI 修老照片 | 情绪故事 + before/after + 人脸身份一致性 | 高 | 中 | 1 |
| H021 降噪耳机 | 日常场景 + 声音机制可视化 + 非 UI 叙事 | 中 | 中 | 2 |
| H022 手机夜景 | 强反常 + 夜景光线 + 多帧计算摄影可视化 | 中高 | 中 | 3 |

三题均可进入 Part 2；本轮只确认选题，不自动开始剧本、分镜或生图。
