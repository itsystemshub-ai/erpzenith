---
name: last30days
description: Research any topic across Reddit, X, and web from the last 30 days. Get current trends, real community sentiment, and actionable insights in 7 minutes vs 2 hours manual research.
version: 2.0.0
author: theflohart
tags: [research, trends, reddit, twitter, competitive-intel, content-research]
---

# /last30days Research Skill

**Real-time intelligence engine:** Find what's working RIGHT NOW, not last quarter.

Scans Reddit, X, and web for the last 30 days, identifies patterns, extracts community insights, and delivers actionable intelligence with copy-paste-ready prompts.

## Why This vs ChatGPT?

**Problem with "research [topic]":** ChatGPT's training data is months/years old. It gives you general knowledge, not current signals.

**Problem with Perplexity:** Searches web but misses Reddit threads and X conversations where real practitioners share what's actually working.

**This skill provides:**
1. **30-day freshness filter** - Only pulls recent content (not 2023 blog posts)
2. **Multi-platform synthesis** - Combines Reddit (detailed discussions), X (real-time signals), and web (articles) in one pass
3. **Pattern detection** - Highlights themes mentioned 3+ times across sources
4. **Sentiment analysis** - Shows community vibe (hype, skepticism, frustration)
5. **Ready-to-use outputs** - Copy-paste prompts and action ideas, not just summaries

**You can replicate this** by manually searching Reddit, X, and Brave Search with date filters, reading 30+ sources, identifying patterns, and synthesizing insights. Takes 2+ hours. This skill does it in 7 minutes.

## When to Use

**Perfect for:**
- **Trend discovery** - "What's hot in AI agents right now?"
- **Strategy validation** - "What content marketing tactics are working in 2026?"
- **Competitive intel** - "What are developers saying about Cursor vs Copilot?"
- **Product research** - "What do users love/hate about Notion?"
- **Prompt research** - "What Claude prompting techniques are trending?"
- **Community sentiment** - "How do marketers feel about AI tools?"

**Not ideal for:**
- Historical research (use regular search)
- Academic/scientific papers (use Google Scholar)
- Non-English topics (limited coverage)
- Topics with zero online discussion

## Required Setup

This skill orchestrates multiple tools. Verify you have:

```bash
# 1. Brave Search API (for web_search)
# Already configured in OpenClaw by default

# 2. Bird CLI (for X/Twitter search)
source ~/.openclaw/credentials/bird.env && bird search "test" -n 1
# If this fails, install bird CLI first

# 3. Reddit Insights (optional but recommended)
# If you have reddit-insights MCP server configured, skill will use it
# Otherwise falls back to Reddit web search via Brave
```

**Quick verification:**
```bash
/last30days --check-setup
```

Should return:
- ✅ Brave Search: Available
- ✅ Bird CLI: Available
- ✅ Reddit Insights: Available (or "Using web search fallback")

## Workflow

### Step 1: Web Search (Freshness Filter = Past Month)
```
web_search: "[topic] 2026" + freshness=pm
web_search: "[topic] strategies trends current"
web_search: "[topic] what's working"
```

**Purpose:** Get recent articles, blog posts, tools

### Step 2: Reddit Search
**If reddit-insights MCP configured:**
```
reddit_search: "[topic] discussions techniques"
reddit_get_trends: "[subreddit]"
```

**Otherwise:**
```
web_search: "[topic] site:reddit.com" + freshness=pm
web_search: "[topic] reddit.com/r/[relevant_sub]"
```

**Purpose:** Find detailed discussions, practitioner insights, "what's actually working" threads

### Step 3: X/Twitter Search
```
bird search "[topic]" -n 10
bird search "[topic] 2026" -n 10
bird search "[topic] best practices" -n 10
```

**Purpose:** Real-time signals, expert takes, trending threads

### Step 4: Deep Dive on Top Sources (Optional)
For the 2-3 most relevant links:
```
web_fetch: [article URL]
```

**Purpose:** Extract specific tactics, quotes, data points

