import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, Crumbs } from "@/components/site/Chrome";
import { FaqList, ProductRows, SectionHead, PostMagazine } from "@/components/site/Blocks";
import Rich from "@/components/site/Rich";
import { ProcessThread } from "@/components/site/ProcessThread";
import JsonLd from "@/components/site/JsonLd";
import { features, featureBySlug } from "@/content/features";
import { productBySlug } from "@/content/products";
import { postBySlug } from "@/content/all-posts";
import { demoHref } from "@/content/contact";
import { pageMeta, graph, breadcrumbLd, faqLd } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => features.map((f) => ({ slug: f.slug }));

export function generateMetadata({ params }: { params: { slug: string } }) {
  const f = featureBySlug(params.slug);
  if (!f) return {};
  return pageMeta({ title: f.seoTitle, description: f.seoDescription, path: `/features/${f.slug}`, keywords: f.keywords });
}

export default function FeaturePage({ params }: { params: { slug: string } }) {
  const f = featureBySlug(params.slug);
  if (!f) notFound();
  const trail = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: f.name, path: `/features/${f.slug}` },
  ];
  const items = f.products.map(productBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  const guides = f.posts.map(postBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  const others = features.filter((o) => o.slug !== f.slug);

  return (
    <>
      <section className="hero hero-sub wrap">
        <Crumbs trail={trail} />
        <p className="cap hero-cap" data-reveal>
          Feature · {f.name}
        </p>
        <h1 className="display-1 display-1-sm" data-reveal>
          {f.headline}
        </h1>
        <div className="hero-foot">
          <p className="lede" data-reveal>
            <Rich text={f.intro} />
          </p>
          <div className="btn-row" data-reveal>
            <Link href={demoHref(items[0]?.slug)} className="btn btn-thread-fill btn-thread btn-lg">
              See it in a demo
            </Link>
          </div>
        </div>
      </section>

      <section className="band wrap">
        <SectionHead no="01" title="How it works" />
        <ProcessThread count={f.how.length} />
        <ol className="steps">
          {f.how.map((s, i) => (
            <li key={s.title} data-reveal>
              <span className="steps-no num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>
                <Rich text={s.body} />
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="band wrap split-25">
        <span className="cap">Why it matters</span>
        <ul className="tick-list tick-list-lg" data-reveal>
          {f.why.map((w) => (
            <li key={w}>
              <Rich text={w} />
            </li>
          ))}
        </ul>
      </section>


      <section className="band wrap">
        <SectionHead no="02" title={`Products with ${f.name.toLowerCase()}`} />
        <ProductRows items={items} />
      </section>

      {guides.length > 0 && (
        <section className="band wrap">
          <SectionHead no="03" title="Guides" />
          <PostMagazine posts={guides} lead={guides.length >= 3} />
        </section>
      )}

      {f.faqs.length > 0 && (
        <section className="band wrap">
          <SectionHead no="04" title="Questions" />
          <FaqList faqs={f.faqs} topic={f.name} />
        </section>
      )}

      <section className="band wrap">
        <span className="cap">More features</span>
        <ul className="feature-cloud feature-cloud-sm">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/features/${o.slug}`}>{o.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
      <JsonLd data={graph(breadcrumbLd(trail), f.faqs.length > 0 && faqLd(f.faqs))} />
    </>
  );
}
