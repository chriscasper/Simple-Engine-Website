---
title: Migration
layout: docs
order: 96
description: Move from the legacy Gulp-based Simple Engine to the modern 2.0 rewrite.
---

Simple Engine 2.0 is a complete rewrite. If you still have a site on the older Gulp / Swig / Bootstrap stack, use this guide to move over.

For the full checklist, see [MIGRATION.md](https://github.com/Huelio/Simple-Engine/blob/main/MIGRATION.md) on GitHub. Version numbers in that file may say “v3” from an earlier plan — the shipped release is **2.0.0**.

## Breaking changes

| Area | Legacy | 2.0 |
|---|---|---|
| Build | Gulp | Vite |
| Templates | Swig | Nunjucks |
| Content | HTML | Markdown |
| Styling | Bootstrap / SASS | Tailwind CSS v4 |
| Modules | CommonJS | ESM |
| Config | `config.json` | `simple.config.js` |

## High-level steps

1. **Backup** your current site
2. **Scaffold** a fresh project with `npx simple-engine init my-site-new`
3. **Port config** from `config.json` into `simple.config.js`
4. **Convert content** from HTML to Markdown with frontmatter
5. **Move layouts** from Swig to Nunjucks (syntax is close; update extends/includes)
6. **Replace styles** with Tailwind in `styles/main.css`
7. **Update scripts** to `simple dev` / `simple build`
8. **Copy static assets** into `public/`

## Config mapping

**Old (`config.json`):**

```json
{
  "title": "Simple Engine",
  "url": "https://simpleengine.com",
  "author": "Christopher Casper"
}
```

**New (`simple.config.js`):**

```js
export default {
  site: {
    title: 'Simple Engine',
    url: 'https://simpleengine.com',
    author: 'Christopher Casper',
  },
  paths: {
    content: './content',
    layouts: './layouts',
    output: './dist',
  },
};
```

## Content mapping

**Old HTML + Swig:**

```html
{% extends 'layouts/index.html' %}

{% block content %}
<h1>About</h1>
<p>This is the about page.</p>
{% endblock %}
```

**New Markdown:**

```markdown
---
title: About
layout: default
---

# About

This is the about page.
```

## Directory mapping

| Legacy | 2.0 |
|---|---|
| `source/content/` | `content/` |
| `source/layouts/` | `layouts/` |
| `source/scss/` | `styles/` |
| `source/js/` | `public/js/` |
| `source/img/` | `public/images/` |
| build output | `dist/` |
| `config.json` | `simple.config.js` |
| `gulpfile.js` | *(removed)* |

## Scripts

**Old:**

```json
{
  "scripts": {
    "start": "gulp",
    "build": "gulp build"
  }
}
```

**New:**

```json
{
  "scripts": {
    "dev": "simple dev",
    "build": "simple build"
  }
}
```

After migrating, walk through [Getting started](/docs/getting-started) and [Configuration](/docs/configuration) to finish setup.
