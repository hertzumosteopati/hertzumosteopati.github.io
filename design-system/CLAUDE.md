# Hertzum Osteopati — design system

This folder is the brand's design system (also published as a Claude Design System artifact). Read `README.md` first (voice, colour, type, shape, logo rules), then `tokens.json` / `tokens.css` for values and `components/` for the reference components.

Rules for anything built from it:
- Use the CSS variables in `tokens.css` (`--kalk`, `--tang`, `--rav`, `--siv`, `--sand`, `--space-*`, `--radius-*`, `--font-display`, `--font-serif`); never hard-code hex values.
- Rav (`--rav`) is a fill behind tang text only — never text (use `--rav-deep` for amber text), never a thin line. One accent button per view.
- Buttons are pills (`--radius-pill`); cards and images are `--radius-m`; surfaces are separated by tint or a 1px `--line` hairline, never a shadow (except `--shadow-lift` on the sticky mobile booking bar).
- Headlines, labels, buttons and prices are Bricolage Grotesque (`--font-display`, weight 500/600, with the `opsz` axis set per style); running text is Source Serif 4 (`--font-serif`). No other fonts.
- Copy is Danish, sentence case, addressed as "du". Every treatment mention says where to book: Brøndby (online, EasyMe) or Nykøbing Sjælland (by phone).
- Fonts are in `fonts/` (SIL OFL, variable woff2); logos in `assets/Logos/` are outlined SVG, see that folder's README for which to use where.
- `components/bundle.js` + `bundle.css` are plain React 18 reference implementations of Button, Eyebrow, ClinicCard and PriceList; port them to your framework (Astro components) rather than importing the bundle. The class names and CSS in `bundle.css` can be copied as-is.
