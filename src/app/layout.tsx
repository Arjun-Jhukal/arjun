import { Metadata } from "next";
import React from "react";
import { Open_Sans } from "next/font/google";

import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});

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

export default function RootLayout({ children }: { children: React.ReactElement }) {
  return (
    <html lang="en">
      <body className={openSans.className}>{children} </body>
    </html>
  );
}
