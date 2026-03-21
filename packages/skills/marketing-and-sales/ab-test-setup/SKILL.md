---
name: ab-test-setup
description: "Structured guide for setting up A/B tests with mandatory gates for hypothesis, metrics, and execution readiness."
risk: unknown
source: community
---

# A/B Test Setup

## 1️⃣ Purpose & Scope

Ensure every A/B test is **valid, rigorous, and safe** before a single line of code is written.

- Prevents "peeking"
- Enforces statistical power
- Blocks invalid hypotheses

---

## 2️⃣ Pre-Requisites

You must have:

- A clear user problem
- Access to an analytics source
- Roughly estimated traffic volume

### Hypothesis Quality Checklist

A valid hypothesis includes:

- Observation or evidence
- Single, specific change
- Directional expectation
- Defined audience
- Measurable success criteria

---

### 3️⃣ Hypothesis Lock (Hard Gate)

Before designing variants or metrics, you MUST:

- Present the **final hypothesis**
- Specify:
  - Target audience
  - Primary metric
  - Expected direction of effect
  - Minimum Detectable Effect (MDE)

Ask explicitly:

> “Is this the final hypothesis we are committing to for this test?”

**Do NOT proceed until confirmed.**

---

### 4️⃣ Assumptions & Validity Check (Mandatory)

Explicitly list assumptions about:

- Traffic stability
- User independence
- Metric reliability
- Randomization quality
- External factors (seasonality, campaigns, releases)

If assumptions are weak or violated:

- Warn the user
- Recommend delaying or redesigning the test

---

### 5️⃣ Test Type Selection

Choose the simplest valid test:

- **A/B Test** – single change, two variants
- **A/B/n Test** – multiple variants, higher traffic required
- **Multivariate Test (MVT)** – interaction effects, very high traffic
- **Split URL Test** – major structural changes

Default to **A/B** unless there is a clear reason otherwise.

---

### 6️⃣ Metrics Definition

#### Primary Metric (Mandatory)

- Single metric used to evaluate success
- Directly tied to the hypothesis
- Pre-defined and frozen before launch

#### Secondary Metrics

- Provide context
- Explain _why_ results occurred
- Must not override the primary metric

#### Guardrail Metrics

- Metrics that must not degrade
- Used to prevent harmful wins
- Trigger test stop if significantly negative

---

### 7️⃣ Sample Size & Duration

Define upfront:

- Baseline rate
- MDE
- Significance level (typically 95%)
- Statistical power (typically 80%)

Estimate:

- Required sample size per variant
- Expected test duration

**Do NOT proceed without a realistic sample size estimate.**

---

### 8️⃣ Execution Readiness Gate (Hard Stop)

You may proceed to implementation **only if all are true**:

- Hypothesis is locked
- Primary metric is frozen
- Sample size is calculated
- Test duration is defined
- Guardrails are set
- Tracking is verified

If any item is missing, stop and resolve it.

---

## Running the Test

### During the Test

**DO:**

- Monitor technical health
- Document external factors

**DO NOT:**

- Stop early due to “good-looking” results
- Change variants mid-test
- Add new traffic sources
- Redefine success criteria

---

## Analyzing Results

### Analysis Discipline

When interpreting results:

- Do NOT generalize beyond the tested population
- Do NOT claim causality beyond the tested change
- Do NOT override guardrail failures
- Separate statistical significance from business judgment

### Interpretation Outcomes

| Result               | Action                                 |
| -------------------- | -------------------------------------- |
| Significant positive | Consider rollout                       |
| Significant negative | Reject variant, document learning      |
| Inconclusive         | Consider more traffic or bolder change |
| Guardrail failure    | Do not ship, even if primary wins      |

---

## Documentation & Learning

### Test Record (Mandatory)

Document:

- Hypothesis
- Variants
- Metrics
- Sample size vs achieved
- Results
- Decision
- Learnings
- Follow-up ideas

Store records in a shared, searchable location to avoid repeated failures.

---

## Refusal Conditions (Safety)

Refuse to proceed if:

- Baseline rate is unknown and cannot be estimated
- Traffic is insufficient to detect the MDE
- Primary metric is undefined
- Multiple variables are changed without proper design
- Hypothesis cannot be clearly stated

Explain why and recommend next steps.

---

## Key Principles (Non-Negotiable)

- One hypothesis per test
- One primary metric
- Commit before launch
- No peeking
- Learning over winning
- Statistical rigor first

---

## Final Reminder

A/B testing is not about proving ideas right.
It is about **learning the truth with confidence**.

If you feel tempted to rush, simplify, or “just try it” —
that is the signal to **slow down and re-check the design**.

## When to Use
This skill is applicable to execute the workflow or actions described in the overview.


<!-- MERGED CONTENT FROM DUPLICATE SOURCE: .\seomachine\.claude\skills\ab-test-setup -->

---
name: ab-test-setup
version: 1.0.0
description: When the user wants to plan, design, or implement an A/B test or experiment. Also use when the user mentions "A/B test," "split test," "experiment," "test this change," "variant copy," "multivariate test," or "hypothesis." For tracking implementation, see analytics-tracking.
---

# A/B Test Setup

You are an expert in experimentation and A/B testing. Your goal is to help design tests that produce statistically valid, actionable results.

## Initial Assessment

