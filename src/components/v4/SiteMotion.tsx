"use client";

import { useEffect } from "react";
import {
  gsap,
  ScrollTrigger,
  registerGsap,
  splitWords,
  countUp,
  prefersReducedMotion,
} from "@/lib/motion";

/**
 * Every animation declared with a data attribute rather than owned by a section
 * component. One context, one teardown.
 *
 * Two engines, deliberately split by what they are good at:
 *
 *   IntersectionObserver — one-shot reveals. It answers "is this on screen now?"
 *     from the live rect, so it cannot go stale. ScrollTrigger answers the same
 *     question from a start position computed at refresh time, and on a page with
 *     two pinned sections those positions are only correct if everything refreshes
 *     in the right order. When it did not, headlines simply never appeared.
 *
 *   ScrollTrigger — anything tied to scroll POSITION rather than visibility:
 *     scrubbed timelines, parallax, drawn spines, the sticky bar. That is what it
 *     is for, and none of it is one-shot.
 *
 *   [data-split]            headline, revealed word by word from a mask
 *   [data-reveal]           block fades up when it enters
 *   [data-reveal-children]  its direct children stagger instead
 *   [data-count]            number counts up once
 *   [data-step]             process step whose dot fills on enter
 *   [data-draw]             a rule that draws itself left to right
 *   [data-scrub-words]      paragraph lit word by word as you scroll through it
 *   [data-spine]            vertical line that fills as the section passes
 *   [data-parallax]         subtle y drift, rate from data-parallax
 *   [data-magnetic]         button leans toward the pointer
 */
