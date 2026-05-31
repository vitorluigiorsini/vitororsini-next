# Technical Specification: Vitor Orsini Portfolio

## Overview
Full technical specification for the portfolio website, built with Next.js 16, TypeScript, Canvas 2D, and Framer Motion.

---

## 1. System Requirements

### Hardware
- Minimum: 2GB RAM, dual-core CPU
- Recommended: 4GB+ RAM, quad-core CPU
- Storage: 200MB+ available space (includes dependencies)

### Software
- **Node.js**: >=20.0.0 (LTS)
- **Package Manager**: pnpm >=8.0.0
- **Browser**: Modern browsers with Canvas 2D support

---

## 2. Dependencies

### Production

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 16.2.6 | React framework (App Router) |
| `react` | 18.3.1 | UI library |
| `react-dom` | 18.3.1 | React DOM |

| `framer-motion` | 11.15.0 | Animations |
| `@emailjs/browser` | 4.4.1 | Email service |
| `zod` | 3.23.8 | Schema validation |
| `react-icons` | 5.4.0 | Icons |
| `react-tilt` | 1.0.2 | Hover tilt effect |
| `react-vertical-timeline-component` | 3.5.3 | Timeline |

### Development

| Package | Version | Purpose |
|---------|---------|---------|
| `typescript` | 5.4.5 | Static typing |
| `tailwindcss` | 4.3.0 | CSS framework |
| `@tailwindcss/postcss` | ^4.0 | PostCSS plugin (Tailwind v4) |
| `vitest` | 1.6.0 | Unit testing |
| `oxlint` | 1.67.0 | Linter |
| `lefthook` | 1.11.0 | Git hooks |

---

## 3. Architecture

### Application Structure (Next.js App Router)

```
vitororsini-next/                    # Project root
├── .oxlintrc.json                   # Oxlint configuration
├── .next/                           # Build output (gitignored)
├── public/                          # Static assets served at /
│   ├── images/                      # Images, icons, screenshots

├── src/
│   ├── app/                         # App Router directory
│   │   ├── layout.tsx               # Root Server Component (metadata, html/body, providers)
│   │   ├── page.tsx                 # Home page (Client Component, section assembly)
│   │   └── globals.css              # Tailwind v4 + global styles
│   ├── components/                  # UI components (flat structure)
│   │   ├── Navbar.tsx               # Desktop navigation
│   │   ├── MobileNavbar.tsx         # Bottom mobile navigation
│   │   ├── BackToTop.tsx            # Floating scroll-to-top button
│   │   ├── Hero.tsx                 # Hero section with profile + CTA
│   │   ├── About.tsx                # About + service cards
│   │   ├── Experience.tsx           # Vertical timeline
│   │   ├── Tech.tsx                 # Skills tags
│   │   ├── Projects.tsx             # Project cards
│   │   ├── CanvasBackground.tsx     # Canvas 2D particle background
│   │   ├── Contact.tsx              # Contact form
│   │   ├── Footer.tsx               # Footer wrapper
│   │   ├── CTA.tsx                  # Hero call-to-action buttons
│   │   ├── Section.tsx              # Reusable section wrapper
│   ├── contexts/
│   │   └── LanguageContext.tsx       # i18n provider
│   ├── hooks/
│   │   └── useScrollSpy.ts          # Scroll position → active section
│   └── lib/
│       ├── constants.ts             # Design tokens, nav links, services, social links, SEO
│       ├── translations.ts          # Flattened i18n data (en + pt)
│       ├── validations.ts           # Zod schemas for contact + GitHub
│       └── utils.ts                 # Utility functions (cn, sectionStyles)
```

### Component Hierarchy

```
<html lang="en" className={inter.variable}>
  <body className="bg-primary text-text-primary" suppressHydrationWarning>
    <AppLanguageProvider>
      <div className="relative bg-primary">                   // page.tsx
        <CanvasBackground />
        <div className="bg-hero-pattern">                     // Hero background
          <MobileNavbar />
          <Navbar />
          <Hero />
        </div>
        <Section id="about">    <About />     </Section>
        <Section id="experience"><Experience /></Section>
        <Section id="tech">     <Tech />      </Section>
        <Section id="projects"> <Projects />   </Section>
        <div className="relative z-0">
          <Section id="contact"><Contact /></Section>
          <Footer />
        </div>
        <BackToTop />
      </div>
    </AppLanguageProvider>
  </body>
</html>
```

### Data Flow

```
┌─────────────┐     ┌──────────────┐     ┌──────────────┐
│  constants   │ ──► │  Component   │ ──► │    Render    │
│  translations│     │  (reads via  │     │  (JSX +      │
│  validations │     │  t/tv hooks) │     │  Tailwind)   │
└─────────────┘     └──────────────┘     └──────────────┘
                          │ ▲
                          ▼ │
                    ┌──────────────┐
                    │  Context /   │
                    │  State       │
                    │ (language,   │
                    │  form, etc)  │
                    └──────────────┘
```

