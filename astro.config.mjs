// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://hertzumosteopati.github.io',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'da',
    locales: ['da', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
