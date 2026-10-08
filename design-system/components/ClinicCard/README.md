# ClinicCard

One tinted card per clinic with the role, name, address, days and the right booking action. The landing page's core component: two of these side by side are the page's answer to "where do I book?".

- Brøndby (Anne's own clinic) is `tone="siv"` with an `online` booking: an accent button that opens the EasyMe booking in a new tab. Nykøbing Sjælland (Manuel Medicinsk Klinik, where Anne is employed) is `tone="sand"` with a `phone` booking: a primary button whose label carries the number, linking to `tel:`.
- The eyebrow states the relationship and the days per week ("Egen klinik · 2 dage om ugen"); `days` states which days. Never leave a reader to guess which clinic they are booking at.
- `address` is one line with a middle dot between street and town, so it can be copied. `secondary` is for a maps link ("Find vej"), nothing else.
- `note` is the practical line the clinic itself uses: that the phone is often unanswered during treatment, or that booking is by phone only.
- Cards sit in a two-column grid at `space-5` gap from 768px, stacked below. Padding is `space-6`, `space-5` on phones. Never put a shadow or a border on the tinted tones; `bone` is the bordered fallback for a third location.

The consumer provides every fact; the component supplies the layout, the icons, the button variant and the tone.
