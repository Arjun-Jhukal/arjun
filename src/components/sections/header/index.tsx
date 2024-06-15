"use client";
import React from "react";
import "./header.scss";
import Link from "next/link";
import Image from "next/image";
import CloseIcon from "@/Icons/Xmark";

export default function Header() {
  const [menuActive, setMenuActive] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  const mobileMenuRef = React.useRef<HTMLUListElement | null>(null);

  const handleMobileMenuChange = () => {
    setShowMobileMenu((prev) => !prev);
  };

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setShowMobileMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <header className="header bg-black-100 fixed top-0 left-0 right-0 z-10">
      <div className="container">
        <div className="flex justify-between items-center py-4 md:py-0">
          <Link href={"/"}>
            <Image src={"/logo-no-background.png"} priority alt="Arjun Jhukal - Logo" width={50} height={50} />
          </Link>
          <nav className={`fixed top-0 left-0 bottom-0 right-0 md:relative z-10 ${showMobileMenu ? "active" : ""}`}>
            <ul
              className="flex flex-col md:flex-row justify-start md:justify-end items-start md:items-center gap-4 lg:gap-8 bg-black-100 min-h-screen max-w-[320px] p-4 md:p-0 md:min-h-[auto]"
              ref={mobileMenuRef}
            >
              <li className="flex justify-between items-center mb-8 md:hidden">
                <Link href={"/"}>
                  <Image src={"/logo-no-background.png"} priority alt="Arjun Jhukal - Logo" width={50} height={50} />
                </Link>
                <button className="close__icon" onClick={handleMobileMenuChange}></button>
              </li>
              <li>
                <Link href={"/"} className="text-black-300 xl:text-[22px]  inline-block hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"#projects"} className="text-black-300 xl:text-[22px]  inline-block hover:text-primary">
                  Project
                </Link>
              </li>
              <li>
                <Link href={"#about"} className="text-black-300 xl:text-[22px]  inline-block hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href={"#experience"} className="text-black-300 xl:text-[22px]  inline-block hover:text-primary">
                  Experience
                </Link>
              </li>

              <li>
                <Link href={"#skills"} className="text-black-300 xl:text-[22px]  inline-block hover:text-primary">
                  Skills
                </Link>
              </li>
              <li>
                <Link href={"#contact"} className="text-black-300 xl:text-[22px]  inline-block hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <button className={`hamburger md:hidden  w-[25px] h-[20px] relative `} onClick={handleMobileMenuChange}>
            <span className="w-full h-[4px] block rounded-lg bg-primary"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
