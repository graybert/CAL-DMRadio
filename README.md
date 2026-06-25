# CAL-Pathfinder Website

Official website for the CAL-Pathfinder dark matter experiment at UC Berkeley.

**Live site:** https://graybert.github.io/CAL-DMRadio/

Built with [Astro](https://astro.build) and deployed to GitHub Pages.

> **📝 Want to edit manually?** Check out the [Manual Editing Guide](#manual-editing-guide) for detailed instructions on formatting, adding sections, images, and more — no AI required!

---

## Table of Contents
- [Quick Start](#quick-start)
- [Editing Main Pages](#editing-main-pages)
- [Manual Editing Guide](#manual-editing-guide) ⭐ **Detailed formatting & section guide**
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

## Manual Editing Guide

This section explains how to edit the site structure, add sections, and format content **without using Claude**.

### Understanding the Page Structure

All main pages follow this pattern:
```html
---
import Layout from '../layouts/Layout.astro';
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
---

<Layout title="Page Title" description="Meta description for SEO">
  <!-- Page content goes here -->
</Layout>
```

**Don't touch the first 4 lines** (the code between `---` markers) or the `<Layout>` tags — just edit what's inside.

---

### How to Add a New Section

Sections are the main content blocks on each page. Here's the basic template:

```html
<section class="section">
  <div class="container">
    <span class="section-label">Label Text</span>
    <h2>Section Heading</h2>
    <p>
      Your content here. You can use multiple paragraphs.
    </p>
  </div>
</section>
```

**To add a section divider** (horizontal line) between sections:
```html
<hr class="divider">
```

**Example: Adding a new "Collaborations" section**

Find where you want to insert it, then add:
```html
<hr class="divider">

<section class="section">
  <div class="container">
    <span class="section-label">Partnerships</span>
    <h2>Our Collaborators</h2>
    <p>
      We work with institutions worldwide including...
    </p>
  </div>
</section>
```

---

### Layout Options: How to Organize Content

#### Single Column (default)
Just put your content directly in the container:
```html
<section class="section">
  <div class="container">
    <h2>Title</h2>
    <p>Full-width content</p>
  </div>
</section>
```

#### Two Columns (equal width)
```html
<section class="section">
  <div class="container">
    <h2>Title</h2>
    <div class="two-col">
      <div>
        <h3>Left Column</h3>
        <p>Content for left side</p>
      </div>
      <div>
        <h3>Right Column</h3>
        <p>Content for right side</p>
      </div>
    </div>
  </div>
</section>
```

#### Two Columns (60/40 split)
Use `two-col-60` for a wider left column:
```html
<div class="two-col-60">
  <div>
    <p>Main content (takes 60% width)</p>
  </div>
  <div>
    <p>Sidebar content (takes 40% width)</p>
  </div>
</div>
```

#### Grid Layout (for cards)
Use grids to display multiple items in rows:

**3-column grid:**
```html
<div class="grid-3">
  <div class="card">
    <h3>Card 1</h3>
    <p>Content</p>
  </div>
  <div class="card">
    <h3>Card 2</h3>
    <p>Content</p>
  </div>
  <div class="card">
    <h3>Card 3</h3>
    <p>Content</p>
  </div>
</div>
```

Available grid classes: `grid-2`, `grid-3`, `grid-4`

---

### How to Add Images

#### Basic Image
```html
<img
  src={`${base}/images/your-image.jpg`}
  alt="Describe the image for accessibility"
  style="width:100%;border-radius:8px;"
/>
```

#### Image with Caption (Figure)
```html
<figure style="margin:1.5rem 0;">
  <img
    src={`${base}/images/your-image.jpg`}
    alt="Brief description"
    style="width:100%;border-radius:8px;"
  />
  <figcaption style="font-size:0.875rem;color:var(--gray-500);margin-top:0.75rem;line-height:1.5;">
    Image caption explaining what's shown. Credit: Source Name
  </figcaption>
</figure>
```

#### Image in a Two-Column Layout (text + image)
```html
<div class="two-col-60">
  <div>
    <h2>Main Content</h2>
    <p>Text goes here on the left</p>
  </div>
  <div>
    <img src={`${base}/images/diagram.png`} alt="Diagram description" />
  </div>
</div>
```

#### Placeholder for Future Images
```html
<div class="diagram-placeholder">
  <p><strong>Plot Title</strong></p>
  <p>Replace this with actual figure</p>
</div>
```

**Image file checklist:**
1. Place file in `public/images/` folder
2. Use lowercase filenames with hyphens: `bullet-cluster.jpg` (not `Bullet Cluster.JPG`)
3. Keep file sizes reasonable (< 2MB for photos)
4. Reference with: `{$base}/images/filename.jpg` (always include `${base}`)

---

### Common Formatting

#### Text Formatting
```html
<strong>Bold text</strong>
<em>Italic text</em>
<code>inline code</code>
```

#### Subscript and Superscript (for math)
```html
m<sub>a</sub>          <!-- shows as: mₐ -->
c<sup>2</sup>          <!-- shows as: c² -->
&omega;<sub>a</sub>    <!-- shows as: ωₐ -->
```

#### Links
```html
<!-- External link -->
<a href="https://example.com" target="_blank" rel="noopener">Link text</a>

<!-- Internal link to another page -->
<a href={`${base}/experiment/`}>The Experiment</a>
```

#### Lists
```html
<!-- Unordered list -->
<ul>
  <li>First item</li>
  <li>Second item</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>
```

#### Special Characters
Common symbols you can copy-paste or use HTML codes:
- `&mu;` = μ (micro)
- `&omega;` = ω (omega)
- `&gamma;` = γ (gamma)
- `&alpha;` = α (alpha)
- `&beta;` = β (beta)
- `&ndash;` = – (en dash)
- `&mdash;` = — (em dash)
- `&nbsp;` = non-breaking space (prevents line break)
- `&middot;` = · (middle dot)
- `&hbar;` = ℏ (h-bar)

---

### Color and Style Reference

Available color variables (use in `style="color:var(--name)"`):
- `--blue` = Berkeley Blue (#003262)
- `--gold` = Cal Gold (#FDB515)
- `--gray-900` = Dark text
- `--gray-600` = Body text (default)
- `--gray-500` = Subtle text
- `--gray-200` = Borders
- `--gray-50` = Light backgrounds

#### Inline Styling Examples
```html
<!-- Change text color -->
<p style="color:var(--blue);">Blue text</p>

<!-- Add spacing -->
<p style="margin-bottom:1.5rem;">Paragraph with bottom margin</p>

<!-- Max width for readability -->
<p style="max-width:600px;">
  Constrained text width for long paragraphs
</p>

<!-- Custom background section -->
<section class="section" style="background:var(--gray-50);">
  ...
</section>
```

---

### Pre-Built Components

#### Cards
```html
<div class="card">
  <h3>Card Title</h3>
  <p>Card content. Cards have borders, padding, and hover effects.</p>
</div>
```

#### Buttons
```html
<!-- Primary button (blue) -->
<a href={`${base}/page/`} class="btn btn-primary">Click Me</a>

<!-- Secondary button (outline) -->
<a href={`${base}/page/`} class="btn btn-secondary">Learn More</a>
```

#### Labels/Tags
```html
<span class="section-label">Small Label</span>
<span class="eyebrow">UPPERCASE LABEL</span>
<span class="tag">tag</span>
<span class="tag tag-blue">Blue Tag</span>
```

#### Call-to-Action Section
```html
<section class="section-sm" style="background:var(--gray-50);border-top:1px solid var(--gray-200);">
  <div class="container" style="text-align:center;">
    <h3 style="margin-bottom:0.75rem;">CTA Heading</h3>
    <p style="margin-bottom:1.5rem;">Short description</p>
    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
      <a href={`${base}/publications/`} class="btn btn-primary">Publications</a>
      <a href={`${base}/experiment/`} class="btn btn-secondary">Learn More</a>
    </div>
  </div>
</section>
```

---

### Page Templates

#### Typical Science Page Structure
```html
<Layout title="Page Title" description="SEO description">

  <!-- Page Header -->
  <section class="page-header">
    <div class="container">
      <span class="eyebrow">Category</span>
      <h1>Page Title</h1>
      <p class="desc">Brief introduction paragraph</p>
    </div>
  </section>

  <!-- Main Content Section -->
  <section class="section">
    <div class="container">
      <span class="section-label">Section Label</span>
      <h2>Section Heading</h2>
      <p>Content here</p>
    </div>
  </section>

  <hr class="divider">

  <!-- Another Section -->
  <section class="section">
    <div class="container">
      <h2>Another Topic</h2>
      <div class="two-col">
        <div><p>Left column</p></div>
        <div><p>Right column</p></div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="section-sm" style="background:var(--gray-50);border-top:1px solid var(--gray-200);">
    <div class="container" style="text-align:center;">
      <h3>Want to learn more?</h3>
      <a href={`${base}/publications/`} class="btn btn-primary">Publications</a>
    </div>
  </section>

</Layout>
```

---

### Tips for Editing

**Do:**
- Save often and check `http://localhost:4321/CAL-DMRadio/` in your browser
- Copy existing sections and modify them (easier than starting from scratch)
- Use consistent spacing: `margin-bottom:1.25rem;` between paragraphs
- Keep HTML structure intact (don't delete closing tags)

**Don't:**
- Don't edit the `---` code section at the top of .astro files
- Don't remove the `${base}` part from image/link paths
- Don't delete the `Layout` wrapper tags
- Don't use `class="..."` inside inline styles (choose one or the other)

**Common Mistakes:**
```html
<!-- ❌ Wrong: missing ${base} -->
<img src="/images/photo.jpg" alt="...">

<!-- ✅ Correct -->
<img src={`${base}/images/photo.jpg`} alt="...">

<!-- ❌ Wrong: mixing class and inline color -->
<p class="card" style="color:var(--blue);">text</p>

<!-- ✅ Correct: use one approach -->
<p style="color:var(--blue);">text</p>

<!-- ❌ Wrong: unclosed tag -->
<div class="container">
  <p>Content
</div>

<!-- ✅ Correct -->
<div class="container">
  <p>Content</p>
</div>
```

---

### Real Example: Adding a "Team Photo" Section

Let's say you want to add a team photo section to `experiment.astro`.

1. **Add your photo** to `public/images/team-photo.jpg`

2. **Find where to insert** (e.g., before the "References" section)

3. **Add this code:**
```html
<hr class="divider">

<section class="section">
  <div class="container" style="text-align:center;">
    <span class="section-label">Our Team</span>
    <h2 style="margin-bottom:2rem;">The CAL Collaboration</h2>
    <figure style="max-width:900px;margin:0 auto;">
      <img
        src={`${base}/images/team-photo.jpg`}
        alt="CAL team members in the lab"
        style="width:100%;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.1);"
      />
      <figcaption style="font-size:0.9rem;color:var(--gray-500);margin-top:1rem;">
        The CAL-Pathfinder team at UC Berkeley, Spring 2025
      </figcaption>
    </figure>
  </div>
</section>
```

4. **Save and check** your local dev server — you'll see the new section immediately!

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
