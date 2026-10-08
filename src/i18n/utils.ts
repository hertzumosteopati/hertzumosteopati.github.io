import { ui } from './ui';

export type Lang = 'da' | 'en';
export const langs: Lang[] = ['da', 'en'];

/** Page paths per language. Danish is unprefixed, English lives under /en/. */
export const routes = {
  home: { da: '/', en: '/en/' },
  about: { da: '/om/', en: '/en/about/' },
} as const;

export type RouteKey = keyof typeof routes;

export function getLang(locale?: string): Lang {
  return locale === 'en' ? 'en' : 'da';
}

export function t(lang: Lang) {
  return ui[lang];
}

export function other(lang: Lang): Lang {
  return lang === 'da' ? 'en' : 'da';
}

export const ogLocale: Record<Lang, string> = { da: 'da_DK', en: 'en_GB' };
