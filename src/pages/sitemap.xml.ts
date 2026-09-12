import { SITE, projects, altPath } from '../data/site';

const enPaths = [
  '/',
  '/sap-ewm-consultant',
  '/sap-tm-consultant',
  '/sap-pp-qm-consultant',
  '/warehouse-process-consulting',
  '/sap-expertise',
  '/projects',
  '/about',
  '/contact',
  ...projects.filter((p) => p.page).map((p) => `/projects/${p.slug}`),
];

const priority = (p: string) =>
  p === '/' ? '1.0' : /sap-ewm|sap-tm|expertise/.test(p) ? '0.9' : '0.7';

export function GET() {
  const today = new Date().toISOString().slice(0, 10);
  const urls = enPaths
    .flatMap((en) => [
      { loc: en, alt: altPath(en, 'en'), lang: 'en' as const },
      { loc: altPath(en, 'en'), alt: en, lang: 'fr' as const },
    ])
    .map(
      ({ loc, alt, lang }) => `  <url>
    <loc>${SITE}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority(loc)}</priority>
    <xhtml:link rel="alternate" hreflang="${lang}" href="${SITE}${loc}"/>
    <xhtml:link rel="alternate" hreflang="${lang === 'en' ? 'fr' : 'en'}" href="${SITE}${alt}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${lang === 'en' ? loc : alt}"/>
  </url>`
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
