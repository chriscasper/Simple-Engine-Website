---
title: Announcing Simple Engine 2.0
layout: post
date: 2026-08-01T12:00:00
description: A complete rewrite — TypeScript, Vite, Tailwind CSS v4, and first-class SEO plus AI discoverability.
tags: [announcement, release]
---

Simple Engine 2.0 is a full rewrite of the Gulp/Bootstrap stack into a modern TypeScript CLI. Same idea — keep static sites simple — with a 2026 toolchain.

## What's new

- **TypeScript + Vite + Tailwind CSS v4** via `@tailwindcss/vite`
- **Markdown + Nunjucks** with Shiki syntax highlighting
- **Collections** exposed to templates (`collections.posts`, custom collections, and more)
- **SEO out of the box** — canonical URLs, Open Graph, Twitter cards, JSON-LD
- **Build artifacts** — `sitemap.xml`, `feed.xml`, `robots.txt`, `llms.txt`
- Optional **`llms-full.txt`** and raw markdown endpoints beside each HTML page
- **`simple dev --drafts`** to preview unpublished content
- Zod validation for config and frontmatter
- A real default starter with blog, 404, and SEO partials

## Why rewrite?

The original Simple Engine leaned on Gulp, Swig, and Bootstrap. Those tools served their time, but Swig is unmaintained and the stack no longer matched how people build sites today.

Version 2 keeps the promise — Markdown in, static HTML out — while adopting tools that are fast, maintained, and familiar.

## Get started

```bash
npx simple-engine@latest init my-site
cd my-site
npm install
npm run dev
```

Then open the [docs](/docs) for configuration, templates, SEO, and deployment.

Migrating from an earlier version? See the [migration guide](https://github.com/chriscasper/Simple-Engine/blob/main/MIGRATION.md) on GitHub.
