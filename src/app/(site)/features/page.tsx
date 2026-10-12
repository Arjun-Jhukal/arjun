import Link from "next/link";
import { CtaBand, Crumbs } from "@/components/site/Chrome";
import { TileWall } from "@/components/site/Blocks";
import JsonLd from "@/components/site/JsonLd";
import { features } from "@/content/features";
import { productBySlug } from "@/content/products";
import { pageMeta, graph, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Website Features Explained in Plain Words",
  description:
    "eSewa & Khalti payments, WhatsApp alerts, page builder, SEO, bookings, variants, marketplaces, OBS overlays and more — explained simply, with the products that use them.",
  path: "/features",
  keywords: ["website features", "ecommerce website features Nepal", "eSewa Khalti website", "WhatsApp order alerts"],
});

const trail = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="hero hero-sub wrap">
        <Crumbs trail={trail} />
        <h1 className="display-1" data-reveal>
          Features, without the jargon.
        </h1>
        <p className="lede" data-reveal>
          These are the building blocks shared across my <Link href="/products" className="inline-link">products</Link>.
          Each page explains what the feature does for your business, how it works step by step, and which products
          already have it.
        </p>
      </section>
      <section className="band wrap">
        <TileWall
          tiles={features.map((f, i) => ({
            href: `/features/${f.slug}`,
            title: f.name,
            body: f.headline,
            mark: String(i + 1).padStart(2, "0"),
            note: (
              <>
                In{" "}
                {f.products.map((s, j) => {
                  const p = productBySlug(s);
                  return p ? (
                    <span key={s}>
                      <Link href={`/products/${s}`}>{p.name}</Link>
                      {j < f.products.length - 1 ? ", " : ""}
                    </span>
                  ) : null;
                })}
              </>
            ),
          }))}
        />
      </section>
      <CtaBand />
      <JsonLd data={graph(breadcrumbLd(trail))} />
    </>
  );
}
