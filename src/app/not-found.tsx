import "@/styles/site.css";
import Link from "next/link";
import { Header, Footer } from "@/components/site/Chrome";
import { products } from "@/content/products";

export default function NotFound() {
  return (
    <>
    <Header />
    <main id="main">
    <section className="hero hero-sub wrap">
      <p className="cap hero-cap">404</p>
      <h1 className="display-1">This page doesn&apos;t exist.</h1>
      <p className="lede">
        The page you wanted isn&apos;t here. Try the <Link href="/products" className="inline-link">products</Link>, the{" "}
        <Link href="/posts" className="inline-link">guides</Link>, or <Link href="/book-a-demo" className="inline-link">book a demo</Link>.
      </p>
      <ul className="chip-list chip-list-lg">
        {products.slice(0, 6).map((p) => (
          <li key={p.slug}>
            <Link href={`/products/${p.slug}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </section>
    </main>
    <Footer />
    </>
  );
}
