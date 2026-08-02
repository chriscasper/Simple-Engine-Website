---
title: CLI
layout: docs
order: 30
description: Command-line reference for init, dev, build, and new.
---

The CLI is available as `simple` or `simple-engine`.

## `simple init [directory]`

Initialize a new Simple Engine project.

```bash
simple init                    # Initialize in current directory
simple init my-site            # Initialize in new directory
simple init my-site -t default # Use a specific template
```

**Options**

- `-t, --template <name>` — Template to use (default: `default`)

## `simple dev`

Start the development server with hot reload.

```bash
simple dev           # Start on port 3000
simple dev -p 8080   # Start on custom port
simple dev -o        # Open browser automatically
simple dev --drafts  # Include draft pages
```

**Options**

- `-p, --port <port>` — Port to run server on (default: `3000`)
- `-o, --open` — Open browser automatically
- `--drafts` — Include pages with `draft: true`

## `simple build`

Build your site for production.

```bash
simple build              # Build to ./dist
simple build -o ./public  # Build to custom directory
```

**Options**

- `-o, --output <dir>` — Output directory (default: from config, usually `dist`)

## `simple new <type> <title>`

Create a new page or blog post.

```bash
simple new page "About"
simple new post "My First Post"
simple new post "Hello" -d 2026-01-15
```

**Options**

- `-d, --date <date>` — Custom date (ISO format)
