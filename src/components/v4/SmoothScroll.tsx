"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, registerGsap, scrollState, prefersReducedMotion } from "@/lib/motion";

/**
 * One scroll driver for the whole page.
 *
 * Lenis keeps the native scroll position (it does not transform a wrapper), so
 * ScrollTrigger needs nothing more than an `update` on every Lenis frame — no
 * scrollerProxy. The rAF loop is GSAP's ticker, deliberately: two independent
 * loops is how pinned sections start to judder.
 */
export default function SmoothScroll() {
  useEffect(() => {
    registerGsap();

    if (prefersReducedMotion()) {
      // native scroll, no smoothing, but ScrollTrigger still needs refreshing
      ScrollTrigger.refresh();
      return;
    }

    /*
     * Weight, not speed. `lerp` chases the target every frame instead of running
     * a fixed-length easing per wheel event, which is what gives the scroll mass
     * — it keeps moving after you stop pushing, and a fast flick carries further
     * than a slow one. A low multiplier means one wheel notch asks for less, so
     * the inertia is doing the work rather than the input.
     */
    const lenis = new Lenis({
      lerp: 0.065,
      smoothWheel: true,
      syncTouch: true,
      touchMultiplier: 1.4,
      wheelMultiplier: 0.85,
    });

    const onScroll = () => {
      scrollState.velocity = lenis.velocity;
      scrollState.progress = lenis.progress || 0;
      ScrollTrigger.update();
    };

    lenis.on("scroll", onScroll);

    scrollState.lock = (locked: boolean) => {
      if (locked) lenis.stop();
      else lenis.start();
    };

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);

    // anchor links go through Lenis so they land where the pins expect
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -1, duration: 1.2 });
    };

    document.addEventListener("click", onClick);

    // fonts land after first paint and change every measured height
    document.fonts?.ready.then(() => ScrollTrigger.refresh());

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("orientationchange", refresh);
    // images and the boot overlay both change the document height after mount
    window.addEventListener("load", refresh);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("orientationchange", refresh);
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(raf);
      scrollState.lock = () => {};
      lenis.off("scroll", onScroll);
      lenis.destroy();
    };
  }, []);

  return null;
}