export default function SiteMotion() {
  useEffect(() => {
    registerGsap();
    document.documentElement.classList.add("is-ready");

    if (prefersReducedMotion()) {
      gsap.set("[data-reveal]", { opacity: 1, y: 0, clearProps: "all" });
      // the sticky bar earns its backdrop from a ScrollTrigger that is never
      // created here, and without one the page scrolls under bare text
      document.querySelector("[data-chrome]")?.classList.add("is-stuck");
      return;
    }

    const ctx = gsap.context(() => {
      /* ===================================================== one-shot reveals */

      const plays = new WeakMap<Element, () => void>();
      const pending: Element[] = [];
      let observer: IntersectionObserver | null = null;

      const onReveal = (el: Element, play: () => void) => {
        plays.set(el, play);
        pending.push(el);
      };

      /* ---------------------------------------------------- split headlines */
      gsap.utils.toArray<HTMLElement>("[data-split]").forEach((el) => {
        const words = splitWords(el);
        if (!words.length) return;
        gsap.set(words, { yPercent: 112 });
        onReveal(el, () =>
          gsap.to(words, {
            yPercent: 0,
            duration: 1.25,
            ease: "expo.out",
            stagger: 0.055,
          })
        );
      });

      /* ----------------------------------------------------------- reveals */
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        const staggerChildren = el.hasAttribute("data-reveal-children");
        const targets = staggerChildren ? (Array.from(el.children) as HTMLElement[]) : [el];

        gsap.set(el, { opacity: 1 });
        gsap.set(targets, { y: 34, opacity: 0 });

        onReveal(el, () =>
          gsap.to(targets, {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            stagger: staggerChildren ? 0.09 : 0,
          })
        );
      });

      /* ---------------------------------------------------------- counters */
      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const to = Number(el.dataset.count || 0);
        const suffix = el.dataset.suffix || "";
        el.textContent = "0" + suffix;
        onReveal(el, () => countUp(el, to, suffix));
      });

      /* ------------------------------------------------------ process dots */
      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el) => {
        onReveal(el, () => el.classList.add("is-in"));
      });

      /* ------------------------------------------------------- drawn rules */
      gsap.utils.toArray<HTMLElement>("[data-draw]").forEach((el) => {
        gsap.set(el, { scaleX: 0 });
        onReveal(el, () => gsap.to(el, { scaleX: 1, duration: 1.5, ease: "expo.out" }));
      });

      /*
       * Observation starts only once the boot overlay has lifted — otherwise
       * everything above the fold animates behind the curtain and is already
       * finished by the time anyone can see it.
       */
      const startObserving = () => {
        if (observer) return;
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              observer?.unobserve(entry.target);
              plays.get(entry.target)?.();
            });
          },
          // a shade inside the bottom edge, so things animate as they arrive
          // rather than the instant a single pixel clears the fold
          { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
        );
        pending.forEach((el) => observer?.observe(el));
      };

      if (document.body.classList.contains("is-booting")) {
        window.addEventListener("aj:ready", startObserving, { once: true });
        // never let a failed boot leave the page blank
        gsap.delayedCall(3.5, startObserving);
      } else {
        startObserving();
      }

      /* ================================================== scroll-driven work */

      /* -------------------------------------------- word-by-word statement */
      gsap.utils.toArray<HTMLElement>("[data-scrub-words]").forEach((el) => {
        const words = Array.from(el.querySelectorAll<HTMLElement>(".w"));
        if (!words.length) return;
        gsap.set(words, { opacity: 0.14 });
        gsap.to(words, {
          opacity: 1,
          ease: "none",
          stagger: 0.5,
          scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 55%", scrub: 0.8 },
        });
      });

      /* ------------------------------------------------------------ spines */
      gsap.utils.toArray<HTMLElement>("[data-spine]").forEach((el) => {
        const fill = el.querySelector<HTMLElement>("[data-spine-fill]");
        if (!fill) return;
        gsap.fromTo(
          fill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top 70%", end: "bottom 80%", scrub: 0.6 },
          }
        );
      });

      /* ---------------------------------------------------------- parallax */
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const rate = Number(el.dataset.parallax || 0.12);
        gsap.fromTo(
          el,
          { yPercent: -rate * 50 },
          {
            yPercent: rate * 50,
            ease: "none",
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      });

      /* --------------------------------------------- opening: zoom through */
      /*
       * The name zooms toward the viewer while the paper behind it dissolves,
       * so the showreel underneath is revealed THROUGH the banner rather than
       * after it. The banner is sticky in CSS, not pinned here — a pin would
       * fight the sticky and both would try to own the same scroll range.
       *
       * Everything is scrubbed against the opening wrapper, whose height is the
       * banner plus the reel, so the whole move is over by the time the banner
       * releases.
       */
      const opening = document.querySelector<HTMLElement>(".opening");
      const masthead = document.querySelector<HTMLElement>("#top");
      const name = masthead?.querySelector<HTMLElement>(".masthead__h1");
      const paper = masthead?.querySelector<HTMLElement>(".masthead__bg");
      const rest = gsap.utils.toArray<HTMLElement>(
        "#top .lede, #top .masthead__actions, #top .scroll-cue"
      );

      if (opening && masthead && name && paper) {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1000px) and (min-height: 700px)", () => {
          gsap
            .timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: opening,
                start: "top top",
                end: "+=90%",
                scrub: 1,
                invalidateOnRefresh: true,
              },
            })
            // the supporting copy clears first, so only the name is left to zoom
            .to(rest, { opacity: 0, y: -24, duration: 0.3 }, 0)
            .to(name, { scale: 7.5, duration: 1 }, 0)
            .to(name, { opacity: 0, duration: 0.45 }, 0.55)
            .to(paper, { opacity: 0, duration: 0.5 }, 0.45);
        });

        // below that, the banner is a plain section: fade it out as it leaves
        mm.add("(max-width: 999px), (max-height: 699px)", () => {
          gsap.to(masthead, {
            opacity: 0.2,
            ease: "none",
            scrollTrigger: { trigger: masthead, start: "top top", end: "bottom top", scrub: 1 },
          });
        });
      }

      /* ----------------------------------------------------- sticky chrome */
      const chrome = document.querySelector<HTMLElement>("[data-chrome]");
      if (chrome) {
        ScrollTrigger.create({
          start: 60,
          /*
           * Both "max" and a maxScroll()-derived end drop the bar's backdrop part
           * way down the page: "max" ends on the last scrollable pixel, and a
           * computed end is frozen from whatever the height was when it was last
           * refreshed — which, with two pins adding thousands of pixels after the
           * fact, is far short. An absolute end past any plausible page height is
           * the honest expression of "from 60px to the end".
           */
          end: 99_999_999,
          onToggle: (self) => chrome.classList.toggle("is-stuck", self.isActive),
        });
      }

      /* -------------------------------------------------- magnetic buttons */
      const cleanups: Array<() => void> = [];
      gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
        const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
        const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });

        const move = (event: PointerEvent) => {
          const rect = el.getBoundingClientRect();
          xTo((event.clientX - (rect.left + rect.width / 2)) * 0.3);
          yTo((event.clientY - (rect.top + rect.height / 2)) * 0.5);
        };
        const leave = () => {
          xTo(0);
          yTo(0);
        };

        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      });

      return () => {
        observer?.disconnect();
        window.removeEventListener("aj:ready", startObserving);
        cleanups.forEach((fn) => fn());
      };
    });

    return () => ctx.revert();
  }, []);

  return null;
}
