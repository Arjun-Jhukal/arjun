import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, Crumbs } from "@/components/site/Chrome";
import { FaqList, ProductRows, SectionHead, PostMagazine } from "@/components/site/Blocks";
import Rich from "@/components/site/Rich";
import JsonLd from "@/components/site/JsonLd";
import { allPosts as posts, postBySlug } from "@/content/all-posts";
import { productBySlug } from "@/content/products";
import { featureBySlug } from "@/content/features";
import { SITE_URL, demoHref, waLink, demoMessage } from "@/content/contact";
import type { PostBlock } from "@/content/types";
import { pageMeta, graph, breadcrumbLd, faqLd } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = postBySlug(params.slug);
  if (!p) return {};
  return pageMeta({
    title: p.seoTitle,
    description: p.seoDescription,
    path: `/posts/${p.slug}`,
    keywords: p.keywords,
    type: "article",
    published: p.date,
    modified: p.updated,
    imageAlt: p.title,
  });
}

/** An inline CTA inside the article: "demo" or a product slug. */
function InlineCta({ target }: { target: string }) {
  const p = target === "demo" ? undefined : productBySlug(target);
  return (
    <aside className="post-cta" data-reveal>
      <p>
        {p ? (
          <>
            See <Link href={`/products/${p.slug}`} className="inline-link">{p.name}</Link> working in a free 20-minute demo.
          </>
        ) : (
          <>Want a straight answer for your own project? A 20-minute call is free.</>
        )}
      </p>
      <div className="btn-row">
        <Link href={demoHref(p?.slug)} className="btn btn-thread-fill btn-sm">
          Book a demo
        </Link>
        <a href={waLink(demoMessage(p?.name))} className="btn btn-line btn-sm" target="_blank" rel="noopener">
          WhatsApp
        </a>
      </div>
    </aside>
  );
}

function Block({ b }: { b: PostBlock }) {
  if ("h2" in b) return <h2>{b.h2}</h2>;
  if ("p" in b) return <p><Rich text={b.p} /></p>;
  if ("ul" in b)
    return (
      <ul>
        {b.ul.map((t) => (
          <li key={t}><Rich text={t} /></li>
        ))}
      </ul>
    );
  if ("ol" in b)
    return (
      <ol>
        {b.ol.map((t) => (
          <li key={t}><Rich text={t} /></li>
        ))}
      </ol>
    );
  if ("note" in b) return <p className="post-note"><Rich text={b.note} /></p>;
  return <InlineCta target={b.cta} />;
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const p = postBySlug(params.slug);
  if (!p) notFound();
  const trail = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/posts" },
    { name: p.title, path: `/posts/${p.slug}` },
  ];
  const items = p.products.map(productBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  const feats = p.features.map(featureBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  const more = posts.filter((o) => o.slug !== p.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="hero hero-sub wrap">
          <Crumbs trail={trail} />
          <p className="cap hero-cap">
            Guide · {p.readMins} min read ·{" "}
            <time dateTime={p.date}>
              {new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
            </time>{" "}
            · by Arjun Jhukal
          </p>
          <h1 className="display-1 display-1-sm">{p.title}</h1>
          <p className="lede">{p.excerpt}</p>
        </header>
        <div className="wrap post-grid">
          <div className="prose">
            {p.body.map((b, i) => (
              <Block key={i} b={b} />
            ))}
          </div>
          <aside className="post-side">
            <div className="post-side-in">
              <span className="cap">Mentioned here</span>
              <ul>
                {items.map((x) => (
                  <li key={x.slug}>
                    <Link href={`/products/${x.slug}`}>{x.name}</Link>
                  </li>
                ))}
                {feats.map((x) => (
                  <li key={x.slug}>
                    <Link href={`/features/${x.slug}`}>{x.name}</Link>
                  </li>
                ))}
              </ul>
              <Link href={demoHref(items[0]?.slug)} className="btn btn-thread-fill btn-sm">
                Book a demo
              </Link>
            </div>
          </aside>
        </div>
      </article>

      {p.faqs.length > 0 && (
        <section className="band wrap">
          <SectionHead title="Questions" />
          <FaqList faqs={p.faqs} topic={p.title} />
        </section>
      )}

      <section className="band wrap">
        <SectionHead title="Products in this guide" />
        <ProductRows items={items} />
      </section>

      <section className="band wrap">
        <SectionHead title="Keep reading" />
        <PostMagazine posts={more} lead={false} />
      </section>

      <CtaBand />
      <JsonLd
        data={graph(
          breadcrumbLd(trail),
          {
            "@type": "BlogPosting",
            headline: p.title,
            description: p.seoDescription,
            datePublished: p.date,
            dateModified: p.updated ?? p.date,
            url: `${SITE_URL}/posts/${p.slug}`,
            mainEntityOfPage: `${SITE_URL}/posts/${p.slug}`,
            image: `${SITE_URL}/og/posts-${p.slug}.png`,
            author: { "@id": `${SITE_URL}/#person` },
            publisher: { "@id": `${SITE_URL}/#person` },
            keywords: p.keywords.join(", "),
            inLanguage: "en-NP",
          },
          p.faqs.length > 0 && faqLd(p.faqs)
        )}
      />
    </>
  );
}
