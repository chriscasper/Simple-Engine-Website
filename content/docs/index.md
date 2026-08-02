---
title: Introduction
layout: docs
order: 10
description: What Simple Engine is and why you might use it.
---

Simple Engine is a fast, modern static site generator. Write content in Markdown, customize layouts with Nunjucks templates, style with Tailwind CSS v4, and deploy static HTML with zero runtime dependencies.

## Features

- **Markdown-based content** — Write in Markdown with frontmatter support
- **Tailwind CSS v4** — Utility-first styling via `@tailwindcss/vite`
- **Vite tooling** — Fast production builds and a Vite-powered dev server
- **Hot reload** — Instant updates while editing content and layouts
- **Nunjucks templates** — Flexible layouts with custom filters
- **Collections** — Group posts and pages for indexes and feeds
- **Syntax highlighting** — Shiki-powered code blocks
- **SEO ready** — Canonical URLs, Open Graph, Twitter cards, JSON-LD
- **AI discoverability** — `llms.txt`, raw markdown endpoints, configurable AI crawler rules
- **Sitemap + RSS** — Generated at build time
- **Drafts** — Preview unpublished content with `simple dev --drafts`
- **Zero config defaults** — Configure only when you need to

## Requirements

- Node.js >= 20.0.0
- npm or yarn

## What's new in 2.0

Simple Engine 2.0 is a modern rewrite:

- TypeScript + Vite + Tailwind CSS v4
- Nunjucks templates with Markdown + Shiki
- Collections, drafts preview, sitemap, and RSS
- SEO + AI discoverability (`llms.txt`, JSON-LD, raw markdown)
- Validated config/frontmatter and a real default starter template

Coming from the older Gulp-based engine? See [Migration](/docs/migration).

## Next step

Jump to [Getting started](/docs/getting-started) to scaffold a project in under a minute.

These docs are adapted from the [project README](https://github.com/Huelio/Simple-Engine#readme).
