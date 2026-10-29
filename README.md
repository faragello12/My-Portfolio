# Mohamed Farag — Portfolio

Bilingual (EN / AR) portfolio for a frontend developer working in e-commerce.
Vite + React 18, with a hand-written WebGL hero, GSAP-driven marquees and Lenis
smooth scroll.

**Live:** https://mohamedfarag.vercel.app

بورتفوليو محمد فرج — نسخة React، بلغتين إنجليزي وعربي، مع خلفية WebGL مكتوبة
بالإيد و سكرول ناعم.

---

## Run it

```bash
npm install
npm run dev        # http://localhost:4322
npm run build      # → dist/
npm run preview    # serve the built output
```

## Animation stack

| Library | Used for |
|---|---|
| **Lenis** | Smooth scroll, driving `window.scrollTo` so `sticky`/`fixed` keep working |
| **GSAP** | Scroll-reactive marquee velocity, counters, the rotor |
| **Framer Motion** | Reveal-on-scroll, the certificate lightbox, mobile menu, filter transitions |
| *(hand-written)* | The WebGL hero shader — no library involved |

Framer owns `opacity` and `transform` on every revealed element. Nothing in the
CSS may declare a `transition` on those two properties for those elements — a
transition makes the node chase Framer's per-frame writes instead of taking
them, and the reveal visibly runs twice.

## Layout

```
├── index.html              meta, JSON-LD, and the pre-paint language restore
├── vite.config.js          build.assetsDir = 'bundle', so the bundler's output
│                           never mixes with the hand-placed public/assets files
├── public/
│   ├── assets/             work/  design/  certs/  + the two photos
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── data/content.js     PROJECTS · LAB · DESIGN · CERTS · SERVICES · T
    ├── i18n/lang.jsx       LangProvider + useLang() → t({en, ar})
    ├── hooks/              useSmoothScroll · useMotionPrefs · useSeen
    └── components/         one per section, plus GLCanvas / Cursor / Split / Reveal
```

**All content lives in `src/data/content.js`.** Every string is an `{ en, ar }`
pair resolved through `t()`, so adding a project or a certificate never touches
a component.

---

## Adding things

**A project** — add an object to `PROJECTS` and drop a homepage screenshot at
`public/assets/work/<id>.jpg`. The card, browser frame, filter and the CSS
mockup fallback all follow from the `id`. Cards run in pairs; whenever the
visible count is odd, the first one is featured full width, so no filter leaves
a card alone on the last row.

**A certificate** — drop the image in `public/assets/certs/` and add a row to
`CERTS`. The section removes itself entirely while that array is empty.

**A design project** — add a row to `DESIGN` with its Behance gallery URL and
put the cover at `public/assets/design/<slug>.webp`.

---

## Bilingual EN / AR

The header toggle flips `dir` to RTL and swaps every string; the choice persists
to `localStorage` under `mf-lang`, and an inline script in `index.html` restores
it **before first paint** so an Arabic visitor never sees a frame of LTR. Keep
that script's key in step with `KEY` in `src/i18n/lang.jsx`.

Layout uses logical properties so the whole page mirrors. Deliberate exceptions,
all pinned LTR in CSS: the store mockups, the browser frames, the two marquee
belts and the loader's name — Latin runs that are laid out per-character or
translated by a fixed percentage, neither of which survives being mirrored.

In `t()`, an **empty** Arabic string means "this word is dropped in Arabic"
(a few headlines are two words in English and one in Arabic) and must not fall
back to English. Only a missing translation falls back.

Arabic headlines are **never** split per character — separating Arabic glyphs
breaks letter joining. `Split` returns Arabic text whole.

---

## Deploy

Static — no server needed. On Vercel it is detected automatically:

| | |
|---|---|
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |

`vercel.json` adds the security headers plus two cache rules — `/bundle/*` is
content-hashed by Vite so it is immutable, while `/assets/*` keeps its filenames
across edits and so gets a day with `stale-while-revalidate`. Keep that file to
the keys Vercel's schema allows (`source`, `headers`, `has`, `missing`): it
rejects anything extra, including a `comment` key, and the import fails before
the first build.

**Changing domain** — the absolute URL appears in exactly three places, and all
three need to agree:

1. `index.html` — `canonical`, `og:url`, `og:image`, `twitter:image`, JSON-LD
2. `public/robots.txt` — the `Sitemap:` line
3. `public/sitemap.xml` — `<loc>` and both `hreflang` links

```bash
grep -rn "mohamedfarag.vercel.app" index.html public/
```
