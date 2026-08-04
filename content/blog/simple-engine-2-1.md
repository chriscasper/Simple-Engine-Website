---
title: Simple Engine 2.1 — Favicons, done for you
layout: post
date: 2026-08-04T12:00:00
description: Drop one image in public/ and the build generates ICO, apple-touch, PWA icons, and a web manifest — with link tags injected automatically.
tags: [release, favicons]
---

Simple Engine **2.1.0** is out. The headline feature: favicons without the usual pile of exported sizes and hand-written `<link>` tags.

## One source, full set

Put either of these in your project's `public/` folder:

- `favicon.svg` — preferred when you have a vector mark
- `favicon.png` — 512×512 or larger recommended

At build time, Simple Engine generates:

| File | Purpose |
|------|---------|
| `favicon.ico` | Classic tab icon (16 / 32 / 48) |
| `apple-touch-icon.png` | iOS home screen (180×180) |
| `icon-192.png` / `icon-512.png` | PWA / Android |
| `site.webmanifest` | Web app manifest (`name` from `site.title`) |
| `icon.svg` | Copied when the source is SVG |

SVG wins if both `favicon.svg` and `favicon.png` exist.

## Automatic head tags

Every page gets the right `<link>` tags injected before `</head>`:

```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

(The SVG line only appears when you use an SVG source.)

If your layout already declares `rel="icon"` or `rel="apple-touch-icon"`, injection is skipped so custom markup still wins.

## Upgrade

```bash
npm install simple-engine@latest --save-dev
npx simple-engine --version
```

Then add `public/favicon.svg` (or `.png`), run `simple build`, and check `dist/` for the generated icons.

Full details are in the [Favicons docs](/docs/favicons).

## Links

- **npm:** [npmjs.com/package/simple-engine](https://www.npmjs.com/package/simple-engine)
- **Docs:** [Favicons](/docs/favicons) · [All docs](/docs)
- **Changelog:** [2.1.0 on GitHub](https://github.com/chriscasper/Simple-Engine/blob/main/CHANGELOG.md)
