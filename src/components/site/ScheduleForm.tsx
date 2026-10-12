"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { waLink, mailLink } from "@/content/contact";
import { Dropdown, DatePicker, Slots } from "./Pickers";

type Option = { slug: string; name: string; kind: string };

const TIMES = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

/**
 * The site is static, so there is no server to POST a booking to. Instead the
 * form composes the request and hands it to WhatsApp or email, already written.
 * Nothing can fail silently: the visitor sees the message before it is sent.
 */
export default function ScheduleForm({ products }: { products: Option[] }) {
  const params = useSearchParams();
  const preset = params.get("product") ?? "";
  const [product, setProduct] = useState(products.some((p) => p.slug === preset) ? preset : "");
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [mode, setMode] = useState("Google Meet");
  const [notes, setNotes] = useState("");

  const productName = products.find((p) => p.slug === product)?.name;
  const message = useMemo(() => {
    const lines = [
      `Hi Arjun, I'd like to ${productName ? `book a demo of ${productName}` : "schedule a meeting"}.`,
      name && `Name: ${name}`,
      business && `Business: ${business}`,
      date &&
        `Preferred date: ${new Date(date + "T00:00").toLocaleDateString("en-GB", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}`,
      time && `Preferred time: ${time} (Nepal time)`,
      `Meet by: ${mode}`,
      notes && `About the project: ${notes}`,
    ];
    return lines.filter(Boolean).join("\n");
  }, [productName, name, business, date, time, mode, notes]);

  return (
    <form className="sched" onSubmit={(e) => e.preventDefault()}>
      <div className="field field-wide">
        <Dropdown
          label="What would you like to see?"
          value={product}
          onChange={setProduct}
          options={[
            { value: "", label: "A general chat about my project" },
            ...products.map((p) => ({ value: p.slug, label: `Demo: ${p.name}`, hint: p.kind })),
          ]}
        />
      </div>
      <label className="field">
        <span className="cap">Your name</span>
        <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
      </label>
      <label className="field">
        <span className="cap">Business</span>
        <input value={business} onChange={(e) => setBusiness(e.target.value)} autoComplete="organization" />
      </label>
      <div className="field field-wide">
        <DatePicker label="Preferred date" value={date} onChange={setDate} />
      </div>
      <Slots
        label="Preferred time (Nepal time)"
        value={time}
        onChange={setTime}
        options={[{ value: "", label: "Any time" }, ...TIMES.map((t) => ({ value: t, label: t }))]}
      />
      <fieldset className="field field-wide">
        <legend className="cap">How shall we meet?</legend>
        <div className="seg">
          {["Google Meet", "Phone call", "In person (Kathmandu)"].map((m) => (
            <label key={m} className={mode === m ? "on" : ""}>
              <input type="radio" name="mode" value={m} checked={mode === m} onChange={() => setMode(m)} />
              {m}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="field field-wide">
        <span className="cap">Tell me a little about the project (optional)</span>
        <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
      </label>

      <div className="sched-preview field-wide" aria-live="polite">
        <span className="cap">Your message</span>
        <pre>{message}</pre>
      </div>

      <div className="btn-row field-wide">
        <a className="btn btn-thread-fill btn-thread" href={waLink(message)} target="_blank" rel="noopener">
          Send on WhatsApp
        </a>
        <a
          className="btn btn-line"
          href={mailLink(productName ? `Demo request: ${productName}` : "Meeting request", message)}
        >
          Send by email
        </a>
      </div>
    </form>
  );
}
