import { siteIndex, abs, xmlEscape, CONTENT_UPDATED } from "@/lib/site-index";

/* Hand-written rather than sitemap.ts: Next 14.1's sitemap type cannot carry
   <image:image>, and the product screenshots are worth indexing.
   No <priority> or <changefreq>: Google ignores both. Only an honest <lastmod>
   is used, so posts carry their real date. */
export const dynamic = "force-static";

export function GET() {
  const urls = siteIndex()
    .map((p) => {
      const images = (p.images ?? [])
        .map(
          (i) =>
            `    <image:image><image:loc>${xmlEscape(abs(i.src))}</image:loc><image:caption>${xmlEscape(i.caption)}</image:caption></image:image>`
        )
        .join("\n");
      return [
        "  <url>",
        `    <loc>${xmlEscape(abs(p.path))}</loc>`,
        `    <lastmod>${p.modified ?? CONTENT_UPDATED}</lastmod>`,
        images,
        "  </url>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
