---
title: SEO & AI
layout: docs
order: 90
description: Sitemap, RSS, robots, JSON-LD, llms.txt, and AI crawler rules.
---

Every production build can emit SEO and AI-oriented artifacts.

| Artifact | Purpose |
|---|---|
| Meta / Open Graph / Twitter tags | Classic SEO via `layouts/partials/head.njk` |
| JSON-LD | `WebSite`, `BlogPosting`, or custom `schema` frontmatter |
| `sitemap.xml` | Crawl map of indexable pages |
| `feed.xml` | RSS feed of the posts collection |
| `robots.txt` | Crawl rules + AI bot allow/deny |
| `llms.txt` | AI-oriented site index |
| `llms-full.txt` | Optional full-content dump for agents |
| `**/index.md` | Raw markdown sibling of each HTML page |

## Config flags

```js
seo: {
  sitemap: true,
  rss: true,
  robots: true,
  llmsTxt: true,
  llmsFull: false,
  rawMarkdown: true,
  jsonLd: true,
  aiCrawlers: {
    allow: true,
    // disallow: ['GPTBot'],
  },
},
```

## Frontmatter SEO fields

- `description` — meta description / OG description
- `image` — social share image path
- `noindex` — exclude from sitemap / robots indexing
- `schema` — custom JSON-LD object or array

## Tip

Set `site.url` correctly in `simple.config.js`. Canonical URLs, the sitemap, Open Graph, and feeds all depend on it.
