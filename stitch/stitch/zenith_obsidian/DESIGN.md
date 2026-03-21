# Design System Specification

## 1. Overview & Creative North Star: "The Ethereal Command"

This design system is engineered to transform the heavy, often utilitarian nature of enterprise resource planning into a high-end, editorial experience. We are moving away from the "cluttered dashboard" archetype toward **"The Ethereal Command"**—a philosophy where data density is balanced by atmospheric depth, breathing room, and a sense of futuristic prestige.

The system breaks the "template" look by rejecting rigid, boxy layouts in favor of **intentional asymmetry** and **tonal layering**. We treat the UI not as a flat screen, but as a deep, multi-layered environment where the most critical financial and operational data "float" on top of semi-translucent, glass-like surfaces.

---

## 2. Color Strategy & Surface Logic

Our palette utilizes high-chroma accents against a deeply recessed Slate foundation to ensure professional authority while maintaining a cutting-edge aesthetic.

### Tonal Surface Hierarchy
*   **Base Layer:** `surface` (#0b1326) - The infinite depth of the application.
*   **Secondary Low:** `surface_container_low` (#131b2e) - Used for sidebar backgrounds or recessed content areas.
*   **Active Surface:** `surface_container` (#171f33) - The primary canvas for page content.
*   **Elevated High:** `surface_container_highest` (#2d3449) - Reserved for high-priority cards or interactive elements.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off parts of the UI. Boundaries must be defined strictly through background color shifts. A `surface_container_low` section sitting on a `surface` background provides all the separation needed. If the eye cannot distinguish the two, your spacing is insufficient, not your contrast.

### The "Glass & Gradient" Rule
Floating elements (modals, dropdowns, popovers) must use **Glassmorphism**.
*   **Background:** `rgba(255, 255, 255, 0.05)`
*   **Blur:** 20px (Backdrop-filter)
*   **Ghost Border:** `outline_variant` (#464554) at 20% opacity.
*   **Soul Gradients:** Primary CTAs should utilize a subtle linear gradient: `primary` (#c0c1ff) to `primary_container` (#8083ff) at a 135° angle.

---

## 3. Typography: Editorial Authority

The typographic system pairs the geometric confidence of **Space Grotesk** (Display) with the high-readability of **Inter** (Body).

*   **Display & Headlines (Space Grotesk):** These are your "Editorial Anchors." Use `display-lg` (3.5rem) with tight letter-spacing for high-level data summaries (e.g., Total Revenue). The weight and width convey a sense of "Architectural Strength."
*   **Title & Body (Inter):** Used for functional data. `title-md` (1.125rem) should be used for section headers, while `body-md` (0.875rem) serves as the workhorse for table data.
*   **Labels (Inter):** Use `label-sm` (0.6875rem) in all-caps with increased letter-spacing (0.05rem) for form labels to provide a "technical" feel.

---

## 4. Elevation & Depth: Tonal Layering

Traditional shadows are too heavy for a glass-based system. We achieve hierarchy through **Ambient Light**.

*   **The Layering Principle:** Stacking is the new shadowing. Place a `surface_container_highest` card inside a `surface_container` section to create natural lift.
*   **Ambient Shadows:** For floating glass elements, use a "Tinted Glow" rather than a grey shadow.
    *   *Shadow Specs:* `0px 20px 40px rgba(0, 0, 0, 0.4)` combined with a subtle outer glow of `0px 0px 10px rgba(99, 102, 241, 0.1)`.
*   **The Ghost Border:** High-contrast borders are forbidden. If a container needs definition against a similar background, use `outline_variant` at 15% opacity. It should feel like a "whisper" of a line.

---

## 5. Component Guidelines

### Buttons (The Interaction Points)
*   **Primary:** Gradient fill (`primary` to `primary_container`), `xl` (0.75rem) roundedness. Use `on_primary` for text.
*   **Secondary:** Glass background (`rgba(255, 255, 255, 0.05)`) with a `Ghost Border`.
*   **Tertiary:** Ghost button; text-only using `primary` color, switching to a subtle `surface_bright` background on hover.

### Input Fields & Data Entry
*   **Structure:** No bottom line; use a full container fill of `surface_container_highest`. 
*   **States:** On focus, the `Ghost Border` increases to 40% opacity and the `tertiary` (#4cd7f6) accent appears as a 2px left-edge indicator.
*   **Error:** Use `error` (#ffb4ab) for text and a subtle `rgba(255, 180, 171, 0.1)` fill for the input box.

### Cards & Data Lists
*   **Forbid Dividers:** Never use a horizontal line to separate list items. Use the **Spacing Scale** `spacing-4` (0.9rem) to create clear air between rows.
*   **Data Density:** In data-heavy tables, use alternating row backgrounds (`surface_container_low` vs `surface_container`) to guide the eye without adding visual "ink."

### Specialized Component: The "Zenith Metric"
A custom component for this ERP: A large glass card featuring a `display-md` value, a `tertiary` sparkline, and a background "orb" of `primary` color at 5% opacity blurred to 100px. This creates a focal point for the user's most important KPI.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme white space. If a section feels "almost right," double the padding.
*   **Do** use asymmetrical layouts (e.g., a wide 8-column main area paired with a floating 4-column glass utility panel).
*   **Do** ensure all "glass" elements have `backdrop-filter: blur(20px)` to maintain legibility over moving data.

### Don't
*   **Don't** use pure white (#FFFFFF) for text. Always use `on_surface` (#dae2fd) to reduce eye strain in dark mode.
*   **Don't** use standard 90-degree corners. Stick strictly to the **Roundedness Scale** (default `xl` for containers, `md` for inputs).
*   **Don't** use "Drop Shadows" on flat buttons. Only floating glass panels receive shadows.