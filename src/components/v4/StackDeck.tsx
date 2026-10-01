"use client";

import { useEffect, useRef } from "react";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/motion";
import { layers } from "@/content/site";

const LEVEL_LABEL: Record<string, string> = {
  daily: "every day",
  strong: "deep",
  growing: "newest ground",
};

/**
 * The second pin: six layers dealt like sheets off a press. Each new layer rises
 * over the one before, which recedes rather than disappearing — so you can always
 * see that there is a stack and not a slideshow.
 *
 * Nested inside each layer's own slice: its chips stagger in. Same master
 * timeline, same scrub.
 */
export default function StackDeck() {
  const section = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const deck = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;

    const viewportEl = viewport.current;
    const deckEl = deck.current;
    if (!viewportEl || !deckEl) return;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 899px)", () => {
      // on a phone the deck is just a list; reveal each card as it arrives
      gsap.utils.toArray<HTMLElement>(".layer", deckEl).forEach((card) => {
        gsap.from(card, {
          y: 26,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 86%" },
        });
      });
    });

    mm.add("(min-width: 900px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".layer", deckEl);
      const last = cards.length - 1;
      if (last < 1) return;

      const pips = gsap.utils.toArray<HTMLElement>(".stack__pip", section.current!);
      let current = -1;
      const setActive = (index: number) => {
        if (index === current) return;
        current = index;
        pips.forEach((pip, i) => pip.classList.toggle("is-on", i <= index));
      };

      /*
        * Waiting sheets are parked a full viewport down, not one card-height
        * down. At 104% of their own height their headings sat in the lower half
        * of the screen and read as a second, half-finished card — the next layer
        * was legible long before it was its turn.
        */
      gsap.set(cards, {
        y: (i) => (i === 0 ? 0 : window.innerHeight),
        rotate: (i) => (i === 0 ? 0 : 1.4),
        scale: (i) => (i === 0 ? 1 : 1),
        zIndex: (i) => i + 1,
      });

      const master = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: viewportEl,
          start: "top top",
          end: () => `+=${window.innerHeight * last * 0.85}`,
          pin: true,
          anticipatePin: 1,
          // refreshed after the plates pin above it, before everything below
          refreshPriority: 1,
          scrub: 1.1,
          invalidateOnRefresh: true,
          onUpdate: (self) => setActive(Math.round(self.progress * last)),
          onRefresh: (self) => setActive(Math.round(self.progress * last)),
        },
      });

      cards.forEach((card, i) => {
        const items = gsap.utils.toArray<HTMLElement>(".chip", card);

        if (i > 0) {
          // the arriving sheet — a long tail, so it settles rather than snaps
          master.to(card, { y: 0, rotate: 0, duration: 1, ease: "power3.out" }, i - 1);
          // the one it covers steps back instead of vanishing
          master.to(
            cards[i - 1],
            { y: -30, scale: 0.94, opacity: 0.3, duration: 1, ease: "power2.inOut" },
            i - 1
          );
        }

        if (items.length) {
          master.fromTo(
            items,
            { y: 12, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.45, stagger: 0.035, ease: "power2.out" },
            Math.max(0, i - 0.8)
          );
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="stack" className="stack" data-tone="ink" ref={section}>
      <div className="sheet" style={{ paddingTop: "clamp(4rem, 7vw, 7rem)" }}>
        <div className="runner">
          <span className="runner__no">05</span>
          <span className="runner__name">The stack — part by part</span>
          <span className="runner__trail">{layers.length} layers</span>
        </div>
      </div>

      <div className="stack__viewport" ref={viewport}>
        <div className="sheet">
          <div className="stack__deck" ref={deck}>
            {layers.map((layer) => (
              <article className="layer" key={layer.code}>
                <div>
                  <p className="layer__code">{layer.code}</p>
                  <p className="layer__tag" data-level={layer.level}>
                    {LEVEL_LABEL[layer.level]}
                  </p>
                </div>

                <div>
                  <h3 className="layer__title">{layer.title}</h3>
                  <p className="layer__note">{layer.note}</p>
                </div>

                <ul className="layer__items">
                  {layer.items.map((item) => (
                    <li className="chip" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="stack__rail" aria-hidden="true">
            {layers.map((layer, i) => (
              <span className={`stack__pip${i === 0 ? " is-on" : ""}`} key={layer.code} />
            ))}
            <span className="meta">{layers.length} of {layers.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
