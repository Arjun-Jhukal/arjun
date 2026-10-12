/**
 * Renders every share card and the PNG app icons into /public, as plain files.
 *
 *   npm run og        (also runs automatically before `next build`)
 *
 * Why a script and not an /og route: Next 14.1's bundled @vercel/og builds its
 * font path with path.join(import.meta.url, …), which is an invalid URL on
 * Windows — every image route 500s locally, and so would this script through
 * that library. satori + resvg (the same engine, called directly) work on every
 * OS, and the output is static files anyway, which is what this site wants.
 *
 * Cards come from src/lib/og-cards.ts, keyed by flattened page path; pageMeta
 * points each page at /og/<id>.png.
 */
import React from "react";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { ogCards, type OgCard } from "../src/lib/og-cards";

const ROOT = process.cwd();
const font = (f: string) => readFileSync(join(ROOT, "src/assets/fonts", f));
const FONTS = [
  { name: "Bricolage", data: font("BricolageGrotesque.ttf"), weight: 800 as const, style: "normal" as const },
  { name: "Inter", data: font("InterTight.ttf"), weight: 500 as const, style: "normal" as const },
  { name: "Martian", data: font("MartianMono.ttf"), weight: 400 as const, style: "normal" as const },
];

function Card({ card }: { card: OgCard }) {
  const shot = card.shot
    ? `data:image/jpeg;base64,${readFileSync(join(ROOT, "public", card.shot)).toString("base64")}`
    : null;
  const base = card.title.length > 70 ? 54 : card.title.length > 44 ? 64 : 76;
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#111110", color: "#fff", position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "column", padding: "64px 72px", width: shot ? 640 : 1200, height: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 52,
              height: 52,
              background: "#fff",
              color: "#111110",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "Bricolage",
              fontSize: 24,
              borderBottom: "4px solid #e8431a",
            }}
          >
            AJ
          </div>
          <div style={{ fontFamily: "Martian", fontSize: 17, letterSpacing: 2, textTransform: "uppercase", color: "#b9b6ae", display: "flex", maxWidth: shot ? 480 : 1000 }}>
            {card.cap}
          </div>
        </div>
        <div
          style={{
            fontFamily: "Bricolage",
            fontSize: shot ? Math.min(base, 54) : base,
            lineHeight: 1.03,
            letterSpacing: -2,
            marginTop: 44,
            display: "flex",
          }}
        >
          {card.title}
        </div>
        <div style={{ marginTop: "auto", marginBottom: 70, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontFamily: "Inter", fontSize: 24, color: "#e6e3dc", display: "flex" }}>{card.sub}</div>
          <div style={{ fontFamily: "Martian", fontSize: 16, letterSpacing: 1.5, color: "#e8431a", display: "flex" }}>
            ARJUNJHUKAL.COM.NP
          </div>
        </div>
      </div>
      {shot && (
        <div style={{ display: "flex", position: "absolute", right: -40, top: 70, width: 620, height: 400 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              height: "100%",
              background: "#fff",
              borderRadius: 10,
              overflow: "hidden",
              border: "2px solid #3a3936",
            }}
          >
            <div style={{ display: "flex", gap: 8, padding: "10px 14px", background: "#f6f5f1" }}>
              <div style={{ width: 11, height: 11, borderRadius: 6, background: "#cfccc4" }} />
              <div style={{ width: 11, height: 11, borderRadius: 6, background: "#cfccc4" }} />
              <div style={{ width: 11, height: 11, borderRadius: 6, background: "#cfccc4" }} />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
            <img src={shot} width={620} height={388} style={{ objectFit: "cover", objectPosition: "top" }} />
          </div>
        </div>
      )}
    </div>
  );
}

function Icon({ size }: { size: number }) {
  const u = size / 64;
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#111110",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Bricolage",
        fontSize: 30 * u,
        letterSpacing: -1 * u,
      }}
    >
      <div style={{ display: "flex", marginTop: -4 * u }}>AJ</div>
      <div style={{ width: 30 * u, height: 4 * u, background: "#e8431a", marginTop: 2 * u, display: "flex" }} />
    </div>
  );
}

async function png(el: React.ReactElement, width: number, height: number, file: string) {
  const svg = await satori(el, { width, height, fonts: FONTS });
  writeFileSync(file, new Resvg(svg, { fitTo: { mode: "width", value: width } }).render().asPng());
}

async function main() {
  const ogDir = join(ROOT, "public/og");
  const iconDir = join(ROOT, "public/icons");
  mkdirSync(ogDir, { recursive: true });
  mkdirSync(iconDir, { recursive: true });

  const cards = ogCards();
  for (const c of cards) await png(<Card card={c} />, 1200, 630, join(ogDir, `${c.id}.png`));
  for (const s of [180, 192, 512]) await png(<Icon size={s} />, s, s, join(iconDir, `${s}.png`));
  console.log(`og: ${cards.length} share cards, 3 icons`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
