import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand, Crumbs } from "@/components/site/Chrome";
import { FaqList, SectionHead, ProductRows } from "@/components/site/Blocks";
import Rich from "@/components/site/Rich";
import JsonLd from "@/components/site/JsonLd";
import { skills, skillBySlug } from "@/content/skills";
import { productBySlug } from "@/content/products";
import { waLink, mailLink } from "@/content/contact";
import { pageMeta, graph, breadcrumbLd, faqLd } from "@/lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => skills.map((s) => ({ skill: s.slug }));

export function generateMetadata({ params }: { params: { skill: string } }) {
  const s = skillBySlug(params.skill);
  if (!s) return {};
  return pageMeta({ title: s.seoTitle, description: s.seoDescription, path: `/hire/${s.slug}`, keywords: s.keywords });
}

export default function SkillPage({ params }: { params: { skill: string } }) {
  const s = skillBySlug(params.skill);
  if (!s) notFound();
  const trail = [
    { name: "Home", path: "/" },
    { name: "Hire me", path: "/hire" },
    { name: `${s.name} developer`, path: `/hire/${s.slug}` },
  ];
  const pairs = s.pairsWith.map(skillBySlug).filter((x): x is NonNullable<typeof x> => !!x);
  const msg = `Hi Arjun, I'm looking for a ${s.name} developer. Can we talk?`;

  return (
    <>
      <section className="hero hero-sub wrap">
        <Crumbs trail={trail} />
        <p className="cap hero-cap" data-reveal>
          <span className="dot" aria-hidden /> {s.name} developer · Kathmandu · remote worldwide
        </p>
        <h1 className="display-1 display-1-sm" data-reveal>
          {s.headline}
        </h1>
        <div className="hero-foot">
          <p className="lede" data-reveal>
            <Rich text={s.intro} />
          </p>
          <div className="btn-row" data-reveal>
            <a href={waLink(msg)} className="btn btn-thread-fill btn-thread btn-lg" target="_blank" rel="noopener">
              Hire me for {s.name}
            </a>
            <a href={mailLink(`${s.name} project`)} className="btn btn-line btn-lg">
              Email a brief
            </a>
          </div>
        </div>
      </section>

      <section className="band wrap split-25">
        <span className="cap">What I build with {s.name}</span>
        <ul className="tick-list tick-list-lg" data-reveal>
          {s.builds.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="band wrap">
        <SectionHead no="01" title={`${s.name} in real products`} />
        <ProductRows
          items={s.proof.map((pr) => productBySlug(pr.product)).filter((x): x is NonNullable<typeof x> => !!x)}
        />
        <ul className="proof-notes">
          {s.proof.map((pr) => {
            const p = productBySlug(pr.product);
            return p ? (
              <li key={pr.product}>
                <strong>{p.name}</strong> — {pr.note}
              </li>
            ) : null;
          })}
        </ul>
      </section>

      <section className="band wrap split-25">
        <span className="cap">Often paired with</span>
        <ul className="chip-list chip-list-lg" data-reveal>
          {pairs.map((p) => (
            <li key={p.slug}>
              <Link href={`/hire/${p.slug}`}>{p.name} developer</Link>
            </li>
          ))}
          <li>
            <Link href="/hire">All skills</Link>
          </li>
        </ul>
      </section>

      {s.faqs.length > 0 && (
        <section className="band wrap">
          <SectionHead no="02" title="Questions" />
          <FaqList faqs={s.faqs} topic={`${s.name} work`} />
        </section>
      )}

      <CtaBand title={`Need a ${s.name} developer?`} body="Tell me about the project on WhatsApp or book a call. I'll reply with an honest view of what it takes." />
      <JsonLd data={graph(breadcrumbLd(trail), s.faqs.length > 0 && faqLd(s.faqs))} />
    </>
  );
}