- **Static data** flows from `constants.ts` + `translations.ts` → components → render
- **User input** flows from form → Zod validation → EmailJS API
- **Language** state flows from LanguageContext → `t()` / `tv()` → translated strings

---

## 4. Styling System (Tailwind v4)

### Key Differences from Tailwind v3
- **No `tailwind.config.*` file** — all theme values in CSS via `@theme inline`
- **No `@tailwind base/components/utilities`** — single `@import "tailwindcss"`
- **No `content` array** — class scanning is automatic
- **CSS Cascade Layers** — `@layer theme/base/components/utilities` for specificity control

### Design Tokens (in `src/app/globals.css`)

```css
@import "tailwindcss";

@theme inline {
  --color-primary: #0A0F1C;
  --color-secondary: #6366F1;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-text-primary: #F8FAFC;
  --color-text-secondary: #94A3B8;
  --color-gray-50: #F8FAFC;
  --color-gray-100: #F1F5F9;
  --color-gray-200: #E2E8F0;
  --color-gray-300: #CBD5E1;
  --color-gray-400: #94A3B8;
  --color-gray-500: #64748B;
  --color-gray-600: #475569;
  --color-gray-700: #334155;
  --color-gray-800: #1E293B;
  --color-gray-900: #0F172A;

  --shadow-subtle: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  --shadow-medium: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05);
  --shadow-elevated: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);

  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, monospace;
  --breakpoint-xs: 450px;

  --background-image-hero-pattern: url('/images/herobg.png');
  --background-image-profile: url('https://avatars.githubusercontent.com/u/104171028?v=4');
  --animate-lighten: lighten 2s ease-in-out infinite;
}
```

### CSS Cascade Layers — Critical Note
Unlayered CSS has **highest priority** in the cascade layer system. Therefore:
- Utility classes (`.mx-auto`, `.px-4`, etc.) in `@layer utilities` can be overridden by unlayered `* { ... }` blocks
- Solution: **never put universal selectors outside layers** — Tailwind v4 already handles `margin: 0; padding: 0` in its `@layer base`

---

## 5. Canvas 2D Background (`CanvasBackground.tsx`)

A lightweight particle network animation using native Canvas 2D, replacing the previous Three.js implementation to improve Core Web Vitals and reduce bundle size.

### Architecture

| Aspect | Detail |
|--------|--------|
| **Render method** | `CanvasRenderingContext2D` via `<canvas>` element |
| **Animation loop** | `requestAnimationFrame` with cleanup on unmount |
| **Position** | `fixed inset-0 w-screen h-screen -z-1 pointer-events-none` |
| **Dependencies** | None (vanilla JS) |

### Particle System

| Parameter | Value | Purpose |
|-----------|-------|---------|
| `PARTICLE_COUNT` | 80 | Number of particles |
| `CONNECTION_DISTANCE` | 120px | Max distance for drawing lines between particles |
| `MOUSE_INFLUENCE` | 30px | Radius of mouse repulsion force |
| `FADE_SPEED` | 0.02 | Rate at which particles fade in |

### Behaviors

- **Particles** drift with random velocity and bounce off viewport edges
- **Connections** fade based on distance (closer = more opaque lines, `rgba(99,102,241, ...)`)
- **Mouse interaction** repels nearby particles, creating a subtle ripple effect
- **Cleanup** cancels `requestAnimationFrame`, clears particle array, removes event listeners on unmount — no memory leaks
- **Resize** recalculates canvas dimensions on window resize

---

## 6. Internationalization (i18n)

### Translation System

**Data:** `src/lib/translations.ts` — flattened key-first object where each entry has `{ "pt-br": "...", en: "..." }` language pairs.

```ts
export const translations = {
  heroText: {
    greeting: { "pt-br": "Oi, sou o", en: "Hi, I'm" },
    name: { "pt-br": "Vitor Orsini", en: "Vitor Orsini" },
    role: { "pt-br": "Sou Engenheiro de Software", en: "I'm a Software Engineer" },
  },
  // ...
};
```

**Hook API (LanguageContext):**
| Function | Signature | Purpose |
|----------|-----------|---------|
| `t` | `(obj: TranslationPair) => string` | Translate a TranslationPair object by current language |
| `tv` | `(value: unknown) => string \| string[]` | Translate objects/arrays (recursive) |

**Persistence:** Language preference stored in `sessionStorage` (survives page refresh within session).

---

## 7. Form Validation (Zod)

### Contact Schema (`src/lib/validations.ts`)

```ts
export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
```

**Flow:**
1. User submits form → `handleSubmit` fires
2. `contactSchema.safeParse(form)` validates all fields
3. On failure: field-level errors displayed inline
4. On success: email sent via EmailJS with loading state

---

## 8. Build & Serve

