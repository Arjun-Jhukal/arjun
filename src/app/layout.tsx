import { Metadata } from "next";
import React from "react";

import "./globals.css";

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
      <body>{children} </body>
    </html>
  );
}
