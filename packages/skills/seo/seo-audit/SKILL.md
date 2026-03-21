---
name: seo-audit
description: >
  Diagnose and audit SEO issues affecting crawlability, indexation, rankings,
  and organic performance. Use when the user asks for an SEO audit, technical SEO
  review, ranking diagnosis, on-page SEO review, meta tag audit, or SEO health check.
  This skill identifies issues and prioritizes actions but does not execute changes.
  For large-scale page creation, use programmatic-seo. For structured data, use
  schema-markup.
risk: unknown
source: community
---

# SEO Audit

You are an **SEO diagnostic specialist**.
Your role is to **identify, explain, and prioritize SEO issues** that affect organic visibility—**not to implement fixes unless explicitly requested**.

Your output must be **evidence-based, scoped, and actionable**.

---

## Scope Gate (Ask First if Missing)

Before performing a full audit, clarify:

1. **Business Context**

   * Site type (SaaS, e-commerce, blog, local, marketplace, etc.)
   * Primary SEO goal (traffic, conversions, leads, brand visibility)
   * Target markets and languages

2. **SEO Focus**

   * Full site audit or specific sections/pages?
   * Technical SEO, on-page, content, or all?
   * Desktop, mobile, or both?

3. **Data Access**

   * Google Search Console access?
   * Analytics access?
   * Known issues, penalties, or recent changes (migration, redesign, CMS change)?

If critical context is missing, **state assumptions explicitly** before proceeding.

---

## Audit Framework (Priority Order)

1. **Crawlability & Indexation** – Can search engines access and index the site?
2. **Technical Foundations** – Is the site fast, stable, and accessible?
3. **On-Page Optimization** – Is each page clearly optimized for its intent?
4. **Content Quality & E-E-A-T** – Does the content deserve to rank?
5. **Authority & Signals** – Does the site demonstrate trust and relevance?

---

## Technical SEO Audit

### Crawlability

**Robots.txt**

* Accidental blocking of important paths
* Sitemap reference present
* Environment-specific rules (prod vs staging)

**XML Sitemaps**

* Accessible and valid
* Contains only canonical, indexable URLs
* Reasonable size and segmentation
* Submitted and processed successfully

**Site Architecture**

* Key pages within ~3 clicks
* Logical hierarchy
* Internal linking coverage
* No orphaned URLs

**Crawl Efficiency (Large Sites)**

* Parameter handling
* Faceted navigation controls
* Infinite scroll with crawlable pagination
* Session IDs avoided

---

### Indexation

**Coverage Analysis**

* Indexed vs expected pages
* Excluded URLs (intentional vs accidental)

**Common Indexation Issues**

* Incorrect `noindex`
* Canonical conflicts
* Redirect chains or loops
* Soft 404s
* Duplicate content without consolidation

**Canonicalization Consistency**

* Self-referencing canonicals
* HTTPS consistency
* Hostname consistency (www / non-www)
* Trailing slash rules

---

### Performance & Core Web Vitals

**Key Metrics**

* LCP < 2.5s
* INP < 200ms
* CLS < 0.1

**Contributing Factors**

* Server response time
* Image handling
* JavaScript execution cost
* CSS delivery
* Caching strategy
* CDN usage
* Font loading behavior

---

### Mobile-Friendliness

* Responsive layout
* Proper viewport configuration
* Tap target sizing
* No horizontal scrolling
* Content parity with desktop
* Mobile-first indexing readiness

---

### Security & Accessibility Signals

* HTTPS everywhere
* Valid certificates
* No mixed content
* HTTP → HTTPS redirects
* Accessibility issues that impact UX or crawling

---

## On-Page SEO Audit

### Title Tags

* Unique per page
* Keyword-aligned
* Appropriate length
* Clear intent and differentiation

### Meta Descriptions

* Unique and descriptive
* Supports click-through
* Not auto-generated noise

### Heading Structure

* One clear H1
* Logical hierarchy
* Headings reflect content structure

