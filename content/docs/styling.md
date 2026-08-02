---
title: Styling
layout: docs
order: 70
description: Tailwind CSS v4 setup, typography, and theming.
---

Simple Engine uses **Tailwind CSS v4** through `@tailwindcss/vite`. No `tailwind.config.js` or PostCSS config is required.

## Main CSS file

`styles/main.css`:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  --color-brand: #fe4365;
}

@layer components {
  .btn {
    @apply px-4 py-2 bg-brand text-white rounded hover:opacity-90;
  }
}
```

Theme tokens and plugins are configured in CSS. See the [Tailwind v4 docs](https://tailwindcss.com/docs) for details.

## Using Tailwind in templates

```html
<div class="max-w-4xl mx-auto px-4">
  <h1 class="text-4xl font-bold text-gray-900 mb-4">
    {{ title }}
  </h1>
  <div class="prose prose-lg">
    {{ content | safe }}
  </div>
</div>
```

The typography plugin (`prose`) is ideal for Markdown-rendered content.

## Static assets

Put images, fonts, and other files in `public/`. They are copied into the build output as-is (for example `public/logo.svg` → `/logo.svg`).

## Hot reload

Edits to CSS and templates refresh in the dev server automatically.
