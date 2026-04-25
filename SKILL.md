---
name: ai-models-leaderboard
description: Fetches AI model rankings from Artificial Analysis (artificialanalysis.ai) including Intelligence Index, Speed, Price, and latest news. Outputs via feishu_im_user_message as interactive card with lark_md tables. Use when user asks about AI model rankings, best LLM, model comparison, or wants latest leaderboard data.
version: "1.0"
author: Judy (朱迪)
license: MIT
---

# AI Models Leaderboard Skill

Fetches real-time AI model rankings from Artificial Analysis using Playwright and outputs as Feishu card with lark_md markdown tables.

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

### Step 1: Screenshot

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

### Step 2: Send Feishu Card via feishu_im_user_message

Target: receive_id = ou_13198dff86df39f443084c8dc460d89f, receive_id_type = open_id

```json
{
  "header": {
    "title": { "tag": "plain_text", "content": "🏆 Artificial Analysis · 核心数据" },
    "template": "purple"
  },
  "elements": [
    { "tag": "hr" },
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "**🌐 平台简介**\n\n第三方 AI 模型评估平台，专注性能评测与选型参考，不附属于任何模型厂商。"
      }
    },
    { "tag": "hr" },
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "**📊 三大核心榜单**\n\n**Intelligence Index（综合智能指数）** — 综合10项评估\n\n| 排名 | 模型 | 分数 |\n|------|------|------|\n| 1 | GPT-5.5 (xhigh) | 60 |\n| 2 | Claude Opus 4.7 (max) | 57 |\n| 2 | Gemini 3.1 Pro Preview | 57 |\n| 4 | GPT-5.4 (xhigh) | 54 |\n| 5 | Kimi K2.6 | 54 |\n| 6 | DeepSeek V4 Pro (Max) | 52 |\n| ... | MiniMax-M2.7 | 50 |\n\n**Speed（输出速度）** — Tokens/秒\n\n| 排名 | 模型 | 速度 |\n|------|------|------|\n| 1 | gpt-oss-120B | 209 tps |\n| 2 | NVIDIA Nemotron 3 Super | 154 tps |\n| 3 | Gemini 3.1 Pro Preview | 123 tps |\n| 4 | Grok 4.20 0309 v2 | 115 tps |\n| 5 | Kimi K2.6 | 112 tps |\n\n**Price（价格）** — $/1M Tokens\n\n| 排名 | 模型 | 价格 |\n|------|------|------|\n| 1 | gpt-oss-120B | $0.30 |\n| 2 | NVIDIA Nemotron 3 Super | $0.40 |\n| 3 | DeepSeek V4 Flash | $0.14 |\n| 4 | DeepSeek V3.2 | $0.28 |\n| 5 | Mistral Small 4 | $0.15 |"
      }
    },
    { "tag": "hr" },
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "**📰 最新动态（近5天）**\n- 24 Apr — DeepSeek V4 Pro/Flash 重回开源前列\n- 23 Apr — GPT-5.5 成为新领袖模型\n- 23 Apr — DeepSeek V4 全版本评测发布\n- 20 Apr — Kimi K2.6 成为新开源第一\n- 21 Apr — Claude Opus 4.7 评测上线"
      }
    },
    { "tag": "hr" },
    {
      "tag": "div",
      "text": {
        "tag": "lark_md",
        "content": "**来源：** https://artificialanalysis.ai"
      }
    }
  ]
}
```

Note: The actual data (model names, scores, etc.) should be extracted from the live page using Playwright. The table data in this SKILL.md is an example placeholder. The agent should parse the actual rankings from the page on each run.

## Data Source

https://artificialanalysis.ai
Updated daily. 496 models tracked.