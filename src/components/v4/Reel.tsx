"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, registerGsap, prefersReducedMotion } from "@/lib/motion";
import { reel } from "@/content/site";

/**
 * The landing reel.
 *
 * It opens as an inset panel and widens to full bleed as you scroll into it —
 * clip-path rather than scale, so the footage is never distorted while the window
 * onto it grows. The video inside drifts against that window, which is the same
 * three-level idea as the plate rail: page, panel, content.
 *
 * Playback is gated on visibility, not on load. `preload="none"` means the 2 MB
 * file costs nothing until someone actually reaches it, and it pauses the moment
 * it leaves the screen rather than burning battery below the fold.
 */
export default function Reel() {
  const section = useRef<HTMLElement>(null);
  const frame = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [manual, setManual] = useState(false);

  /* ---------------------------------------------------- play when on screen */
  useEffect(() => {
    const el = video.current;
    const host = frame.current;
    if (!el || !host) return;

    // under reduced motion the poster stands in until someone asks for the video
    if (prefersReducedMotion()) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else if (!el.paused) {
          el.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.35 }
    );

    io.observe(host);
    return () => io.disconnect();
  }, [manual]);

  /* ------------------------------------------------- the frame opens outward */
  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;

    const sectionEl = section.current;
    const frameEl = frame.current;
    const videoEl = video.current;
    if (!sectionEl || !frameEl || !videoEl) return;

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: frameEl,
            start: "top bottom",
            end: "top 18%",
            scrub: 1,
          },
        })
        .fromTo(
          frameEl,
          { clipPath: "inset(12% 16% 12% 16% round 18px)" },
          { clipPath: "inset(0% 0% 0% 0% round 0px)" },
          0
        )
        .fromTo(videoEl, { scale: 1.16 }, { scale: 1 }, 0);
    }, section);

    return () => ctx.revert();
  }, []);

  const toggle = () => {
    const el = video.current;
    if (!el) return;
    setManual((v) => !v);
    if (el.paused) {
      el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      el.pause();
      setPlaying(false);
    }
  };

  return (
    <section id="reel" className="reel" data-tone="ink" ref={section}>
      <div className="sheet">
        <div className="runner">
          <span className="runner__no">01</span>
          <span className="runner__name">{reel.kicker}</span>
          <span className="runner__trail">{reel.swapNote}</span>
        </div>

        <div className="reel__head">
          <h2 className="reel__title" data-split>
            {reel.title}
          </h2>
          <p className="body-copy" data-reveal>
            {reel.body}
          </p>
        </div>
      </div>

      <div className="reel__stage">
        <figure className="reel__frame" ref={frame}>
          <video
            ref={video}
            poster={reel.poster}
            muted
            loop
            playsInline
            preload="none"
            disablePictureInPicture
            aria-label={reel.body}
          >
            <source src={reel.src} type="video/mp4" />
          </video>

          <figcaption className="reel__hud">
            <span className="meta">{reel.caption}</span>
            <button className="reel__btn" type="button" onClick={toggle} data-cursor="play">
              <span className={`reel__glyph${playing ? " is-playing" : ""}`} aria-hidden="true" />
              {playing ? "Pause" : "Play"}
            </button>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
