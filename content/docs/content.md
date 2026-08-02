---
title: Writing content
layout: docs
order: 50
description: Markdown files, frontmatter fields, permalinks, and drafts.
---

Create `.md` files under `content/`. Frontmatter (YAML between `---` fences) configures each page.

```markdown
---
title: My Page Title
layout: default
date: 2026-01-15
description: A short summary for SEO and social cards
tags: [tutorial, guide]
---

# Welcome

This is my content written in **Markdown**.

- Easy to write
- Clean syntax
- Syntax highlighting for code blocks
```

## Frontmatter

All frontmatter fields are available in your templates:

| Field | Purpose |
|---|---|
| `title` | Page title |
| `layout` | Layout template (extension optional; `default` → `default.njk`) |
| `date` | Publication date |
| `description` | SEO / social description |
| `image` | Social share image path |
| `tags` | Array of tags |
| `permalink` | Custom URL path |
| `draft` | `true` excludes from production builds |
| `noindex` | Hide from sitemap / search indexing |
| `schema` | Custom JSON-LD object or array |
| *(custom)* | Any extra fields you add |

## Permalinks

Control the URL with `permalink`:

```markdown
---
title: About
permalink: /about-us
---
```

Or rely on the file path:

| File | URL |
|---|---|
| `content/index.md` | `/` |
| `content/about.md` | `/about` |
| `content/blog/hello.md` | `/blog/hello` |

Permalinks that end in `.html` (for example `/404.html`) are written as files, not folders — useful for host-level 404 pages.

## Drafts

Set `draft: true` to keep a page out of production builds. Preview drafts locally with:

```bash
simple dev --drafts
```
