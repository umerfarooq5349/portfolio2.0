# Design DNA — Portfolio Website

> Extracted from three reference sites and blended into a unified design system.

---

## Layout Architecture

- **Page Type:** Single-page long-scroll with fixed navigation
- **Primary Layout:** Full-width sections with max-width content containers (~1200px)
- **Grid System:** Mix of Bento-style card grids (from Site 1) and editorial split layouts (from Site 3)
- **Breakpoints:**
  - Mobile: < 768px — single column, stacked
  - Tablet: 768px–1024px — 2-column adaptive
  - Desktop: > 1024px — full multi-column layout

### Section Architecture (in order)
1. **Hero** — Full-viewport split layout (text left, image right in oval/rounded container)
2. **Stats Bar** — Horizontal counters (years experience, projects, clients)
3. **About** — Dark section with geometric wireframe shapes in background
4. **Services** — Bento grid of service cards
5. **Skills** — Progress bars + experience timeline (from Site 2)
6. **Portfolio/Works** — Filterable masonry grid with large thumbnails
7. **Testimonials** — Clean symmetrical card layout with avatar headshots
8. **Contact CTA** — Full-width dark band with a large headline + form
9. **Footer** — Minimal with social links and back-to-top

---

## Colour Tokens

| Token              | Value       | Usage                                           |
|--------------------|-------------|------------------------------------------------|
| `--bg-primary`     | `#0F0F0F`   | Main page background (deep black, from Site 1) |
| `--bg-secondary`   | `#171717`   | Card backgrounds, alternate sections           |
| `--bg-light`       | `#F3F3F3`   | Light contrast sections (from Site 3)          |
| `--accent`         | `#FF914D`   | Primary accent — buttons, icons, highlights    |
| `--accent-dark`    | `#E07A3A`   | Accent hover state                             |
| `--text-primary`   | `#FFFFFF`   | Headings on dark backgrounds                   |
| `--text-secondary` | `#999999`   | Body text, muted labels                        |
| `--text-dark`      | `#111111`   | Headings on light backgrounds                  |
| `--border`         | `#2A2A2A`   | Card borders, dividers                         |
| `--nav-bg`         | `rgba(15,15,15,0.85)` | Sticky nav with backdrop blur        |

### Tailwind Config Extension
```ts
colors: {
  'bg-primary': '#0F0F0F',
  'bg-secondary': '#171717',
  'bg-light': '#F3F3F3',
  'accent': '#FF914D',
  'accent-dark': '#E07A3A',
  'text-muted': '#999999',
  'border-subtle': '#2A2A2A',
}
```

---

## Typography Scale

| Element       | Family              | Size (desktop) | Weight | Notes                           |
|---------------|---------------------|----------------|--------|---------------------------------|
| Display / H1  | Playfair Display    | 80–120px       | 700    | Serif, editorial, from Site 3   |
| H2 (Section)  | Playfair Display    | 48–64px        | 700    | Bold serif section headers      |
| H3 (Card)     | Inter               | 22–28px        | 600    | Sans-serif for UI contexts      |
| Body          | Inter               | 16–18px        | 400    | Clean readability               |
| Small / Label | Inter               | 12–14px        | 500    | Uppercase tracking for labels   |
| Nav Links     | Inter               | 14–16px        | 500    | Uppercase, letter-spacing: 0.1em|

### Google Fonts Setup
```
Playfair Display: 400, 700, 900
Inter: 400, 500, 600, 700
```

### Special Text Treatments
- **Vertical Side Labels:** Fixed-position text rotated 90° on left/right edges (e.g., "HOMEPAGE", "BACK TO TOP") — from Site 3
- **Mixed-weight headlines:** Word-level font-weight variation in hero (e.g., "**Unique** Ideas / **For Your** Business.")
- **Outlined/Stroke text** on large decorative headings

---

## Navigation Design

