import { Metadata } from "next";
import React from "react";
import { Kanit, Unbounded } from "next/font/google";

import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Frontend Developer | Arjun Jhukal From Nepal",
    template: "%s - Arjun Jhukal | Frontend Developer",
  },

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
      <body className={kanit.className}>{children} </body>
    </html>
  );
}
