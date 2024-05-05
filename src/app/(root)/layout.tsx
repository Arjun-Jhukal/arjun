import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import DownloadCv from "@/components/molecules/download-button";

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <DownloadCv />
    </>
  );
}
