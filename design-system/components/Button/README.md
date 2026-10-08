# Button

Pill-shaped call to action in three variants: primary (tang), accent (rav) and outline.

- Primary is the default for any single action. Use **accent once per view**, for the one thing the page most wants clicked: the online booking in Brøndby. Two accent buttons on one screen cancel each other out.
- Outline is the secondary action beside a primary or accent button, at `space-3` (12px) gap: "Find vej", "Læs mere om osteopati".
- Labels are sentence case, verb first, with the place when it is a booking: "Book tid i Brøndby", "Ring 59 31 10 05", "Se priser". Never uppercase.
- `icon="arrow"` for navigation and online booking, `icon="phone"` for call-to-book; the icon trails the label.
- Pass `href` for navigation (renders an `<a>`; add `external` for booking systems and maps), omit it for actions (renders a `<button>`). The focus ring is `focus` at 2px offset; never remove it.
- Minimum height 52px (`sm`: 44px, only in the sticky mobile bar and dense lists). Full width on phones below 480px.

The consumer provides the label, the URL or handler and the variant; the component supplies shape, type and states.
