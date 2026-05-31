# INSTRUCTIONS — How to Update Site Content

This document explains how to update text, images, projects, experience, and other content on the portfolio without touching code logic.

---

## Quick Reference

| What | File |
|------|------|
| Text (all visible strings) | `src/lib/translations.ts` |
| Project list | `src/lib/translations.ts` → `projects` |
| Experience timeline | `src/lib/translations.ts` → `experience` |
| Technologies / skills | `src/lib/translations.ts` → `technologies` |
| Profile image | `public/images/` + `globals.css` (`--background-image-profile`) |
| Social URLs | `src/lib/constants.ts` → `SOCIAL_LINKS` |
| Footer copyright | `src/lib/translations.ts` → `heroText.name` |
| SEO title/description | `src/lib/constants.ts` → `SEO` |
| SEO keywords | `src/app/layout.tsx` → `metadata.keywords` |
| Contact email / author name | `src/lib/constants.ts` → `CONTACT_INFO` |
| EmailJS credentials | `.env` (copy from `.env.example`) |
| Theme colors | `src/app/globals.css` → `@theme inline` |
| Background animation | `src/components/CanvasBackground.tsx` (tune particles, colors, mouse) |
| Logo / favicon | `public/images/logo.png` |

---

## 1. Updating Text Content

All text content is in `src/lib/translations.ts`. There are two language objects: `en` and `pt`. **Always update both.**

### Structure

The translations are a **flattened key-first** object where each entry has language pairs:

```ts
export const translations = {
  heroText: {
    greeting: { "pt-br": "Oi, sou o", en: "Hi, I'm" },
    name: { "pt-br": "Vitor Orsini", en: "Vitor Orsini" },
    // ...
  },
  aboutText: {
    title: { "pt-br": "Introdução", en: "Introduction" },
    subtitle: { "pt-br": "Sobre", en: "Overview" },
    // ...
  },
  // ... all sections
};
```

### How‑to
1. Open `src/lib/translations.ts`
2. Find the key you want to change (component code references keys as top-level objects, e.g. `heroText.greeting`)
3. Edit the value in both `"pt-br"` and `en` for that key
4. Save — the dev server hot‑reloads instantly

### Finding which key maps to which text
Search for `t(` inside the component or check the import from `@/lib/constants`. Example:
```tsx
// In Hero.tsx
import { heroText } from "@/lib/constants";
// ...
<h1>{t(heroText.greeting)}</h1>
```
This tells you the key is `heroText.greeting` in `translations.ts`.

---

## 2. Updating Projects

The `projects` array in both language objects:

```ts
projects: [
  {
    id: 1,
    title: "Project Name",
    description: "Brief description",
    image: "/images/project-screenshot.jpg",
    tech: ["React", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/user/repo",
  },
]
```

**To add:** Insert a new object (increment `id`). Place screenshot in `public/images/`.
**To remove:** Delete the object from both `en` and `pt`.
**To edit:** Modify fields directly.

---

## 3. Updating Experience

The `experience` array:

```ts
experience: [
  {
    id: 1,
    company: "Company Name",
    position: "Job Title",
    location: "City, Country",
    dateRange: "Jan 2020 – Present",
    description: "Role summary",
    points: ["Achievement 1", "Achievement 2"],
  },
]
```

Same pattern as projects: add/remove/edit objects in both languages.

---

## 4. Updating Technologies

The `technologies` object:

```ts
technologies: {
  frontend: ["React", "TypeScript"],
  backend: ["Node.js", "Python"],
}
```

Add or remove names. Icons must be present in `public/images/icon-[name].png` (lowercase, no spaces).

---

## 5. Updating Images

| Image | Location | How to update |
|-------|----------|---------------|
| Profile | CSS `--background-image-profile` in `globals.css` | Change the URL (local or external) |
| Projects | `public/images/` | Add file, reference in `translations.ts` as `/images/filename` |
| Logo | `public/images/logo.png` | Replace file |
| Tech icons | `public/images/icon-[name].png` | Add file for each tech name |
| Hero bg | `public/images/herobg.png` | Replace file |

---

## 6. Updating Social Media Links

Edit `src/lib/constants.ts` — update the `SOCIAL_LINKS` object:

```ts
export const SOCIAL_LINKS = {
  github: "https://github.com/your-username",
  linkedin: "https://linkedin.com/in/your-username",
  whatsapp: "https://wa.me/your-number",
};
```

All icon buttons in `Navbar.tsx` reference these constants automatically.

---

## 7. Updating EmailJS

Edit `.env` in the project root:

```env
NEXT_PUBLIC_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_API=user_xxxxx
```

Restart the dev server after changing `.env`.

---

## 8. Updating SEO

Edit `src/lib/constants.ts` — update the `SEO` object:

```ts
export const SEO = {
  title: "Vitor Orsini | Portfolio",
  description: "Your SEO description.",
};
```

The metadata in `src/app/layout.tsx` reads from `SEO` automatically.

**Keywords** are defined directly in `src/app/layout.tsx` inside the `metadata.keywords` array. Add or remove terms as needed for better search engine relevance.

---

## 9. Changing Colors

Edit `src/app/globals.css` inside `@theme inline`:

```css
@theme inline {
  --color-primary: #0A0F1C;   /* Main background */
  --color-secondary: #6366F1;  /* Accent */
  /* ... */
}
```

Changes apply globally.

---

## 10. Customizing the Canvas Background

The background is rendered by `src/components/CanvasBackground.tsx` using a native Canvas 2D particle system.

**To tune visual parameters**, adjust the constants at the top of the file:

```ts
const PARTICLE_COUNT = 80;           // Number of particles
const CONNECTION_DISTANCE = 120;     // Max distance for connections (px)
const MOUSE_INFLUENCE = 30;          // Mouse repulsion radius (px)
const FADE_SPEED = 0.02;             // Fade-in rate per frame
```

**To change colors**, edit the `fillStyle` and `strokeStyle` values:

```ts
ctx.fillStyle = `rgba(99, 102, 241, ${p.alpha})`;               // Particle color
ctx.strokeStyle = `rgba(99, 102, 241, ${alpha * 0.15})`;        // Connection line color
```

---

## 11. Adding a New Language

1. Add a language key to `translations.ts` (e.g., `es: { ... }`)
2. Copy the `en` structure and translate all values
3. Update the language toggle component(s) with the new flag/button

---

## 12. Before Deploying

Always run these commands:

```bash
pnpm lint        # Catch Oxlint errors
pnpm typecheck   # Catch TypeScript errors
pnpm test        # Verify unit tests pass
pnpm build       # Verify production build succeeds
pnpm start       # Preview production build locally
```

---

## 13. Getting Help

- **SPEC.md** — Full technical specification and architecture docs
- **Browser console** (F12) — Shows hydration errors, WebGL warnings, 404s
- **Tailwind IntelliSense** (VS Code extension) — Auto‑complete class names

*Last updated: May 2026 (SE0 keywords, standardized buttons, project card sizing)*