### Step 5: Synthesize & Package
1. **Identify patterns** - What appears 3+ times across sources?
2. **Extract key quotes** - Most upvoted Reddit comments, retweeted takes
3. **Assess sentiment** - Hype, adoption, skepticism, frustration?
4. **Create ready-to-use outputs** - Prompts, action ideas, copy-paste tactics

## Output Template

```markdown
# 🔍 /last30days: [TOPIC]
*Research compiled: [DATE]*  
*Sources analyzed: [NUMBER] (Reddit threads, X posts, articles)*  
*Time period: Last 30 days*

---

## 🔥 Top Patterns Discovered

### 1. [Pattern Name]
**Mentioned: X times across [platforms]**

[Description of the pattern + why it matters]

**Key evidence:**
- Reddit (r/[sub]): "[Quote from highly upvoted comment]"
- X: "[Quote from popular thread]"
- Article ([Source]): "[Key insight]"

---

### 2. [Pattern Name]
[Continue same format...]

---

## 📊 Reddit Sentiment Breakdown

| Subreddit | Discussion Volume | Sentiment | Key Insight |
|-----------|-------------------|-----------|-------------|
| r/[sub] | [# threads] | 🟢 Positive / 🟡 Mixed / 🔴 Skeptical | [One-liner takeaway] |

**Top upvoted insights:**
1. "[Quote]" — u/[username] (+234 upvotes)
2. "[Quote]" — u/[username] (+189 upvotes)

---

## 🐦 X/Twitter Signal Analysis

**Trending themes:**
- [Theme 1] - [# mentions]
- [Theme 2] - [# mentions]

**Notable voices:**
- [@handle]: "[Key take]"
- [@handle]: "[Key take]"

**Engagement patterns:**
[What types of posts are getting traction?]

---

## 📈 Web Article Highlights

**Most shared articles:**
1. "[Article Title]" — [Source] — [Key insight]
2. "[Article Title]" — [Source] — [Key insight]

**Common recommendations across articles:**
- [Tactic 1]
- [Tactic 2]
- [Tactic 3]

---

## 🎯 Copy-Paste Prompt

**Based on current community best practices:**

```
[Ready-to-use prompt incorporating the patterns discovered]

Context: [Relevant context from research]
Task: [Clear task]
Style: [Tone/voice based on research]
Constraints: [Any patterns to avoid based on research]
```

**Why this works:** [Brief explanation based on research findings]

---

## 💡 Action Ideas

**Immediate opportunities based on this research:**

1. **[Opportunity 1]**
   - What: [Specific action]
   - Why: [Evidence from research]
   - How: [Implementation steps]

2. **[Opportunity 2]**
   [Continue format...]

---

## 📌 Source List

**Reddit Threads:**
- [Thread title] - r/[sub] - [URL]

**X Threads:**
- [@handle] - [Tweet] - [URL]

**Articles:**
- [Title] - [Source] - [URL]

---

*Research complete. [X] sources analyzed in [Y] minutes.*
```

## Real Examples

### Example 1: Prompt Research

**Query:** `/last30days Claude prompting best practices`

**Abbreviated Output:**
```markdown
# 🔍 /last30days: Claude Prompting Best Practices

## Top Patterns Discovered

### 1. XML Tags for Structure (12 mentions)
Reddit and X both emphasize using XML tags for complex prompts:
- Reddit: "XML tags changed my Claude workflow. <context> and <task> make responses 3× more accurate."
- X: "@anthropicAI's own docs now recommend XML. It's the meta."

### 2. Examples Over Instructions (9 mentions)  
"Show, don't tell" — Provide 2-3 examples instead of long instructions.

### 3. Chain of Thought Explicit (7 mentions)
Add "Think step-by-step before answering" dramatically improves reasoning.

## Copy-Paste Prompt

<context>
[Your context here]
</context>

<task>
[Your task here]
</task>

<examples>
Example 1: [Show desired output style]
Example 2: [Show edge case handling]
</examples>

Think step-by-step before providing your final answer.
```

---

### Example 2: Competitive Intel

**Query:** `/last30days Notion vs Obsidian 2026`