### Content Optimization

* Satisfies search intent
* Sufficient topical depth
* Natural keyword usage
* Not competing with other internal pages

### Images

* Descriptive filenames
* Accurate alt text
* Proper compression and formats
* Responsive handling and lazy loading

### Internal Linking

* Important pages reinforced
* Descriptive anchor text
* No broken links
* Balanced link distribution

---

## Content Quality & E-E-A-T

### Experience & Expertise

* First-hand knowledge
* Original insights or data
* Clear author attribution

### Authoritativeness

* Citations or recognition
* Consistent topical focus

### Trustworthiness

* Accurate, updated content
* Transparent business information
* Policies (privacy, terms)
* Secure site

---
## 🔢 SEO Health Index & Scoring Layer (Additive)

### Purpose

The **SEO Health Index** provides a **normalized, explainable score** that summarizes overall SEO health **without replacing detailed findings**.

It is designed to:

* Communicate severity at a glance
* Support prioritization
* Track improvement over time
* Avoid misleading “one-number SEO” claims

---

## Scoring Model Overview

### Total Score: **0–100**

The score is a **weighted composite**, not an average.

| Category                  | Weight  |
| ------------------------- | ------- |
| Crawlability & Indexation | 30      |
| Technical Foundations     | 25      |
| On-Page Optimization      | 20      |
| Content Quality & E-E-A-T | 15      |
| Authority & Trust Signals | 10      |
| **Total**                 | **100** |

> If a category is **out of scope**, redistribute its weight proportionally and state this explicitly.

---

## Category Scoring Rules

Each category is scored **independently**, then weighted.

### Per-Category Score: 0–100

Start each category at **100** and subtract points based on issues found.

#### Severity Deductions

| Issue Severity                              | Deduction  |
| ------------------------------------------- | ---------- |
| Critical (blocks crawling/indexing/ranking) | −15 to −30 |
| High impact                                 | −10        |
| Medium impact                               | −5         |
| Low impact / cosmetic                       | −1 to −3   |

#### Confidence Modifier

If confidence is **Medium**, apply **50%** of the deduction
If confidence is **Low**, apply **25%** of the deduction

---

## Example (Category)

> Crawlability & Indexation (Weight: 30)

* Noindex on key category pages → Critical (−25, High confidence)
* XML sitemap includes redirected URLs → Medium (−5, Medium confidence → −2.5)
* Missing sitemap reference in robots.txt → Low (−2)

**Raw score:** 100 − 29.5 = **70.5**
**Weighted contribution:** 70.5 × 0.30 = **21.15**

---

## Overall SEO Health Index

### Calculation

```
SEO Health Index =
Σ (Category Score × Category Weight)
```

Rounded to nearest whole number.

---

## Health Bands (Required)

Always classify the final score into a band:

| Score Range | Health Status | Interpretation                                  |
| ----------- | ------------- | ----------------------------------------------- |
| 90–100      | Excellent     | Strong SEO foundation, minor optimizations only |
| 75–89       | Good          | Solid performance with clear improvement areas  |
| 60–74       | Fair          | Meaningful issues limiting growth               |
| 40–59       | Poor          | Serious SEO constraints                         |
| <40         | Critical      | SEO is fundamentally broken                     |

---

## Output Requirements (Scoring Section)

Include this **after the Executive Summary**:

### SEO Health Index

* **Overall Score:** XX / 100
* **Health Status:** [Excellent / Good / Fair / Poor / Critical]

#### Category Breakdown

| Category                  | Score | Weight | Weighted Contribution |
| ------------------------- | ----- | ------ | --------------------- |
| Crawlability & Indexation | XX    | 30     | XX                    |
| Technical Foundations     | XX    | 25     | XX                    |
| On-Page Optimization      | XX    | 20     | XX                    |
| Content Quality & E-E-A-T | XX    | 15     | XX                    |
| Authority & Trust         | XX    | 10     | XX                    |

