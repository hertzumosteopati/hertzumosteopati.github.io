# PriceList

Bordered bone card listing services and prices with hairline dividers; the amount set in `price` style, colour `rav-deep`.

- One list per clinic, titled with the clinic's town, because the two clinics do not share a price list. Use the clinic's own wording and amounts exactly: "Osteopati, 1. behandling (voksen) · 750 kr.".
- Rows are service first, then an optional duration in `tang-muted`, then the price right-aligned with tabular figures. Four to eight rows; more than that is a separate list per treatment type.
- `note` is the footnote the clinic uses ("Alle tider er inkl. omklædning og journalføring.") and nothing promotional.
- Sits on kalk or inside a siv/sand section panel. Never inside another bordered card.

The consumer provides the rows and the note; the component supplies the card, dividers and the price style.
