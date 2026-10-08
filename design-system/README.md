Hertzum Osteopati is Anne Hertzum's osteopathy practice: an authorised osteopath (MSc, M.D.O.) and physiotherapist (BSc) who treats babies, children and adults, two days a week in her own clinic in Brøndby and three days a week at Manuel Medicinsk Klinik in Nykøbing Sjælland. The brand is **calm hands on a chalk ground**: deep seaweed green instead of black, one amber touchpoint, a warm grotesque for headlines and a quiet serif for everything you read. Nothing shouts; the page's job is to make a worried parent or a person in pain feel they have come to the right place, then send them to the right booking.

## Voice

- **Write in Danish, to one person, as `du`.** "Book tid i Brøndby", "Ring til klinikken", "Har du spørgsmål?" Never "man" or "patienten" in copy aimed at the reader. English is a courtesy line in the footer ("Treatment is also available in English"), not a second site.
- **Plain words first, the term after.** "Hold i ryggen", "kolik", "fladt baghoved" lead; "osteopati" and "kraniosakral" follow once in a sentence that explains them. Say what Anne does with her hands, not what the discipline is called.
- **Calm, concrete, no promises.** "Osteopati kan hjælpe ved …", never "vi fjerner dine smerter". No exclamation marks, no superlatives, no "Danmarks bedste".
- **Say where and how to book in every section that mentions treatment.** The site is a landing page with two destinations. Each clinic is always named with its town: "Brøndby" (Anne's own clinic, online booking) and "Nykøbing Sjælland" (Manuel Medicinsk Klinik, book by phone). Never let the reader guess which one a button leads to.
- **Sentence case everywhere**, including headlines and buttons. Uppercase is only the `eyebrow` style, and only because it is 12px and tracked.
- **Prices as the clinics write them**: "750 kr." with a space and a full stop, never "DKK 750,00". Durations as "40 min.".
- **Credentials once, exactly as Anne states them**: "Autoriseret osteopat (MSc, M.D.O.) og autoriseret fysioterapeut (BSc)". Not repeated in every heading.

Real copy from the brand's world, in its voice:

> Rolige hænder til små og store kroppe.
> Anne Hertzum er autoriseret osteopat og fysioterapeut og behandler babyer, børn og voksne – i Brøndby og i Nykøbing Sjælland.

> Osteopati kan fx hjælpe ved kolik, stramt tungebånd, fladt baghoved, hold i ryggen eller nakken, bækkensmerter og kroniske smerter.

## Colour

The palette is two greens, two tints and one amber. `tang` carries the brand the way black would elsewhere; `rav` is the single warm point.

- `kalk` #EEF0EA is the page. Never pure white as a page. `bone` #FAFAF7 is for cards that must lift off it, always with a `border-hair` edge in `line`.
- `tang` #1F3A33 is text, icons, the mark's strokes, primary buttons and the footer band. Large solid tang areas are welcome (the footer, the reversed hero on the about page), that is where the calm authority lives.
- `siv` #D5DFD2 and `sand` #EBE3D6 are the two tints. Siv is the cool one: the Brøndby card, adult treatment sections, image placeholders. Sand is the warm one: the baby & child section, the Nykøbing card, the footer's top band. A page uses both, each once or twice, never as a stripe pattern.
- `rav` #E0A146 is a **fill, never type and never a line.** It goes behind `tang` text: the one "Book tid" button per view, the touchpoint dot in the mark and before every eyebrow, a highlight behind two or three words of a headline at most once per page. Amber as text is `rav-deep` #8C5A10 (links, the amount in a price row).
- `alert` is for form errors and a "lukket i dag" note only. There is no green "success" colour, the brand green is not a status.

There is one theme, light. Dark surfaces are `tang` panels placed on kalk, never an inverted page.

## Type

Two faces, each with one job, both variable fonts in `fonts/` (SIL OFL).

- **Bricolage Grotesque** (`display`) for headlines, clinic names, labels, buttons and prices. Weight 500 for display sizes, 600 for `heading`, `eyebrow` and `button`; never 700 and up, never below 400. Its optical-size axis is set per style (`opsz` 96 at 64px down to 12 at 12px), which is what keeps the big sizes soft and the labels crisp. Tracking is negative at display sizes (`-0.03em` at 64px) and positive only on the eyebrow.
- **Source Serif 4** (`serif`) for everything you read: `lead` 20/1.5, `body` 17/1.6, `body-s` 15/1.55. The italic is for `quote` only, one per page.

Rules: headlines in sentence case with `text-wrap: balance`; body measure 65 characters; `tabular-nums` on prices and phone numbers; no font other than these two, including in print; no outline, gradient or shadowed text.

## Shape and surface

- **Pills and soft tiles.** Buttons are `radius-pill`. Cards, images and the mark's tile are `radius-m` (16px). The hero image and the big tinted section panels are `radius-l` (28px). Inputs and tags are `radius-s`. Nothing is square-cornered except the page itself.
- **Tint and hairline, not shadow.** A card on kalk is `bone` with a `border-hair` edge in `line`, or a `siv`/`sand` panel with no border. The only shadow in the system is `shadow-lift` on the sticky mobile booking bar.
- **Air.** Sections sit `space-9` (96px) apart on desktop, `space-7` on phones. Inside a card, `space-6` padding on desktop and `space-5` on phones. Cards in a row are `space-5` apart.
- **Grid.** 12 columns, 24px gutter, `space-8` (64px) side margin from 1280px, `space-4` (16px) on phones. Content max-width 1120px; running text max-width 65ch.

## Logo

See the Logos asset group. The mark is a monogram H: two rounded stems, an arch between them where the crossbar would be, and an amber touchpoint on the arch's apex. Read it as two hands and a supported back, or as the arch of a foot; the dot is the point where the hands meet the body. The wordmark is "Hertzum" at weight 600 and "Osteopati" at 450 in Bricolage Grotesque, supplied outlined so it needs no font.

- `lockup-horizontal` for the site header, documents, email signatures. Minimum height 32px.
- `lockup-horizontal-reversed` on `tang` panels (the footer). `lockup-horizontal-mono` for single-ink print.
- `wordmark-stacked` for the hero on the about page and social covers only. Minimum width 200px.
- `mark-on-tang` for the favicon, app icon and social avatar. `mark` alone for small inline uses on kalk. Minimum 24px.
- Clear space: one stem-width (8 units of the 64 box) on all sides.
- Never recolour the stems, move the dot, rotate, outline, add a shadow or re-set the wordmark in another face. On photography, place the mark on a `kalk` or `tang` tile, never directly on the image.

## Iconography

Inline stroke icons, 1.5px stroke in `tang` (or `on-tang`), 24px grid, round caps and joins to match the mark. Use a consistent open set in this style (Lucide or Phosphor "regular"), ten icons at most on the whole site: map pin, phone, mail, calendar, clock, arrow right, baby, person, external link, check. No filled sets, no duotone, no emoji.

## Imagery

Real photographs only: Anne with a patient, hands at work on a back or a baby, the white clinic building in Brøndby with its glass porch, the coast near Nykøbing. Daylight, no white coats, no stock smiles, no stethoscopes. Crop generously, set at `radius-m` or `radius-l`, and let a `siv` or `sand` panel sit behind or beside the photo rather than filtering it. Until photographs exist, use a `siv` panel of the image's size with the mark centred at 48px, never a grey placeholder or an illustration.

## Components

`Button` (primary tang, accent rav, outline), `Eyebrow` (with the touchpoint dot), `ClinicCard` (one per clinic: name, role, address, days, the right booking action) and `PriceList` ship in the bundle under `window.HertzumOsteopati`. Compose the landing page from these: a hero, two ClinicCards side by side, treatment groups, prices, Anne's credentials, a footer with both addresses. One accent button per view: the online booking for Brøndby. The Nykøbing action is a primary button with the phone number in its label.
