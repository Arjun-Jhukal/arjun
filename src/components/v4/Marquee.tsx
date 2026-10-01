"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, scrollState, prefersReducedMotion } from "@/lib/motion";
import { marquee } from "@/content/site";

/**
 * A tool list that drifts on its own and leans with the scroll. The lean is the
 * point — a marquee at a constant speed is wallpaper; one that responds to the
 * wheel tells you the page is listening.
 */
export default function Marquee() {
  const track = useRef<HTMLUListElement>(null);

  useEffect(() => {
    registerGsap();
    const el = track.current;
    if (!el || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // the list is rendered twice, so -50% is one seamless cycle
      const drift = gsap.to(el, {
        xPercent: -50,
        duration: 34,
        ease: "none",
        repeat: -1,
      });

      const lean = () => {
        const v = scrollState.velocity;
        // base 1, up to ~4.5x, and it flips direction when you scroll back up
        const target = gsap.utils.clamp(-4.5, 4.5, 1 + v * 0.12);
        drift.timeScale(gsap.utils.interpolate(drift.timeScale(), target, 0.08));
      };

      gsap.ticker.add(lean);
      return () => gsap.ticker.remove(lean);
    });

    return () => ctx.revert();
  }, []);

  const items = [...marquee, ...marquee];

  return (
    <div className="marquee" aria-hidden="true">
      <ul className="marquee__track" ref={track}>
        {items.map((item, i) => (
          <li className="marquee__item" key={`${item}-${i}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
