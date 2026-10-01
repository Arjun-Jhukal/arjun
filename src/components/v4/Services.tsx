"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/motion";
import { services } from "@/content/site";

/**
 * Sticky left, scrolling right — the pattern where the copy holds still while its
 * own media runs past it.
 *
 * Each service is its own row with its own sticky copy, rather than one shared
 * panel whose contents swap. That means the swap is `position: sticky` doing the
 * work and not a scroll listener deciding which text to show — nothing to measure,
 * nothing to keep in sync with the two pinned sections above, and it degrades to a
 * plain stack on a phone with no media query fighting any JS.
 *
 * Each row carries two stills so the media column is taller than the copy beside
 * it. With one still there is nothing to stick against and the effect never fires.
 *
 * On top of the vertical pass, each still drifts horizontally inside its own frame
 * — the column reads as moving on both axes at once.
 */
export default function Services() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;
    const sectionEl = section.current;
    if (!sectionEl) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 900px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-shot]", sectionEl).forEach((shot, i) => {
          const img = shot.querySelector<HTMLElement>("[data-shot-img]");
          if (!img) return;

          // alternate the horizontal direction so the column does not list one way
          const dir = i % 2 === 0 ? 1 : -1;
          gsap.fromTo(
            img,
            { yPercent: -6, xPercent: 4.5 * dir },
            {
              yPercent: 6,
              xPercent: -4.5 * dir,
              ease: "none",
              scrollTrigger: {
                trigger: shot,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.1,
              },
            }
          );
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="split" ref={section}>
      <div className="sheet">
        <div className="runner">
          <span className="runner__no">03</span>
          <span className="runner__name">What you can hire me for</span>
          <span className="runner__trail">{services.length} services</span>
        </div>
      </div>

      {services.map((service) => (
        <article className="sheet split__item" key={service.no}>
          <div className="split__copy">
            <p className="meta meta--spot">Service {service.no}</p>

            <h3 className="split__title" data-reveal>
              {service.title}
            </h3>

            <p className="split__lede" data-reveal>
              {service.lede}
            </p>

            <ul className="split__points" data-reveal data-reveal-children>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="split__foot" data-reveal>
              <a className="btn" href="#contact" data-magnetic>
                <span className="btn__label">Request a quote</span>
                <svg className="btn__arrow" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1 9 9 1M9 1H3M9 1v6" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </a>
              <span className="meta">{service.source}</span>
            </div>
          </div>

          <div className="split__media">
            {service.images.map((image, i) => (
              <figure className="split__shot" data-shot key={image.src}>
                <span className="split__shot-inner" data-shot-img>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1280}
                    height={800}
                    sizes="(min-width: 900px) 56vw, 100vw"
                    quality={72}
                  />
                </span>
                <figcaption className="split__shot-cap">
                  <span>
                    {service.no}.{i + 1}
                  </span>
                  <span>{service.source}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
