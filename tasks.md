# Implementation Plan: Next.js Creative Portfolio
## Design Blend: Ashley Miller × Bentos × Diego Liam

> **Primary Inspiration:** Ashley Miller (miller.bslthemes.com)  
> **Supporting Patterns:** Bentos (clinquant-faloodeh) + Diego Liam (snazzy-donut)  
> **Reference:** See `design_dna.md` for full design tokens and component specs

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Animations | Framer Motion |
| Smooth Scroll | Lenis |
| Icons | Lucide React |
| Fonts | next/font (Google Fonts — Playfair Display + Inter) |
| Images | next/image |
| Components | shadcn/ui (primitives only) |

---

## Phase 1 — Project Scaffolding & Setup

- [ ] **1.1** Run `npx create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"` in the project directory
- [ ] **1.2** Install dependencies:
  ```bash
  npm install framer-motion lenis lucide-react clsx tailwind-merge
  npm install @radix-ui/react-dialog @radix-ui/react-tabs
  ```
- [ ] **1.3** Configure `tailwind.config.ts` with custom design tokens:
  - Colors: `bg-primary`, `bg-secondary`, `bg-light`, `accent`, `accent-dark`, `text-muted`, `border-subtle`
  - Font families: `playfair` (Playfair Display), `inter` (Inter)
  - Custom spacing and animation utilities
- [ ] **1.4** Create `app/globals.css`:
  - CSS custom properties mirroring Tailwind tokens
  - Base resets (box-sizing, scroll-behavior)
  - Smooth scroll setup
  - Custom scrollbar styling (dark, minimal)
- [ ] **1.5** Set up `lib/utils.ts` with `cn()` helper (clsx + tailwind-merge)
- [ ] **1.6** Configure `app/layout.tsx`:
  - Load Google Fonts via `next/font`
  - Set metadata (title, description, OG tags)
  - Apply font variables to `<html>`
  - Wrap with Lenis smooth scroll provider
- [ ] **1.7** Set up project folder structure:
  ```
  /
  ├── app/
  │   ├── layout.tsx
  │   ├── page.tsx
  │   └── globals.css
  ├── components/
  │   ├── ui/           # Primitives
  │   ├── layout/       # Header, Footer
  │   └── sections/     # All page sections
  ├── lib/
  │   └── utils.ts
  ├── public/
  │   └── assets/
  ├── design_dna.md
  └── tasks.md
  ```

---

## Phase 2 — Core UI Primitives

- [ ] **2.1 Button** (`components/ui/Button.tsx`)
  - Variants: `primary` (orange pill + arrow icon), `secondary` (outlined), `ghost`
  - TypeScript interface: `ButtonProps`
  - Hover: scale + background shift animation
  - Magnetic cursor effect option (CSS transform on mousemove)

- [ ] **2.2 Badge** (`components/ui/Badge.tsx`)
  - Pill-shaped, small
  - Variants: `default`, `outline`, `accent`
  - Usage: Portfolio filter tags, availability indicator

- [ ] **2.3 Card** (`components/ui/Card.tsx`)
  - Dark background (`bg-secondary`), subtle border, 16px border-radius
  - Hover: scale(1.02) + orange glow shadow
  - Accepts `className` for Bento size variants

- [ ] **2.4 SectionLabel** (`components/ui/SectionLabel.tsx`)
  - Small uppercase label with orange accent line before text
  - Used above all H2 section headings

- [ ] **2.5 ProgressBar** (`components/ui/ProgressBar.tsx`)
  - Horizontal dark track, orange animated fill
  - Accepts `skill` name and `percentage`
  - Animates on scroll entry with Framer Motion

---

## Phase 3 — Layout Components

### 3.1 Header / Navigation (`components/layout/Header.tsx`)
**Blended Style: Bentos horizontal nav + Ashley full-screen overlay**

