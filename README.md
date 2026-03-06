# CAL DMRadio Website

Static site for the CAL DMRadio dark matter experiment at UC Berkeley.
Built with [Astro](https://astro.build) and deployed to GitHub Pages.

---

## Run locally

```sh
npm install        # first time only
npm run dev
```

Then open **http://localhost:4321/CAL-DMRadio/** in your browser.

> The `/CAL-DMRadio/` path prefix is required because of the GitHub Pages base URL setting.

---

## Update content in 60 seconds

### Add a News post
Create a file `src/content/news/YYYY-MM-DD-your-title.mdx`:

```mdx
---
title: "Your News Title"
date: 2026-04-01
summary: "One sentence summary shown on the news index."
author: "Your Name"
tags: ["announcement"]
---

Full article text goes here. Markdown and basic HTML work.
```

### Add a Talk
Create a file `src/content/talks/YYYY-MM-DD-event-name.mdx`:

```mdx
---
title: "Talk Title"
date: 2026-05-15
speaker: "Speaker Name"
venue: "Conference or Seminar Name"
location: "City, Venue"
abstract: "One paragraph abstract."
upcoming: true        # set to false after the talk
slides: ""            # add URL when available
video: ""
---
```

### Update People
Edit `src/content/people/people.json`. Each person entry:

```json
{
  "name": "Full Name",
  "role": "Graduate Student",
  "title": "PhD Candidate, Physics",
  "bio": "Short bio sentence.",
  "email": "email@berkeley.edu",
  "photo": "/images/people/yourname.jpg",
  "website": ""
}
```

Roles displayed separately: `Principal Investigator`, `Postdoctoral Researcher`,
`Graduate Student`, `Undergraduate Researcher`, `Alumni`.

To add a photo: place a square image in `public/images/people/yourname.jpg` and
set `"photo": "/images/people/yourname.jpg"` in the JSON.

### Update Publications
Edit `src/content/publications/publications.json`. Each entry:

```json
{
  "title": "Paper Title",
  "authors": ["Author One", "Author Two"],
  "journal": "Physical Review Letters",
  "year": 2025,
  "url": "https://doi.org/...",
  "arxiv": "2501.12345",
  "type": "paper"
}
```

Valid types: `paper`, `preprint`, `thesis`, `slides`.

---

## Build for production

```sh
npm run build      # outputs to ./dist/
npm run preview    # preview the production build locally at http://localhost:4321/CAL-DMRadio/
```

GitHub Actions automatically builds and deploys on every push to `main`.
The live site will be at: **https://graybert.github.io/CAL-DMRadio/**

---

## File structure

```
src/
  content/
    news/           ← MDX files, one per news post
    talks/          ← MDX files, one per talk
    people/
      people.json   ← edit to add/remove team members
    publications/
      publications.json ← edit to add papers/theses/slides
  pages/
    index.astro         Home
    experiment.astro    Experiment
    dark-matter.astro   Dark Matter Context
    people.astro        People
    opportunities.astro Join Us
    news/
      index.astro       News listing
      [slug].astro      Individual news post
    talks.astro         Talks & Calendar
    publications.astro  Publications
  layouts/
    Layout.astro    ← global header + footer (edit nav here)
  styles/
    global.css      ← all site styles
public/
  images/
    placeholder-person.svg
    people/         ← put team member photos here
```

---

## Deploying to GitHub Pages

1. In the GitHub repo, go to **Settings → Pages** → set Source to **GitHub Actions**.
2. Push to `main` — the workflow in `.github/workflows/deploy.yml` handles the rest.
3. If you use a custom domain, update `site` in `astro.config.mjs` and set `base: '/'`.
