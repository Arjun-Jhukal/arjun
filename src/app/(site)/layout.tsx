import "@/styles/site.css";

import { Header, Footer } from "@/components/site/Chrome";
import Motion from "@/components/site/Motion";
import JsonLd from "@/components/site/JsonLd";
import { graph, personLd } from "@/lib/seo";
import { SITE_URL } from "@/content/contact";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <Motion />
      <JsonLd
        data={graph(personLd, {
          "@type": "WebSite",
          "@id": `${SITE_URL}/#website`,
          url: SITE_URL,
          name: "Arjun Jhukal",
          publisher: { "@id": `${SITE_URL}/#person` },
          inLanguage: "en-NP",
        })}
      />
    </>
  );
}
