import { person, SITE_URL } from "@/content/contact";
import { products } from "@/content/products";
import { featureBySlug } from "@/content/features";
import { skillBySlug } from "@/content/skills";
import { stripLinks } from "@/lib/site-index";

/* A machine-readable catalogue of every product: what it is, what it does,
   its screenshots and how to book a demo. */
export const dynamic = "force-static";

export function GET() {
  const data = {
    provider: {
      name: person.name,
      role: "Web developer",
      url: SITE_URL,
      email: person.email,
      whatsapp: `+${person.whatsapp}`,
      location: person.city,
    },
    products: products.map((p) => ({
      slug: p.slug,
      name: p.name,
      kind: p.kind,
      status: p.status,
      url: `${SITE_URL}/products/${p.slug}`,
      live: p.live?.href ?? null,
      headline: p.headline,
      summary: stripLinks(p.summary),
      for: p.forWho,
      features: p.features.map((f) => ({
        title: f.title,
        description: stripLinks(f.body),
        feature: f.feature ? { name: featureBySlug(f.feature)?.name ?? f.feature, url: `${SITE_URL}/features/${f.feature}` } : null,
      })),
      stack: p.stack.map((s) => skillBySlug(s)?.name ?? s),
      images: p.gallery.filter((g) => g.src).map((g) => ({ url: SITE_URL + g.src, alt: g.alt, caption: g.caption })),
      demo: `${SITE_URL}/book-a-demo?product=${p.slug}`,
    })),
  };
  return new Response(JSON.stringify(data, null, 2), { headers: { "Content-Type": "application/json; charset=utf-8" } });
}
