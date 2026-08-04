---
title: Getting started
layout: docs
order: 20
description: Install Simple Engine and create your first site.
---

## Using npx (recommended)

No global install needed — pull the published package from npm:

```bash
npx simple-engine@latest init my-site
cd my-site
npm install
npm run dev
```

Your site is now running at `http://localhost:3000`.

## Global installation

```bash
npm install -g simple-engine
simple init my-site
cd my-site
npm install
npm run dev
```

## Add to an existing project

Install from npm as a project dependency:

```bash
npm install simple-engine --save-dev
```

Or pin a version:

```bash
npm install simple-engine@2 --save-dev
npx simple-engine@2 --version
```

Then create `simple.config.js`, `content/`, `layouts/`, and `styles/` — or run `simple init` in an empty folder to scaffold them.

## Project structure

```text
my-site/
├── content/              # Your Markdown content
│   ├── index.md
│   ├── about.md
│   ├── blog.md
│   └── blog/
│       └── first-post.md
├── layouts/              # Nunjucks templates
│   ├── base.njk
│   ├── default.njk
│   ├── post.njk
│   ├── blog.njk
│   ├── not-found.njk
│   └── partials/
│       └── head.njk      # SEO meta, Open Graph, JSON-LD
├── styles/
│   └── main.css          # Tailwind v4 entry (`@import "tailwindcss"`)
├── public/               # Static files; add favicon.svg or favicon.png here
├── dist/                 # Built site (generated)
├── simple.config.js
└── package.json
```

## Daily commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run dev:drafts` | Dev server including draft pages |
| `simple new page "About"` | Scaffold a page |
| `simple new post "Hello"` | Scaffold a blog post |

See the [CLI reference](/docs/cli) for all options.
