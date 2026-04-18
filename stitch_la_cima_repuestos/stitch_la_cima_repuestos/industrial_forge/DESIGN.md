```markdown
# Design System Documentation: High-Performance Industrial Editorial

## 1. Overview & Creative North Star: "The Precision Blueprint"
This design system is built to reflect the heavy-duty reliability of industrial engine parts through a lens of high-end engineering aesthetics. Our Creative North Star is **"The Precision Blueprint"**—a visual language that marries the raw power of machinery with the surgical exactness of a technical schematic.

To move beyond the generic "industrial" look, we employ an editorial layout style. This means aggressive typography scales, intentional asymmetry, and overlapping elements that mimic the complex assembly of a high-performance engine. We are not just selling parts; we are providing the foundation of industrial uptime. The experience must feel authoritative, premium, and meticulously organized.

---

## 2. Colors: Tonal Architecture
The palette is rooted in high-contrast "High-Vis" functionality. We use the energy of lime green to punctuate a world of deep blacks and industrial grays.

### Core Palette & Roles
*   **Primary (#496800 / #9ACD32):** The "Ignition" color. Use `primary` for critical actions and `primary_container` for high-impact background blocks.
*   **Surface Hierarchy:** We utilize the `surface-container` tiers (Lowest to Highest) to define architecture.
*   **Neutral/Secondary (#1A1C1C / #5F5E5E):** These provide the "Heavy Metal" weight of the interface, ensuring the UI feels grounded.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit directly against a `surface` background to create a clear but borderless transition.

### Signature Textures & Glassmorphism
*   **The Signature Gradient:** For main CTAs or Hero sections, use a subtle linear gradient (top-to-bottom) from `primary` (#496800) to `primary_container` (#9ACD32). This adds "soul" and a metallic sheen that flat colors lack.
*   **Glassmorphism:** Floating elements (like navigation bars or hovering info-cards) should use a semi-transparent `surface` color with a `backdrop-blur` of 12px–20px. This mimics polished industrial glass and keeps the layout feeling integrated.

---

## 3. Typography: Editorial Authority
Our typography uses high-contrast scales to create a sense of scale and power.

*   **Display & Headlines (Space Grotesk):** This is our "Industrial Stencil." All headlines should be uppercase with slightly tightened letter-spacing (-0.02em) to evoke the feeling of stamped metal.
    *   *Display-lg (3.5rem):* Use for hero statements.
    *   *Headline-md (1.75rem):* Use for section headers.
*   **Body & Labels (Inter):** This is our "Technical Documentation" font. It is neutral, highly legible, and modern.
    *   *Body-lg (1rem):* Standard reading text.
    *   *Label-md (0.75rem):* Used for technical specifications and metadata.

---

## 4. Elevation & Depth: Tonal Layering
We do not use elevation to "lift" objects off the page; we use it to "stack" components like parts in an engine.

### The Layering Principle
Depth is achieved by stacking surface tiers. A `surface-container-lowest` card placed on a `surface-container-low` background creates a natural, soft lift. This "inset/outset" feel is the hallmark of this design system.

### Ambient Shadows
Traditional drop shadows are forbidden. When a floating effect is required (e.g., a primary CTA or a detached modal), use **Ambient Shadows**:
*   **Blur:** 24px - 40px.
*   **Opacity:** 4% - 8%.
*   **Color:** Use a tinted version of `on-surface` (#1a1c1c). This mimics natural light reflecting off matte industrial surfaces.

### The "Ghost Border" Fallback
If a boundary is required for accessibility, use a **Ghost Border**: The `outline-variant` token at 15% opacity. It should be felt, not seen.

---

## 5. Components: Engineered Elements

### Buttons (The "Actuators")
*   **Primary:** `primary` background, `on-primary` text. Bold, uppercase Inter. Sizing: 0.75rem vertical / 1.5rem horizontal padding.
*   **Secondary:** `surface-container-high` background with a `Ghost Border`.
*   **Interaction:** On hover, apply a subtle scale-up (1.02) and increase the gradient intensity.

### Industrial Cards
Cards must never have a 1px border. Use the `surface-container-lowest` token for the card body against a `surface-container` background.
*   **Spacing:** Use generous internal padding (1.5rem to 2rem) to allow technical specs to breathe.
*   **Corners:** Use the `md` scale (0.375rem) for a precision-machined look. Avoid fully rounded "pill" shapes for cards.

### Input Fields
*   **State:** Default state uses `surface-container-highest`.
*   **Focus:** The border should transition to `primary` (#496800) with a 2px stroke, evoking a "selected part" in a CAD drawing.

### Technical Spec Tables
Crucial for an industrial supplier. Forbid divider lines. Use alternating row colors (`surface` vs `surface-container-low`) to guide the eye horizontally. Use `label-md` for the data to maintain a technical, data-dense aesthetic.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical layouts where text blocks overlap background containers to create a custom, high-end feel.
*   **Do** use the `primary` lime green sparingly as a "high-visibility" tool for CTAs and status indicators.
*   **Do** lean into large white space (using the Spacing Scale) to make heavy industrial content feel premium.

### Don't:
*   **Don't** use 1px solid black or gray borders to separate content. It breaks the "Precision Blueprint" feel.
*   **Don't** use generic "drop shadows." They look like template-built software. Stick to Tonal Layering.
*   **Don't** mix the Headline and Body fonts. Space Grotesk is for impact; Inter is for information.
*   **Don't** use vibrant colors outside the defined palette. The "serious" vibe depends on the dominance of Industrial Gray and Deep Black.

---

*Director's Note: This design system is about the tension between the weight of the machinery and the lightness of the digital interface. Keep it heavy, keep it precise, but above all, keep it intentional.*```