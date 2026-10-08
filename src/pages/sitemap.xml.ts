import type { APIRoute } from 'astro';
import { routes, langs } from '../i18n/utils';

// Hand-written sitemap with hreflang alternates for each page pair.
export const GET: APIRoute = ({ site }) => {
  const abs = (p: string) => new URL(p, site).href;
  const urls = Object.values(routes).flatMap((paths) =>
    langs.map((lang) => {
      const alternates = langs
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${abs(paths[l])}"/>`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(paths.da)}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${abs(paths[lang])}</loc>\n${alternates}\n  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