- [ ] Sticky header, transparent on load → `rgba(15,15,15,0.9)` + `backdrop-blur` on scroll
- [ ] **Logo:** Bold monogram (e.g., "J." in Playfair Display) — top left
- [ ] **Desktop Nav Links:** 5–6 items (Home, About, Services, Works, Testimonials, Contact) — right-aligned or centered
  - Hover: underline slides in from left (CSS transition)
  - Active link: orange dot indicator below
- [ ] **CTA Button:** "Work With Us" orange pill button — far right
- [ ] **Hamburger Icon:** Animated 3-line → X transform — top right (always visible on mobile, also visible on desktop as alt)
- [ ] **Full-screen Overlay Menu** (Ashley style):
  - Black backdrop (`bg-primary`) slides in from right or top
  - Large Playfair Display nav links (80px+) with stagger animation
  - Social links row at bottom
  - Close button animates back to hamburger
  - Framer Motion `AnimatePresence` for mount/unmount

### 3.2 Vertical Side Labels (`components/layout/SideLabels.tsx`)
**From Ashley — unique editorial frame effect**

- [ ] Fixed-position elements on left and right viewport edges
- [ ] Left side: Current section name (e.g., "HOMEPAGE" → "ABOUT" → etc.) — updates on scroll
- [ ] Right side: "BACK TO TOP" with upward arrow
- [ ] Text rotated 90°, uppercase Inter 11px, muted grey color
- [ ] Intersection Observer to update left label as sections scroll into view

### 3.3 Footer (`components/layout/Footer.tsx`)

- [ ] Minimal dark footer
- [ ] Left: Logo + short tagline
- [ ] Center: Navigation links (repeated)
- [ ] Right: Social icons (GitHub, LinkedIn, Twitter, Dribbble) — Lucide icons
- [ ] Bottom bar: Copyright text
- [ ] "Back to Top" animated button (arrow icon, circles on hover)

---

## Phase 4 — Hero Section (`components/sections/Hero.tsx`)
**Primary inspiration: Ashley Miller split-screen hero**

- [ ] **Layout:** Two-column split
  - Left (60%): Typography + CTA
  - Right (40%): Profile image in oval/rounded container
- [ ] **Left column content:**
  - Small label: "Open for Projects" (green dot + Badge)
  - H1: Large Playfair Display with mixed-weight words (bold + light alternating)
    - Example: "**Crafting** Digital **Experiences** That *Inspire*."
  - Sub-text: 2-line description in Inter, muted grey
  - Two buttons: Primary "View Our Work" (orange pill) + Secondary "Our Services" (outlined)
- [ ] **Right column content:**
  - Profile image in `next/image` with oval CSS clip-path or border-radius
  - Subtle parallax on scroll (Framer Motion `useScroll` + `useTransform`)
  - Decorative geometric polygon shapes behind image (SVG or CSS `clip-path`)
- [ ] **Background:** Deep black with subtle geometric wireframe polygon shapes (top-left, bottom-right corners)
- [ ] **Animations:**
  - Left column: `fadeInUp` stagger (label → h1 → sub → buttons)
  - Right image: slight scale from 0.95 → 1.0 on mount, parallax on scroll

---

## Phase 5 — Stats Bar (`components/sections/Stats.tsx`)

- [ ] Dark band section (alternating from hero)
- [ ] 3–4 stats in a horizontal row:
  - "5+ Years Experience"
  - "120+ Projects Completed"
  - "80+ Happy Clients"
  - "15+ Awards Won"
- [ ] Numbers in Playfair Display 72px, white
- [ ] Labels in Inter 14px, muted grey
- [ ] Count-up animation when section enters viewport (Framer Motion + custom counter hook)
- [ ] Dividers between stats (vertical line, subtle grey)

---

## Phase 6 — About Section (`components/sections/About.tsx`)

- [ ] **Background:** Dark section with geometric wireframe polygon shapes (Ashley style)
- [ ] **Layout:** Two columns
  - Left: Image (slightly different from hero — maybe a work/studio photo) in a geometric frame
  - Right: About text content
- [ ] **Right content:**
  - Section label: "ABOUT US"
  - H2 in Playfair Display: "Passionate About Creating Meaningful Design"
  - 2–3 paragraphs in Inter body text
  - Key info list: Location, Experience, Education — with orange accent icons
  - "Our Services" button
