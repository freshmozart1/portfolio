# Ole Köster — Portfolio

A simple, bilingual (English / German) personal portfolio. Plain static site —
no build step, no dependencies to install.

## Run it locally

Either open `index.html` directly in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

A local server is recommended (the language toggle uses `localStorage`, which
some browsers restrict on `file://`).

## File layout

```
index.html        Page structure. English text is inline as the no-JS fallback.
css/styles.css    All styling and the design tokens (see :root at the top).
js/content.js     Every piece of copy, in English (en) and German (de).
js/main.js         Language toggle + scroll-reveal. You rarely need to touch this.
assets/           Portrait placeholder and favicon.
```

## Edit your text

Open `js/content.js`. Each entry has an `en` and a `de` version — edit both so
the toggle stays in sync. Keys map to `data-i18n="..."` attributes in
`index.html`. Tech names, project code-names, and URLs live directly in
`index.html` (they aren't translated).

## Add your photo

1. Drop your headshot into `assets/` (e.g. `assets/ole.jpg`).
2. In `index.html`, find the hero `<img>` and change
   `src="assets/portrait-placeholder.svg"` to `src="assets/ole.jpg"`.
3. Remove the `<figcaption class="portrait-note">…</figcaption>` line.

A portrait around 360×440 (or any portrait ratio) looks best.

## Change the look

All colors and fonts are CSS variables at the top of `css/styles.css` (`:root`).
Adjust `--navy`, `--teal`, fonts, etc. in one place to restyle the whole site.

## Update contact details / links

Edit the hero social links, the `#contact` cards, and the footer in
`index.html`. Current values: `mail@ole-koester.de`,
`github.com/freshmozart1`, `linkedin.com/in/ole-koester`.

## Hosting

It's a plain static site, so it can be served by any static host whenever you
choose to publish it — just upload the folder as-is.
