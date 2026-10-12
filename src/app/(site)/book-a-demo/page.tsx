import Link from "next/link";
import { Suspense } from "react";
import { Crumbs } from "@/components/site/Chrome";
import { FaqList, SectionHead } from "@/components/site/Blocks";
import ScheduleForm from "@/components/site/ScheduleForm";
import JsonLd from "@/components/site/JsonLd";
import { products } from "@/content/products";
import { person, waLink, mailLink, demoMessage } from "@/content/contact";
import { pageMeta, graph, breadcrumbLd, faqLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Book a Demo or Schedule a Meeting",
  description:
    "Book a free 20-minute demo with developer Arjun Jhukal. Pick a product, date and time, then send the request on WhatsApp (+977 981-276-7046) or email.",
  path: "/book-a-demo",
  keywords: ["book a demo", "schedule a meeting with developer", "website demo Nepal", "contact web developer Nepal"],
});

const trail = [
  { name: "Home", path: "/" },
  { name: "Book a demo", path: "/book-a-demo" },
];

const FAQ = [
  { q: "Is the demo free?", a: "Yes. Twenty minutes, no obligation." },
  {
    q: "What happens in a demo?",
    a: "I share my screen and walk you through the product running — the site your customers see and the dashboard your team uses. Then we talk about your business and I give you an honest view of what fits. Browse the [products](/products) first if you like.",
  },
  { q: "How fast will you reply?", a: "WhatsApp is fastest — usually within the hour during the day (Nepal time). Email within a working day." },
];

export default function BookDemoPage() {
  const options = products.map((p) => ({ slug: p.slug, name: p.name, kind: p.kind }));
  return (
    <>
      <section className="hero hero-sub wrap">
        <Crumbs trail={trail} />
        <p className="cap hero-cap">
          <span className="dot" aria-hidden /> Free · 20 minutes · Google Meet, phone or in person
        </p>
        <h1 className="display-1">Book a demo.</h1>
      </section>

      <section className="band wrap demo-page">
        <div className="demo-page-form">
          <p className="lede">
            Pick what you want to see and when. Your request opens in WhatsApp or your email, already written — just
            press send.
          </p>
          <Suspense fallback={null}>
            <ScheduleForm products={options} />
          </Suspense>
        </div>
        <aside className="demo-page-side">
          <span className="cap">Or reach me directly</span>
          <a href={waLink(demoMessage())} className="demo-way" target="_blank" rel="noopener">
            WhatsApp <span className="num">{person.phone}</span> →
          </a>
          <a href={`tel:+${person.whatsapp}`} className="demo-way">
            Call <span className="num">{person.phone}</span> →
          </a>
          <a href={mailLink("Demo request")} className="demo-way">
            {person.email} →
          </a>
          <p className="muted">
            {person.city}. Working with businesses in Nepal and remotely worldwide. See the{" "}
            <Link href="/hire" className="inline-link">
              ways to work together
            </Link>
            .
          </p>
        </aside>
      </section>

      <section className="band wrap">
        <SectionHead title="Before you book" />
        <FaqList faqs={FAQ} topic="a demo" />
      </section>

      <JsonLd
        data={graph(breadcrumbLd(trail), faqLd(FAQ), {
          "@type": "ContactPage",
          name: "Book a demo",
          mainEntity: { "@type": "Person", name: person.name, telephone: person.phone, email: person.email },
        })}
      />
    </>
  );
}
