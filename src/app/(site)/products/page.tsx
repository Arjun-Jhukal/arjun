import Link from "next/link";
import { CtaBand, Crumbs } from "@/components/site/Chrome";
import { ProductRows } from "@/components/site/Blocks";
import JsonLd from "@/components/site/JsonLd";
import { products } from "@/content/products";
import { features } from "@/content/features";
import { SITE_URL } from "@/content/contact";
import { pageMeta, graph, breadcrumbLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Website Products: Stores, Booking, LMS & CMS",
  description:
    "Ready-built products for Nepali businesses: online stores, a Daraz-style marketplace, event and travel booking sites, an LMS, a CMS and live-stream tools.",
  path: "/products",
  keywords: ["website products Nepal", "ready made ecommerce website Nepal", "website solutions Kathmandu"],
});

const trail = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
];

export default function ProductsPage() {
  return (
    <>
      <section className="hero hero-sub wrap">
        <Crumbs trail={trail} />
        <h1 className="display-1" data-reveal>
          Products, built and running.
        </h1>
        <p className="lede" data-reveal>
          Each product below is real software that I built. You can see any of them in a{" "}
          <Link href="/book-a-demo" className="inline-link">
            live demo
          </Link>
          . Pick the one closest to your business and I adapt it: your brand, your content, your rules. They share{" "}
          <Link href="/features" className="inline-link">
            {features.length} features
          </Link>
          , like{" "}
          <Link href="/features/esewa-khalti-payments" className="inline-link">
            eSewa &amp; Khalti payments
          </Link>{" "}
          and the{" "}
          <Link href="/features/block-page-builder" className="inline-link">
            block page builder
          </Link>
          , so they keep getting better together.
        </p>
      </section>
      <section className="band wrap">
        <ProductRows items={products} />
      </section>
      <CtaBand />
      <JsonLd
        data={graph(breadcrumbLd(trail), {
          "@type": "ItemList",
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/products/${p.slug}`,
            name: p.name,
          })),
        })}
      />
    </>
  );
}
