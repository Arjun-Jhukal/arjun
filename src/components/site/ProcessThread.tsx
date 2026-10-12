/**
 * The process line: one wavy stroke that draws itself across a row of steps,
 * with a numbered stop popping in above each step in turn. Laid out for
 * `count` equal columns so every stop sits over its column. The draw and the
 * stops are CSS, keyed off `.is-in`, which <Motion> adds on scroll. Hidden on
 * phones, where the steps become a vertical numbered list instead.
 */
export function ProcessThread({ count }: { count: number }) {
  const w = 1200;
  const xs = Array.from({ length: count }, (_, i) => (w / count) * (i + 0.5));
  let d = "M 0 40";
  xs.forEach((x, i) => {
    const prev = i === 0 ? 0 : xs[i - 1];
    d += ` Q ${(prev + x) / 2} ${i % 2 ? 10 : 70}, ${x} 40`;
  });
  d += ` Q ${(xs[xs.length - 1] + w) / 2} ${count % 2 ? 10 : 70}, ${w} 40`;
  return (
    <div className="process" data-reveal-line aria-hidden>
      <svg viewBox={`0 0 ${w} 80`} width="100%" preserveAspectRatio="none" focusable="false">
        <path className="process-ghost" d={d} />
        <path className="process-line" d={d} pathLength={1} />
      </svg>
      {xs.map((x, i) => (
        <span key={x} className="process-stop" style={{ left: `${(x / w) * 100}%`, transitionDelay: `${0.4 + i * 0.25}s` }}>
          {i + 1}
        </span>
      ))}
    </div>
  );
}
