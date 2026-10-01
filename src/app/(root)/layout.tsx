import { Kanit } from "next/font/google";

import "@/app/globals.css";

import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import DownloadCv from "@/components/molecules/download-button";

/**
 * The older shell, kept for /cv. It brings its own stylesheet and its own font —
 * the new home page lives in the (site) group and shares nothing with it but the
 * html element.
 */
const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={kanit.className}>
      <Header />
      <main>{children}</main>
      <Footer />
      <DownloadCv />
    </div>
  );
}
