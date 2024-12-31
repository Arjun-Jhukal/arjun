"use client";
import React, { useEffect } from "react";
import GithubIcon from "@/Icons/Github";
import LinkedInIcon from "@/Icons/LinkedIn";
import Link from "next/link";
import UpworkIcon from "@/Icons/upwork";

import "./contact.scss";

export default function Contact() {
  const contactRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contactRef.current?.classList.add("active");
        } else {
          contactRef.current?.classList.remove("active");
        }
      });
    }, { threshold: 0.9 });

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section className="contact py-[140px]" id="contact">
      <div className="container">
        <div className="section-title text-center mb-[60px] max-w-[600px] mx-auto">
          <h2>Let's Connect</h2>
          <p>
            Whether you're looking to collaborate on a project, seek advice, or just want to connect, feel free to reach out!
          </p>
        </div>
        <div className="contact-card" ref={contactRef}>
          <div className="front-face">
            <div className="ff-content">
              <h3>Arjun Jhukal</h3>
              <p>Frontend Developer</p>
            </div>
          </div>
          <div className="back-face flex-col">
            <div className="flex justify-start items-center gap-6 social-links mb-[24px]">
              <Link
                href={"https://github.com/Arjun-Jhukal"}
                className="hover:scale-105 transition-transform duration-200 ease-in"
                target="_blank"
              >
                <GithubIcon />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/arjun-jhukal/"}
                className="hover:scale-105 transition-transform duration-200 ease-in"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href={"https://www.upwork.com/freelancers/~01203b19e827ffa79f?mp_source=share"}
                className="hover:scale-105 transition-transform duration-200 ease-in"
                target="_blank"
              >
                <UpworkIcon />
              </Link>
            </div>
            <ul>
              <li>
                <Link href={"tel:+977 9812767046"}>PH. +977 9812767046</Link>
              </li>
              <li>
                <Link href={"mailto:connectjhukal@gmail.com"}>E-Mail. connectjhukal@gmail.com</Link>
              </li>
              <li>
                <Link href={"https://arjunjhukal.com.np"}>Website. https://arjunjhukal.com.np</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
