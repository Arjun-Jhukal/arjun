import Link from "next/link";
import { Fragment } from "react";

/**
 * Renders copy that carries [label](/path) links, **bold** runs and `code`. Internal
 * paths become <Link>; anything absolute opens in a new tab. This is how every
 * paragraph in /content links sideways without the data knowing about React.
 */
const TOKEN = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`/g;

export default function Rich({ text }: { text: string }) {
  const out: React.ReactNode[] = [];
  let last = 0;
  let m: RegExpExecArray | null;
  TOKEN.lastIndex = 0;
  while ((m = TOKEN.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[4]) {
      out.push(<code key={m.index}>{m[4]}</code>);
    } else if (m[3]) {
      out.push(<strong key={m.index}>{m[3]}</strong>);
    } else if (m[2].startsWith("/")) {
      out.push(
        <Link key={m.index} href={m[2]} className="inline-link">
          {m[1]}
        </Link>
      );
    } else {
      out.push(
        <a key={m.index} href={m[2]} className="inline-link" target="_blank" rel="noopener">
          {m[1]}
        </a>
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <Fragment>{out}</Fragment>;
}
