"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, registerGsap, prefersReducedMotion } from "@/lib/motion";
import { person } from "@/content/site";

const SEEN_KEY = "aj-booted";

/**
 * A short press-check before the page opens: the name, a counter, a rule filling.
 *
 * It runs once per tab (sessionStorage) and not at all under reduced motion —
 * a loader you have to sit through on every navigation is a tax, not a flourish.
 */
export default function Boot() {
  const [show, setShow] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const pct = useRef<HTMLParagraphElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    registerGsap();

    const seen = sessionStorage.getItem(SEEN_KEY) === "1";
    if (seen || prefersReducedMotion()) {
      document.body.classList.remove("is-booting");
      return;
    }

    setShow(true);
    document.body.classList.add("is-booting");
  }, []);

  /**
   * While the overlay is up, body carries `is-booting` and so has
   * `overflow: hidden`. Every ScrollTrigger created in that window measures a
   * document with no scrollable height and quietly never fires — the headline
   * stays masked, the counters stay at zero. Unlocking is therefore only half
   * the job; the refresh is the other half.
   */
  const release = () => {
    document.body.classList.remove("is-booting");
    setShow(false);
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      // SiteMotion holds the above-the-fold intro until this fires
      window.dispatchEvent(new Event("aj:ready"));
    });
  };

  useEffect(() => {
    if (!show) return;
    const rootEl = root.current;
    const pctEl = pct.current;
    const barEl = bar.current;
    if (!rootEl || !pctEl || !barEl) return;

    const counter = { n: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem(SEEN_KEY, "1");
        release();
      },
    });

    tl.to(counter, {
      n: 100,
      duration: 1.1,
      ease: "power2.inOut",
      onUpdate: () => {
        pctEl.textContent = String(Math.round(counter.n)).padStart(3, "0");
      },
    })
      .fromTo(barEl, { scaleX: 0 }, { scaleX: 1, duration: 1.1, ease: "power2.inOut" }, 0)
      .to(rootEl, { yPercent: -101, duration: 0.9, ease: "expo.inOut" }, "+=0.15");

    return () => {
      tl.kill();
      release();
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="boot" ref={root} aria-hidden="true">
      <div className="boot__row">
        <p className="boot__name">
          {person.name}
          <br />
          <span style={{ fontFamily: "var(--deva)", opacity: 0.45 }}>{person.devanagari}</span>
        </p>
        <p className="boot__pct" ref={pct}>
          000
        </p>
      </div>
      <div className="boot__bar">
        <span ref={bar} />
      </div>
      <div className="boot__meta">
        <span>{person.issue}</span>
        <span>{person.city}</span>
        <span>{person.year}</span>
      </div>
    </div>
  );
}