**Abbreviated Output:**
```markdown
## Top Patterns

### 1. "Notion for Teams, Obsidian for Individuals" (18 mentions)
Strong consensus: Notion wins for collaboration, Obsidian wins for personal PKM.

### 2. Performance Complaints About Notion (11 mentions)
"Notion is slow with 1000+ pages" — recurring pain point

## Reddit Sentiment

| Subreddit | Sentiment | Key Insight |
|-----------|-----------|-------------|
| r/Notion | 🟡 Mixed | Love features, frustrated by speed |
| r/ObsidianMD | 🟢 Positive | Passionate community, local-first advocates |

## Action Ideas

**If building a PKM tool:**
1. Positioning: "Notion speed + Obsidian power" opportunity
2. Target: Teams frustrated by Notion slowness
3. Messaging: "Collaboration without the lag"
```

---

### Example 3: Content Strategy

**Query:** `/last30days LinkedIn content strategies working 2026`

**Abbreviated Output:**
```markdown
## Top Patterns

### 1. "Teach in Public" Posts Dominate (22 mentions)
Tactical, educational content outperforms thought leadership by 4-5×.

### 2. Carousels Are Fading (14 mentions)
"LinkedIn is deprioritizing carousels" — multiple reports of engagement drops.

### 3. Comment Engagement = Reach (16 mentions)
"Spend 30 min/day commenting on others' posts. Doubled my reach."

## Action Ideas

1. **Shift to educational threads**
   - Format: Problem → Solution (step-by-step) → Result
   - Evidence: Posts using this format getting 3-5× more impressions

2. **Abandon carousel strategy**
   - Data: Engagement down 40-60% since December

3. **Allocate 30 min/day to comments**
   - Tactic: Comment on posts from your ICP 10 min after posting (algorithm boost)
```

## Real Case Study

**User:** B2B SaaS marketer researching content trends quarterly

**Before using skill:**
- Manual research: 2-3 hours per topic
- Visited 20-30 sites, took scattered notes
- Hard to identify patterns across sources
- No systematic approach

**After implementing /last30days:**
- Research time: 7-10 minutes per topic
- Consistent output format (easy to reference later)
- Pattern detection automatic
- Copy-paste prompts immediately usable

**Impact after 3 months:**
- 10 trend reports created (vs 2-3 before)
- Content strategy pivots based on current signals, not guesses
- Team shares research reports across org (became go-to intelligence source)
- Time saved: ~20 hours/month

**Quote:** "I used to spend half a day researching trends, now it's 7 minutes. The pattern detection alone is worth it—I'd miss things reading manually."

## Configuration Options

### Standard Mode (default)
```
/last30days [topic]
```
- Searches web, Reddit, X
- Synthesizes top patterns
- Generates prompts + action ideas

### Deep Dive Mode
```
/last30days [topic] --deep
```
- Fetches and analyzes top 5 articles in full
- More detailed quotes and data points
- Takes 12-15 minutes instead of 7

### Reddit-Only Mode
```
/last30days [topic] --reddit-only
```
- Focuses exclusively on Reddit discussions
- Best for: Community sentiment, practitioner insights

### Quick Brief Mode
```
/last30days [topic] --quick
```
- Top 3 patterns only
- No detailed synthesis
- 3-minute output

## Pro Tips

1. **Use specific topics** - "AI writing tools" better than "AI"
2. **Add context** - "for B2B SaaS" or "for developers" narrows results
3. **Run monthly** - Track trends over time, spot shifts early
4. **Combine with /reddit-insights** - For deeper Reddit analysis
5. **Export to Notion** - Keep a trends database
6. **Share with team** - Intelligence is more valuable when distributed

## Common Use Cases

| Goal | Query Example | Output Value |
|------|---------------|--------------|
| Content ideas | `/last30days AI productivity tools` | Topics getting engagement now |
| Competitive research | `/last30days Superhuman vs Spark email` | User sentiment, pain points |
| Positioning | `/last30days project management frustrations` | Language customers use |
| Product validation | `/last30days AI coding assistant pain points` | Real problems to solve |
| Marketing tactics | `/last30days cold email strategies 2026` | What's working in market |

## Quality Indicators

