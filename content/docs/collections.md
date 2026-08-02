---
title: Collections
layout: docs
order: 80
description: Group pages for indexes, sidebars, and feeds.
---

Collections group matching Markdown files so templates can loop over them.

## Default posts collection

```js
collections: {
  posts: {
    pattern: 'blog/**/*.md',
    sortBy: 'date',
    reverse: true,
  },
},
```

In a template:

```html
{% for post in collections.posts %}
  <a href="{{ post.url }}">{{ post.data.title }}</a>
{% endfor %}
```

## Custom collections

Add any named collection. For example, documentation pages sorted by an `order` frontmatter field:

```js
collections: {
  docs: {
    pattern: 'docs/**/*.md',
    sortBy: 'order',
  },
},
```

```markdown
---
title: Getting started
layout: docs
order: 20
---
```

```html
{% for doc in collections.docs %}
  <a href="{{ doc.url }}">{{ doc.data.title }}</a>
{% endfor %}
```

## Sort behavior

- `sortBy: 'date'` sorts chronologically; newest-first unless `reverse: false`
- Other `sortBy` fields use string comparison; set `reverse: true` only when you want descending order
- Prefer spaced numeric orders (`10`, `20`, `30`) when sorting by `order` — string sort puts `100` before `20`

## Collection item shape

Each item exposes:

- `url` — page URL
- `path` — source path relative to content
- `data` — frontmatter fields
- rendered content available depending on context
