import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";
import DownloadCv from "@/components/molecules/download-button";
import { title } from "process";

export const metadata: Metadata = {
  title: "Arjun Jhukal | Frontend Developer",

  description: "Hi I'm Arjun Jhukal, a software developer creating seamless and optimized web applications since 2020",

  openGraph: {
    title: "Arjun Jhukal | Frontend Developer",
    description: "Hi I'm Arjun Jhukal, a software developer creating seamless and optimized web applications since 2020",
    images: "/logo-no-background.png",
  },
  twitter: {
    title: "Arjun Jhukal | Frontend Developer",
    description: "Hi I'm Arjun Jhukal, a software developer creating seamless and optimized web applications since 2020",
    card: "summary_large_image",
    images: "/logo-no-background.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-100">
        <Header />
        {children}
        <Footer />
        <DownloadCv />
      </body>
    </html>
  );
}