A good /last30days report has:
- [ ] 3-5 clear patterns (not just random insights)
- [ ] Quotes from actual users (not just article summaries)
- [ ] Sentiment assessment (what's the vibe?)
- [ ] Ready-to-use prompt (copy-paste quality)
- [ ] Specific action ideas (not vague suggestions)
- [ ] Source links for credibility
- [ ] Recency verified (nothing from >30 days)

## Limitations

**This skill does NOT:**
- Access paywalled content (uses public sources only)
- Provide academic-quality research (for speed, not depth)
- Replace domain expertise (synthesizes existing knowledge)
- Guarantee completeness (samples popular discussions)

**Best for:** Fast, directional intelligence. Not dissertation-level research.

## Installation

```bash
# Copy skill to your skills directory
cp -r last30days $HOME/.openclaw/skills/

# Verify dependencies
/last30days --check-setup

# First run
/last30days "your topic here"
```

## Support

Issues or missing sources? Provide:
- Topic searched
- Expected vs actual sources found
- Any error messages
- Your setup verification output

---

**Built to replace 2-hour research sessions with 7-minute intelligence reports.**

**Know what's working RIGHT NOW. Not last quarter. Not last year. Today.**

<!-- MERGED CONTENT FROM DUPLICATE SOURCE: .\antigravity-awesome-skills\skills\last30days -->

---
name: last30days
description: "Research a topic from the last 30 days on Reddit + X + Web, become an expert, and write copy-paste-ready prompts for the user's target tool."
argument-hint: "[topic] for [tool] or [topic]"
context: fork
agent: Explore
disable-model-invocation: true
allowed-tools: Bash, Read, Write, AskUserQuestion, WebSearch
risk: unknown
source: community
---

# last30days: Research Any Topic from the Last 30 Days

Research ANY topic across Reddit, X, and the web. Surface what people are actually discussing, recommending, and debating right now.

Use cases:

- **Prompting**: "photorealistic people in Nano Banana Pro", "Midjourney prompts", "ChatGPT image generation" → learn techniques, get copy-paste prompts
- **Recommendations**: "best Claude Code skills", "top AI tools" → get a LIST of specific things people mention
- **News**: "what's happening with OpenAI", "latest AI announcements" → current events and updates
- **General**: any topic you're curious about → understand what the community is saying

## CRITICAL: Parse User Intent

Before doing anything, parse the user's input for:

1. **TOPIC**: What they want to learn about (e.g., "web app mockups", "Claude Code skills", "image generation")
2. **TARGET TOOL** (if specified): Where they'll use the prompts (e.g., "Nano Banana Pro", "ChatGPT", "Midjourney")
3. **QUERY TYPE**: What kind of research they want:
   - **PROMPTING** - "X prompts", "prompting for X", "X best practices" → User wants to learn techniques and get copy-paste prompts
   - **RECOMMENDATIONS** - "best X", "top X", "what X should I use", "recommended X" → User wants a LIST of specific things
   - **NEWS** - "what's happening with X", "X news", "latest on X" → User wants current events/updates
   - **GENERAL** - anything else → User wants broad understanding of the topic

Common patterns:

- `[topic] for [tool]` → "web mockups for Nano Banana Pro" → TOOL IS SPECIFIED
- `[topic] prompts for [tool]` → "UI design prompts for Midjourney" → TOOL IS SPECIFIED
- Just `[topic]` → "iOS design mockups" → TOOL NOT SPECIFIED, that's OK
- "best [topic]" or "top [topic]" → QUERY_TYPE = RECOMMENDATIONS
- "what are the best [topic]" → QUERY_TYPE = RECOMMENDATIONS

**IMPORTANT: Do NOT ask about target tool before research.**

- If tool is specified in the query, use it
- If tool is NOT specified, run research first, then ask AFTER showing results

**Store these variables:**

- `TOPIC = [extracted topic]`
- `TARGET_TOOL = [extracted tool, or "unknown" if not specified]`
- `QUERY_TYPE = [RECOMMENDATIONS | NEWS | HOW-TO | GENERAL]`

---

## Setup Check

The skill works in three modes based on available API keys:

1. **Full Mode** (both keys): Reddit + X + WebSearch - best results with engagement metrics
2. **Partial Mode** (one key): Reddit-only or X-only + WebSearch
3. **Web-Only Mode** (no keys): WebSearch only - still useful, but no engagement metrics

**API keys are OPTIONAL.** The skill will work without them using WebSearch fallback.

### First-Time Setup (Optional but Recommended)

If the user wants to add API keys for better results:

```bash
mkdir -p ~/.config/last30days
cat > ~/.config/last30days/.env << 'ENVEOF'
# last30days API Configuration
# Both keys are optional - skill works with WebSearch fallback

# For Reddit research (uses OpenAI's web_search tool)
OPENAI_API_KEY=

# For X/Twitter research (uses xAI's x_search tool)
XAI_API_KEY=
ENVEOF

chmod 600 ~/.config/last30days/.env
echo "Config created at ~/.config/last30days/.env"
echo "Edit to add your API keys for enhanced research."
```

**DO NOT stop if no keys are configured.** Proceed with web-only mode.

---

## Research Execution

**IMPORTANT: The script handles API key detection automatically.** Run it and check the output to determine mode.

**Step 1: Run the research script**

```bash
python3 ~/.claude/skills/last30days/scripts/last30days.py "$ARGUMENTS" --emit=compact 2>&1
```

The script will automatically:

- Detect available API keys
- Show a promo banner if keys are missing (this is intentional marketing)
- Run Reddit/X searches if keys exist
- Signal if WebSearch is needed

**Step 2: Check the output mode**

The script output will indicate the mode:

- **"Mode: both"** or **"Mode: reddit-only"** or **"Mode: x-only"**: Script found results, WebSearch is supplementary
- **"Mode: web-only"**: No API keys, Claude must do ALL research via WebSearch

**Step 3: Do WebSearch**

For **ALL modes**, do WebSearch to supplement (or provide all data in web-only mode).

Choose search queries based on QUERY_TYPE:

**If RECOMMENDATIONS** ("best X", "top X", "what X should I use"):

- Search for: `best {TOPIC} recommendations`
- Search for: `{TOPIC} list examples`
- Search for: `most popular {TOPIC}`
- Goal: Find SPECIFIC NAMES of things, not generic advice

**If NEWS** ("what's happening with X", "X news"):

- Search for: `{TOPIC} news 2026`
- Search for: `{TOPIC} announcement update`
- Goal: Find current events and recent developments

**If PROMPTING** ("X prompts", "prompting for X"):

- Search for: `{TOPIC} prompts examples 2026`
- Search for: `{TOPIC} techniques tips`
- Goal: Find prompting techniques and examples to create copy-paste prompts

**If GENERAL** (default):

- Search for: `{TOPIC} 2026`
- Search for: `{TOPIC} discussion`
- Goal: Find what people are actually saying

For ALL query types:

- **USE THE USER'S EXACT TERMINOLOGY** - don't substitute or add tech names based on your knowledge
  - If user says "ChatGPT image prompting", search for "ChatGPT image prompting"
  - Do NOT add "DALL-E", "GPT-4o", or other terms you think are related
  - Your knowledge may be outdated - trust the user's terminology
- EXCLUDE reddit.com, x.com, twitter.com (covered by script)
- INCLUDE: blogs, tutorials, docs, news, GitHub repos
- **DO NOT output "Sources:" list** - this is noise, we'll show stats at the end

**Step 3: Wait for background script to complete**
Use TaskOutput to get the script results before proceeding to synthesis.

**Depth options** (passed through from user's command):

- `--quick` → Faster, fewer sources (8-12 each)
- (default) → Balanced (20-30 each)
- `--deep` → Comprehensive (50-70 Reddit, 40-60 X)

---

## Judge Agent: Synthesize All Sources

**After all searches complete, internally synthesize (don't display stats yet):**

The Judge Agent must:

1. Weight Reddit/X sources HIGHER (they have engagement signals: upvotes, likes)
2. Weight WebSearch sources LOWER (no engagement data)
3. Identify patterns that appear across ALL three sources (strongest signals)
4. Note any contradictions between sources
5. Extract the top 3-5 actionable insights

**Do NOT display stats here - they come at the end, right before the invitation.**

---

## FIRST: Internalize the Research

**CRITICAL: Ground your synthesis in the ACTUAL research content, not your pre-existing knowledge.**

Read the research output carefully. Pay attention to:

- **Exact product/tool names** mentioned (e.g., if research mentions "ClawdBot" or "@clawdbot", that's a DIFFERENT product than "Claude Code" - don't conflate them)
- **Specific quotes and insights** from the sources - use THESE, not generic knowledge
- **What the sources actually say**, not what you assume the topic is about

**ANTI-PATTERN TO AVOID**: If user asks about "clawdbot skills" and research returns ClawdBot content (self-hosted AI agent), do NOT synthesize this as "Claude Code skills" just because both involve "skills". Read what the research actually says.

### If QUERY_TYPE = RECOMMENDATIONS

**CRITICAL: Extract SPECIFIC NAMES, not generic patterns.**

When user asks "best X" or "top X", they want a LIST of specific things:

- Scan research for specific product names, tool names, project names, skill names, etc.
- Count how many times each is mentioned
- Note which sources recommend each (Reddit thread, X post, blog)
- List them by popularity/mention count

**BAD synthesis for "best Claude Code skills":**

> "Skills are powerful. Keep them under 500 lines. Use progressive disclosure."

**GOOD synthesis for "best Claude Code skills":**

> "Most mentioned skills: /commit (5 mentions), remotion skill (4x), git-worktree (3x), /pr (3x). The Remotion announcement got 16K likes on X."

### For all QUERY_TYPEs

Identify from the ACTUAL RESEARCH OUTPUT:

- **PROMPT FORMAT** - Does research recommend JSON, structured params, natural language, keywords? THIS IS CRITICAL.
- The top 3-5 patterns/techniques that appeared across multiple sources
- Specific keywords, structures, or approaches mentioned BY THE SOURCES
- Common pitfalls mentioned BY THE SOURCES

**If research says "use JSON prompts" or "structured prompts", you MUST deliver prompts in that format later.**

---

## THEN: Show Summary + Invite Vision

**CRITICAL: Do NOT output any "Sources:" lists. The final display should be clean.**

**Display in this EXACT sequence:**

**FIRST - What I learned (based on QUERY_TYPE):**

**If RECOMMENDATIONS** - Show specific things mentioned:

```
🏆 Most mentioned:
1. [Specific name] - mentioned {n}x (r/sub, @handle, blog.com)
2. [Specific name] - mentioned {n}x (sources)
3. [Specific name] - mentioned {n}x (sources)
4. [Specific name] - mentioned {n}x (sources)
5. [Specific name] - mentioned {n}x (sources)

Notable mentions: [other specific things with 1-2 mentions]
```

**If PROMPTING/NEWS/GENERAL** - Show synthesis and patterns:

```
What I learned:

[2-4 sentences synthesizing key insights FROM THE ACTUAL RESEARCH OUTPUT.]

KEY PATTERNS I'll use:
1. [Pattern from research]
2. [Pattern from research]
3. [Pattern from research]
```

**THEN - Stats (right before invitation):**

For **full/partial mode** (has API keys):

```
---
✅ All agents reported back!
├─ 🟠 Reddit: {n} threads │ {sum} upvotes │ {sum} comments
├─ 🔵 X: {n} posts │ {sum} likes │ {sum} reposts
├─ 🌐 Web: {n} pages │ {domains}
└─ Top voices: r/{sub1}, r/{sub2} │ @{handle1}, @{handle2} │ {web_author} on {site}
```

For **web-only mode** (no API keys):

```
---
✅ Research complete!
├─ 🌐 Web: {n} pages │ {domains}
└─ Top sources: {author1} on {site1}, {author2} on {site2}

💡 Want engagement metrics? Add API keys to ~/.config/last30days/.env
   - OPENAI_API_KEY → Reddit (real upvotes & comments)
   - XAI_API_KEY → X/Twitter (real likes & reposts)
```

**LAST - Invitation:**

```
---
Share your vision for what you want to create and I'll write a thoughtful prompt you can copy-paste directly into {TARGET_TOOL}.
```

**Use real numbers from the research output.** The patterns should be actual insights from the research, not generic advice.

**SELF-CHECK before displaying**: Re-read your "What I learned" section. Does it match what the research ACTUALLY says? If the research was about ClawdBot (a self-hosted AI agent), your summary should be about ClawdBot, not Claude Code. If you catch yourself projecting your own knowledge instead of the research, rewrite it.

**IF TARGET_TOOL is still unknown after showing results**, ask NOW (not before research):

```
What tool will you use these prompts with?

Options:
1. [Most relevant tool based on research - e.g., if research mentioned Figma/Sketch, offer those]
2. Nano Banana Pro (image generation)
3. ChatGPT / Claude (text/code)
4. Other (tell me)
```

**IMPORTANT**: After displaying this, WAIT for the user to respond. Don't dump generic prompts.

---

## WAIT FOR USER'S VISION

After showing the stats summary with your invitation, **STOP and wait** for the user to tell you what they want to create.

When they respond with their vision (e.g., "I want a landing page mockup for my SaaS app"), THEN write a single, thoughtful, tailored prompt.

---

## WHEN USER SHARES THEIR VISION: Write ONE Perfect Prompt

Based on what they want to create, write a **single, highly-tailored prompt** using your research expertise.

### CRITICAL: Match the FORMAT the research recommends

**If research says to use a specific prompt FORMAT, YOU MUST USE THAT FORMAT:**

- Research says "JSON prompts" → Write the prompt AS JSON
- Research says "structured parameters" → Use structured key: value format
- Research says "natural language" → Use conversational prose
- Research says "keyword lists" → Use comma-separated keywords

**ANTI-PATTERN**: Research says "use JSON prompts with device specs" but you write plain prose. This defeats the entire purpose of the research.

### Output Format:

```
Here's your prompt for {TARGET_TOOL}:

---

[The actual prompt IN THE FORMAT THE RESEARCH RECOMMENDS - if research said JSON, this is JSON. If research said natural language, this is prose. Match what works.]

---

This uses [brief 1-line explanation of what research insight you applied].
```

### Quality Checklist:

- [ ] **FORMAT MATCHES RESEARCH** - If research said JSON/structured/etc, prompt IS that format
- [ ] Directly addresses what the user said they want to create
- [ ] Uses specific patterns/keywords discovered in research
- [ ] Ready to paste with zero edits (or minimal [PLACEHOLDERS] clearly marked)
- [ ] Appropriate length and style for TARGET_TOOL

---

## IF USER ASKS FOR MORE OPTIONS

Only if they ask for alternatives or more prompts, provide 2-3 variations. Don't dump a prompt pack unless requested.

---

## AFTER EACH PROMPT: Stay in Expert Mode

After delivering a prompt, offer to write more:

> Want another prompt? Just tell me what you're creating next.

---

## CONTEXT MEMORY

For the rest of this conversation, remember:

- **TOPIC**: {topic}
- **TARGET_TOOL**: {tool}
- **KEY PATTERNS**: {list the top 3-5 patterns you learned}
- **RESEARCH FINDINGS**: The key facts and insights from the research

**CRITICAL: After research is complete, you are now an EXPERT on this topic.**

When the user asks follow-up questions:

- **DO NOT run new WebSearches** - you already have the research
- **Answer from what you learned** - cite the Reddit threads, X posts, and web sources
- **If they ask for a prompt** - write one using your expertise
- **If they ask a question** - answer it from your research findings

Only do new research if the user explicitly asks about a DIFFERENT topic.

---

## Output Summary Footer (After Each Prompt)

After delivering a prompt, end with:

For **full/partial mode**:

```
---
📚 Expert in: {TOPIC} for {TARGET_TOOL}
📊 Based on: {n} Reddit threads ({sum} upvotes) + {n} X posts ({sum} likes) + {n} web pages

Want another prompt? Just tell me what you're creating next.
```

For **web-only mode**:

```
---
📚 Expert in: {TOPIC} for {TARGET_TOOL}
📊 Based on: {n} web pages from {domains}

Want another prompt? Just tell me what you're creating next.

💡 Unlock Reddit & X data: Add API keys to ~/.config/last30days/.env
```

## When to Use
This skill is applicable to execute the workflow or actions described in the overview.
