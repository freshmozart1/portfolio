# Portfolio Website — AI Agent Guide

## Project Overview

A simple, **no-build** bilingual portfolio (English / German). Plain static HTML, CSS, and vanilla JavaScript—no dependencies, no build step.

**Key principle**: Content, structure, and style are cleanly separated.

## Architecture

```
index.html      ← Structure + non-translatable content (tech names, URLs, links)
css/styles.css  ← All styling + design tokens (CSS variables at :root)
js/content.js   ← All translatable copy (English en + German de)
js/main.js      ← Language toggle + scroll-reveal (rarely modified)
assets/         ← Portrait + favicon
```

## How to Edit (Common Tasks)

### Add or change text
1. Open `js/content.js`
2. Find the key in the `I18N` object (e.g. `"hero.lead"`)
3. Edit both `en` and `de` versions so the toggle stays in sync

### Add or change structure (headings, links, sections)
1. Open `index.html`
2. Add or modify elements and attach `data-i18n="keyName"` attributes
3. Add the new key to `I18N` in `js/content.js` with both language versions

### Change colors, fonts, spacing, or theme
1. Open `css/styles.css`
2. Edit CSS variables at the top (`:root` block):
   - Colors: `--navy`, `--teal`, `--paper`, `--ink`, etc.
   - Fonts: `--serif`, `--sans`, `--mono`
   - Sizing: `--wrap`, `--radius`, etc.
3. The entire site will restyle in one place

### Add a new project or skill
1. Add a new entry to the appropriate `I18N` keys in `js/content.js` (e.g. `"projects.title"`)
2. Add the corresponding HTML structure to `index.html`
3. Attach `data-i18n` attributes to all translatable elements

## i18n System (How It Works)

- Every translatable element has a `data-i18n="keyName"` attribute
- `main.js` looks up `keyName` in `I18N[currentLang]` and sets `.textContent`
- Keys like `"meta.title"` and `"meta.description"` also update `<title>` and meta tags
- Tech names, URLs, and proper nouns stay in `index.html` (not translated)
- Language preference is saved to `localStorage` (only works on http:// or https://, not file://)

## Styling System

- Design tokens (colors, fonts, spacing, breakpoints) are CSS variables in `:root`
- Use `var(--colorName)` throughout the stylesheet
- Example: to change all navy text to a new color, edit `--navy` once at the top

## Running Locally

```bash
# Option 1: Simple—open in browser
open index.html

# Option 2: Recommended—serve with a local HTTP server
python3 -m http.server 8000
# Visit http://localhost:8000
# (localStorage for language toggle works with http://)
```

## No-Build Workflow

- No tooling required—edit files directly
- No dependencies to install
- No build step—just save and reload the browser
- Fonts load from Google Fonts (CDN)
- Works on any static host (GitHub Pages, Netlify, Vercel, etc.)

## Gotchas & Constraints

- **Language toggle requires http://**: localStorage is restricted on `file://` URLs; must serve locally
- **Keep both languages in sync**: If you edit an `en` key, also edit its `de` counterpart
- **Tech names in HTML**: Proper nouns, version numbers, and URLs live in `index.html`, not `content.js`
- **Portrait image**: Should be portrait-ratio (e.g., 360×440) for best layout
- **Accessibility**: Existing `aria-label`, `aria-pressed`, alt attributes should be preserved; new elements should follow the same pattern

## File Ownership

| File | Owns What | Touch When... |
|------|-----------|---------------|
| `index.html` | HTML structure, tech names, URLs, links, non-translatable labels | Adding sections, changing structure, updating contact/social links |
| `js/content.js` | All translatable text (English + German) | Editing copy, fixing translations, adding new content keys |
| `css/styles.css` | All styling, design tokens, layout, animations | Changing colors, fonts, spacing, or responsiveness |
| `js/main.js` | Language toggle logic, scroll-reveal | Rarely—only if modifying i18n or interaction behavior |

## Tips for AI Agents

- **Before editing**: Read the relevant section of the file to understand the structure and key naming convention
- **When adding content**: Always add both `en` and `de` entries to keep the toggle in sync
- **When styling**: Change CSS variables first; add element-specific rules only if needed
- **Preserve accessibility**: Keep `aria-label`, alt text, and semantic HTML intact
- **Test locally**: Always serve with `python3 -m http.server 8000` and test both language toggles before considering changes complete
