---
name: ai-models-leaderboard
description: Fetches AI model rankings from Artificial Analysis (artificialanalysis.ai) and replies directly with formatted markdown tables. Use when user asks about AI model rankings, best LLM, model comparison, or wants latest leaderboard data.
version: "2.0"
author: Judy (朱迪)
license: MIT
---

# AI Models Leaderboard Skill

Fetches real-time AI model rankings from Artificial Analysis using Playwright and replies directly with formatted markdown tables. No cards, no screenshots to external accounts.

## Usage

```
AI模型榜单
AI排行榜
大模型对比
Artificial Analysis
AI leaderboard
最佳LLM
模型性能对比
```

## Workflow

### Step 1: Screenshot (optional, for reference only)

```bash
node -e "
const { chromium } = require('/usr/lib/node_modules/playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1400, height: 900 });
  await page.goto('https://artificialanalysis.ai/', { waitUntil: 'load', timeout: 30000 });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/ai-leaderboard.png', fullPage: false });
  await browser.close();
})().catch(e => console.error(e.message));
"
```

### Step 2: Reply directly via message tool

Send the following formatted content directly in the current conversation:

```
🏆 Artificial Analysis · 核心数据

---

**🌐 平台简介**

第三方 AI 模型评估平台，专注性能评测与选型参考，不附属于任何模型厂商。

---

**📊 三大核心榜单**

**Intelligence Index（综合智能指数）** — 综合10项评估

| 排名 | 模型 | 分数 |
|------|------|------|
| 1 | GPT-5.5 (xhigh) | 60 |
| 2 | Claude Opus 4.7 (max) | 57 |
| 2 | Gemini 3.1 Pro Preview | 57 |
| 4 | GPT-5.4 (xhigh) | 54 |
| 5 | Kimi K2.6 | 54 |
| 6 | DeepSeek V4 Pro (Max) | 52 |
| ... | MiniMax-M2.7 | 50 |

**Speed（输出速度）** — Tokens/秒

| 排名 | 模型 | 速度 |
|------|------|------|
| 1 | gpt-oss-120B | 209 tps |
| 2 | NVIDIA Nemotron 3 Super | 154 tps |
| 3 | Gemini 3.1 Pro Preview | 123 tps |
| 4 | Grok 4.20 0309 v2 | 115 tps |
| 5 | Kimi K2.6 | 112 tps |

**Price（价格）** — $/1M Tokens

| 排名 | 模型 | 价格 |
|------|------|------|
| 1 | gpt-oss-120B | $0.30 |
| 2 | NVIDIA Nemotron 3 Super | $0.40 |
| 3 | DeepSeek V4 Flash | $0.14 |
| 4 | DeepSeek V3.2 | $0.28 |
| 5 | Mistral Small 4 | $0.15 |

---

**📰 最新动态（近5天）**
- 24 Apr — DeepSeek V4 Pro/Flash 重回开源前列
- 23 Apr — GPT-5.5 成为新领袖模型
- 23 Apr — DeepSeek V4 全版本评测发布
- 20 Apr — Kimi K2.6 成为新开源第一
- 21 Apr — Claude Opus 4.7 评测上线

---

**来源：** https://artificialanalysis.ai
```

Note: Actual data should be extracted from the live page. Table content above is a placeholder showing the expected format.

## Data Source

https://artificialanalysis.ai
Updated daily. 496 models tracked.