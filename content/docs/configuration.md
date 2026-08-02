---
title: Configuration
layout: docs
order: 40
description: Configure site metadata, paths, collections, SEO, and Markdown.
---

Configuration lives in `simple.config.js` at the project root.

```js
export default {
  site: {
    title: 'My Site',
    url: 'https://mysite.com',
    description: 'A simple static site',
    author: 'Your Name',
    language: 'en',
  },
  paths: {
    content: './content',
    layouts: './layouts',
    output: './dist',
    styles: './styles',
    static: './public',
  },
  collections: {
    posts: {
      pattern: 'blog/**/*.md',
      sortBy: 'date',
      reverse: true,
    },
  },
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
  markdown: {
    options: {
      html: true,
      linkify: true,
      typographer: true,
    },
    shiki: {
      theme: 'github-dark',
    },
  },
  dev: {
    port: 3000,
    open: false,
  },
};
```

## Site

| Field | Purpose |
|---|---|
| `title` | Site name used in titles and feeds |
| `url` | Canonical base URL (used by sitemap, OG, RSS) |
| `description` | Default meta description |
| `author` | Author name for footer / metadata |
| `language` | HTML `lang` and Open Graph locale |

## Paths

Override content, layouts, styles, static assets, and output directories when you need a non-default layout.

| Field | Default |
|---|---|
| `content` | `./content` |
| `layouts` | `./layouts` |
| `output` | `./dist` |
| `styles` | `./styles` |
| `static` | `./public` |

## Markdown

- `options` — passed through to markdown-it (`html`, `linkify`, `typographer`, and more)
- `shiki.theme` — syntax highlighting theme (default `github-dark`)

## Dev

- `port` — default development port
- `open` — open the browser on start

Collections and SEO each have their own pages: [Collections](/docs/collections) and [SEO & AI](/docs/seo).
