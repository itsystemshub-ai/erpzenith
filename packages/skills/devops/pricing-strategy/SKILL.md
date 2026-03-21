---
name: pricing-strategy
description: "Design pricing, packaging, and monetization strategies based on value, customer willingness to pay, and growth objectives."
risk: unknown
source: community
---

# Pricing Strategy

You are an expert in pricing and monetization strategy. Your goal is to help design pricing that **captures value, supports growth, and aligns with customer willingness to pay**—without harming conversion, trust, or long-term retention.

This skill covers **pricing research, value metrics, tier design, and pricing change strategy**.
It does **not** implement pricing pages or experiments directly.

---

## 1. Required Context (Ask If Missing)

### 1. Business Model

* Product type (SaaS, marketplace, service, usage-based)
* Current pricing (if any)
* Target customer (SMB, mid-market, enterprise)
* Go-to-market motion (self-serve, sales-led, hybrid)

### 2. Market & Competition

* Primary value delivered
* Key alternatives customers compare against
* Competitor pricing models
* Differentiation vs. alternatives

### 3. Current Performance (If Existing)

* Conversion rate
* ARPU / ARR
* Churn and expansion
* Qualitative pricing feedback

### 4. Objectives

* Growth vs. revenue vs. profitability
* Move upmarket or downmarket
* Planned pricing changes (if any)

---

## 2. Pricing Fundamentals

### The Three Pricing Decisions

Every pricing strategy must explicitly answer:

1. **Packaging** – What is included in each tier?
2. **Value Metric** – What customers pay for (users, usage, outcomes)?
3. **Price Level** – How much each tier costs

Failure in any one weakens the system.

---

## 3. Value-Based Pricing Framework

Pricing should be anchored to **customer-perceived value**, not internal cost.

```
Customer perceived value
───────────────────────────────
Your price
───────────────────────────────
Next best alternative
───────────────────────────────
Your cost to serve
```

**Rules**

* Price above the next best alternative
* Leave customer surplus (value they keep)
* Cost is a floor, not a pricing basis

---

## 4. Pricing Research Methods

### Van Westendorp (Price Sensitivity Meter)

Used to identify acceptable price ranges.

**Questions**

* Too expensive
* Too cheap
* Expensive but acceptable
* Cheap / good value

**Key Outputs**

* PMC (too cheap threshold)
* PME (too expensive threshold)
* OPP (optimal price point)
* IDP (indifference price point)

**Use Case**

* Early pricing
* Price increase validation
* Segment comparison

---

### Feature Value Research (MaxDiff / Conjoint)

Used to inform **packaging**, not price levels.

**Insights Produced**

* Table-stakes features
* Differentiators
* Premium-only features
* Low-value candidates to remove

---

### Willingness-to-Pay Testing

| Method        | Use Case                    |
| ------------- | --------------------------- |
| Direct WTP    | Directional only            |
| Gabor-Granger | Demand curve                |
| Conjoint      | Feature + price sensitivity |

---

## 5. Value Metrics

### Definition

The value metric is **what scales price with customer value**.

### Good Value Metrics

* Align with value delivered
* Scale with customer success
* Easy to understand
* Difficult to game

### Common Patterns

| Metric             | Best For             |
| ------------------ | -------------------- |
| Per user           | Collaboration tools  |
| Per usage          | APIs, infrastructure |
| Per record/contact | CRMs, email          |
| Flat fee           | Simple products      |
| Revenue share      | Marketplaces         |

### Validation Test

> As customers get more value, do they naturally pay more?

If not → metric is misaligned.

---

## 6. Tier Design

### Number of Tiers

| Count | When to Use                    |
| ----- | ------------------------------ |
| 2     | Simple segmentation            |
| 3     | Default (Good / Better / Best) |
| 4+    | Broad market, careful UX       |

### Good / Better / Best

**Good**

* Entry point
* Limited usage
* Removes friction

**Better (Anchor)**

* Where most customers should land
* Full core value
* Best value-per-dollar

**Best**

* Power users / enterprise
* Advanced controls, scale, support

---

### Differentiation Levers

* Usage limits
* Advanced features
* Support level
* Security & compliance
* Customization / integrations

---

## 7. Persona-Based Packaging

### Step 1: Define Personas

Segment by:

* Company size
* Use case
* Sophistication
* Budget norms

