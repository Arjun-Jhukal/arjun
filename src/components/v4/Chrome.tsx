"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/motion";
import { nav, person } from "@/content/site";
import Clock from "./Clock";

export default function Chrome() {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);

  // open/close the sheet
  useEffect(() => {
    registerGsap();
    const el = panel.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.style.display = open ? "grid" : "none";
      return;
    }

    const rows = el.querySelectorAll<HTMLElement>("[data-menu-row]");

    if (open) {
      el.style.display = "grid";
      gsap
        .timeline()
        .fromTo(el, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.7, ease: "expo.inOut" })
        .fromTo(rows, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: "power3.out" }, 0.25);
    } else {
      gsap.to(el, {
        clipPath: "inset(0 0 100% 0)",
        duration: 0.5,
        ease: "expo.inOut",
        onComplete: () => {
          el.style.display = "none";
        },
      });
    }
  }, [open]);

  // escape closes, and so does any navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header className="chrome" data-chrome>
        <div className="sheet chrome__inner">
          <a className="chrome__mark" href="#top">
            {person.name}
            <span>{person.issue}</span>
          </a>

          <nav className="chrome__nav" aria-label="Sections">
            {nav.slice(1).map((item) => (
              <a
                className="chrome__link"
                href={`#${item.id}`}
                key={item.id}
                data-nav-link={item.id}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="chrome__cta">
            <button
              className="btn btn--ghost chrome__burger"
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              data-magnetic
            >
              <span className="btn__label">{open ? "Close" : "Menu"}</span>
            </button>
          </div>
        </div>
      </header>

      <div className="menu" ref={panel} data-tone="ink" style={{ display: "none" }}>
        <div className="sheet menu__inner">
          <div className="menu__list">
            {nav.map((item, i) => (
              <a
                className="menu__link"
                href={`#${item.id}`}
                key={item.id}
                data-menu-row
                onClick={() => setOpen(false)}
              >
                <span className="menu__no">{String(i + 1).padStart(2, "0")}</span>
                <span className="menu__label">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="menu__aside">
            <div data-menu-row>
              <p className="meta">Get in touch</p>
              <p className="menu__contact">
                <a className="ul" href={`mailto:${person.email}`}>
                  {person.email}
                </a>
              </p>
              <p className="menu__contact">
                <a className="ul" href={`tel:${person.phoneHref}`}>
                  {person.phone}
                </a>
              </p>
            </div>

            <div data-menu-row>
              <p className="meta">Elsewhere</p>
              <ul className="menu__elsewhere">
                {person.elsewhere.map((link) => (
                  <li key={link.label}>
                    <a className="ul" href={link.href} target="_blank" rel="noreferrer">
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div data-menu-row>
              <Clock />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
