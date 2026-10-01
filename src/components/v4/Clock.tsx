"use client";

import { useEffect, useState } from "react";

/**
 * Kathmandu time, NPT (UTC+05:45). Rendered empty on the server and filled after
 * hydration — a server-rendered clock is wrong by definition once it is cached.
 */
export default function Clock() {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      // 5h45m east of UTC, and Nepal has no daylight saving
      const npt = new Date(now.getTime() + (5 * 60 + 45) * 60 * 1000 + now.getTimezoneOffset() * 60 * 1000);
      setTime(
        `${String(npt.getHours()).padStart(2, "0")}:${String(npt.getMinutes()).padStart(2, "0")}`
      );
    };

    tick();
    const id = window.setInterval(tick, 20_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="meta">
      Kathmandu {time} <span style={{ color: "var(--spot)" }}>NPT</span>
    </span>
  );
}
