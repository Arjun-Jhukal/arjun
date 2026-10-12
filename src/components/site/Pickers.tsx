"use client";

import { useEffect, useId, useRef, useState } from "react";

/* Closes a popover on outside click or Escape, and hands focus back to the trigger. */
function usePopover() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return { open, setOpen, root, trigger };
}

type Opt = { value: string; label: string; hint?: string };

/** A listbox dropdown: full keyboard support (arrows, Home/End, Enter, Escape, type-ahead). */
export function Dropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: Opt[];
  onChange: (v: string) => void;
}) {
  const { open, setOpen, root, trigger } = usePopover();
  const id = useId();
  const list = useRef<HTMLUListElement>(null);
  const current = Math.max(0, options.findIndex((o) => o.value === value));
  const [active, setActive] = useState(current);

  /* the highlight is reset in the same event that opens the list, so a key
     pressed straight after opening always starts from the selected row */
  const openList = () => {
    setActive(current);
    setOpen(true);
  };
  useEffect(() => {
    if (open) list.current?.focus({ preventScroll: true });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    /* scroll the list itself, never the page: scrollIntoView would move the
       page under a still pointer and let a hover steal the highlight */
    const ul = list.current;
    const row = ul?.querySelector<HTMLElement>(`[data-i="${active}"]`);
    if (!ul || !row) return;
    if (row.offsetTop < ul.scrollTop) ul.scrollTop = row.offsetTop;
    else if (row.offsetTop + row.offsetHeight > ul.scrollTop + ul.clientHeight)
      ul.scrollTop = row.offsetTop + row.offsetHeight - ul.clientHeight;
  }, [active, open]);

  const choose = (i: number) => {
    onChange(options[i].value);
    setOpen(false);
    trigger.current?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") setActive((a) => Math.min(options.length - 1, a + 1));
    else if (e.key === "ArrowUp") setActive((a) => Math.max(0, a - 1));
    else if (e.key === "Home") setActive(0);
    else if (e.key === "End") setActive(options.length - 1);
    else if (e.key === "Enter" || e.key === " ") choose(active);
    else if (e.key === "Tab") setOpen(false);
    else if (e.key.length === 1) {
      const k = e.key.toLowerCase();
      const i = options.findIndex((o, j) => j > active && o.label.toLowerCase().replace(/^demo: /, "").startsWith(k));
      const wrap = i < 0 ? options.findIndex((o) => o.label.toLowerCase().replace(/^demo: /, "").startsWith(k)) : i;
      if (wrap >= 0) setActive(wrap);
      return;
    } else return;
    e.preventDefault();
  };

  const sel = options[current];
  return (
    <div className={`pick${open ? " is-open" : ""}`} ref={root}>
      <span className="cap" id={`${id}-l`}>
        {label}
      </span>
      <button
        type="button"
        ref={trigger}
        className="pick-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${id}-l ${id}-v`}
        onClick={() => (open ? setOpen(false) : openList())}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault();
            openList();
          }
        }}
      >
        <span id={`${id}-v`} className="pick-value">
          {sel?.label}
          {sel?.hint && <small>{sel.hint}</small>}
        </span>
        <span className="pick-chev" aria-hidden />
      </button>
      {open && (
        <ul
          ref={list}
          className="pick-pop pick-list"
          role="listbox"
          tabIndex={-1}
          aria-labelledby={`${id}-l`}
          aria-activedescendant={`${id}-o${active}`}
          onKeyDown={onKey}
        >
          {options.map((o, i) => (
            <li
              key={o.value}
              id={`${id}-o${i}`}
              data-i={i}
              role="option"
              aria-selected={o.value === value}
              className={i === active ? "is-active" : undefined}
              onMouseMove={() => active !== i && setActive(i)}
              onClick={() => choose(i)}
            >
              <span>
                {o.label}
                {o.hint && <small>{o.hint}</small>}
              </span>
              {o.value === value && <span className="pick-tick" aria-hidden />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const pad = (n: number) => String(n).padStart(2, "0");
const iso = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fromIso = (s: string) => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};
const WEEK = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

/**
 * A month calendar in a popover. Past days are disabled. Arrow keys move by
 * day/week, PageUp/PageDown by month, Enter picks. `today` arrives after mount
 * (the page is prerendered), so the calendar renders only once it is known.
 */
export function DatePicker({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const { open, setOpen, root, trigger } = usePopover();
  const id = useId();
  const grid = useRef<HTMLDivElement>(null);
  const [today, setToday] = useState<Date>();
  const [focus, setFocus] = useState<Date>();

  useEffect(() => {
    const t = new Date();
    setToday(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
  }, []);

  useEffect(() => {
    if (open && today) {
      setFocus(value ? fromIso(value) : today);
    }
  }, [open, today, value]);

  useEffect(() => {
    if (open && focus) grid.current?.querySelector<HTMLElement>(`[data-d="${iso(focus)}"]`)?.focus();
  }, [open, focus]);

  const pickDay = (d: Date) => {
    if (today && d < today) return;
    onChange(iso(d));
    setOpen(false);
    trigger.current?.focus();
  };

  const move = (days: number, months = 0) => {
    if (!focus) return;
    const n = new Date(focus);
    if (months) n.setMonth(n.getMonth() + months);
    n.setDate(n.getDate() + days);
    if (today && n < today) return;
    setFocus(n);
  };

  const onKey = (e: React.KeyboardEvent) => {
    const map: Record<string, () => void> = {
      ArrowRight: () => move(1),
      ArrowLeft: () => move(-1),
      ArrowDown: () => move(7),
      ArrowUp: () => move(-7),
      PageDown: () => move(0, 1),
      PageUp: () => move(0, -1),
      Enter: () => focus && pickDay(focus),
      " ": () => focus && pickDay(focus),
    };
    if (map[e.key]) {
      e.preventDefault();
      map[e.key]();
    }
  };

  const shown = value
    ? fromIso(value).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "long", year: "numeric" })
    : "Pick a date";

  let cells: (Date | null)[] = [];
  if (focus) {
    const first = new Date(focus.getFullYear(), focus.getMonth(), 1);
    const days = new Date(focus.getFullYear(), focus.getMonth() + 1, 0).getDate();
    cells = [
      ...Array.from({ length: first.getDay() }, () => null),
      ...Array.from({ length: days }, (_, i) => new Date(focus.getFullYear(), focus.getMonth(), i + 1)),
    ];
  }
  const atFirstMonth =
    !!today && !!focus && focus.getFullYear() === today.getFullYear() && focus.getMonth() === today.getMonth();

  return (
    <div className={`pick${open ? " is-open" : ""}`} ref={root}>
      <span className="cap" id={`${id}-l`}>
        {label}
      </span>
      <button
        type="button"
        ref={trigger}
        className={`pick-trigger${value ? "" : " is-empty"}`}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-labelledby={`${id}-l ${id}-v`}
        onClick={() => setOpen(!open)}
      >
        <span id={`${id}-v`} className="pick-value">
          {shown}
        </span>
        <span className="pick-cal" aria-hidden />
      </button>
      {open && focus && today && (
        <div className="pick-pop cal" role="dialog" aria-label="Choose a date">
          <div className="cal-head">
            <button
              type="button"
              className="cal-nav"
              aria-label="Previous month"
              disabled={atFirstMonth}
              onClick={() => move(0, -1)}
            >
              ‹
            </button>
            <strong aria-live="polite">
              {focus.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
            </strong>
            <button type="button" className="cal-nav" aria-label="Next month" onClick={() => move(0, 1)}>
              ›
            </button>
          </div>
          <div className="cal-week" aria-hidden>
            {WEEK.map((w) => (
              <span key={w}>{w}</span>
            ))}
          </div>
          <div className="cal-grid" role="grid" ref={grid} onKeyDown={onKey}>
            {cells.map((d, i) =>
              d ? (
                <button
                  key={iso(d)}
                  type="button"
                  role="gridcell"
                  data-d={iso(d)}
                  tabIndex={iso(d) === iso(focus) ? 0 : -1}
                  disabled={d < today}
                  aria-selected={iso(d) === value}
                  aria-label={d.toDateString()}
                  className={[
                    "cal-day num",
                    iso(d) === iso(today) ? "is-today" : "",
                    iso(d) === value ? "is-picked" : "",
                  ].join(" ")}
                  onClick={() => pickDay(d)}
                >
                  {d.getDate()}
                </button>
              ) : (
                <span key={`e${i}`} />
              )
            )}
          </div>
          <div className="cal-foot">
            <button type="button" onClick={() => pickDay(today)}>
              Today
            </button>
            {value && (
              <button
                type="button"
                onClick={() => {
                  onChange("");
                  setOpen(false);
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

/** Time as tappable slots — faster than any dropdown for ten choices. */
export function Slots({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: Opt[];
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="field field-wide">
      <legend className="cap">{label}</legend>
      <div className="slots" role="radiogroup">
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={value === o.value}
            className={`slot num${value === o.value ? " on" : ""}`}
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </fieldset>
  );
}