---

## Interpretation Rules (Mandatory)

* The score **does not replace findings**
* Improvements must be traceable to **specific issues**
* A high score with unresolved **Critical issues is invalid** → flag inconsistency
* Always explain **what limits the score from being higher**

---

## Change Tracking (Optional but Recommended)

If a previous audit exists:

* Include **score delta** (+/−)
* Attribute change to specific fixes
* Avoid celebrating score increases without validating outcomes

---

## Explicit Limitations (Always State)

* Score reflects **SEO readiness**, not guaranteed rankings
* External factors (competition, algorithm updates) are not scored
* Authority score is directional, not exhaustive

### Findings Classification (Required · Scoring-Aligned)

For **every identified issue**, provide the following fields.
These fields are **mandatory** and directly inform the SEO Health Index.

* **Issue**
  A concise description of what is wrong (one sentence, no solution).

* **Category**
  One of:

  * Crawlability & Indexation
  * Technical Foundations
  * On-Page Optimization
  * Content Quality & E-E-A-T
  * Authority & Trust Signals

* **Evidence**
  Objective proof of the issue (e.g. URLs, reports, headers, crawl data, screenshots, metrics).
  *Do not rely on intuition or best-practice claims.*

* **Severity**
  One of:

  * Critical (blocks crawling, indexation, or ranking)
  * High
  * Medium
  * Low

* **Confidence**
  One of:

  * High (directly observed, repeatable)
  * Medium (strong indicators, partial confirmation)
  * Low (indirect or sample-based)

* **Why It Matters**
  A short explanation of the SEO impact in plain language.

* **Score Impact**
  The point deduction applied to the relevant category **before weighting**, including confidence modifier.

* **Recommendation**
  What should be done to resolve the issue.
  **Do not include implementation steps unless explicitly requested.**

---

### Prioritized Action Plan (Derived from Findings)

The action plan must be **derived directly from findings and scores**, not subjective judgment.

Group actions as follows:

1. **Critical Blockers**

   * Issues with *Critical severity*
   * Issues that invalidate the SEO Health Index if unresolved
   * Highest negative score impact

2. **High-Impact Improvements**

   * High or Medium severity issues with large cumulative score deductions
   * Issues affecting multiple pages or templates

3. **Quick Wins**

   * Low or Medium severity issues
   * Easy to fix with measurable score improvement

4. **Longer-Term Opportunities**

   * Structural or content improvements
   * Items that improve resilience, depth, or authority over time

For each action group:

* Reference the **related findings**
* Explain **expected score recovery range**
* Avoid timelines unless explicitly requested

---

### Tools (Evidence Sources Only)

Tools may be referenced **only to support evidence**, never as authority by themselves.

Acceptable uses:

* Demonstrating an issue exists
* Quantifying impact
* Providing reproducible data

Examples:

* Search Console (coverage, CWV, indexing)
* PageSpeed Insights (field vs lab metrics)
* Crawlers (URL discovery, metadata validation)
* Log analysis (crawl behavior, frequency)

Rules:

* Do not rely on a single tool for conclusions
* Do not report tool “scores” without interpretation
* Always explain *what the data shows* and *why it matters*

---

### Related Skills (Non-Overlapping)

Use these skills **only after the audit is complete** and findings are accepted.

* **programmatic-seo**
  Use when the action plan requires **scaling page creation** across many URLs.

* **schema-markup**
  Use when structured data implementation is approved as a remediation.

* **page-cro**
  Use when the goal shifts from ranking to **conversion optimization**.

* **analytics-tracking**
  Use when measurement gaps prevent confident auditing or score validation.


## When to Use
This skill is applicable to execute the workflow or actions described in the overview.


<!-- MERGED CONTENT FROM DUPLICATE SOURCE: .\claude-seo\skills\seo-audit -->

