---
title: Favicons
layout: docs
order: 75
description: Generate favicon.ico, apple-touch, PWA icons, and a web manifest from one image.
---

Drop a single high-resolution image in `public/` and Simple Engine generates the rest at build time.

## Source file

Put **one** of these in your project's `public/` folder:

- `favicon.svg` — preferred when you have a vector mark
- `favicon.png` — 512×512 or larger recommended

If both exist, **SVG wins**.

```text
public/
├── favicon.svg   # or favicon.png
└── …
```

## Generated assets

Built into your output directory (usually `dist/`):

| File | Purpose |
|------|---------|
| `favicon.ico` | Classic browser tab icon (16 / 32 / 48) |
| `apple-touch-icon.png` | iOS home screen (180×180) |
| `icon-192.png` / `icon-512.png` | PWA / Android icons |
| `site.webmanifest` | Web app manifest (`name` from `site.title`) |
| `icon.svg` | Copied when the source is SVG |

## Automatic head tags

Link tags are injected into every page's `<head>` automatically:

```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
```

The SVG `<link>` only appears when your source is SVG.

If your layout already includes `rel="icon"` or `rel="apple-touch-icon"`, injection is **skipped** so hand-written markup wins.

## Tips

- Prefer SVG for crisp icons at any size; use PNG when you need pixel-perfect control.
- Re-run `simple build` (or save while `simple dev` is watching) after changing the source — icons regenerate when the source is newer than the outputs.
- Other files in `public/` still copy through as usual; see [Styling](/docs/styling#static-assets).
