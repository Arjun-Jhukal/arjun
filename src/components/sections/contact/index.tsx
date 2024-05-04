import GithubIcon from "@/Icons/Github";
import LinkedInIcon from "@/Icons/LinkedIn";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section className="contact section__gap">
      <div className="container">
        <div className="lg:grid grid-cols-2">
          <div className="col-span-1">
            <h2>Let's Connect</h2>
            <p>If you ever want to make some small talk you can find me on social media </p>
            <div className="flex justify-start items-center gap-6 mt-6">
              <Link href={"https://github.com/Arjun-Jhukal"} className="hover:scale-105 transition-transform duration-200 ease-in" target="_blank">
                <GithubIcon />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/arjun-jhukal/"}
                className="hover:scale-105 transition-transform duration-200 ease-in"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
            </div>
          </div>
          <div className="col-span-1">
            <form>
              <div className="input__field">
                <input type="text" placeholder="Name" />
              </div>
              <div className="input__field">
                <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="input__field">
                <input type="email" placeholder="Email" />
              </div>
              <div className="input__field">
                <textarea cols={30} rows={5} placeholder="Message"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
