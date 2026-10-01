import Image from "next/image";

import {
  person,
  figures,
  process,
  included,
  roles,
  education,
} from "@/content/site";

import Chrome from "@/components/v4/Chrome";
import Clock from "@/components/v4/Clock";
import Marquee from "@/components/v4/Marquee";
import Plates from "@/components/v4/Plates";
import Reel from "@/components/v4/Reel";
import Services from "@/components/v4/Services";
import Devanagari from "@/components/v4/Devanagari";
import Archive from "@/components/v4/Archive";
import StackDeck from "@/components/v4/StackDeck";
import ContactForm from "@/components/v4/ContactForm";

export default function Page() {
  return (
    <>
      <a className="skip" href="#top">
        Skip to content
      </a>

      <Chrome />

      <main>
        {/*
          The dock holds the masthead and the reel together. The masthead is
          sticky inside it, so the reel rides up over a hero that stays put —
          and the masthead releases the moment the dock ends, instead of
          hanging around behind every section below.
        */}
        <div className="dock">
        {/* ------------------------------------------------------- masthead */}
        <section id="top" className="masthead">
          <Devanagari
            variant="masthead"
            className="masthead__deva"
            trigger="#top"
          />

          <div className="sheet" data-hero-fade>
            <div className="masthead__kicker">
              <span className="status">{person.available}</span>
              <span className="meta">
                {person.role} · {person.stack}
              </span>
              <span className="meta">{person.coords}</span>
              <Clock />
            </div>

            <div className="masthead__grid">
              <div>
                <h1 className="display masthead__title" data-split>
                  Arjun
                  <br />
                  <em>Jhukal</em>
                </h1>

                <p className="lede" data-reveal>
                  {person.standfirst}
                </p>

                <div className="masthead__actions" data-reveal data-reveal-children>
                  <a className="btn" href="#work" data-magnetic>
                    <span className="btn__label">See the plates</span>
                    <svg className="btn__arrow" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                      <path d="M1 1v8M1 9h8M1 9 9 1" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                  </a>
                  <a className="btn btn--ghost" href="#contact" data-magnetic>
                    <span className="btn__label">Get in touch</span>
                  </a>
                  <a className="btn btn--ghost" href="/cv" data-magnetic>
                    <span className="btn__label">CV</span>
                  </a>
                </div>
              </div>

              <figure className="masthead__portrait">
                <Image
                  src="/profile.jpg"
                  alt={`${person.name}, web developer, Kathmandu`}
                  width={1200}
                  height={1600}
                  priority
                  sizes="(min-width: 1000px) 340px, 0px"
                  data-parallax="0.1"
                />
                <figcaption>
                  {person.city} · {person.year}
                </figcaption>
              </figure>
            </div>

            <dl className="figures">
              {figures.map((figure, i) => (
                <div className="figure" key={figure.label}>
                  <dt className="figure__no">F_{String(i + 1).padStart(2, "0")}</dt>
                  <dd>
                    <span className="figure__value">
                      <span data-count={figure.value} data-suffix="">
                        {figure.value}
                      </span>
                      {figure.suffix ? <sup>{figure.suffix}</sup> : null}
                    </span>
                    <span className="figure__label">{figure.label}</span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className="scroll-cue meta" aria-hidden="true">
              <span className="scroll-cue__line" />
              Scroll
            </p>
          </div>
        </section>

        {/* --------------------------------------------------------- showreel */}
        <Reel />
        </div>

        <Marquee />

        {/* -------------------------------------------------- plates (pin 1) */}
        <Plates />

        {/* ------------------------------------------- services (sticky split) */}
        <Services />

        {/* -------------------------------------------------------- archive */}
        <section id="archive" className="band">
          <div className="sheet">
            <div className="runner">
              <span className="runner__no">04</span>
              <span className="runner__name">The archive — everything else</span>
              <span className="runner__trail">Open a row</span>
            </div>

            <h2 className="statement" data-scrub-words style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
              {"Internal tools, news portals, a broadcast overlay, and a long line of WordPress builds that paid for the lessons."
                .split(" ")
                .map((word, i) => (
                  <span className="w" key={i}>
                    {word}
                  </span>
                ))}
            </h2>

            <Archive />
          </div>
        </section>

        {/* --------------------------------------------------- stack (pin 2) */}
        <StackDeck />

        {/* -------------------------------------------------------- process */}
        <section id="process" className="band process">
          <div className="sheet">
            <div className="runner">
              <span className="runner__no">06</span>
              <span className="runner__name">Request a quote</span>
              <span className="runner__trail">Free first call</span>
            </div>

            <p className="lede" data-reveal style={{ marginBottom: "clamp(2.5rem, 5vw, 4rem)" }}>
              A free first conversation, a written scope with a number on it, then a preview
              URL you can watch the build happen on.
            </p>

            <div className="process__grid">
              {process.map((step) => (
                <article className="step" data-step key={step.step}>
                  <span className="step__dot" aria-hidden="true" />
                  <span className="step__no">
                    {step.step} · {step.name}
                  </span>
                  <h3 className="step__title">{step.title}</h3>
                  <p className="step__body">{step.body}</p>
                </article>
              ))}
            </div>

            {/* the commercial argument, set as a list rather than a card grid */}
            <div className="included">
              <div className="included__head">
                <p className="meta meta--spot">What a build includes</p>
                <h3 className="included__title" data-split>
                  You are not paying me to start from an empty folder.
                </h3>
              </div>

              <ol className="included__list">
                {included.map((item) => (
                  <li className="included__item" key={item.no}>
                    <span className="included__no">{item.no}</span>
                    <div>
                      <h4 className="included__name">{item.title}</h4>
                      <p className="included__body">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- about */}
        <section id="about" className="band">
          <div className="sheet">
            <div className="runner">
              <span className="runner__no">07</span>
              <span className="runner__name">Colophon — who set this</span>
              <span className="runner__trail">{person.city}</span>
            </div>

            <div className="about__grid">
              <figure className="about__portrait" data-reveal>
                <Image
                  src="/profile.jpg"
                  alt={`${person.name} at work`}
                  width={1200}
                  height={1600}
                  sizes="(min-width: 1000px) 420px, 100vw"
                  data-parallax="0.08"
                />
              </figure>

              <div>
                <p className="about__namaste" data-reveal>
                  नमस्ते
                </p>

                <div className="about__copy" data-reveal data-reveal-children>
                  <p>
                    I am a web developer in Kathmandu. I take a site from the content model
                    through to the thing your customers load on a phone — and I spend most of
                    my arguments defending one idea: that nobody should need a developer to fix
                    a typo.
                  </p>
                  <p>
                    Four years in, I have worked the whole arc. QA first, so I learned how
                    things break. Then WordPress, which taught me what editors actually do with
                    a site once you hand it over. Then React applications. Now a multi-tenant
                    CMS with eight sites running on it, which is the version of that lesson I
                    would build again.
                  </p>
                  <p>
                    What that means for a project: you get the pages, the dashboard behind
                    them, and the API in between, from one person. Next.js, React and WordPress
                    are where I am quick. Node, Express and Fastify are newer ground — I write
                    the endpoints my sites need on them, and I would rather say that plainly
                    than let you find out later.
                  </p>
                  <p>
                    I also write on my own blog, mostly to keep a publishing pipeline in my own
                    hands and find out where it hurts before a client does.
                  </p>
                </div>

                <div className="about__sign">
                  <span className="meta">{person.name}</span>
                  <span className="meta">{person.city}</span>
                  <span className="meta">{person.languages}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------ log */}
        <section id="experience" className="band">
          <div className="sheet">
            <div className="runner">
              <span className="runner__no">08</span>
              <span className="runner__name">The log — where it was built</span>
              <span className="runner__trail">{roles.length} roles</span>
            </div>

            <div className="log" data-spine>
              <span className="log__spine" aria-hidden="true">
                <span data-spine-fill />
              </span>

              {roles.map((role) => (
                <article className="entry" key={role.hash}>
                  <span className="entry__dot" aria-hidden="true" />
                  <p className="entry__when">
                    <b>{role.period}</b>
                    {role.duration} · {role.hash}
                  </p>
                  <div>
                    <h3 className="entry__role">{role.title}</h3>
                    <p className="entry__org">{role.org}</p>
                    <p className="entry__body">{role.body}</p>
                  </div>
                  <ul className="entry__tags">
                    {role.tags.map((tag) => (
                      <li className="chip" key={tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- credentials */}
        <section id="education" className="band band--tight">
          <div className="sheet">
            <div className="runner">
              <span className="runner__no">09</span>
              <span className="runner__name">Credentials</span>
              <span className="runner__trail">Nepal</span>
            </div>

            <div data-reveal data-reveal-children>
              {education.map((item) => (
                <div className="cred" key={item.code}>
                  <span className="meta">{item.code}</span>
                  <span className="cred__sigil" aria-hidden="true">
                    {item.sigil}
                  </span>
                  <div>
                    <h3 className="cred__title">{item.title}</h3>
                    <p className="cred__org">{item.org}</p>
                  </div>
                  <span className="meta">
                    {item.period} · {item.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- contact */}
        <section id="contact" className="band contact" data-tone="ink">
          <Devanagari variant="contact" className="contact__deva" trigger="#contact" />

          <div className="sheet">
            <div className="runner">
              <span className="runner__no">10</span>
              <span className="runner__name">Contact — {person.available}</span>
              <span className="runner__trail">{person.coords}</span>
            </div>

            <div className="contact__grid">
              <div>
                <h2 className="contact__title" data-split>
                  You read to the <em>colophon.</em> Let&apos;s build the next one.
                </h2>

                <p className="body-copy" data-reveal>
                  If you need a website built properly — or you have one whose content has
                  outgrown its codebase — that is exactly the problem I like. The first call is
                  free and you get a written scope with a number on it before anything is
                  built. Coffee in Kathmandu, or a call across time zones.
                </p>

                <dl className="contact__lines" data-reveal data-reveal-children>
                  <div className="contact__line">
                    <dt>Email</dt>
                    <dd>
                      <a className="ul" href={`mailto:${person.email}`}>
                        {person.email}
                      </a>
                    </dd>
                  </div>
                  <div className="contact__line">
                    <dt>Phone</dt>
                    <dd>
                      <a className="ul" href={`tel:${person.phoneHref}`}>
                        {person.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="contact__line">
                    <dt>Based in</dt>
                    <dd>{person.city}</dd>
                  </div>
                  <div className="contact__line">
                    <dt>Elsewhere</dt>
                    <dd>
                      {person.elsewhere.map((link, i) => (
                        <span key={link.label}>
                          {i > 0 ? " · " : ""}
                          <a className="ul" href={link.href} target="_blank" rel="noreferrer">
                            {link.label}
                          </a>
                        </span>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <div data-reveal>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------- footer */}
        <footer className="contact foot" data-tone="ink" style={{ paddingTop: 0 }}>
          <div className="sheet foot__row">
            <span className="meta">
              © {person.year} {person.name} · {person.issue} · Set and built in Kathmandu
            </span>
            <span className="foot__links">
              <a className="chrome__link" href="#top">
                Back to top
              </a>
              <a className="chrome__link" href="/cv">
                CV
              </a>
            </span>
            <Clock />
          </div>
        </footer>
      </main>
    </>
  );
}
