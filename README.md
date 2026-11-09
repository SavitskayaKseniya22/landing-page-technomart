# [Technomart](https://technomart-omega.vercel.app/)

Landing page for Technomart store

The page uses autonomous Web Components registered in `src/index.ts`. Each module
renders its markup and manages its event listeners. Interactive components clean
up listeners and timers when disconnected and restore them when reconnected.

## Features

- Chapters carousel
- Hidden menu
- Modal feedback
- Modal map
- Hover menu
- Mobile layout

## Tech Stack

- Typescript
- Sass
- Vite
- Eslint
- Prettier
- Normalize.css

## How to use

Requires Node.js 22.15 or newer.

1. Clone the repo

```bash
git clone https://github.com/SavitskayaKseniya22/technomart.git
```

2. Install dependencies

```bash
npm ci
```

3. Start the dev server

```bash
npm start
```

The development server opens at http://127.0.0.1:8080.

## Checks and builds

- `npm run dev` — Vite development server.
- `npm run build` — type checking and minified production bundle in `dist/`.
- `npm run preview` — serve the production build at http://127.0.0.1:4173.
- `npm run typecheck` — type checking for TypeScript and JavaScript.
- `npm run lint` — check source and configuration files with ESLint.
- `npm run format:check` — validate formatting.
- `npm run lint-fix` — apply ESLint fixes.
- `npm run prettier` — format source and configuration files.
- `npm audit` — check dependencies for known vulnerabilities.

ESLint uses [flat config with typescript-eslint](https://typescript-eslint.io/getting-started/).
TypeScript stays on 6.0.x because typescript-eslint 8.72 supports TypeScript below
6.1. The minimatch override selects the patched 11.x release for development tools;
review it when upgrading ESLint and typescript-eslint.

The feedback form is a demo without a backend. It validates required fields and
does not send messages. Store links, cart, bookmarks, and authentication remain
demo controls.

### Screenshots:

![изображение](https://raw.githubusercontent.com/SavitskayaKseniya22/projects-photos/main/photos/technomart/screenshots/technomart-1280px.png)
