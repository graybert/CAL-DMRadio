# CAL-Pathfinder Website

Official website for the CAL-Pathfinder dark matter experiment at UC Berkeley.

**Live site:** https://graybert.github.io/CAL-DMRadio/

Built with [Astro](https://astro.build) and deployed to GitHub Pages.

---

## Table of Contents
- [Quick Start](#quick-start)
- [Editing Main Pages](#editing-main-pages)
- [Adding Content](#adding-content-news-talks-publications)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)

---

## Quick Start

### Prerequisites
You'll need:
- **Node.js** (version 20+) - [Download here](https://nodejs.org/)
- **Git** - Usually pre-installed on Mac/Linux
- A **text editor** - VS Code, Sublime Text, or any editor you prefer

### Run Locally

1. **Clone the repository** (first time only)
   ```sh
   git clone https://github.com/[YOUR-ORG]/CAL-DMRadio.git
   cd CAL-DMRadio
   ```

2. **Install dependencies** (first time only, or after pulling new changes)
   ```sh
   npm install
   ```

3. **Start the development server**
   ```sh
   npm run dev
   ```

4. **Open in browser:** http://localhost:4321/CAL-DMRadio/

   > The `/CAL-DMRadio/` path is required because of GitHub Pages base URL settings.

5. **Edit files** - The site auto-reloads when you save changes!

6. **Commit your changes**
   ```sh
   git add .
   git commit -m "Brief description of what you changed"
   git push
   ```

---

## Editing Main Pages

The main science pages live in `src/pages/`. These are `.astro` files that mix HTML with some JavaScript.

### Main Pages:
- `index.astro` - Homepage
- `dark-matter.astro` - Dark Matter Science page
- `gravitational-waves.astro` - Gravitational Waves page
- `experiment.astro` - The Experiment page
- `publications.astro` - Publications list
- `talks.astro` - Talks & calendar

### How to Edit Text

1. **Open the file** you want to edit (e.g., `src/pages/experiment.astro`)

2. **Find the text** - Look for content inside `<p>` tags, `<h2>` headings, etc.

3. **Edit directly:**
   ```html
   <p>
     Old text here
   </p>
   ```
   Change to:
   ```html
   <p>
     New text here
   </p>
   ```

4. **Save** - The dev server will auto-reload

5. **Replace placeholders** - Some sections have `[Placeholder text in brackets]` - replace these with real content

### Common HTML Formatting

```html
<strong>Bold text</strong>
<em>Italic text</em>
<sub>subscript</sub>         <!-- For math: m_a becomes m<sub>a</sub> -->
<sup>superscript</sup>        <!-- For powers: c^2 becomes c<sup>2</sup> -->
```

### Special Characters
- `&mu;` = μ (mu)
- `&gamma;` = γ (gamma)
- `&alpha;` = α (alpha)
- `&nbsp;` = non-breaking space
- `&ndash;` = – (en dash)
- `&mdash;` = — (em dash)

### Adding Images

1. Place image files in `public/images/`
2. Reference in `.astro` files:
   ```html
   <img src={`${base}/images/your-image.jpg`} alt="Description" />
   ```

---

## Adding Content: News, Talks, Publications

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

---

## Deployment

### Automatic Deployment

The site **automatically deploys** when you push to the **`template`** branch.

**How it works:**
1. You push changes to the `template` branch
2. GitHub Actions automatically builds the site
3. The built site deploys to https://graybert.github.io/CAL-DMRadio/

**To switch to deploying from `main`:**
1. Open `.github/workflows/deploy.yml`
2. Change line 5 from `branches: [template]` to `branches: [main]`
3. Commit and push

### Manual Build

To build the site locally:
```sh
npm run build      # Outputs to ./dist/
npm run preview    # Preview production build at http://localhost:4321/CAL-DMRadio/
```

### GitHub Pages Setup

Already configured, but for reference:
1. GitHub repo → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. The workflow in `.github/workflows/deploy.yml` handles deployment

---

## Project Structure

```
CAL-DMRadio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automatic deployment config
├── public/
│   └── images/                 # Static images
│       ├── bullet-cluster.jpg
│       └── people/             # Team photos
├── src/
│   ├── pages/                  # Main website pages (edit these!)
│   │   ├── index.astro              # Homepage
│   │   ├── dark-matter.astro        # Dark Matter Science
│   │   ├── gravitational-waves.astro # Gravitational Waves
│   │   ├── experiment.astro         # The Experiment
│   │   ├── publications.astro       # Publications listing
│   │   ├── talks.astro              # Talks & calendar
│   │   └── opportunities.astro      # Join Us page
│   ├── content/                # Markdown content collections
│   │   ├── news/               # News posts (add .md files here)
│   │   ├── talks/              # Talk metadata (add .md files here)
│   │   ├── people/
│   │   │   └── people.json     # Team members
│   │   └── publications/
│   │       └── publications.json # Papers & preprints
│   ├── layouts/
│   │   └── Layout.astro        # Site header, nav, footer
│   ├── components/             # Reusable components
│   └── styles/
│       └── global.css          # All site styles
├── astro.config.mjs            # Astro configuration
├── package.json                # Dependencies
└── README.md                   # This file!
```

**Key files to edit:**
- **Main pages:** `src/pages/*.astro`
- **Navigation/header:** `src/layouts/Layout.astro`
- **Styles:** `src/styles/global.css`
- **Add news:** Create `src/content/news/YYYY-MM-DD-title.md`
- **Add talks:** Create `src/content/talks/YYYY-MM-DD-event.md`

---

## Troubleshooting

### Dev server won't start
```sh
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Changes not showing
- **Hard refresh:** `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux)
- Check that you saved the file
- Look for errors in the terminal

### Port 4321 already in use
```sh
# Kill the existing process (Mac/Linux)
lsof -ti:4321 | xargs kill -9

# Then restart
npm run dev
```

### "Module not found" errors
```sh
npm install
```

### Build fails on GitHub Actions
- Check the **Actions** tab in GitHub for error details
- Usually fixed by updating `package-lock.json`: `npm install` and commit

---

## Common Tasks

### Change site title or description
Edit `src/layouts/Layout.astro` - look for the `<title>` tag and meta description

### Update navigation menu
Edit `src/layouts/Layout.astro` - find the `<nav>` section around line 30-50

### Change colors or fonts
Edit `src/styles/global.css` - CSS custom properties are at the top

### Update footer
Edit `src/layouts/Layout.astro` - look for `<footer>` near the bottom

---

## Technology & Learning Resources

**Tech Stack:**
- **[Astro](https://astro.build/)** - Modern static site generator
- **HTML/CSS** - Standard web technologies
- **Markdown** - For news and talks content
- **GitHub Pages** - Free hosting
- **GitHub Actions** - Automatic deployment

**Why Astro?**
- Extremely fast static sites
- Write mostly HTML with minimal JavaScript
- Easy content management with markdown
- Simple to learn and maintain

**Learning Resources:**
- [Astro Documentation](https://docs.astro.build/)
- [Markdown Guide](https://www.markdownguide.org/)
- [HTML Basics - MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS Basics - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS)

---

## Contributing

### Making Changes

1. **Create a branch:**
   ```sh
   git checkout -b your-feature-name
   ```

2. **Make your changes** and test locally (`npm run dev`)

3. **Commit:**
   ```sh
   git add .
   git commit -m "Description of changes"
   ```

4. **Push:**
   ```sh
   git push origin your-feature-name
   ```

5. **Open a Pull Request** on GitHub

### Small fixes
For typos or small text changes, you can commit directly to `template` branch (or `main` after switching deployment).

---

## Questions?

- **Astro issues:** Check [Astro docs](https://docs.astro.build/) or [Astro Discord](https://astro.build/chat)
- **Website structure questions:** See this README or examine existing pages as examples
- **Git/GitHub help:** [GitHub Docs](https://docs.github.com/)

---

## License

[Add license information]

## Maintainers

[Add contact information for website maintainers]
