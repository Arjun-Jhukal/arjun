import Image from "next/image";
import Link from "next/link";
import Rich from "./Rich";
import type { Faq, Shot, Product, Post } from "@/content/types";
import { demoHref, waLink } from "@/content/contact";
import { topicOf } from "@/content/all-posts";

/**
 * Gallery frames. With no `src` a frame draws itself — browser chrome (or a
 * phone), skeleton lines and the caption — so the layout is final today and a
 * screenshot drops in later by setting `src` in the content file.
 */
export function Gallery({ shots, title }: { shots: Shot[]; title: string }) {
  return (
    <div className="gallery">
      {shots.map((s, i) => (
        <figure key={s.caption} className={`frame frame-${s.shape ?? "wide"}`} data-reveal>
          <div className="frame-screen">
            {s.src && s.shape === "phone" ? (
              /* a handset with the capture's own 390×844 proportions, so the
                 mobile screenshot is shown whole — never cropped or stretched */
              <div className="phone">
                <Image src={s.src} alt={`Screenshot of ${s.alt}`} width={780} height={1688} sizes="280px" />
              </div>
            ) : s.src ? (
              <Image src={s.src} alt={`Screenshot of ${s.alt}`} fill sizes="(max-width: 800px) 100vw, 50vw" />
            ) : (
              <div className="frame-draw" role="img" aria-label={`${title}: ${s.alt}`}>
                <span className="frame-bar">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="frame-lines">
                  <b style={{ width: `${62 - i * 7}%` }} />
                  <b style={{ width: "38%" }} />
                  <b className="frame-block" />
                  <b style={{ width: `${48 + i * 5}%` }} />
                </span>
                <span className="frame-no">{String(i + 1).padStart(2, "0")}</span>
              </div>
            )}
          </div>
          <figcaption>{s.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/**
 * FAQ as a WhatsApp-style thread: the visitor asks on the right, Arjun answers
 * on the left. Everything is expanded — the answers are the content Google and
 * the FAQ schema read — and the thread ends in a composer that opens WhatsApp.
 */
export function FaqList({ faqs, topic }: { faqs: Faq[]; topic?: string }) {
  if (!faqs.length) return null;
  const ask = topic ? `Hi Arjun, I have a question about ${topic}: ` : "Hi Arjun, I have a question: ";
  return (
    <div className="chat-wrap">
      <aside className="chat-side" data-reveal>
        <span className="chat-avatar chat-avatar-lg" aria-hidden>
          AJ
        </span>
        <p className="chat-side-title">Asked on WhatsApp, answered here.</p>
        <p className="muted">
          These are the questions people actually send me. Yours isn&apos;t here? I usually reply within the hour.
        </p>
      </aside>
      <div className="chat" role="list">
        <p className="chat-day" aria-hidden>
          Today
        </p>
        {faqs.map((f, i) => (
          <div key={f.q} className="chat-pair" role="listitem" data-reveal>
            <div className="msg msg-q">
              <h3>{f.q}</h3>
              <span className="msg-meta" aria-hidden>
                {String(9 + i).padStart(2, "0")}:{i % 2 ? "41" : "12"} ✓✓
              </span>
            </div>
            <div className="msg msg-a">
              <span className="chat-avatar" aria-hidden>
                AJ
              </span>
              <p>
                <Rich text={f.a} />
              </p>
            </div>
          </div>
        ))}
        <a className="chat-compose" href={waLink(ask)} target="_blank" rel="noopener">
          <span className="chat-compose-field">Type your own question…</span>
          <span className="chat-send" aria-label="Ask on WhatsApp">
            ➤
          </span>
        </a>
      </div>
    </div>
  );
}

/*
 * Product mosaic sizing. Groups of five fill a 6-column grid as
 * [large 4×2][small][small] / [medium][medium]; alternate groups mirror, so
 * the big tile swaps sides down the page. Remainders get shapes that still
 * close the row instead of leaving a hole.
 */
type Size = "l" | "s" | "m" | "w";
function mosaicSizes(n: number): Size[] {
  const out: Size[] = [];
  let left = n;
  while (left >= 5) {
    out.push("l", "s", "s", "m", "m");
    left -= 5;
  }
  const tail: Record<number, Size[]> = { 0: [], 1: ["w"], 2: ["m", "m"], 3: ["l", "s", "s"], 4: ["l", "s", "s", "w"] };
  return [...out, ...tail[left]];
}

/** Products as an image-led mosaic. The name links to the product; the demo
 *  link sits above the stretched link so both stay clickable. */
export function ProductRows({ items, demo = true }: { items: Product[]; start?: number; demo?: boolean }) {
  const sizes = mosaicSizes(items.length);
  let group = -1;
  return (
    <div className="mosaic">
      {items.map((p, i) => {
        const size = sizes[i];
        if (size === "l") group++;
        const shot = p.gallery.find((g) => g.src && g.shape !== "phone");
        const flip = size === "l" && group % 2 === 1;
        return (
          <article
            key={p.slug}
            className={`tile tile-${size}${flip ? " tile-flip" : ""}${shot ? "" : " tile-type"}${i % 3 === 1 && !shot ? " tile-hot" : ""}`}
            data-reveal
          >
            {shot?.src ? (
              <Image
                src={shot.src}
                alt={`Screenshot of ${shot.alt}`}
                fill
                sizes={size === "l" || size === "w" ? "(max-width: 760px) 100vw, 66vw" : "(max-width: 760px) 100vw, 33vw"}
                className="tile-img"
              />
            ) : (
              <span className="tile-word" aria-hidden>
                {p.name}
              </span>
            )}
            <div className="tile-top">
              <span className={`status status-${p.status === "Live" ? "live" : "ok"}`}>{p.status}</span>
            </div>
            <div className="tile-body">
              <span className="cap">{p.kind}</span>
              <h3 className="tile-title">
                <Link href={`/products/${p.slug}`} className="tile-link">
                  {p.name}
                </Link>
              </h3>
              <p className="tile-pitch">{p.headline}</p>
              {demo && (
                <Link href={demoHref(p.slug)} className="tile-demo">
                  Request a demo →
                </Link>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

/**
 * Guides as a magazine spread: a lead story on an ink panel, up to two
 * secondary stories, then a pinboard of the rest in alternating tones.
 */
export function PostMagazine({ posts, lead = true }: { posts: Post[]; lead?: boolean }) {
  if (!posts.length) return null;
  const first = lead ? posts[0] : undefined;
  const rest = lead ? posts.slice(1) : posts;
  const second = lead ? rest.slice(0, 2) : [];
  const board = rest.slice(second.length);
  const date = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  return (
    <div className="mag">
      {first && (
        <div className="mag-top">
          <article className="story story-lead" data-reveal>
            <span className="cap">
              {topicOf(first.slug)} · {first.readMins} min read
            </span>
            <h3 className="story-title">
              <Link href={`/posts/${first.slug}`} className="tile-link">
                {first.title}
              </Link>
            </h3>
            <p className="story-excerpt">{first.excerpt}</p>
            <span className="story-more" aria-hidden>
              Read the guide →
            </span>
          </article>
          {second.length > 0 && (
            <div className="mag-side">
              {second.map((p) => (
                <article key={p.slug} className="story story-second" data-reveal>
                  <span className="cap">
                    {topicOf(p.slug)} · {date(p.date)}
                  </span>
                  <h3 className="story-title">
                    <Link href={`/posts/${p.slug}`} className="tile-link">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="story-excerpt">{p.excerpt}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      )}
      {board.length > 0 && (
        <div className="pinboard">
          {board.map((p, i) => (
            <article key={p.slug} className={`pin pin-${i % 4}`} data-reveal>
              <span className="pin-mins num" aria-hidden>
                {String(i + 1 + (lead ? 3 : 0)).padStart(2, "0")}
              </span>
              <span className="cap">
                {topicOf(p.slug)} · {p.readMins} min
              </span>
              <h3 className="pin-title">
                <Link href={`/posts/${p.slug}`} className="tile-link">
                  {p.title}
                </Link>
              </h3>
              {i % 2 === 0 && <p className="pin-excerpt">{p.excerpt}</p>}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * A typographic tile wall for things without pictures — features, skills.
 * Tiles alternate tone and width so the wall reads as a composition, and each
 * carries a short line of where it is used.
 */
export function TileWall({
  tiles,
}: {
  tiles: { href: string; title: string; body: string; note?: React.ReactNode; mark?: string }[];
}) {
  return (
    <div className="wall">
      {tiles.map((t, i) => (
        <article key={t.href} className={`brick brick-${i % 5}`} data-reveal>
          {t.mark && (
            <span className="brick-mark num" aria-hidden>
              {t.mark}
            </span>
          )}
          <h3 className="brick-title">
            <Link href={t.href} className="tile-link">
              {t.title}
            </Link>
          </h3>
          <p className="brick-body">{t.body}</p>
          {t.note && <div className="brick-note">{t.note}</div>}
        </article>
      ))}
    </div>
  );
}

export function SectionHead({ no, title, aside }: { no?: string; title: string; aside?: React.ReactNode }) {
  return (
    <div className="shead">
      {no && <span className="shead-no num">{no}</span>}
      <h2 className="display-2">{title}</h2>
      {aside && <div className="shead-aside">{aside}</div>}
    </div>
  );
}
