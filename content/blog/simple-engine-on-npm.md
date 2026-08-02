---
title: simple-engine is on npm
layout: post
date: 2026-08-01T20:00:00
description: Install Simple Engine from the npm registry — init a site in one command with npx.
tags: [npm, release, announcement]
---

Simple Engine 2.0 is published on the npm registry as [`simple-engine`](https://www.npmjs.com/package/simple-engine).

You can scaffold a new site without a global install:

```bash
npx simple-engine@latest init my-site
cd my-site
npm install
npm run dev
```

Or add it to an existing project:

```bash
npm install simple-engine --save-dev
```

Pin a major version when you want a stable range:

```bash
npm install simple-engine@2 --save-dev
npx simple-engine@2 --version
```

## Links

- **npm:** [npmjs.com/package/simple-engine](https://www.npmjs.com/package/simple-engine)
- **Docs:** [simpleengine.com/docs](/docs)
- **Source:** [github.com/chriscasper/Simple-Engine](https://github.com/chriscasper/Simple-Engine)

Start with [Getting started](/docs/getting-started) if you're new to the tool.