| Stage | Command | Mechanism |
|-------|---------|-----------|
| Development | `pnpm dev` | Turbopack + HMR on port 3000 |
| Production build | `pnpm build` | Turbopack → static HTML + JS |
| Production serve | `pnpm start` | Next.js production server (port 3000) |

---

## 9. Testing (Vitest)

12 tests across 2 test files:
- `lib/validations.test.ts` — Zod schema validation edge cases
- `lib/translations.test.ts` — i18n key correctness and fallback behavior

Run: `pnpm test` (Vitest in run mode, jsdom environment).

---

## 10. Code Quality

| Tool | Config | Purpose |
|------|--------|---------|
| Oxlint | `.oxlintrc.json` | Fast linter (correctness + suspicious + perf) |
| TypeScript | `tsconfig.json` (strict: true) | Type safety |
| Lefthook | `lefthook.yml` | Pre-commit hooks (lint + typecheck + test) |

---

## 11. Environment Variables

| Variable | Required | Exposed to client |
|----------|----------|-------------------|
| `NEXT_PUBLIC_SERVICE_ID` | Yes | Yes (`NEXT_PUBLIC_` prefix) |
| `NEXT_PUBLIC_TEMPLATE_ID` | Yes | Yes |
| `NEXT_PUBLIC_EMAILJS_API` | Yes | Yes |

---

## 12. Performance Budgets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.8s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.8s |
| Cumulative Layout Shift | < 0.1 |
| Initial JS bundle | < 150KB gzipped |

---

## 13. Troubleshooting Guide

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| Hydration error (`cz-shortcut-listen`) | Browser extension adds attributes | `suppressHydrationWarning` on `<body>` |
| Tailwind classes not applying | Unlayered `* { margin:0 }` overrides `@layer utilities` | Remove unlayered universal selectors |

---

## 14. Deployment (Vercel Recommended)

1. Push to GitHub
2. Connect repo in Vercel dashboard
3. Set environment variables in Vercel project settings
4. Deploy — Vercel auto-detects Next.js and runs `pnpm build`

---

## 15. Changelog

### 2.3.0 — May 2026 (UI Standardization & SEO)
- **SEO**: Updated description to reflect actual tech stack (Next.js, Tailwind, Canvas 2D); added `keywords` metadata to layout
- **Translation**: Fixed Portfolio project description (removed incorrect Three.js/React references); shortened CTA "Let's talk" → "Talk"; removed ellipsis from loading text
- **Project cards**: Standardized to fixed height (420px) with line-clamp-3 for uniform layout
- **Buttons**: Fixed width (w-36) for CTA and contact buttons to prevent layout shifts across languages; added cursor-pointer to all interactive elements
- **Copy email**: Reduced to icon-sized button (w-12 h-12)
- **Hero**: Reduced heading font size on mobile (text-5xl → text-3xl) for better responsive typography
- **Bug fix**: Removed duplicated CTA button

### 2.2.0 — May 2026 (Canvas 2D Background)
- **Graphics**: Three.js + @react-three/fiber/drei → native Canvas 2D particle system
- **Components removed**: `EarthCanvas.tsx`, `StarsCanvas.tsx`, `Loader.tsx`, `three-setup.ts`
- **Component added**: `CanvasBackground.tsx` (vanilla JS, no deps)
- **Deps removed**: `three`, `@react-three/fiber`, `@react-three/drei`, `maath`, `@types/three`
- **Assets removed**: `public/planet/` (GLTF Earth model)
- **CSS removed**: `.canvas-loader` and `mulShdSpin` animation
- **Bundle**: Reduced by ~550KB (Three.js + R3F + model)

### 2.1.0 — May 2026 (Oxlint Migration)
- **Linter**: ESLint + SonarJS → Oxlint
- **Config**: Removed `eslint.config.mjs`; added `.oxlintrc.json`
- **Scripts**: `lint` now runs `oxlint` instead of `eslint`
- **Next.js**: No `eslint` config needed (Next.js 16 no longer runs lint during build)

### 2.0.0 — May 2026 (Next.js Migration)
- **Framework**: Vite → Next.js 16 App Router
- **Language**: JavaScript → TypeScript (strict mode)
- **Package manager**: npm → pnpm
- **Tailwind**: v3 → v4 (CSS-based `@theme inline`)
- **Styling behavior**: SectionWrapper HOC → Section component
- **Three.js**: Pinned to 0.182.0 for Clock stability
- **Form validation**: Added Zod schemas (client-side)
- **Hydration**: `suppressHydrationWarning` for browser extensions
- **WebGL**: Context loss handler on EarthCanvas
- **Mobile**: Fixed footer spacing for bottom nav visibility
- **Dev tooling**: ESLint flat config + SonarJS, Vitest, Lefthook

### 1.0.0 — Original Vite Version
- Vite + React 18 + JavaScript
- Tailwind v3 with `tailwind.config.cjs`
- SectionWrapper HOC
- Three.js 0.5.x with maath/random
- React Router for hash navigation

---

## 16. License

MIT License — see LICENSE file for details.
