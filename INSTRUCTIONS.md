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
| Social URLs | `src/lib/constants.ts` + hardcoded in `Navbar.tsx` |
| EmailJS credentials | `.env` (copy from `.env.example`) |
| SEO title/description | `src/app/layout.tsx` → `metadata` |
| Theme colors | `src/app/globals.css` → `@theme inline` |
| 3D Earth model | `public/planet/` (replace GLTF files) |
| Logo / favicon | `public/images/logo.png` |

---

## 1. Updating Text Content

All text content is in `src/lib/translations.ts`. There are two language objects: `en` and `pt`. **Always update both.**

### Structure

```ts
export const translations = {
  en: {
    heroText: { greeting: "Hello I'm", role: "Software Engineer" },
    aboutText: { title: "About Me", subtitle: "Professional Summary" },
    // ... all sections
  },
  pt: {
    heroText: { greeting: "Olá, sou", role: "Engenheiro de Software" },
    aboutText: { title: "Sobre Mim", subtitle: "Resumo Profissional" },
    // ... all sections
  },
};
```

### How‑to
1. Open `src/lib/translations.ts`
2. Find the key you want to change (component code references keys via `t('sectionText.key')`)
3. Edit the value in both `en` and `pt`
4. Save — the dev server hot‑reloads instantly

### Finding which key maps to which text
Search for `t(` inside the component. Example:
```tsx
// In Hero.tsx
<h1>{t(heroText.greeting)}</h1>
```
This tells you the key is `heroText.greeting`.

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

Edit `src/components/Navbar.tsx` — each icon button calls `window.open(url, ...)`:

```tsx
<button onClick={() => window.open("https://github.com/your-username", ...)}>
  <img src="/images/icon-github.png" alt="GitHub" />
</button>
```

Change the URL string in each button's `onClick`.

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

Edit `src/app/layout.tsx`:

```ts
export const metadata = {
  title: "Vitor Orsini | Portfolio",
  description: "Your SEO description.",
  icons: { icon: "/images/logo.png" },
};
```

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

## 10. Replacing the 3D Earth

Files in `public/planet/`:
```
planet/
├── scene.gltf
├── scene.bin
└── textures/
    ├── Clouds_baseColor.png
    └── Planet_baseColor.png
```

**To replace:** Export your model as GLTF, replace all files, adjust `scale` in `EarthCanvas.tsx` if needed:

```tsx
<primitive object={earth.scene} scale={2.5} ... />
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
pnpm lint        # Catch ESLint errors
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

*Last updated: May 2026*
