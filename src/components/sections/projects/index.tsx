"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./project.scss";

export default function ProjectList() {
  const [activeTab, setActiveTab] = React.useState("react");

  const tabList = [
    {
      key: "html",
      label: "HTML",
    },
    {
      key: "react",
      label: "React Js",
    },
    {
      key: "next",
      label: "Next Js",
    },
    {
      key: "full-stack",
      label: "Full Stack",
    },
    {
      key: "mobile-app",
      label: "Mobile App",
    },
  ];

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.25,
          infinite: false,
        },
      },
      //   {
      //     breakpoint: 992,
      //     settings: {
      //       slidesToShow: 2,
      //     },
      //   },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="projects section__gap">
      <div className="container">
        <div className="section-title text-center mb-4">
          <h2>Projects</h2>
        </div>
        <div className="project__wrapper">
          <ul className="flex justify-center align-center flex-wrap gap-4  mb-8">
            {tabList?.map((tab) => (
              <li key={tab.key}>
                <button
                  className={tab.key === activeTab ? "active" : ""}
                  onClick={() => {
                    setActiveTab(tab.key);
                  }}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="project__tab__items">
            <Slider {...settings}>
              <div className="project__tab__item">
                <div className="project__tab__item-image">
                  <Image src={"/Rectangle 1.png"} alt="" width={480} height={300} className="max-w-full h-auto" />
                </div>
                <div className="project__tab__item-text">
                  <span>HTML</span>
                  <h3>Cleaning Firm</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nihil.</p>
                  <div className="flex justify-start align-center gap-12">
                    <Link href={"#"} className="btn btn__filled">
                      Source Code
                    </Link>
                    <Link href={"#"} className="btn btn__outline">
                      Live Site
                    </Link>
                  </div>
                </div>
              </div>
              <div className="project__tab__item">
                <div className="project__tab__item-image">
                  <Image src={"/Rectangle 1.png"} alt="" width={480} height={300} className="max-w-full h-auto" />
                </div>
                <div className="project__tab__item-text">
                  <span>HTML</span>
                  <h3>Cleaning Firm</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nihil.</p>
                  <div className="flex justify-start align-center gap-12">
                    <Link href={"#"} className="btn btn__filled">
                      Source Code
                    </Link>
                    <Link href={"#"} className="btn btn__outline">
                      Live Site
                    </Link>
                  </div>
                </div>
              </div>
              <div className="project__tab__item">
                <div className="project__tab__item-image">
                  <Image src={"/Rectangle 1.png"} alt="" width={480} height={300} className="max-w-full h-auto" />
                </div>
                <div className="project__tab__item-text">
                  <span>HTML</span>
                  <h3>Cleaning Firm</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nihil.</p>
                  <div className="flex justify-start align-center gap-12">
                    <Link href={"#"} className="btn btn__filled">
                      Source Code
                    </Link>
                    <Link href={"#"} className="btn btn__outline">
                      Live Site
                    </Link>
                  </div>
                </div>
              </div>
              <div className="project__tab__item">
                <div className="project__tab__item-image">
                  <Image src={"/Rectangle 1.png"} alt="" width={480} height={300} className="max-w-full h-auto" />
                </div>
                <div className="project__tab__item-text">
                  <span>HTML</span>
                  <h3>Cleaning Firm</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nihil.</p>
                  <div className="flex justify-start align-center gap-12">
                    <Link href={"#"} className="btn btn__filled">
                      Source Code
                    </Link>
                    <Link href={"#"} className="btn btn__outline">
                      Live Site
                    </Link>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
