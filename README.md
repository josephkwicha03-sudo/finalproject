# Joseph | Computer Science Portfolio

A personal portfolio built with Next.js (App Router), React, TypeScript and Tailwind CSS. It presents my Computer Science degree, projects, experience and skills, with light and dark themes.

## Features

- Responsive layout with a sticky navbar, mobile menu, and keyboard-accessible navigation
- Light and dark theme toggle (follows the system setting by default)
- Home, About, Projects and Experience pages
- Content kept in `src/data/` so it can be edited without touching components
- SEO basics: metadata, JSON-LD person schema, `sitemap.xml`, `robots.txt`

## Tech stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · next-themes · lucide-react · react-icons

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
npm run type-check
```

## Editing the content

| What | Where |
| --- | --- |
| Name, degree, summary, bio, goals, email, links | `src/data/profile.ts` |
| Projects | `src/data/projects.ts` |
| Education and experience | `src/data/experience.ts` |
| Skills | `src/data/skills.ts` |
| Site URL and navigation | `src/lib/site.ts` (set `NEXT_PUBLIC_SITE_URL` when deploying) |
| Colours and theme tokens | `src/app/globals.css` |

Entries marked `PLACEHOLDER` must be replaced before publishing.

## Deployment

Deploy to any Next.js host (for example Vercel). Set `NEXT_PUBLIC_SITE_URL` to the live address so metadata and the sitemap use the correct URL.

## Acknowledgements

The site started from an open-source Next.js portfolio template. Its code has been replaced; see the git history for the original starting point.
