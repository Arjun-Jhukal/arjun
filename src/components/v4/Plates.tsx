"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/motion";
import Image from "next/image";
import { plates } from "@/content/site";

/**
 * The pinned gallery. Three nested levels of scroll-driven motion, all hanging
 * off one ScrollTrigger so they can never drift apart:
 *
 *   level 1  the section pins and the rail translates horizontally
 *   level 2  each plate's text and frame animate on their own slice of the
 *            master timeline, so they are composed in and out as they pass
 *   level 3  inside each frame, the screenshot itself drifts against the frame,
 *            so there is parallax inside a panel that is itself moving
 *
 * One timeline, one scrub. Separate ScrollTriggers per panel would be simpler to
 * write and would judder against the pin on the first frame after a refresh.
 */
export default function Plates() {
  const section = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;

    const viewportEl = viewport.current;
    const railEl = rail.current;
    const fillEl = fill.current;
    if (!viewportEl || !railEl || !fillEl) return;

    const mm = gsap.matchMedia();

    /* ---- phones and small tablets: no pin, no rail, just a readable stack -- */
    mm.add("(max-width: 999px)", () => {
      const panels = gsap.utils.toArray<HTMLElement>(".plate", railEl);
      panels.forEach((panel) => {
        const rows = gsap.utils.toArray<HTMLElement>("[data-plate-row]", panel);
        gsap.from(rows, {
          y: 28,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: panel, start: "top 80%" },
        });
      });
    });

    /* ---- desktop: the three-level pinned gallery -------------------------- */
    mm.add("(min-width: 1000px)", () => {
      const panels = gsap.utils.toArray<HTMLElement>(".plate", railEl);
      const last = panels.length - 1;
      if (last < 1) return;

      const distance = () => railEl.scrollWidth - window.innerWidth;
      const ticks = gsap.utils.toArray<HTMLElement>(".plates__tick", section.current!);

      let current = -1;
      const setActive = (index: number) => {
        if (index === current) return;
        current = index;
        ticks.forEach((tick, i) => tick.classList.toggle("is-on", i === index));
      };

      /*
        * The rail tween is `last` long but the timeline runs a little past it,
        * so the last plate gets a beat to settle. The meter therefore has to
        * describe the RAIL's progress, not the trigger's, or it reads behind the
        * plate it is numbering.
        */
      let report = (_: number) => {};

      const master = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: viewportEl,
          start: "top top",
          // one viewport-height of scroll per panel transition, plus a beat to settle
          end: () => `+=${distance() + window.innerHeight * 0.4}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          /*
           * A pin adds thousands of pixels of spacer, so every trigger below it
           * has to be measured AFTER it. React mounts this section's effect after
           * the page-wide one in SiteMotion, which means without an explicit
           * priority the content triggers are measured in a layout where this pin
           * does not exist yet — their start positions land thousands of pixels
           * early and the ones that are meant to fire late never fire at all.
           * Higher priority = refreshed first.
           */
          refreshPriority: 2,
          scrub: 1.15,
          invalidateOnRefresh: true,
          onUpdate: (self) => report(self.progress),
          onRefresh: (self) => report(self.progress),
        },
      });

      /* ----- level 1: the rail ------------------------------------------- */
      master.to(railEl, { x: () => -distance(), duration: last }, 0);

      report = (progress) => {
        const total = master.duration() || last;
        const railProgress = Math.min(1, (progress * total) / last);
        fillEl.style.transform = `scaleX(${railProgress})`;
        setActive(Math.round(railProgress * last));
      };

      /* ----- level 2 + 3: per-panel composition -------------------------- */
      panels.forEach((panel, i) => {
        const text = panel.querySelector<HTMLElement>(".plate__text");
        const frame = panel.querySelector<HTMLElement>(".plate__frame");
        const rows = gsap.utils.toArray<HTMLElement>("[data-plate-row]", panel);
        const depths = gsap.utils.toArray<HTMLElement>("[data-depth]", panel);

        // the panel is on screen roughly across [i - 0.5, i + 0.5] of the master
        const enterAt = Math.max(0, i - 0.55);

        if (i === 0) {
          // the first panel is already in frame when the pin engages, so it gets a
          // normal reveal on approach rather than a scrubbed one
          gsap.from(rows, {
            y: 34,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.07,
            scrollTrigger: { trigger: section.current, start: "top 55%" },
          });
          if (frame) {
            gsap.from(frame, {
              scale: 1.06,
              opacity: 0,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: { trigger: section.current, start: "top 60%" },
            });
          }
        } else {
          master.fromTo(
            rows,
            { y: 44, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.42, stagger: 0.045, ease: "power2.out" },
            enterAt
          );
          if (frame) {
            master.fromTo(
              frame,
              { scale: 1.08, opacity: 0.25 },
              { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
              enterAt
            );
          }
        }

        // counter-drift: the text lags the rail slightly, which reads as depth.
        // the first panel starts at rest — it is already on screen when the pin
        // engages, and an offset there just looks like a layout bug.
        if (text) {
          master.fromTo(
            text,
            { xPercent: i === 0 ? 0 : 14 },
            { xPercent: i === 0 ? -16 : -14, duration: 1.1, ease: "none" },
            Math.max(0, i - 0.55)
          );
        }

        // the panel fades back as it leaves, so two plates never compete
        if (i < last) {
          master.to(panel, { opacity: 0.25, duration: 0.3, ease: "power1.in" }, i + 0.42);
        }

        // level 3 — layers inside the drawing, each at its own rate
        depths.forEach((layer) => {
          const rate = Number(layer.dataset.depth || 0.2);
          master.fromTo(
            layer,
            { xPercent: i === 0 ? 0 : rate * 26, yPercent: i === 0 ? 0 : rate * -8 },
            { xPercent: rate * -26, yPercent: rate * 8, duration: 1.3, ease: "none" },
            Math.max(0, i - 0.65)
          );
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="work" className="plates" data-tone="ink" ref={section}>
      <div className="sheet plates__head">
        <div className="runner">
          <span className="runner__no">02</span>
          <span className="runner__name">Plates — selected work</span>
          <span className="runner__trail">{String(plates.length).padStart(2, "0")} shown</span>
        </div>
        <h2 className="statement" data-scrub-words>
          {"Five builds taken front to back: the pages, the dashboard behind them, and the API in between."
            .split(" ")
            .map((word, i) => (
              <span className="w" key={i}>
                {word}
              </span>
            ))}
        </h2>
      </div>

      <div className="plates__viewport" ref={viewport}>
        <div className="plates__rail" ref={rail}>
          {plates.map((plate, i) => (
            <article className="plate" key={plate.id}>
              <div className="plate__text">
                <p className="plate__index" data-plate-row>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <span>/ {String(plates.length).padStart(2, "0")}</span>
                  <span>· {plate.kind}</span>
                </p>

                <p className="meta meta--spot plate__kicker" data-plate-row>
                  {plate.kicker}
                </p>

                <h3 className="plate__title" data-plate-row>
                  {plate.title}
                </h3>

                <p className="plate__claim" data-plate-row>
                  {plate.claim}
                </p>

                <dl className="plate__dl" data-plate-row>
                  <dt>Role</dt>
                  <dd>
                    {plate.role} · {plate.org}
                  </dd>
                  <dt>Years</dt>
                  <dd>{plate.years}</dd>
                  <dt>Outcome</dt>
                  <dd>{plate.outcome}</dd>
                </dl>

                <ul className="plate__chips" data-plate-row>
                  {plate.stack.map((item) => (
                    <li className="chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>

                {plate.link ? (
                  <div className="plate__more" data-plate-row>
                    <a
                      className="ul"
                      href={plate.link.href}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor="visit"
                    >
                      Visit the live site ↗
                    </a>
                    <span className="meta">{plate.link.label}</span>
                  </div>
                ) : (
                  <div className="plate__more" data-plate-row>
                    <span className="meta">Powers every site on this page</span>
                  </div>
                )}
              </div>

              <div className="plate__art">
                <p className="plate__caption" data-plate-row>
                  <span>Plate {String(i + 1).padStart(2, "0")}</span>
                  <span>{plate.link ? plate.link.label : "8 sites, one backend"}</span>
                </p>
                <figure className="plate__frame">
                  <span className="plate__shot" data-depth="0.32">
                    <Image
                      src={plate.image.src}
                      alt={plate.image.alt}
                      width={1920}
                      height={1200}
                      sizes="(min-width: 1000px) 56vw, 100vw"
                      priority={i === 0}
                      quality={72}
                    />
                  </span>
                </figure>
              </div>
            </article>
          ))}
        </div>

        <div className="plates__meter" aria-hidden="true">
          <span className="meta">Plates</span>
          <span className="plates__track">
            <span className="plates__fill" ref={fill} />
          </span>
          <span className="plates__ticks">
            {plates.map((plate, i) => (
              <span className={`plates__tick${i === 0 ? " is-on" : ""}`} key={plate.id}>
                {String(i + 1).padStart(2, "0")}
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
}
