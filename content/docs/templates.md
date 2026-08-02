---
title: Templates
layout: docs
order: 60
description: Nunjucks layouts, built-in filters, and template variables.
---

Simple Engine uses [Nunjucks](https://mozilla.github.io/nunjucks/) for templating.

## Basics

```html
<!DOCTYPE html>
<html>
<head>
  <title>{{ title }} - {{ site.title }}</title>
</head>
<body>
  {% block content %}{% endblock %}
</body>
</html>
```

Layouts typically extend a shared base:

```html
{% extends "base.njk" %}

{% block content %}
<article class="prose">
  <h1>{{ title }}</h1>
  {{ content | safe }}
</article>
{% endblock %}
```

## Built-in filters

```html
{{ date | date('MMMM d, yyyy') }}
{{ content | safe }}
{{ text | upper }}
{{ text | lower }}
{{ text | excerpt(150) }}
{{ posts | limit(5) }}
```

The `date` filter also accepts `'now'` for the current date (handy in footers).

## Available variables

| Variable | Meaning |
|---|---|
| `site.*` | Values from `simple.config.js` |
| `title`, `date`, `tags`, … | Page frontmatter |
| `content` | Rendered HTML from Markdown |
| `page.url`, `page.path` | Current page info |
| `pages` | All pages |
| `collections` | Named collections (e.g. `collections.posts`) |
| `seo.*` | Canonical URL, JSON-LD, and related SEO data |

## Example post layout

`layouts/post.njk`:

```html
{% extends "base.njk" %}

{% block content %}
<article class="prose lg:prose-xl mx-auto">
  <header>
    <h1 class="text-4xl font-bold mb-2">{{ title }}</h1>
    <time class="text-gray-600">{{ date | date('MMMM d, yyyy') }}</time>
  </header>

  <div class="mt-8">
    {{ content | safe }}
  </div>

  {% if tags %}
  <footer class="mt-8">
    <div class="flex gap-2">
      {% for tag in tags %}
      <span class="px-3 py-1 bg-gray-200 rounded-full text-sm">
        {{ tag }}
      </span>
      {% endfor %}
    </div>
  </footer>
  {% endif %}
</article>
{% endblock %}
```

## Custom filters

You can add filters from a Node script using the engine API:

```js
import { SimpleEngine } from 'simple-engine';

const engine = new SimpleEngine('./');
engine.template.addFilter('reverse', (str) => {
  return str.split('').reverse().join('');
});
```