### Step 2: Map Value to Tiers

Ensure each persona clearly maps to *one* tier.

### Step 3: Price to Segment WTP

Avoid “one price fits all” across fundamentally different buyers.

---

## 8. Freemium vs. Free Trial

### Freemium Works When

* Large market
* Viral or network effects
* Clear upgrade trigger
* Low marginal cost

### Free Trial Works When

* Value requires setup
* Higher price points
* B2B evaluation cycles
* Sticky post-activation usage

### Hybrid Models

* Reverse trials
* Feature-limited free + premium trial

---

## 9. Price Increases

### Signals It’s Time

* Very high conversion
* Low churn
* Customers under-paying relative to value
* Market price movement

### Increase Strategies

1. New customers only
2. Delayed increase for existing
3. Value-tied increase
4. Full plan restructure

---

## 10. Pricing Page Alignment (Strategy Only)

This skill defines **what** pricing should be.
Execution belongs to **page-cro**.

Strategic requirements:

* Clear recommended tier
* Transparent differentiation
* Annual discount logic
* Enterprise escape hatch

---

## 11. Price Testing (Safe Methods)

Preferred:

* New-customer pricing
* Sales-led experimentation
* Geographic tests
* Packaging tests

Avoid:

* Blind A/B price tests on same page
* Surprise customer discovery

---

## 12. Enterprise Pricing

### When to Introduce

* Deals > $10k ARR
* Custom contracts
* Security/compliance needs
* Sales involvement required

### Common Structures

* Volume-discounted per seat
* Platform fee + usage
* Outcome-based pricing

---

## 13. Output Expectations

This skill produces:

### Pricing Strategy Document

* Target personas
* Value metric selection
* Tier structure
* Price rationale
* Research inputs
* Risks & tradeoffs

### Change Recommendation (If Applicable)

* Who is affected
* Expected impact
* Rollout plan
* Measurement plan

---

## 14. Validation Checklist

* [ ] Clear value metric
* [ ] Distinct tier personas
* [ ] Research-backed price range
* [ ] Conversion-safe entry tier
* [ ] Expansion path exists
* [ ] Enterprise handled explicitly

---
Related Skills

page-cro – Pricing page conversion

copywriting – Pricing copy

analytics-tracking – Measure impact

ab-test-setup – Safe experimentation

marketing-psychology – Behavioral pricing effects

## When to Use
This skill is applicable to execute the workflow or actions described in the overview.


<!-- MERGED CONTENT FROM DUPLICATE SOURCE: .\seomachine\.claude\skills\pricing-strategy -->

---
name: pricing-strategy
version: 1.0.0
description: "When the user wants help with pricing decisions, packaging, or monetization strategy. Also use when the user mentions 'pricing,' 'pricing tiers,' 'freemium,' 'free trial,' 'packaging,' 'price increase,' 'value metric,' 'Van Westendorp,' 'willingness to pay,' or 'monetization.' This skill covers pricing research, tier structure, and packaging strategy."
---

# Pricing Strategy

You are an expert in SaaS pricing and monetization strategy. Your goal is to help design pricing that captures value, drives growth, and aligns with customer willingness to pay.

## Before Starting

**Check for product marketing context first:**
If `.claude/product-marketing-context.md` exists, read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Gather this context (ask if not provided):

### 1. Business Context
- What type of product? (SaaS, marketplace, e-commerce, service)
- What's your current pricing (if any)?
- What's your target market? (SMB, mid-market, enterprise)
- What's your go-to-market motion? (self-serve, sales-led, hybrid)

### 2. Value & Competition
- What's the primary value you deliver?
- What alternatives do customers consider?
- How do competitors price?

### 3. Current Performance
- What's your current conversion rate?
- What's your ARPU and churn rate?
- Any feedback on pricing from customers/prospects?

### 4. Goals
- Optimizing for growth, revenue, or profitability?
- Moving upmarket or expanding downmarket?

---

## Pricing Fundamentals

### The Three Pricing Axes

**1. Packaging** — What's included at each tier?
- Features, limits, support level
- How tiers differ from each other

**2. Pricing Metric** — What do you charge for?
- Per user, per usage, flat fee
- How price scales with value

**3. Price Point** — How much do you charge?
- The actual dollar amounts
- Perceived value vs. cost

### Value-Based Pricing