**Check for product marketing context first:**
If `.claude/product-marketing-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Before designing a test, understand:

1. **Test Context** - What are you trying to improve? What change are you considering?
2. **Current State** - Baseline conversion rate? Current traffic volume?
3. **Constraints** - Technical complexity? Timeline? Tools available?

---

## Core Principles

### 1. Start with a Hypothesis
- Not just "let's see what happens"
- Specific prediction of outcome
- Based on reasoning or data

### 2. Test One Thing
- Single variable per test
- Otherwise you don't know what worked

### 3. Statistical Rigor
- Pre-determine sample size
- Don't peek and stop early
- Commit to the methodology

### 4. Measure What Matters
- Primary metric tied to business value
- Secondary metrics for context
- Guardrail metrics to prevent harm

---

## Hypothesis Framework

### Structure

```
Because [observation/data],
we believe [change]
will cause [expected outcome]
for [audience].
We'll know this is true when [metrics].
```

### Example

**Weak**: "Changing the button color might increase clicks."

**Strong**: "Because users report difficulty finding the CTA (per heatmaps and feedback), we believe making the button larger and using contrasting color will increase CTA clicks by 15%+ for new visitors. We'll measure click-through rate from page view to signup start."

---

## Test Types

| Type | Description | Traffic Needed |
|------|-------------|----------------|
| A/B | Two versions, single change | Moderate |
| A/B/n | Multiple variants | Higher |
| MVT | Multiple changes in combinations | Very high |
| Split URL | Different URLs for variants | Moderate |

---

## Sample Size

### Quick Reference

| Baseline | 10% Lift | 20% Lift | 50% Lift |
|----------|----------|----------|----------|
| 1% | 150k/variant | 39k/variant | 6k/variant |
| 3% | 47k/variant | 12k/variant | 2k/variant |
| 5% | 27k/variant | 7k/variant | 1.2k/variant |
| 10% | 12k/variant | 3k/variant | 550/variant |

**Calculators:**
- [Evan Miller's](https://www.evanmiller.org/ab-testing/sample-size.html)
- [Optimizely's](https://www.optimizely.com/sample-size-calculator/)

**For detailed sample size tables and duration calculations**: See [references/sample-size-guide.md](references/sample-size-guide.md)

---

## Metrics Selection

### Primary Metric
- Single metric that matters most
- Directly tied to hypothesis
- What you'll use to call the test

### Secondary Metrics
- Support primary metric interpretation
- Explain why/how the change worked

### Guardrail Metrics
- Things that shouldn't get worse
- Stop test if significantly negative

### Example: Pricing Page Test
- **Primary**: Plan selection rate
- **Secondary**: Time on page, plan distribution
- **Guardrail**: Support tickets, refund rate

---

## Designing Variants

### What to Vary

| Category | Examples |
|----------|----------|
| Headlines/Copy | Message angle, value prop, specificity, tone |
| Visual Design | Layout, color, images, hierarchy |
| CTA | Button copy, size, placement, number |
| Content | Information included, order, amount, social proof |

### Best Practices
- Single, meaningful change
- Bold enough to make a difference
- True to the hypothesis

---

## Traffic Allocation

| Approach | Split | When to Use |
|----------|-------|-------------|
| Standard | 50/50 | Default for A/B |
| Conservative | 90/10, 80/20 | Limit risk of bad variant |
| Ramping | Start small, increase | Technical risk mitigation |

**Considerations:**
- Consistency: Users see same variant on return
- Balanced exposure across time of day/week

---

## Implementation

### Client-Side
- JavaScript modifies page after load
- Quick to implement, can cause flicker
- Tools: PostHog, Optimizely, VWO

### Server-Side
- Variant determined before render
- No flicker, requires dev work
- Tools: PostHog, LaunchDarkly, Split

---

## Running the Test

### Pre-Launch Checklist
- [ ] Hypothesis documented
- [ ] Primary metric defined
- [ ] Sample size calculated
- [ ] Variants implemented correctly
- [ ] Tracking verified
- [ ] QA completed on all variants

### During the Test

**DO:**
- Monitor for technical issues
- Check segment quality
- Document external factors

**DON'T:**
- Peek at results and stop early
- Make changes to variants
- Add traffic from new sources

### The Peeking Problem
Looking at results before reaching sample size and stopping early leads to false positives and wrong decisions. Pre-commit to sample size and trust the process.

---

## Analyzing Results

### Statistical Significance
- 95% confidence = p-value < 0.05
- Means <5% chance result is random
- Not a guarantee—just a threshold

### Analysis Checklist

1. **Reach sample size?** If not, result is preliminary
2. **Statistically significant?** Check confidence intervals
3. **Effect size meaningful?** Compare to MDE, project impact
4. **Secondary metrics consistent?** Support the primary?
5. **Guardrail concerns?** Anything get worse?
6. **Segment differences?** Mobile vs. desktop? New vs. returning?

### Interpreting Results

| Result | Conclusion |
|--------|------------|
| Significant winner | Implement variant |
| Significant loser | Keep control, learn why |
| No significant difference | Need more traffic or bolder test |
| Mixed signals | Dig deeper, maybe segment |

---

## Documentation

Document every test with:
- Hypothesis
- Variants (with screenshots)
- Results (sample, metrics, significance)
- Decision and learnings

**For templates**: See [references/test-templates.md](references/test-templates.md)

---

## Common Mistakes

### Test Design
- Testing too small a change (undetectable)
- Testing too many things (can't isolate)
- No clear hypothesis

### Execution
- Stopping early
- Changing things mid-test
- Not checking implementation

### Analysis
- Ignoring confidence intervals
- Cherry-picking segments
- Over-interpreting inconclusive results

---

## Task-Specific Questions

1. What's your current conversion rate?
2. How much traffic does this page get?
3. What change are you considering and why?
4. What's the smallest improvement worth detecting?
5. What tools do you have for testing?
6. Have you tested this area before?

---

## Related Skills

- **page-cro**: For generating test ideas based on CRO principles
- **analytics-tracking**: For setting up test measurement
- **copywriting**: For creating variant copy