### Blended Strategy: Horizontal + Hamburger Overlay
- **Desktop:** Sticky horizontal nav — transparent on load, `rgba(15,15,15,0.9)` with backdrop-blur on scroll
- **Logo:** Bold monogram-style text (e.g., initials + period — "J.") top-left, Playfair Display
- **Nav Items:** 5–6 links (Home, About, Services, Works, Testimonials, Contact) — centered or right-aligned
- **CTA Button:** "Work With Us" pill-button with orange accent, far right
- **Mobile:** Hamburger icon → full-screen overlay menu with large animated links (from Site 3)
- **Scroll behavior:** Nav changes background opacity on scroll (from Site 1)
- **Active indicator:** Underline or orange dot below active link

---

## Component Inventory

### Buttons
- **Primary:** Orange (`#FF914D`) pill/rounded, bold black label, arrow icon on right
- **Secondary:** Outlined (1px border, white/orange), transparent background
- **Magnetic CTA:** Large pill button that slightly follows cursor (from Site 3)

### Cards (Bento Grid)
- Background: `--bg-secondary` (`#171717`)
- Border: 1px solid `--border` (`#2A2A2A`)
- Border radius: 16–20px
- Hover: subtle scale (1.02) + glow shadow in accent color
- Padding: 32–40px

### Skills / Progress Bars (from Site 2)
- Horizontal bars with label + percentage
- Orange fill on dark track
- Animated fill on scroll into view

### Portfolio Cards
- Large thumbnail (16:9 or 4:3)
- Overlay appears on hover with project title + category pill
- Filter tabs: All / Design / Development / Branding

### Testimonial Cards
- Circular avatar image
- Star rating in orange
- Quote in italic Playfair Display
- Author name + title below

### Stats Counter
- Large bold number (Playfair Display, 72px)
- "+" suffix
- Small label below in muted grey
- Animated count-up on scroll

---

## Animation Notes

### Scroll-triggered Animations (Framer Motion)
- **Section entry:** `fadeInUp` — `y: 40 → 0`, `opacity: 0 → 1`, duration 0.6s
- **Stagger children:** Bento cards stagger 0.1s apart
- **Parallax:** Hero image container slight scroll parallax (offset 20%)
- **Stats counter:** Number count-up when section enters viewport

### Hover Effects
- **Cards:** `scale(1.02)` + orange glow `box-shadow`
- **Nav links:** Underline slides in from left
- **Portfolio thumbnails:** Overlay fades in, slight scale on image
- **Primary button:** Background shifts to `--accent-dark`, slight scale

### Special Effects
- **Vertical side labels:** Fixed-position, rotate(-90deg), track section context
- **Geometric wireframe shapes:** CSS-only polygons or SVG in About section background
- **Backdrop blur:** Used on sticky nav and any glass-card overlays
- **Smooth scroll:** Lenis or CSS `scroll-behavior: smooth`

---

## Spacing System

| Token    | Value  | Usage                        |
|----------|--------|------------------------------|
| `4px`    | xs     | Icon gaps, tight spacing     |
| `8px`    | sm     | Inner padding                |
| `16px`   | md     | Component padding            |
| `24px`   | lg     | Card padding                 |
| `40px`   | xl     | Section inner padding        |
| `80px`   | 2xl    | Between-section gap          |
| `120px`  | 3xl    | Hero vertical padding        |

---

## Source Attribution

| Source URL | Contributed Elements |
|---|---|
| https://clinquant-faloodeh-70c1be.netlify.app/ | Deep black dark mode, Bento-grid card layout, orange accent (#FF5E14 → merged to #FF914D), sticky transparent nav, filter tabs for portfolio, minimal footer |
| https://snazzy-donut-cc3f62.netlify.app/ | Skills progress bars, experience timeline, testimonials section, full contact section with details, pricing awareness, serif headings concept |
| https://miller.bslthemes.com/ashley-demo/home-1.html | PRIMARY INSPIRATION — hamburger full-screen overlay nav, vertical side labels, editorial serif hero typography, oval image containers, geometric wireframe shapes, split-screen hero, magnetic CTA button, mixed-weight headlines |
