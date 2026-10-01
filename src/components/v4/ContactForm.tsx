"use client";

import { useState } from "react";
import { person } from "@/content/site";

/**
 * No backend on this site, and inventing one would be the wrong call for a static
 * page — so the form composes a mail draft. It still validates, and it still tells
 * you what it did, which is more than a POST into a void would.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = String(data.get("name") || "").trim();
        const email = String(data.get("email") || "").trim();
        const message = String(data.get("message") || "").trim();

        const subject = encodeURIComponent(`Project enquiry — ${name || "website"}`);
        const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
        window.location.href = `mailto:${person.email}?subject=${subject}&body=${body}`;
        setSent(true);
      }}
    >
      <div className="field">
        <label htmlFor="cf-name">Your name</label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" />
      </div>

      <div className="field">
        <label htmlFor="cf-email">Email</label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" />
      </div>

      <div className="field">
        <label htmlFor="cf-message">What are you building?</label>
        <textarea id="cf-message" name="message" required rows={4} />
      </div>

      <div>
        <button className="btn" type="submit" data-magnetic>
          <span className="btn__label">Send message</span>
          <svg className="btn__arrow" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <path d="M1 9 9 1M9 1H3M9 1v6" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>
      </div>

      <p className="form__note" role="status">
        {sent
          ? "Your mail client should be open with the message ready. If it is not, write to " +
            person.email +
            " directly."
          : "This opens your mail app with the message filled in — nothing is stored here."}
      </p>
    </form>
  );
}
