# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Also read `AGENTS.md` — it's a companion agent guide for this repo with the same intent as this file (written for other AI coding tools). Keep both in sync if conventions change.

## Project overview

A bilingual (English/German) personal portfolio site for Ole Köster. Plain static HTML/CSS/vanilla JS — **no build step, no package manager, no dependencies to install**. Fonts load from Google Fonts via CDN `<link>` tags in `index.html`.

## Running locally

```sh
open index.html                 # quick check, but localStorage (lang toggle) is restricted on file://
python3 -m http.server 8000     # recommended — visit http://localhost:8000
```

There is no build, lint, or test command — there's no tooling configured in this repo. Verify changes by loading the page in a browser and exercising both language toggles.

## Architecture

Content, structure, and style are deliberately kept in separate files with strict ownership:

| File | Owns | Edit it when... |
|------|------|------|
| `index.html` | DOM structure, tech names, URLs, non-translatable labels | Adding/changing sections, links |
| `js/content.js` | All copy, in English (`en`) and German (`de`) | Editing copy, fixing translations |
| `css/styles.css` | All styling; design tokens as CSS variables in `:root` | Changing colors, fonts, spacing, layout |
| `js/main.js` | Language toggle + scroll-reveal (`IntersectionObserver`) | Rarely — only i18n or interaction logic |
| `assets/` | Portrait image, favicon | Swapping images |

### i18n system

- Every translatable element carries `data-i18n="key"` (text content), `data-i18n-content` (meta tag `content` attr), `data-i18n-aria` (`aria-label`), or `data-i18n-alt` (`alt`).
- `main.js` reads `I18N[currentLang][key]` (defined in `js/content.js`) and applies it to all matching elements; `meta.title` also updates `document.title`.
- Language choice persists via `localStorage.setItem("lang", ...)` — this only works when served over `http(s)://`, not `file://`.
- Initial language: saved preference → else `navigator.language` → else English.
- **Every key in `I18N` must have both `en` and `de` entries kept in sync.** Proper nouns, tech names, and URLs are NOT translated and live directly in `index.html` instead of `content.js`.

### Styling system

- All design tokens (colors, fonts, spacing) are CSS custom properties in the `:root` block at the top of `css/styles.css` (e.g. `--navy`, `--teal`, `--paper`, `--serif`, `--wrap`, `--radius`). Change a token once there to restyle the whole site — don't hardcode values in individual rules.

## Gotchas

- The language toggle silently no-ops persistence on `file://` — always test via the local HTTP server.
- Keep `aria-label`, `aria-pressed`, and `alt` attributes intact on any element you touch; new interactive/media elements should follow the existing accessibility pattern.
- The portrait image expects a portrait aspect ratio (~360×440).
