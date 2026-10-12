/**
 * Every way to reach Arjun, and every CTA link builder, lives here. A product
 * page, a feature page and the header all call these, so the WhatsApp
 * number can never drift between two copies of itself.
 */

export const SITE_URL = "https://arjunjhukal.com.np";

export const person = {
  name: "Arjun Jhukal",
  role: "Web developer",
  city: "Kathmandu, Nepal",
  email: "jhukal9@gmail.com",
  phone: "+977 981-276-7046",
  /** E.164 without the plus — the shape wa.me wants */
  whatsapp: "9779812767046",
  elsewhere: [
    { label: "GitHub", href: "https://github.com/Arjun-Jhukal" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/arjun-jhukal/" },
    {
      label: "Upwork",
      href: "https://www.upwork.com/freelancers/~01203b19e827ffa79f?mp_source=share",
    },
  ],
} as const;

export function waLink(text: string) {
  return `https://wa.me/${person.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailLink(subject: string, body = "") {
  const q = new URLSearchParams({ subject, body }).toString().replace(/\+/g, "%20");
  return `mailto:${person.email}?${q}`;
}

export function demoHref(productSlug?: string) {
  return productSlug ? `/book-a-demo?product=${productSlug}` : "/book-a-demo";
}

export const demoMessage = (productName?: string) =>
  productName
    ? `Hi Arjun, I'd like a demo of ${productName}. When are you free?`
    : "Hi Arjun, I'd like to book a demo. When are you free?";

export const hireMessage = "Hi Arjun, I'd like to hire you for a project. Can we talk?";
export const teamUpMessage =
  "Hi Arjun, I run a team / agency and would like to team up with you on projects.";
