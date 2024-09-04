import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import DownloadCv from "@/components/molecules/download-button";
import { Unbounded } from "next/font/google";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <DownloadCv />
    </>
  );
}
