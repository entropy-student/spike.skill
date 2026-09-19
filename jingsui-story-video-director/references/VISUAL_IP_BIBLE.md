# VISUAL / IP BIBLE V3.2 — 三视频实测后

## 状态

`VISUAL_PROFILE_STATUS = CALIBRATED_MULTI_VIDEO_3`

详细证据见 `VIDEO_CALIBRATION_PROFILE.md`。三条完整MP4共同支持：白/近白背景为主、大头小身、黑轮廓、平涂、极简场景、强表情/动作与少量特殊标点镜头。

## 1. 默认视觉语法

默认不是精致插画，不是日漫，也不是信息卡动画。

使用：

> **极简二维手绘漫画 + 白底 + 大头小身原创男主 + 黑轮廓 + 平涂 + 夸张表情/动作 + 最低限度场景道具。**

核心不是“画得漂亮”，而是“一眼看懂这句话发生了什么”。

## 2. 原创男主 IP

禁止直接复制参考创作者头像。

固定 7 个锚点：
1. 男性成年角色；
2. 大椭圆/圆形头；
3. 极简短发符号或独特头发轮廓；
4. 固定上衣主色；
5. 细线四肢 + 简化身体；
6. 大眼/线嘴的固定画法；
7. 一个长期签名道具。

### 推荐原创差异化

为了避免变成“景岁头像复制”：
- 保留大头小身语法；
- 把发型、眉眼、上衣颜色、签名道具全部原创；
- 默认主角可设为：短黑发 + 酒红色宽松上衣 + 深灰裤 + 白鞋 + 深色手机/笔记本。

> “景岁感”来自叙事与视觉语法，不来自复制他的角色脸。

## 3. 表情资产

至少 16 个：
- 正常
- 轻笑
- 狂喜
- 得意
- 心虚
- 疲惫
- 无语
- 怀疑
- 紧张
- 惊恐
- 生气
- 委屈
- 尴尬
- 思考
- 顿悟
- 自我膨胀

漫画符号可配：
- 汗滴
- 问号
- 青筋
- 星光
- 光环
- 动作线
- 乌云
- 速度线

## 4. 动作资产

至少 18 个：
站、坐、走、跑、指、摊手、叉腰、托腮、抱头、看手机、举手机、打电话、敲键盘、躺床、趴桌、鞠躬、被围住、被物件压住。

## 5. 场景复杂度

### 默认白底反应镜
只画人物 + 0–2 个语义元素。

### 小型生活场景
只画 2–5 个物件：
- 卧室：床/桌/电脑/窗；
- 公司：桌/电脑/椅/同事；
- 家庭：沙发/饭桌/电视；
- 药店：柜台/货架；
- 街道：路标/交通符号。

不要完整装修。

## 6. 配色

- 背景：白 / 暖白；
- 轮廓：近黑；
- 肤色：暖浅色；
- 主角：固定主色；
- 配角：每人 1 个简单主色；
- 特殊比喻镜允许蓝/黑/红等强色块。

每个普通镜头尽量不超过 4–6 个显著颜色。

## 7. 构图优先级

1. 单人中近景/全身白底
2. 双人/多人关系构图
3. 小场景叙事图
4. 物件特写
5. 群体/制度示意漫画
6. 夸张比喻镜
7. 黑卡落锤

## 8. 默认 Prompt

```text
minimal flat 2D hand-drawn Chinese webcomic illustration, clean white background, bold slightly imperfect black outlines, original adult male cartoon protagonist with oversized oval head and tiny simplified body, highly readable simple facial expression, thin simple limbs, flat color fills, sparse props, humorous editorial-cartoon staging, strong visual clarity, exaggerated body language, large negative space, simple everyday Chinese urban-life setting only when necessary, no complex shading, no realism, no 3D, no polished anime rendering, 16:9
```

## 9. Negative

```text
photorealistic, cinematic realism, 3d render, detailed anime, painterly illustration, complex lighting, glossy rendering, realistic anatomy, cluttered room, dense decoration, excessive texture, dramatic depth of field, random text, illegible Chinese, information-card layout, corporate infographic, powerpoint aesthetic
```

## 10. 生图原则

先生成：
- 角色正面 Master；
- 16 表情；
- 18 动作；
- 6–10 常用小场景；

再按视频逐镜补特殊梗图。

目标是第 10 条视频以后，大部分画面来自已有资产的变体与重组，而不是每条从零开始。
