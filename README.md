# Wells Howe — PM Recruiting Site

A single-page site with a generic top section (name, tagline) and a
four-tab bottom section (Me / Purpose / Experience / Contact) that slides
between tabs. Built with Vite + React, no backend needed.

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually http://localhost:5173).

## Build for deployment

```bash
npm run build
```

This outputs a static site to `dist/`. That folder is everything you need —
no server required.

## Deploying (free options)

- **Vercel**: `npx vercel` from this folder, or connect the GitHub repo at
  vercel.com and it auto-detects Vite.
- **Netlify**: drag the `dist/` folder into netlify.com/drop, or connect the
  repo (build command `npm run build`, publish directory `dist`).
- **GitHub Pages**: push this folder to a repo, then use the
  `vite-plugin-gh-pages` or GitHub Actions to publish `dist/`.

## Before you publish

- **Resume PDF**: the Contact tab links to `/resume.pdf`. Drop a PDF version
  of your resume into the `public/` folder named `resume.pdf` — anything in
  `public/` is served as-is. I'd recommend a version **without your phone
  number** on it, since this file becomes publicly downloadable once the
  site is live.
- **Content**: everything in `src/components/tabs/` is plain English you can
  edit directly — no need to touch the styling files to change wording.

## Where things live

- `src/App.jsx` — tab state and layout
- `src/components/TopSection.jsx` — name + tagline
- `src/components/TabNav.jsx` — the sliding tab bar
- `src/components/TabPanel.jsx` — the sliding content track
- `src/components/tabs/` — the actual content for each tab
- `src/App.css` — all layout/visual styling
- `src/index.css` — color and font variables (edit these to retheme)
