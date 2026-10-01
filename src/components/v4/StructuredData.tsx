import { person, faqs, services } from "@/content/site";

/**
 * JSON-LD for the one page.
 *
 * Three graphs, because they answer three different questions Google asks:
 *   Person              who this is, and what they are called
 *   ProfessionalService what is on offer, and where — the part that matters for
 *                       "web developer in Nepal", since areaServed is how the
 *                       country is stated in a machine-readable way
 *   FAQPage             the question block, which is what can earn the expanded
 *                       result on those searches
 *
 * Everything here mirrors copy that is actually on the page. Structured data
 * that claims something the page does not say is the fastest way to lose the
 * rich result entirely.
 */

const SITE = "https://arjunjhukal.com.np";

export default function StructuredData() {
  const graph = [
    {
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: person.name,
      alternateName: person.devanagari,
      url: SITE,
      image: `${SITE}/profile.jpg`,
      jobTitle: "Web Developer",
      email: `mailto:${person.email}`,
      telephone: person.phoneHref,
      knowsLanguage: ["Nepali", "English", "Hindi"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "WordPress",
        "Headless CMS",
        "E-commerce development",
        "Web performance",
        "Technical SEO",
      ],
      sameAs: person.elsewhere.map((link) => link.href),
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE}/#service`,
      name: `${person.name} — Web Development`,
      description:
        "Freelance web development in Kathmandu, Nepal: business websites, online stores and content platforms built on Next.js, React and WordPress, with a CMS the client's own team can edit.",
      url: SITE,
      image: `${SITE}/og.png`,
      provider: { "@id": `${SITE}/#person` },
      areaServed: [
        { "@type": "Country", name: "Nepal" },
        { "@type": "City", name: "Kathmandu" },
      ],
      availableLanguage: ["en", "ne"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Web development services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.lede,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE}/#faq`,
      mainEntity: faqs.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      // the payload is built from our own content constants, never user input
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
