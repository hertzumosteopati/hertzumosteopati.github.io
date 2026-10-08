/* @ds-bundle: {"format":4,"namespace":"HertzumOsteopati","components":[{"name":"Button"},{"name":"Eyebrow"},{"name":"ClinicCard"},{"name":"PriceList"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;

  function cx() {
    var out = [];
    for (var i = 0; i < arguments.length; i++) if (arguments[i]) out.push(arguments[i]);
    return out.join(' ');
  }

  var icons = {
    arrow: h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
      h('path', { d: 'M5 12h14M13 6l6 6-6 6' })),
    phone: h('svg', { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
      h('path', { d: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z' })),
    pin: h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
      h('path', { d: 'M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z' }), h('circle', { cx: 12, cy: 9.5, r: 2.5 })),
    clock: h('svg', { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
      h('circle', { cx: 12, cy: 12, r: 9 }), h('path', { d: 'M12 7v5l3 2' }))
  };

  function Button(props) {
    var variant = props.variant || 'primary';
    var size = props.size || 'md';
    var className = cx('ho-btn', 'ho-btn--' + variant, size === 'sm' && 'ho-btn--sm', props.className);
    var icon = props.icon === 'arrow' ? icons.arrow : props.icon === 'phone' ? icons.phone : null;
    var inner = [props.children, icon ? h('span', { className: 'ho-btn__icon', key: 'i' }, icon) : null];
    if (props.href) {
      return h('a', { className: className, href: props.href, target: props.external ? '_blank' : undefined, rel: props.external ? 'noopener' : undefined, 'aria-disabled': props.disabled ? 'true' : undefined, onClick: props.onClick }, inner);
    }
    return h('button', { className: className, type: props.type || 'button', disabled: props.disabled, onClick: props.onClick }, inner);
  }

  function Eyebrow(props) {
    var on = props.on || 'kalk';
    var className = cx('ho-eyebrow', on === 'tang' && 'ho-eyebrow--on-tang', props.className);
    return h(props.as || 'span', { className: className }, h('span', { className: 'ho-eyebrow__dot', 'aria-hidden': 'true' }), props.children);
  }

  function ClinicCard(props) {
    var tone = props.tone || 'siv';
    var booking = props.booking || {};
    var isPhone = booking.kind === 'phone';
    return h('article', { className: cx('ho-clinic', 'ho-clinic--' + tone, props.className) },
      h(Eyebrow, null, props.role),
      h('h3', { className: 'ho-clinic__name' }, props.name),
      props.intro ? h('p', { className: 'ho-clinic__intro' }, props.intro) : null,
      h('dl', { className: 'ho-clinic__facts' },
        h('div', { className: 'ho-clinic__fact' }, h('dt', null, icons.pin, h('span', { className: 'ho-visually-hidden' }, 'Adresse')), h('dd', null, props.address)),
        props.days ? h('div', { className: 'ho-clinic__fact' }, h('dt', null, icons.clock, h('span', { className: 'ho-visually-hidden' }, 'Dage')), h('dd', null, props.days)) : null
      ),
      h('div', { className: 'ho-clinic__actions' },
        h(Button, { variant: isPhone ? 'primary' : 'accent', href: booking.href, external: !isPhone, icon: isPhone ? 'phone' : 'arrow' }, booking.label),
        props.secondary ? h(Button, { variant: 'outline', href: props.secondary.href, external: true }, props.secondary.label) : null
      ),
      props.note ? h('p', { className: 'ho-clinic__note' }, props.note) : null
    );
  }

  function PriceList(props) {
    var rows = props.rows || [];
    return h('div', { className: cx('ho-prices', props.className) },
      props.title ? h('h3', { className: 'ho-prices__title' }, props.title) : null,
      h('ul', { className: 'ho-prices__list' }, rows.map(function (r, i) {
        return h('li', { className: 'ho-prices__row', key: i },
          h('span', { className: 'ho-prices__service' }, r.service, r.duration ? h('span', { className: 'ho-prices__duration' }, ' · ' + r.duration) : null),
          h('span', { className: 'ho-prices__price' }, r.price)
        );
      })),
      props.note ? h('p', { className: 'ho-prices__note' }, props.note) : null
    );
  }

  window.HertzumOsteopati = { Button: Button, Eyebrow: Eyebrow, ClinicCard: ClinicCard, PriceList: PriceList };
})();
