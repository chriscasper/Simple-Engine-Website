# Simple Engine Website

Official marketing site and docs for [Simple Engine](https://github.com/chriscasper/Simple-Engine), built with Simple Engine itself.

- **Live site:** [simpleengine.com](https://simpleengine.com) ([Pages](https://simpleengine.pages.dev))
- **Engine package:** [npmjs.com/package/simple-engine](https://www.npmjs.com/package/simple-engine)
- **Engine source:** [github.com/chriscasper/Simple-Engine](https://github.com/chriscasper/Simple-Engine)

## Development

```bash
yarn install
yarn dev
```

Site runs at `http://localhost:3000`.

This project depends on the local Simple Engine repo via `file:../Simple-Engine`. Keep that package built (`npm run build` in Simple-Engine) when developing against engine changes.

## Build

```bash
yarn build
```

Output lands in `dist/`.

## Deploy (Cloudflare Pages)

```bash
yarn deploy
```

Deploys `dist/` to the `simpleengine` Cloudflare Pages project.
