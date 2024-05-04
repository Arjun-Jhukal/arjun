import React from "react";

export default function Tooltip({ children, message }: { children: React.ReactElement; message: string }) {
  return (
    <div className="tooltip ">
      {children}
      <div className="tooltip__msg">
        <p className="text-[12px]">{message}</p>
      </div>
    </div>
  );
}