- [ ] **Decorative elements:** Large outlined number or letter behind section heading
- [ ] **Animation:** Slide-in from opposite sides on scroll entry

---

## Phase 7 — Services Section (`components/sections/Services.tsx`)
**Bento Grid style from Site 1**

- [ ] Section label + H2
- [ ] **Bento Grid layout:** CSS Grid, 4 cards on desktop, 2 on tablet, 1 on mobile
- [ ] **Service Card** (using `Card` primitive):
  - Orange icon (Lucide or SVG) top-left
  - H3 service title (Inter 22px bold)
  - Short description (Inter body)
  - "Learn More →" link in orange
  - Hover: scale + orange glow
- [ ] **Services to include:**
  - UI/UX Design
  - Web Development
  - Brand Identity
  - Motion Design
  - Consultation
  - Mobile Apps

---

## Phase 8 — Skills Section (`components/sections/Skills.tsx`)
**From Site 2 (Diego Liam)**

- [ ] Two-column layout
  - Left: Technical skills with progress bars
  - Right: Experience timeline
- [ ] **Skills (left):**
  - 6–8 skills with labels and percentages
  - Use `ProgressBar` component
  - Animate fill on scroll into view
  - Skills: React/Next.js, TypeScript, Tailwind CSS, UI Design, Figma, Node.js, etc.
- [ ] **Experience Timeline (right):**
  - Vertical timeline with orange dot connectors
  - Each entry: Year range, Company/Role title, short description
  - Animate entries staggered on scroll

---

## Phase 9 — Portfolio Section (`components/sections/Portfolio.tsx`)
**From Site 1 (Bentos) — Filterable grid**

- [ ] Section label + H2: "Our Latest Works"
- [ ] **Filter tabs:** All | Design | Development | Branding | Motion
  - Active tab: orange accent background
  - Tab switch: smooth Framer Motion layout animation
- [ ] **Portfolio Grid:** 3 columns desktop, 2 tablet, 1 mobile
- [ ] **Portfolio Card:**
  - Large `next/image` thumbnail
  - On hover: overlay fades in (semi-transparent dark)
  - Overlay shows: Project title (Playfair Display), category pill (Badge), external link icon
  - Smooth overlay transition (opacity + translateY)
- [ ] **"View All Works" button** at bottom center
- [ ] **Projects data** — define in `lib/projects.ts` with typed interface

---

## Phase 10 — Testimonials Section (`components/sections/Testimonials.tsx`)
**From Site 2 (Diego Liam)**

- [ ] Section label + H2: "What Clients Say"
- [ ] **Layout:** 3-column grid on desktop, 1 on mobile
- [ ] **Testimonial Card:**
  - Orange star rating (5 stars, Lucide Star icons)
  - Quote text in italic Playfair Display 18px
  - Horizontal divider
  - Circular `next/image` avatar (48px) + name + role
  - Card uses `Card` primitive with hover effect
- [ ] **Client data** — define in `lib/testimonials.ts`

---

## Phase 11 — Contact Section (`components/sections/Contact.tsx`)
**Blended from Site 2 details + Site 3 CTA style**

- [ ] Large full-width dark section
- [ ] **Left column:**
  - Section label: "GET IN TOUCH"
  - H2: "Let's Work Together on Something Great"
  - Contact details with orange icons:
    - Location
    - Phone
    - Email
  - Social links row
- [ ] **Right column — Contact Form:**
  - Name, Email, Subject inputs (dark bg, subtle border, orange focus ring)
  - Message textarea
  - Submit button (primary orange)
  - Form validation (HTML5 + TypeScript)
- [ ] **Animation:** Form slides in from right on scroll entry

---

## Phase 12 — Lenis Smooth Scroll Integration

