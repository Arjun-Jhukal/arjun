"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * The site's only motion driver. One IntersectionObserver marks `[data-reveal]`
 * elements `.is-in` as they enter (they fade up), and `[data-reveal-line]` —
 * the process line, which draws itself and pops its numbered stops in. Re-runs on every client
 * navigation, because the new page's elements did not exist when the observer
 * was first set up.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in), [data-reveal-line]:not(.is-in)")
    );
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in", "is-still"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("is-in");
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
