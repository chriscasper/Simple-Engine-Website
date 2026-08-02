---
title: Deployment
layout: docs
order: 94
description: Build once and deploy static HTML anywhere.
---

## Build for production

```bash
npm run build
```

Your production-ready site is in the `dist` directory (or the path set by `paths.output` / `simple build -o`).

## Netlify

1. Push the project to GitHub
2. Connect the repo in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## Vercel

```bash
npm install -g vercel
vercel
```

Or connect the Git repo in the Vercel dashboard with the same build and output settings.

## GitHub Pages

```bash
npm run build
# Publish the dist folder to your Pages branch or use Actions
```

## Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`

## Anywhere else

The `dist` directory is plain HTML, CSS, and assets. Upload it to:

- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Any static web server

No Node process is required at runtime.