- [ ] Create `components/providers/LenisProvider.tsx` as a client component
- [ ] Wrap `app/layout.tsx` children in `<LenisProvider>`
- [ ] Configure Lenis: `lerp: 0.1`, `duration: 1.2`, `easing: easeInOutCubic`
- [ ] Sync Lenis RAF with Framer Motion: pass `lenis.time` to `useFrame`
- [ ] Ensure Lenis is disabled on mobile (use native scroll below 768px)

---

## Phase 13 — Vertical Side Labels (Intersection Observer)

- [ ] Create `hooks/useSectionTracker.ts`
- [ ] Observe all major sections with `IntersectionObserver`
- [ ] Update left side label text as each section enters viewport
- [ ] Section → Label map:
  ```ts
  { hero: "HOMEPAGE", about: "ABOUT", services: "SERVICES",
    portfolio: "WORKS", testimonials: "CLIENTS", contact: "CONTACT" }
  ```

---

## Phase 14 — Page Assembly (`app/page.tsx`)

- [ ] Import and compose all sections in order:
  ```tsx
  <Header />
  <SideLabels />
  <Hero />
  <Stats />
  <About />
  <Services />
  <Skills />
  <Portfolio />
  <Testimonials />
  <Contact />
  <Footer />
  ```
- [ ] Add section `id` attributes for anchor navigation
- [ ] Ensure `aria-label` on all interactive elements

---

## Phase 15 — Responsiveness Pass

- [ ] **Mobile (375px):**
  - [ ] Hero: stacked (image above text), smaller H1 (48px)
  - [ ] All grids: single column
  - [ ] Hamburger menu only (no horizontal nav)
  - [ ] Side labels: hidden
  - [ ] Lenis disabled, native scroll
- [ ] **Tablet (768px):**
  - [ ] Hero: 2-col but compressed
  - [ ] Grids: 2-column
  - [ ] Nav: horizontal links visible, hamburger as secondary
- [ ] **Desktop (1280px):**
  - [ ] Full layout as designed
  - [ ] Side labels visible
  - [ ] Full Bento grid (3–4 col)

---

## Phase 16 — SEO & Metadata

- [ ] `app/layout.tsx` — global metadata
- [ ] Semantic HTML: single `<h1>` per page, `<nav>`, `<main>`, `<section>`, `<footer>`, `<aside>`
- [ ] All images: meaningful `alt` text
- [ ] `robots.txt` and `sitemap.xml` (Next.js 14 auto-generation)

---

## Phase 17 — Accessibility Pass

- [ ] All icon-only buttons: `aria-label`
- [ ] Navigation overlay: focus-trap inside when open
- [ ] Skip-to-content link at top of page
- [ ] Color contrast: all text meets WCAG AA (4.5:1 minimum)
- [ ] Keyboard navigation: Tab through all interactive elements
- [ ] `prefers-reduced-motion` media query: disable Framer Motion animations

---

## Phase 18 — Final Polish & Dev Server

- [ ] Review all sections for visual consistency with `design_dna.md`
- [ ] Remove all console logs, TODO comments, unused imports
- [ ] Run `npx tsc --noEmit` — zero TypeScript errors
- [ ] Run `npm run build` — zero build errors
- [ ] Run `npm run dev` — verify in browser at all breakpoints
- [ ] Verify Framer Motion animations are smooth (60fps)
- [ ] Verify Lenis smooth scroll feels natural

---

## Deliverables Checklist

- [ ] `design_dna.md` — Created
- [ ] `tasks.md` — This file
- [ ] `/app/layout.tsx` — Next.js root layout with fonts + metadata
- [ ] `/app/page.tsx` — Composed page with all sections
- [ ] `/app/globals.css` — Base styles + CSS custom properties
- [ ] `/components/ui/` — Button, Badge, Card, SectionLabel, ProgressBar
- [ ] `/components/layout/` — Header, Footer, SideLabels
- [ ] `/components/sections/` — Hero, Stats, About, Services, Skills, Portfolio, Testimonials, Contact
- [ ] `/components/providers/` — LenisProvider
- [ ] `/hooks/` — useSectionTracker
- [ ] `/lib/` — utils.ts, projects.ts, testimonials.ts
- [ ] `tailwind.config.ts` — Design token extension
