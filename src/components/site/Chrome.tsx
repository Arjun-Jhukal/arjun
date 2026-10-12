import Link from "next/link";
import { person, waLink, mailLink, demoHref, demoMessage, hireMessage } from "@/content/contact";
import { products } from "@/content/products";
import { features } from "@/content/features";
import { skills } from "@/content/skills";
import { allPosts as posts } from "@/content/all-posts";

const NAV = [
  { href: "/products", label: "Products" },
  { href: "/features", label: "Features" },
  { href: "/hire", label: "Hire me" },
  { href: "/posts", label: "Guides" },
];

export function Header() {
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href="/" className="brand" aria-label="Arjun Jhukal — home">
          <span className="brand-mark">AJ</span>
          <span className="brand-name">
            Arjun Jhukal<small>Web developer</small>
          </span>
        </Link>
        <nav className="hdr-nav" aria-label="Main">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href={demoHref()} className="btn btn-ink btn-thread hdr-cta">
          Book a demo
        </Link>
        {/* no-JS mobile menu: a <details> that drops the same links */}
        <details className="hdr-menu">
          <summary aria-label="Menu">
            <span />
            <span />
          </summary>
          <div className="hdr-sheet">
            {NAV.map((n) => (
              <Link key={n.href} href={n.href}>
                {n.label}
              </Link>
            ))}
            <Link href={demoHref()} className="btn btn-ink">
              Book a demo
            </Link>
            <a href={waLink(demoMessage())} className="btn btn-line" target="_blank" rel="noopener">
              WhatsApp {person.phone}
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}

/** The footer is the site's internal-link index: every product, feature, skill and guide. */
export function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-top">
          <p className="ftr-big">
            Have a project in mind?{" "}
            <Link href={demoHref()} className="ftr-big-link">
              Let&apos;s talk →
            </Link>
          </p>
          <ul className="ftr-contact">
            <li>
              <a href={waLink(hireMessage)} target="_blank" rel="noopener">
                WhatsApp {person.phone}
              </a>
            </li>
            <li>
              <a href={mailLink("Project enquiry")}>{person.email}</a>
            </li>
            <li>{person.city}</li>
          </ul>
        </div>
        <div className="ftr-cols">
          <div>
            <h2 className="cap">Products</h2>
            <ul>
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/products/${p.slug}`}>{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="cap">Features</h2>
            <ul>
              {features.map((f) => (
                <li key={f.slug}>
                  <Link href={`/features/${f.slug}`}>{f.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="cap">Hire for</h2>
            <ul>
              {skills.map((s) => (
                <li key={s.slug}>
                  <Link href={`/hire/${s.slug}`}>{s.name} developer</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="cap">Guides</h2>
            <ul>
              {posts.slice(0, 8).map((p) => (
                <li key={p.slug}>
                  <Link href={`/posts/${p.slug}`}>{p.seoTitle.replace(/ \(.*?\)/, "")}</Link>
                </li>
              ))}
              <li>
                <Link href="/posts">All {posts.length} guides →</Link>
              </li>
              <li>
                <Link href="/book-a-demo">Book a demo</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="ftr-base">
          <span>© {new Date().getFullYear()} {person.name} · Kathmandu, Nepal</span>
          <span className="ftr-else">
            {person.elsewhere.map((e) => (
              <a key={e.href} href={e.href} target="_blank" rel="noopener">
                {e.label}
              </a>
            ))}
            <Link href="/site-map">Site map</Link>
            <a href="/llms.txt">llms.txt</a>
            <a href="/rss.xml">RSS</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/** The closing band every page ends on. */
export function CtaBand({
  title = "See it working before you decide.",
  body = "A 20-minute call: I share my screen, walk you through the product that fits your business, and answer every question. No slides, no pressure.",
  product,
}: {
  title?: string;
  body?: string;
  product?: { slug: string; name: string };
}) {
  return (
    <section className="band cta-band" data-reveal>
      <div className="wrap cta-in">
        <h2 className="display-2">{title}</h2>
        <div className="cta-side">
          <p className="lede">{body}</p>
          <div className="btn-row">
            <Link href={demoHref(product?.slug)} className="btn btn-thread-fill btn-thread">
              Schedule a meeting
            </Link>
            <a href={waLink(demoMessage(product?.name))} className="btn btn-line" target="_blank" rel="noopener">
              WhatsApp me
            </a>
            <a href={mailLink(product ? `Demo request: ${product.name}` : "Demo request")} className="btn btn-text">
              {person.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Crumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <ol>
        {trail.map((t, i) => (
          <li key={t.path}>
            {i < trail.length - 1 ? <Link href={t.path}>{t.name}</Link> : <span aria-current="page">{t.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
