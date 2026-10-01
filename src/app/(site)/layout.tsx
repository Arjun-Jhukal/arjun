import "@/styles/v4.css";

import Boot from "@/components/v4/Boot";
import Cursor from "@/components/v4/Cursor";
import Progress from "@/components/v4/Progress";
import SmoothScroll from "@/components/v4/SmoothScroll";
import SiteMotion from "@/components/v4/SiteMotion";

/**
 * The site shell. Everything here is client-side and mounts once: the scroll
 * driver, the declarative motion pass, and the three bits of chrome that sit
 * outside the document flow.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Boot first: it sets `is-booting`, which SiteMotion reads to decide
          whether to hold the opening animation back. */}
      <Boot />
      <SmoothScroll />
      {children}
      {/* after {children} so the pinned sections register their triggers first */}
      <SiteMotion />
      <Cursor />
      <Progress />
    </>
  );
}
