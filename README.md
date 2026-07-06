# Portfolio – Dominik Prilmüller

Personal website of **Dominik Prilmüller**, freelance fullstack developer based in Linz, Austria.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com), deployed to GitHub Pages.

## Tech stack

- **Astro 7** – static site generation
- **Tailwind CSS 4** – styling (CSS-first config via `@tailwindcss/vite`, see `src/styles/global.css`)
- **TypeScript**
- **valibot** – contact-form validation
- **web3forms** – contact-form submissions
- Light / dark mode with a manual toggle (persisted in `localStorage`)

## Prerequisites

- [Node.js](https://nodejs.org) **22.12 or newer** (required by Astro 7)
- npm (a `package-lock.json` is committed)

## Getting started

```sh
npm install
npm run dev      # start the dev server (http://localhost:4321)
npm run build    # type-check + production build to ./dist
npm run preview  # preview the production build locally
```

## Editing content

Almost all copy lives in [`src/data.json`](src/data.json): personal details, services,
process steps, skills and the projects list. Update that file to change the site content
— no component edits required for typical updates.

- **Projects** in `data.json` currently contain placeholder case studies. Replace the
  `title` / `description` / `tags` / `link` with real projects.
- **Theme colors** are defined as CSS variables in the `@theme` block of
  [`src/styles/global.css`](src/styles/global.css).

## Deployment

Pushing to `main` triggers the GitHub Actions workflow in
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and
publishes it to GitHub Pages. The contact form requires a `PUBLIC_WEB3_FORMS` secret to be
configured in the repository settings.
