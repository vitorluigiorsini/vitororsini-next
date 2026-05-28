# Vitor Orsini | Portfolio

A modern, minimalist portfolio website built with **Next.js**, **TypeScript**, **Framer Motion**, and a **Canvas 2D** animated background. Features a dark theme with sophisticated indigo accents, responsive design, smooth animations, and bilingual support (English/Portuguese).

## Features

- **Canvas 2D Background** — Performant particle network animation with subtle mouse interaction, zero external dependencies
- **Scroll Spy Navigation** — Automatic menu highlighting based on scroll position (desktop & mobile)
- **Back to Top Button** — Floating button appears after scrolling (desktop only)
- **Responsive Design** — Mobile-first approach with dedicated mobile navbar
- **Smooth Animations** — Framer Motion for page transitions and micro-interactions
- **Internationalization (i18n)** — English/Portuguese language toggle with flattened key-first structure
- **Contact Form** — EmailJS integration with Zod validation
- **Dark Theme** — Professional minimalist aesthetic with glass morphism effects

## Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router), React 18 |
| **Language** | TypeScript |
| **Package Manager** | pnpm |
| **Styling** | Tailwind CSS v4 (CSS-based config) |
| **Animations** | Framer Motion |
| **Background** | Canvas 2D (vanilla, no deps) |
| **Forms** | EmailJS, Zod |
| **Testing** | Vitest |
| **Code Quality** | Oxlint, TypeScript strict mode |
| **Git Hooks** | Lefthook |

## Quick Start

```bash
pnpm install
pnpm dev
pnpm build
pnpm start
```

Environment variables (copy `.env.example` to `.env`):

```env
NEXT_PUBLIC_SERVICE_ID=your_service_id
NEXT_PUBLIC_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_API=your_emailjs_api_key
```

## Project Structure

```
├── public/                    # Static assets
│   └── images/                # Site images (optimized)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (metadata, Inter font, providers)
│   │   ├── page.tsx           # Home page (composition root)
│   │   └── globals.css        # Tailwind v4 theme + global styles
│   ├── components/
│   │   ├── Navbar.tsx, MobileNavbar.tsx, BackToTop.tsx
│   │   ├── Hero.tsx, About.tsx, Experience.tsx
│   │   ├── Tech.tsx, Projects.tsx, Contact.tsx
│   │   ├── CanvasBackground.tsx
│   │   ├── Footer.tsx, CTA.tsx, Section.tsx
│   │   └── index.ts
│   ├── contexts/
│   │   └── LanguageContext.tsx    # i18n provider (t/tv)
│   ├── hooks/
│   │   └── useScrollSpy.ts        # Scroll-based section detection
│   └── lib/
│       ├── constants.ts            # Design tokens, static data, social links, SEO
│       ├── translations.ts         # i18n (flattened key-first)
│       ├── validations.ts          # Zod schemas
│       ├── utils.ts                # Shared utilities
│       └── three-setup.ts          # Three.js Clock warning supression
├── .env.example
├── eslint.config.mjs
├── lefthook.yml
├── .oxlintrc.json
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── vitest.config.ts
```

## Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server (Turbopack) |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run Oxlint checks |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm test` | Run Vitest unit tests |

## Design System

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#0A0F1C` | Background |
| `secondary` | `#6366F1` | Accent |
| `text-primary` | `#F8FAFC` | Main text |
| `text-secondary` | `#94A3B8` | Secondary text |

**Font:** Inter (variable, via `next/font/google`)
**Spacing:** 4px / 8px grid basis

## Key Decisions

- **Canvas 2D** over Three.js — zero dependencies, better Core Web Vitals, smaller bundle
- **Next.js App Router** over Vite for SEO, SSR, and Vercel deployment
- **TypeScript** for type safety
- **pnpm** for strict deps and speed
- **Tailwind v4** CSS-based config (@theme inline)
- **Zod** validation on contact form before EmailJS submit
- **Flattened i18n** (~55% smaller vs nested structure)
- **Section component** instead of SectionWrapper HOC
- **No DDD / overengineering** — flat structure, pragmatic code

## Browser Support

Chrome | Firefox | Safari | Edge | iOS Safari | Android Chrome
--- | --- | --- | --- | --- | ---
✓ | ✓ | ✓ | ✓ | ✓ | ✓

## License

MIT — see [LICENSE](LICENSE) for details.

## Author

**Vitor Orsini** — [GitHub](https://github.com/vitorluigiorsini/) · [LinkedIn](https://www.linkedin.com/in/vitorluigiorsini/)
