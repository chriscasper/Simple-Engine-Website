---
title: Examples
layout: docs
order: 92
description: Blog setup and other common patterns.
---

## Blog setup

### 1. Create posts

Put posts in `content/blog/`:

```markdown
---
title: My First Post
layout: post
date: 2026-08-01
tags: [news, update]
---

# Hello World

This is my first blog post!
```

### 2. Create a blog index

`content/blog.md` (or `content/blog/index.md`):

```markdown
---
title: Blog
layout: blog
description: News and updates
---
```

### 3. List posts in a layout

`layouts/blog.njk` using the posts collection:

```html
{% extends "base.njk" %}

{% block content %}
<div class="max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold mb-8">{{ title }}</h1>

  {% for post in collections.posts %}
  <article class="mb-8 pb-8 border-b">
    <h2 class="text-2xl font-bold mb-2">
      <a href="{{ post.url }}">{{ post.data.title }}</a>
    </h2>
    <time class="text-gray-600">
      {{ post.data.date | date('MMMM d, yyyy') }}
    </time>
    {% if post.data.description %}
    <p class="mt-2">{{ post.data.description }}</p>
    {% endif %}
  </article>
  {% endfor %}
</div>
{% endblock %}
```

Make sure `simple.config.js` defines the `posts` collection (it does by default):

```js
collections: {
  posts: {
    pattern: 'blog/**/*.md',
    sortBy: 'date',
    reverse: true,
  },
},
```

## Docs sidebar

This documentation site uses a `docs` collection sorted by `order` — see [Collections](/docs/collections) for the pattern.
