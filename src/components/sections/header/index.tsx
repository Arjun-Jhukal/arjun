"use client";
import React from "react";
import "./header.scss";
export default function Header() {
  const [menuActive, setMenuActive] = React.useState(false);

  const handleActiveMenuChange = () => {
    setMenuActive((prev) => !prev);
  };
  return (
    <header className="header ">
      <div className="container">
        <nav className="fixed right-4 top-4">
          <button className={`hamburger   w-[25px] h-[20px] relative ${menuActive ? "active" : ""}`} onClick={handleActiveMenuChange}>
            <span className="w-full h-[4px] block rounded-lg bg-primary"></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