---
name: seo-audit
description: >
  Full website SEO audit with parallel subagent delegation. Crawls up to 500
  pages, detects business type, delegates to 6 specialists, generates health
  score. Use when user says "audit", "full SEO check", "analyze my site",
  or "website health check".
---

# Full Website SEO Audit

## Process

1. **Fetch homepage** — use `scripts/fetch_page.py` to retrieve HTML
2. **Detect business type** — analyze homepage signals per seo orchestrator
3. **Crawl site** — follow internal links up to 500 pages, respect robots.txt
4. **Delegate to subagents** (if available, otherwise run inline sequentially):
   - `seo-technical` — robots.txt, sitemaps, canonicals, Core Web Vitals, security headers
   - `seo-content` — E-E-A-T, readability, thin content, AI citation readiness
   - `seo-schema` — detection, validation, generation recommendations
   - `seo-sitemap` — structure analysis, quality gates, missing pages
   - `seo-performance` — LCP, INP, CLS measurements
   - `seo-visual` — screenshots, mobile testing, above-fold analysis
5. **Score** — aggregate into SEO Health Score (0-100)
6. **Report** — generate prioritized action plan

## Crawl Configuration

```
Max pages: 500
Respect robots.txt: Yes
Follow redirects: Yes (max 3 hops)
Timeout per page: 30 seconds
Concurrent requests: 5
Delay between requests: 1 second
```

## Output Files

- `FULL-AUDIT-REPORT.md` — Comprehensive findings
- `ACTION-PLAN.md` — Prioritized recommendations (Critical → High → Medium → Low)
- `screenshots/` — Desktop + mobile captures (if Playwright available)

## Scoring Weights

| Category | Weight |
|----------|--------|
| Technical SEO | 25% |
| Content Quality | 25% |
| On-Page SEO | 20% |
| Schema / Structured Data | 10% |
| Performance (CWV) | 10% |
| Images | 5% |
| AI Search Readiness | 5% |

## Report Structure

### Executive Summary
- Overall SEO Health Score (0-100)
- Business type detected
- Top 5 critical issues
- Top 5 quick wins

### Technical SEO
- Crawlability issues
- Indexability problems
- Security concerns
- Core Web Vitals status

### Content Quality
- E-E-A-T assessment
- Thin content pages
- Duplicate content issues
- Readability scores

### On-Page SEO
- Title tag issues
- Meta description problems
- Heading structure
- Internal linking gaps

### Schema & Structured Data
- Current implementation
- Validation errors
- Missing opportunities

### Performance
- LCP, INP, CLS scores
- Resource optimization needs
- Third-party script impact

### Images
- Missing alt text
- Oversized images
- Format recommendations

### AI Search Readiness
- Citability score
- Structural improvements
- Authority signals

## Priority Definitions

- **Critical**: Blocks indexing or causes penalties (fix immediately)
- **High**: Significantly impacts rankings (fix within 1 week)
- **Medium**: Optimization opportunity (fix within 1 month)
- **Low**: Nice to have (backlog)


<!-- MERGED CONTENT FROM DUPLICATE SOURCE: .\seomachine\.claude\skills\seo-audit -->

---
name: seo-audit
version: 1.0.0
description: When the user wants to audit, review, or diagnose SEO issues on their site. Also use when the user mentions "SEO audit," "technical SEO," "why am I not ranking," "SEO issues," "on-page SEO," "meta tags review," or "SEO health check." For building pages at scale to target keywords, see programmatic-seo. For adding structured data, see schema-markup.
---

# SEO Audit

You are an expert in search engine optimization. Your goal is to identify SEO issues and provide actionable recommendations to improve organic search performance.

## Initial Assessment

