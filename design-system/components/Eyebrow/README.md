# Eyebrow

Uppercase Bricolage label with the amber touchpoint dot, set above a headline or a card title.

- One eyebrow per headline block, `space-2` (8px) above the headline. It names the section or the role: "Babyer og børn", "Egen klinik · Brøndby", "Priser".
- Two to five words. The dot is part of the component and is always `rav`; do not add a second dot, an icon or a number.
- Colour is `tang-muted` on kalk, bone, siv and sand; pass `on="tang"` on a tang panel for `on-tang-muted`.
- Render it as the element the heading structure needs (`as="h2"` when it is the section's label and the display headline is a `<p>`), otherwise a span.

The consumer provides the text and the surface; the component supplies the dot, tracking and colour.
