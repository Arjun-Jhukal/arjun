import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section className="about section__gap">
      <div className="container">
        <div className="lg:grid lg:grid-cols-8 lg:gap-12">
          <div className="col-span-4 text-center lg:order-1 mb-8 mb-lg-0">
            <Image src="/banner.png" alt="" className="max-w-full h-auto rounded-lg " width={828} height={552} />
          </div>
          <div className="col-span-4 mb-8 lg:order-2 ">
            <div className="section__title">
              <h2>About My Journey</h2>
            </div>
            <div className="about__brief">
              <p className="mb-4">Hello again! Thanks for scrolling this far!!.</p>
              <p className="mb-4">Hope you have through some of my project</p>
              <p className="mb-8">
                I&apos;m a Computer Science and Information Technology graduate from Tribhuwan University, Kathmandu, Nepal. With over 2 years of
                industry experience, I&apos;m driven to innovate and deliver exceptional solutions. Feel free to view
                <Link href={"#"} className="text-primary">
                  my projects
                </Link>{" "}
                and delve into{" "}
                <Link href={"#"} className="text-primary">
                  my experience
                </Link>
                .
              </p>
              <Link
                href={"https://drive.google.com/file/d/1Vrw4jljK1t_pkAXytdsbYiF9eqORMc-W/view?usp=sharing"}
                target="_blank"
                className="block text-center lg:inline-block border-[1px] border-solid border-primary text-white py-2 lg:px-12 text-[22px] capitalize hover:bg-primary rounded-[4px]"
              >
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
