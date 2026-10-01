"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.ticker.lagSmoothing(0);

  // a scrubbed, pinned page is almost impossible to debug from the outside, so
  // the two engines are reachable from the console in development only
  if (process.env.NODE_ENV !== "production") {
    (window as unknown as Record<string, unknown>).__gsap = gsap;
    (window as unknown as Record<string, unknown>).__ST = ScrollTrigger;
  }

  registered = true;
}

/** Shared scroll state, written by SmoothScroll and read by anything that needs it. */
export const scrollState = {
  /** px/frame, signed. Marquee reads this to lean with the scroll. */
  velocity: 0,
  progress: 0,
};

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isTouch() {
  if (typeof window === "undefined") return false;
  return !window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

/**
 * Wraps every word of an element in a mask span so it can be revealed from
 * below. Idempotent — a second call on the same element is a no-op.
 */
export function splitWords(el: HTMLElement): HTMLElement[] {
  if (el.dataset.splitDone === "true") {
    return Array.from(el.querySelectorAll<HTMLElement>(".word"));
  }

  const walk = (node: Node): Node[] => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.textContent ?? "";
      if (!text.trim()) return [node.cloneNode(true)];

      const out: Node[] = [];
      // keep the original whitespace so inline markup does not collapse
      text.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          out.push(document.createTextNode(part));
          return;
        }
        const mask = document.createElement("span");
        mask.className = "line";
        mask.style.display = "inline-block";
        mask.style.overflow = "hidden";
        mask.style.verticalAlign = "top";
        // display type is set at line-height 0.88, so a plain overflow:hidden mask
        // shears the descenders off. Pad the mask and pull the padding back out.
        mask.style.paddingBottom = "0.14em";
        mask.style.marginBottom = "-0.14em";

        const word = document.createElement("span");
        word.className = "word";
        word.textContent = part;

        mask.appendChild(word);
        out.push(mask);
      });
      return out;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const src = node as HTMLElement;
      const clone = src.cloneNode(false) as HTMLElement;
      Array.from(src.childNodes).forEach((child) => {
        walk(child).forEach((n) => clone.appendChild(n));
      });
      return [clone];
    }

    return [];
  };

  const children = Array.from(el.childNodes);
  const rebuilt: Node[] = [];
  children.forEach((child) => walk(child).forEach((n) => rebuilt.push(n)));

  el.replaceChildren(...rebuilt);
  el.dataset.splitDone = "true";
  return Array.from(el.querySelectorAll<HTMLElement>(".word"));
}

/** Count-up that respects tabular figures and an optional suffix. */
export function countUp(el: HTMLElement, to: number, suffix: string) {
  const obj = { n: 0 };
  return gsap.to(obj, {
    n: to,
    duration: 1.6,
    ease: "power2.out",
    onUpdate: () => {
      el.textContent = String(Math.round(obj.n)) + suffix;
    },
  });
}

export { gsap, ScrollTrigger };
