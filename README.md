# Parmar & Evola Starter Site

This repository is a lightweight public-facing starter that can go live before the final design system, domain, and full content are ready.

## What is here

- A polished placeholder landing page
- A single content source for easy copy updates in `src/site-content.js`
- Vite-based local development and production builds
- Deployment config for both Vercel and Netlify

## Local development

```bash
npm install
npm run dev
```

The local dev server will print a URL such as `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Where to edit content fast

Update `src/site-content.js` to change:

- brand name or mark
- hero copy
- roadmap items
- footer note

Update `src/styles.css` once the visual reference is chosen.

## Recommended launch path

Vercel is the simplest first stop for this starter because Vite projects are auto-detected and Vercel provides a temporary public URL immediately. Netlify is also configured if that is the preferred hosting workflow.

Suggested rollout:

1. Push this project to GitHub.
2. Import the repository into Vercel or Netlify.
3. Let the platform build the site and generate a public URL.
4. Share that temporary URL until the real domain is purchased.
5. Attach the custom domain later without changing the project structure.
