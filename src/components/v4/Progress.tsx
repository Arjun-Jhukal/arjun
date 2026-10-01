"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, registerGsap, prefersReducedMotion } from "@/lib/motion";
import { nav } from "@/content/site";

/**
 * Right-edge reading meter: how far through, and which chapter you are in.
 *
 * The chapter is recomputed from live rects on every update rather than by a
 * ScrollTrigger per section. Two sections pin, which means their measured ranges
 * overlap, and a set of onToggle callbacks resolves that overlap in whatever
 * order they happen to fire — so the label would stick on the wrong chapter and
 * stay there until the next crossing. Measuring wins outright.
 */
export default function Progress() {
  const root = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLSpanElement>(null);
  const pct = useRef<HTMLSpanElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;

    const rootEl = root.current;
    const fillEl = fill.current;
    const pctEl = pct.current;
    const labelEl = label.current;
    if (!rootEl || !fillEl || !pctEl || !labelEl) return;

    const ctx = gsap.context(() => {
      const sections = nav
        .map((item) => ({ item, el: document.getElementById(item.id) }))
        .filter((entry): entry is { item: (typeof nav)[number]; el: HTMLElement } =>
          Boolean(entry.el)
        );

      const links = gsap.utils.toArray<HTMLElement>("[data-nav-link]");

      let currentId = "";
      let onInk: boolean | null = null;

      // the line the chapter is read off: a little above the middle of the screen
      const readLine = () => window.innerHeight * 0.38;

      const sync = () => {
        const line = readLine();
        let active = sections[0];

        for (const entry of sections) {
          const rect = entry.el.getBoundingClientRect();
          if (rect.top <= line && rect.bottom > line) active = entry;
        }

        if (active.item.id !== currentId) {
          currentId = active.item.id;
          labelEl.textContent = active.item.label;
          links.forEach((link) =>
            link.setAttribute("aria-current", String(link.dataset.navLink === currentId))
          );
        }

        // the rail sits over whichever stock is under it, so it has to be told
        const dark = Boolean(active.el.closest('[data-tone="ink"]'));
        if (dark !== onInk) {
          onInk = dark;
          rootEl.classList.toggle("is-on-ink", dark);
        }
      };

      const trigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          fillEl.style.transform = `scaleY(${self.progress})`;
          pctEl.textContent = String(Math.round(self.progress * 100)).padStart(2, "0");
          sync();
        },
        onRefresh: sync,
      });

      sync();

      return () => trigger.kill();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="progress" aria-hidden="true" ref={root}>
      <span className="progress__label" ref={label}>
        Masthead
      </span>
      <span className="progress__track">
        <span className="progress__fill" ref={fill} />
      </span>
      <span className="progress__pct" ref={pct}>
        00
      </span>
    </div>
  );
}