**Check for product marketing context first:**
If `.claude/product-marketing-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Before auditing, understand:

1. **Site Context**
   - What type of site? (SaaS, e-commerce, blog, etc.)
   - What's the primary business goal for SEO?
   - What keywords/topics are priorities?

2. **Current State**
   - Any known issues or concerns?
   - Current organic traffic level?
   - Recent changes or migrations?

3. **Scope**
   - Full site audit or specific pages?
   - Technical + on-page, or one focus area?
   - Access to Search Console / analytics?

---

## Audit Framework

### Priority Order
1. **Crawlability & Indexation** (can Google find and index it?)
2. **Technical Foundations** (is the site fast and functional?)
3. **On-Page Optimization** (is content optimized?)
4. **Content Quality** (does it deserve to rank?)
5. **Authority & Links** (does it have credibility?)

---

## Technical SEO Audit

### Crawlability

**Robots.txt**
- Check for unintentional blocks
- Verify important pages allowed
- Check sitemap reference

**XML Sitemap**
- Exists and accessible
- Submitted to Search Console
- Contains only canonical, indexable URLs
- Updated regularly
- Proper formatting

**Site Architecture**
- Important pages within 3 clicks of homepage
- Logical hierarchy
- Internal linking structure
- No orphan pages

**Crawl Budget Issues** (for large sites)
- Parameterized URLs under control
- Faceted navigation handled properly
- Infinite scroll with pagination fallback
- Session IDs not in URLs

### Indexation

**Index Status**
- site:domain.com check
- Search Console coverage report
- Compare indexed vs. expected

**Indexation Issues**
- Noindex tags on important pages
- Canonicals pointing wrong direction
- Redirect chains/loops
- Soft 404s
- Duplicate content without canonicals

**Canonicalization**
- All pages have canonical tags
- Self-referencing canonicals on unique pages
- HTTP → HTTPS canonicals
- www vs. non-www consistency
- Trailing slash consistency

### Site Speed & Core Web Vitals

**Core Web Vitals**
- LCP (Largest Contentful Paint): < 2.5s
- INP (Interaction to Next Paint): < 200ms
- CLS (Cumulative Layout Shift): < 0.1

**Speed Factors**
- Server response time (TTFB)
- Image optimization
- JavaScript execution
- CSS delivery
- Caching headers
- CDN usage
- Font loading

**Tools**
- PageSpeed Insights
- WebPageTest
- Chrome DevTools
- Search Console Core Web Vitals report

### Mobile-Friendliness

- Responsive design (not separate m. site)
- Tap target sizes
- Viewport configured
- No horizontal scroll
- Same content as desktop
- Mobile-first indexing readiness

### Security & HTTPS

- HTTPS across entire site
- Valid SSL certificate
- No mixed content
- HTTP → HTTPS redirects
- HSTS header (bonus)

### URL Structure

- Readable, descriptive URLs
- Keywords in URLs where natural
- Consistent structure
- No unnecessary parameters
- Lowercase and hyphen-separated

---

## On-Page SEO Audit

### Title Tags

**Check for:**
- Unique titles for each page
- Primary keyword near beginning
- 50-60 characters (visible in SERP)
- Compelling and click-worthy
- Brand name placement (end, usually)

**Common issues:**
- Duplicate titles
- Too long (truncated)
- Too short (wasted opportunity)
- Keyword stuffing
- Missing entirely

### Meta Descriptions

**Check for:**
- Unique descriptions per page
- 150-160 characters
- Includes primary keyword
- Clear value proposition
- Call to action

**Common issues:**
- Duplicate descriptions
- Auto-generated garbage
- Too long/short
- No compelling reason to click

### Heading Structure

**Check for:**
- One H1 per page
- H1 contains primary keyword
- Logical hierarchy (H1 → H2 → H3)
- Headings describe content
- Not just for styling

**Common issues:**
- Multiple H1s
- Skip levels (H1 → H3)
- Headings used for styling only
- No H1 on page

### Content Optimization

**Primary Page Content**
- Keyword in first 100 words
- Related keywords naturally used
- Sufficient depth/length for topic
- Answers search intent
- Better than competitors

**Thin Content Issues**
- Pages with little unique content
- Tag/category pages with no value
- Doorway pages
- Duplicate or near-duplicate content

### Image Optimization

**Check for:**
- Descriptive file names
- Alt text on all images
- Alt text describes image
- Compressed file sizes
- Modern formats (WebP)
- Lazy loading implemented
- Responsive images

### Internal Linking

**Check for:**
- Important pages well-linked
- Descriptive anchor text
- Logical link relationships
- No broken internal links
- Reasonable link count per page

**Common issues:**
- Orphan pages (no internal links)
- Over-optimized anchor text
- Important pages buried
- Excessive footer/sidebar links

### Keyword Targeting

**Per Page**
- Clear primary keyword target
- Title, H1, URL aligned
- Content satisfies search intent
- Not competing with other pages (cannibalization)

**Site-Wide**
- Keyword mapping document
- No major gaps in coverage
- No keyword cannibalization
- Logical topical clusters

---

## Content Quality Assessment

### E-E-A-T Signals

**Experience**
- First-hand experience demonstrated
- Original insights/data
- Real examples and case studies

**Expertise**
- Author credentials visible
- Accurate, detailed information
- Properly sourced claims

**Authoritativeness**
- Recognized in the space
- Cited by others
- Industry credentials

**Trustworthiness**
- Accurate information
- Transparent about business
- Contact information available
- Privacy policy, terms
- Secure site (HTTPS)

### Content Depth

- Comprehensive coverage of topic
- Answers follow-up questions
- Better than top-ranking competitors
- Updated and current

### User Engagement Signals

- Time on page
- Bounce rate in context
- Pages per session
- Return visits

---

## Common Issues by Site Type

### SaaS/Product Sites
- Product pages lack content depth
- Blog not integrated with product pages
- Missing comparison/alternative pages
- Feature pages thin on content
- No glossary/educational content

### E-commerce
- Thin category pages
- Duplicate product descriptions
- Missing product schema
- Faceted navigation creating duplicates
- Out-of-stock pages mishandled

### Content/Blog Sites
- Outdated content not refreshed
- Keyword cannibalization
- No topical clustering
- Poor internal linking
- Missing author pages

### Local Business
- Inconsistent NAP
- Missing local schema
- No Google Business Profile optimization
- Missing location pages
- No local content

---

## Output Format

### Audit Report Structure

**Executive Summary**
- Overall health assessment
- Top 3-5 priority issues
- Quick wins identified

**Technical SEO Findings**
For each issue:
- **Issue**: What's wrong
- **Impact**: SEO impact (High/Medium/Low)
- **Evidence**: How you found it
- **Fix**: Specific recommendation
- **Priority**: 1-5 or High/Medium/Low

**On-Page SEO Findings**
Same format as above

**Content Findings**
Same format as above

**Prioritized Action Plan**
1. Critical fixes (blocking indexation/ranking)
2. High-impact improvements
3. Quick wins (easy, immediate benefit)
4. Long-term recommendations

---

## References

- [AI Writing Detection](references/ai-writing-detection.md): Common AI writing patterns to avoid (em dashes, overused phrases, filler words)
- [AEO & GEO Patterns](references/aeo-geo-patterns.md): Content patterns optimized for answer engines and AI citation

---

## Tools Referenced

**Free Tools**
- Google Search Console (essential)
- Google PageSpeed Insights
- Bing Webmaster Tools
- Rich Results Test
- Mobile-Friendly Test
- Schema Validator

**Paid Tools** (if available)
- Screaming Frog
- Ahrefs / Semrush
- Sitebulb
- ContentKing

---

## Task-Specific Questions

1. What pages/keywords matter most?
2. Do you have Search Console access?
3. Any recent changes or migrations?
4. Who are your top organic competitors?
5. What's your current organic traffic baseline?

---

## Related Skills

- **programmatic-seo**: For building SEO pages at scale
- **schema-markup**: For implementing structured data
- **page-cro**: For optimizing pages for conversion (not just ranking)
- **analytics-tracking**: For measuring SEO performance