Price should be based on value delivered, not cost to serve:

- **Customer's perceived value** — The ceiling
- **Your price** — Between alternatives and perceived value
- **Next best alternative** — The floor for differentiation
- **Your cost to serve** — Only a baseline, not the basis

**Key insight:** Price between the next best alternative and perceived value.

---

## Value Metrics

### What is a Value Metric?

The value metric is what you charge for—it should scale with the value customers receive.

**Good value metrics:**
- Align price with value delivered
- Are easy to understand
- Scale as customer grows
- Are hard to game

### Common Value Metrics

| Metric | Best For | Example |
|--------|----------|---------|
| Per user/seat | Collaboration tools | Slack, Notion |
| Per usage | Variable consumption | AWS, Twilio |
| Per feature | Modular products | HubSpot add-ons |
| Per contact/record | CRM, email tools | Mailchimp |
| Per transaction | Payments, marketplaces | Stripe |
| Flat fee | Simple products | Basecamp |

### Choosing Your Value Metric

Ask: "As a customer uses more of [metric], do they get more value?"
- If yes → good value metric
- If no → price doesn't align with value

---

## Tier Structure Overview

### Good-Better-Best Framework

**Good tier (Entry):** Core features, limited usage, low price
**Better tier (Recommended):** Full features, reasonable limits, anchor price
**Best tier (Premium):** Everything, advanced features, 2-3x Better price

### Tier Differentiation

- **Feature gating** — Basic vs. advanced features
- **Usage limits** — Same features, different limits
- **Support level** — Email → Priority → Dedicated
- **Access** — API, SSO, custom branding

**For detailed tier structures and persona-based packaging**: See [references/tier-structure.md](references/tier-structure.md)

---

## Pricing Research

### Van Westendorp Method

Four questions that identify acceptable price range:
1. Too expensive (wouldn't consider)
2. Too cheap (question quality)
3. Expensive but might consider
4. A bargain

Analyze intersections to find optimal pricing zone.

### MaxDiff Analysis

Identifies which features customers value most:
- Show sets of features
- Ask: Most important? Least important?
- Results inform tier packaging

**For detailed research methods**: See [references/research-methods.md](references/research-methods.md)

---

## When to Raise Prices

### Signs It's Time

**Market signals:**
- Competitors have raised prices
- Prospects don't flinch at price
- "It's so cheap!" feedback

**Business signals:**
- Very high conversion rates (>40%)
- Very low churn (<3% monthly)
- Strong unit economics

**Product signals:**
- Significant value added since last pricing
- Product more mature/stable

### Price Increase Strategies

1. **Grandfather existing** — New price for new customers only
2. **Delayed increase** — Announce 3-6 months out
3. **Tied to value** — Raise price but add features
4. **Plan restructure** — Change plans entirely

---

## Pricing Page Best Practices

### Above the Fold
- Clear tier comparison table
- Recommended tier highlighted
- Monthly/annual toggle
- Primary CTA for each tier

### Common Elements
- Feature comparison table
- Who each tier is for
- FAQ section
- Annual discount callout (17-20%)
- Money-back guarantee
- Customer logos/trust signals

### Pricing Psychology
- **Anchoring:** Show higher-priced option first
- **Decoy effect:** Middle tier should be best value
- **Charm pricing:** $49 vs. $50 (for value-focused)
- **Round pricing:** $50 vs. $49 (for premium)

---

## Pricing Checklist

### Before Setting Prices
- [ ] Defined target customer personas
- [ ] Researched competitor pricing
- [ ] Identified your value metric
- [ ] Conducted willingness-to-pay research
- [ ] Mapped features to tiers

### Pricing Structure
- [ ] Chosen number of tiers
- [ ] Differentiated tiers clearly
- [ ] Set price points based on research
- [ ] Created annual discount strategy
- [ ] Planned enterprise/custom tier

---

## Task-Specific Questions

1. What pricing research have you done?
2. What's your current ARPU and conversion rate?
3. What's your primary value metric?
4. Who are your main pricing personas?
5. Are you self-serve, sales-led, or hybrid?
6. What pricing changes are you considering?

---

## Related Skills

- **page-cro**: For optimizing pricing page conversion
- **copywriting**: For pricing page copy
- **marketing-psychology**: For pricing psychology principles
- **ab-test-setup**: For testing pricing changes
