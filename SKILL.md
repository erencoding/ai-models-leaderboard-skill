---
name: ai-models-leaderboard
description: "Fetches AI model rankings from Artificial Analysis (artificialanalysis.ai) and replies with formatted markdown tables. Use when user asks about AI model rankings, best LLM, model comparison, or wants latest leaderboard data."
version: "3.0"
author: Judy (朱迪)
license: MIT
---

# AI Models Leaderboard Skill

Fetches real-time AI model rankings from Artificial Analysis using Playwright and replies with formatted markdown tables.

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

### Step 1: Capture leaderboard data

Use Playwright to navigate to Artificial Analysis and capture the current leaderboard state. Take a screenshot for reference and extract data from the page.

The page URL is: https://artificialanalysis.ai/

### Step 2: Format and present results

Present the leaderboard data in the current conversation using this format:

```
🏆 Artificial Analysis · 核心数据

**🌐 平台简介**
第三方 AI 模型评估平台，专注性能评测与选型参考，不附属于任何模型厂商。

**📊 三大核心榜单**

**Intelligence Index（综合智能指数）** — 综合10项评估

| 排名 | 模型 | 分数 |
|------|------|------|
| 1 | (from live data) | (score) |
| ... | ... | ... |

**Speed（输出速度）** — Tokens/秒

| 排名 | 模型 | 速度 |
|------|------|------|
| 1 | (from live data) | (tps) |
| ... | ... | ... |

**Price（价格）** — $/1M Tokens

| 排名 | 模型 | 价格 |
|------|------|------|
| 1 | (from live data) | ($/1M) |
| ... | ... | ... |

来源：https://artificialanalysis.ai
```

Note: Actual data should be extracted from the live page. The format above shows the expected structure.

## Data Source

https://artificialanalysis.ai
Updated daily. 496 models tracked.
