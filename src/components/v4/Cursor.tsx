"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, registerGsap, isTouch, prefersReducedMotion } from "@/lib/motion";

/**
 * Dot plus trailing ring, difference-blended so it stays visible on both the
 * paper and the ink bands. Mouse-only; a touch device never sees it.
 */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLSpanElement>(null);
  const ring = useRef<HTMLSpanElement>(null);

  // decided after mount: the server cannot know the pointer type
  useEffect(() => {
    setEnabled(!isTouch() && !prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (!enabled) return;
    registerGsap();

    const dotEl = dot.current;
    const ringEl = ring.current;
    const rootEl = wrap.current;
    if (!dotEl || !ringEl || !rootEl) return;

    gsap.set(rootEl, { autoAlpha: 0 });

    const dotX = gsap.quickTo(dotEl, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dotEl, "y", { duration: 0.12, ease: "power3.out" });
    const ringX = gsap.quickTo(ringEl, "x", { duration: 0.5, ease: "power3.out" });
    const ringY = gsap.quickTo(ringEl, "y", { duration: 0.5, ease: "power3.out" });

    // until the pointer has moved once there is nowhere honest to draw it, and
    // a ring parked at 0,0 reads as a rendering bug
    let shown = false;
    const move = (event: PointerEvent) => {
      if (!shown) {
        shown = true;
        gsap.set([dotEl, ringEl], { x: event.clientX, y: event.clientY });
        gsap.to(rootEl, { autoAlpha: 1, duration: 0.3 });
      }
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    };

    const over = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        "a, button, [data-cursor]"
      );
      gsap.to(ringEl, {
        scale: target ? 1.9 : 1,
        opacity: target ? 0.9 : 1,
        duration: 0.35,
        ease: "power3.out",
      });
      gsap.to(dotEl, { scale: target ? 0.4 : 1, duration: 0.35, ease: "power3.out" });
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [enabled]);

  // nothing to render at all on touch or under reduced motion — an element that
  // exists but is never positioned shows up as a ring parked at the origin
  if (!enabled) return null;

  return (
    <div className="cursor" aria-hidden="true" ref={wrap}>
      <span className="cursor__ring" ref={ring} />
      <span className="cursor__dot" ref={dot} />
    </div>
  );
}
