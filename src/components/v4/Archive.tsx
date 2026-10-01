"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, registerGsap, prefersReducedMotion } from "@/lib/motion";
import { archive } from "@/content/site";

export default function Archive() {
  const [open, setOpen] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);

  // the hairlines draw themselves in as the table scrolls past
  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;
    const el = root.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(gsap.utils.toArray<HTMLElement>(".row", el), {
        opacity: 0,
        y: 18,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.05,
        scrollTrigger: { trigger: el, start: "top 82%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const toggle = (id: string) => {
    const next = open === id ? null : id;
    const panels = root.current?.querySelectorAll<HTMLElement>("[data-panel]");

    panels?.forEach((panel) => {
      const isNext = panel.dataset.panel === next;
      const inner = panel.firstElementChild as HTMLElement | null;
      if (!inner) return;

      if (prefersReducedMotion()) {
        panel.style.height = isNext ? "auto" : "0px";
        return;
      }

      gsap.to(panel, {
        height: isNext ? inner.offsetHeight : 0,
        duration: 0.55,
        ease: "power3.inOut",
        onComplete: () => {
          // let a reopened panel reflow freely once it is settled
          if (isNext) panel.style.height = "auto";
          ScrollTrigger.refresh();
        },
      });

      if (isNext) {
        gsap.fromTo(
          inner.children,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out", delay: 0.1 }
        );
      }
    });

    setOpen(next);
  };

  return (
    <div className="archive" ref={root}>
      {archive.map((item, i) => {
        const isOpen = open === item.id;
        return (
          <div className={`row${isOpen ? " is-open" : ""}`} key={item.id}>
            <button
              className="row__btn"
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`panel-${item.id}`}
              data-cursor="open"
            >
              <span className="row__no">P_{String(i + 1).padStart(2, "0")}</span>
              <span className="row__title">{item.title}</span>
              <span className="row__summary">{item.summary}</span>
              <span className="row__org">{item.org}</span>
              <span className="row__sign" aria-hidden="true" />
            </button>

            <div className="row__panel" id={`panel-${item.id}`} data-panel={item.id}>
              <div className="row__panel-inner">
                <p className="row__detail">{item.detail}</p>
                <div>
                  <dl className="plate__dl" style={{ marginBottom: "1rem" }}>
                    <dt>Role</dt>
                    <dd>{item.role}</dd>
                    <dt>Kind</dt>
                    <dd>{item.kind}</dd>
                    <dt>Year</dt>
                    <dd>{item.year}</dd>
                  </dl>
                  <ul className="plate__chips">
                    {item.stack.map((tech) => (
                      <li className="chip" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  {item.href ? (
                    <p style={{ marginTop: "1rem" }}>
                      <a className="ul" href={item.href} target="_blank" rel="noreferrer">
                        Visit ↗
                      </a>
                    </p>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
