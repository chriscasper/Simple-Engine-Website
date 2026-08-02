# Simple Engine Website

Official marketing site and docs for [Simple Engine](https://github.com/Huelio/Simple-Engine), built with Simple Engine itself.

## Development

```bash
npm install
npm run dev
```

Site runs at `http://localhost:3000`.

This project depends on the local Simple Engine repo via `file:../Simple-Engine`. Keep that package built (`npm run build` in Simple-Engine) when developing against engine changes.

## Build

```bash
npm run build
```

Output lands in `dist/`.
