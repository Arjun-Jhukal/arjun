"use client";
import React, { useState } from "react";

export default function Tooltip({ children, message }: { children: React.ReactElement; message: string }) {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number }>({ top: 0, left: 0 });

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    const parentRect = event.currentTarget.getBoundingClientRect(); // Get parent container's position
    const x = event.clientX - parentRect.left; // Calculate x position relative to parent container
    const y = event.clientY - parentRect.top; // Calculate y position relative to parent container
    setTooltipPosition({ top: y + 15, left: x + 15 });
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
      {children}
      {tooltipVisible && (
        <div
          className="tooltip absolute bg-primary text-white p-2 rounded shadow text-nowrap z-[15]"
          style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
        >
          <p className="text-[12px]">{message}</p>
        </div>
      )}
    </div>
  );
}
