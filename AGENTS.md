# Repository Guidelines

## Project Structure & Module Organization
The project uses the Next.js App Router. Key directories:
- `app/` holds route segments, page layouts, and global providers; start feature work in `app/(site)/` when applicable.
- `components/` contains reusable UI primitives, layouts, and SEO helpers grouped by concern.
- `features/` organizes page-specific modules (e.g., `features/services`) composed of smaller section components and data files.
- `hooks/` centralizes client-side utilities, while `lib/` stores configuration, helpers, and typed constants.
- `public/` serves static assets. Generated output lives in `.next/` and should not be versioned.

## Build, Test, and Development Commands
Use npm scripts unless your team standardizes on pnpm or bun.
- `npm run dev` launches the Turbopack-powered dev server at `http://localhost:3000` with hot reload.
- `npm run build` produces an optimized production bundle; run before deploying.
- `npm run start` serves the build locally for smoke testing.
- `npm run lint` runs ESLint with the Next.js/TypeScript flat config. Treat warnings as blockers.

## Coding Style & Naming Conventions
- Follow the existing two-space indentation and trailing comma style enforced by ESLint/TypeScript.
- Name React components and exported modules with `PascalCase`; keep file names `kebab-case` (see `components/layouts/header.tsx`).
- Co-locate component-specific styles in the same file via Tailwind CSS utility classes; globals live in `app/globals.css`.
- Prefer `cn` helper from `lib/utils` for conditional class names and centralize constants under `lib/config/`.

## Testing Guidelines
Automated tests are not yet in place. When introducing tests, standardize on React Testing Library plus Vitest or Jest, store specs alongside source in `__tests__/` folders, and mirror filenames (`component-name.test.tsx`). Run manual accessibility checks (`npm run start` + browser devtools) until test harnesses ship.

## Commit & Pull Request Guidelines
Current history is sparse (`Initial commit from Create Next App`); keep future messages in imperative mood and under 72 characters, e.g., `feat: add hero carousel section`. Each PR should:
- Describe the change, linking Linear/Jira issues if applicable.
- Call out UI-impacting updates with before/after screenshots.
- List verification steps (lint, build, manual QA) or note gaps.

## Environment & Configuration Notes
Set `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_GTM_ID` for analytics before shipping. Optional overrides live in `lib/config/analytics.config.ts`—use `NEXT_PUBLIC_ENABLE_ANALYTICS` to allow tracking in development, `NEXT_PUBLIC_LOAD_GA_DIRECT` if you need Google Analytics outside GTM, and `NEXT_PUBLIC_GTM_AUTH` / `NEXT_PUBLIC_GTM_PREVIEW` for tag manager environments. Customize the data layer name with `NEXT_PUBLIC_GTM_DATALAYER`. Secrets belong in `.env.local`, never in version control. Review `middleware.ts` for routing logic whenever adding new marketing pages or updating locale rules.
