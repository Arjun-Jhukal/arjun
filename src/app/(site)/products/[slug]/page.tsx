import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CtaBand, Crumbs } from "@/components/site/Chrome";
import { Gallery, FaqList, ProductRows, SectionHead, PostMagazine } from "@/components/site/Blocks";
import Rich from "@/components/site/Rich";
import { ProcessThread } from "@/components/site/ProcessThread";
import JsonLd from "@/components/site/JsonLd";
import { products, productBySlug } from "@/content/products";
import { featureBySlug } from "@/content/features";
import { skillBySlug } from "@/content/skills";
import { postBySlug } from "@/content/all-posts";
import { SITE_URL, waLink, demoHref, demoMessage, person } from "@/content/contact";
import { pageMeta, graph, breadcrumbLd, faqLd, plain } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => products.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = productBySlug(params.slug);
  if (!p) return {};
  return pageMeta({
    title: p.seoTitle,
    description: p.seoDescription,
    path: `/products/${p.slug}`,
    keywords: p.keywords,
    imageAlt: `${p.name}: ${p.headline}`,
  });
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const p = productBySlug(params.slug);
  if (!p) notFound();

  const trail = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: p.name, path: `/products/${p.slug}` },
  ];
  const related = p.related.map(productBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  const guides = p.posts.map(postBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  const stack = p.stack.map(skillBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  const lead = p.gallery.find((g) => g.src && g.shape !== "phone");
  const featureLinks = Array.from(new Set(p.features.map((f) => f.feature).filter(Boolean) as string[]))
    .map(featureBySlug)
    .filter((x): x is NonNullable<typeof x> => !!x);

  return (
    <>
      <section className="hero hero-sub wrap">
        <Crumbs trail={trail} />
        <p className="cap hero-cap" data-reveal>
          <span className={`status status-${p.status === "Live" ? "live" : "ok"}`}>{p.status}</span> {p.name} · {p.kind}
        </p>
        <h1 className="display-1 display-1-sm" data-reveal>
          {p.headline}
        </h1>
        <div className="hero-foot">
          <p className="lede" data-reveal>
            <Rich text={p.summary} />
          </p>
          <div className="btn-row" data-reveal>
            <Link href={demoHref(p.slug)} className="btn btn-thread-fill btn-thread btn-lg">
              Book a demo of {p.name}
            </Link>
            <a href={waLink(demoMessage(p.name))} className="btn btn-line btn-lg" target="_blank" rel="noopener">
              WhatsApp me
            </a>
            {p.live && (
              <a href={p.live.href} className="btn btn-text" target="_blank" rel="noopener">
                {p.live.label} ↗
              </a>
            )}
          </div>
        </div>
      </section>

      {lead?.src && (
        <figure className="wrap lead-shot" data-reveal>
          <div className="lead-frame">
            <span className="frame-bar" aria-hidden>
              <i />
              <i />
              <i />
            </span>
            <div className="lead-img">
              <Image src={lead.src} alt={`Screenshot of ${lead.alt}`} fill priority sizes="(max-width: 1320px) 100vw, 1270px" />
            </div>
          </div>
          <figcaption>{lead.caption}</figcaption>
        </figure>
      )}

      {/* ---------- who + problem ---------- */}
      <section className="band wrap split-25">
        <div data-reveal>
          <span className="cap">Made for</span>
          <ul className="tick-list">
            {p.forWho.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
        <div data-reveal>
          <span className="cap">The problem, in plain words</span>
          <p className="pull">{p.problem}</p>
        </div>
      </section>


      {/* ---------- features ---------- */}
      <section className="band wrap">
        <SectionHead
          no="01"
          title={`What ${p.name} does`}
          aside={<p>Every point links to a plain-words page about that feature and the other products that share it.</p>}
        />
        <ol className="feat-rows">
          {p.features.map((f, i) => {
            const shared = f.feature ? featureBySlug(f.feature) : undefined;
            return (
              <li key={f.title} data-reveal>
                <span className="num feat-no">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.title}</h3>
                <p>
                  <Rich text={f.body} />
                </p>
                {shared && (
                  <Link href={`/features/${shared.slug}`} className="feat-link">
                    {shared.name} →
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </section>

      {/* ---------- gallery ---------- */}
      <section className="band wrap">
        <SectionHead no="02" title="Gallery" aside={<p>Screens from {p.name}. Want to click around yourself? Ask for a live demo link.</p>} />
        <Gallery shots={p.gallery} title={p.name} />
      </section>

      {/* ---------- steps ---------- */}
      <section className="band wrap">
        <SectionHead no="03" title="From first call to launch" />
        <ProcessThread count={p.steps.length} />
        <ol className="steps">
          {p.steps.map((s, i) => (
            <li key={s.title} data-reveal>
              <span className="steps-no num">{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- built with + features index ---------- */}
      <section className="band wrap split-25">
        <div data-reveal>
          <span className="cap">Built with</span>
          <ul className="chip-list">
            {stack.map((s) => (
              <li key={s.slug}>
                <Link href={`/hire/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div data-reveal>
          <span className="cap">Features inside {p.name}</span>
          <ul className="chip-list chip-list-lg">
            {featureLinks.map((f) => (
              <li key={f.slug}>
                <Link href={`/features/${f.slug}`}>{f.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- faq ---------- */}
      <section className="band wrap">
        <SectionHead no="04" title={`${p.name}: questions`} />
        <FaqList faqs={p.faqs} topic={p.name} />
      </section>

      {/* ---------- guides ---------- */}
      {guides.length > 0 && (
        <section className="band wrap">
          <SectionHead no="05" title="Read before you decide" />
          <PostMagazine posts={guides} lead={guides.length >= 3} />
        </section>
      )}

      <CtaBand
        title={`Want ${p.name} for your business?`}
        body={`Book a 20-minute demo. I'll show you ${p.name} running, explain what changes for your brand, and give you a clear quote. Or text me on WhatsApp at ${person.phone}.`}
        product={{ slug: p.slug, name: p.name }}
      />

      {related.length > 0 && (
        <section className="band wrap">
          <SectionHead no="06" title="Related products" />
          <ProductRows items={related} />
        </section>
      )}


      <JsonLd
        data={graph(
          breadcrumbLd(trail),
          {
            "@type": "Service",
            "@id": `${SITE_URL}/products/${p.slug}#service`,
            name: p.name,
            serviceType: p.kind,
            description: plain(p.summary),
            url: `${SITE_URL}/products/${p.slug}`,
            provider: { "@id": `${SITE_URL}/#person` },
            areaServed: [{ "@type": "Country", name: "Nepal" }, "Worldwide"],
          },
          p.faqs.length > 0 && faqLd(p.faqs)
        )}
      />
    </>
  );
}
