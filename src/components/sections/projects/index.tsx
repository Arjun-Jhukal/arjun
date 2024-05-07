"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./project.scss";
import AngleLeftIcon from "@/Icons/AngleLeft";
import AngleRightIcon from "@/Icons/AngleRight";
import { SingleProjectProps } from "@/interface";

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="prev-btn" onClick={onClick}>
      <AngleLeftIcon />
    </button>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button className="next-btn" onClick={onClick}>
      <AngleRightIcon />
    </button>
  );
};

export default function ProjectList() {
  const [activeTab, setActiveTab] = React.useState("react");
  const [activeProject, setActiveProject] = React.useState<Array<SingleProjectProps | null>>([]);

  React.useEffect(() => {
    setActiveProject(projectData[0].relatedProject);
  }, []);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.25,
          infinite: false,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projectData = [
    {
      id: 1,
      key: "html",
      label: "HTML",
      relatedProject: [
        {
          title: "News Portal",
          techUsed: ["HTML", "Bootstrap", "Javascript"],
          liveLink: "#",
          sourceCode: "#",
          brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
          image: {
            url: "/project-05.png",
            alt: "",
          },
        },
        {
          title: "Sanitation Service Company",
          techUsed: ["HTML", "Bootstrap", "Javascript"],
          liveLink: "#",
          sourceCode: "#",
          brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
          image: {
            url: "/project-01.png",
            alt: "",
          },
        },
        {
          title: "Multipurpose Co-operative",
          techUsed: ["HTML", "Bootstrap", "Javascript"],
          liveLink: "#",
          sourceCode: "#",
          brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
          image: {
            url: "/project-02.png",
            alt: "",
          },
        },
        {
          title: "PTE Voucher Booking",
          techUsed: ["HTML", "Bootstrap", "Javascript"],
          liveLink: "#",
          sourceCode: "#",
          brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
          image: {
            url: "/project-04.png",
            alt: "",
          },
        },
        {
          title: "E-Commerce",
          techUsed: ["HTML", "Bootstrap", "Javascript"],
          liveLink: "#",
          sourceCode: "#",
          brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
          image: {
            url: "/project-03.png",
            alt: "",
          },
        },
      ],
    },
    {
      id: 2,
      key: "react",
      label: "React JS",
      relatedProject: [
        {
          title: "Blogs",
          techUsed: ["React", "Tailwind"],
          liveLink: "#",
          sourceCode: "#",
          brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
        },
        {
          title: "Dashboard",
          techUsed: ["React", "MUI", "Tailwind"],
          liveLink: "#",
          sourceCode: "#",
          brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
        },
        {
          title: "Portfolio",
          techUsed: ["React", "Bootstrap"],
          liveLink: "#",
          sourceCode: "#",
          brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
        },
        {
          title: "Human Resource Information System",
          techUsed: ["React", "Material UI"],
          liveLink: "#",
          sourceCode: "#",
          brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
        },
      ],
    },
    {
      id: 3,
      key: "next",
      label: "Next JS",
      relatedProject: [
        {
          title: "Online Khabar Clone",
          techUsed: ["Next JS", "Tailwind", "Dato CMS"],
          liveLink: "#",
          sourceCode: "#",
          brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
        },
        {
          title: "Personal Portfolio",
          techUsed: ["Next JS", "Tailwind", "Sanity"],
          liveLink: "#",
          sourceCode: "#",
          brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
        },
        {
          title: "Project Scheduler App",
          techUsed: ["Next JS", "Bootstrap"],
          liveLink: "#",
          sourceCode: "#",
          brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
        },
        {
          title: "Exam Preparation System",
          techUsed: ["React", "Material UI"],
          liveLink: "#",
          sourceCode: "#",
          brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
        },
      ],
    },
    {
      id: 4,
      key: "full_stack",
      label: "Full Stack",
      relatedProject: [],
    },
    {
      id: 5,
      key: "mobile_app",
      label: "Mobile App",
      relatedProject: [],
    },
  ];

  console.log(activeProject);

  return (
    <section className="projects section__gap">
      <div className="container">
        <div className="section-title text-center mb-4">
          <h2>Projects</h2>
        </div>
        <div className="project__wrapper">
          <ul className="flex justify-center items-center flex-wrap gap-4 mb-8">
            {projectData?.map((tab) => (
              <li key={tab.key}>
                <button
                  className={tab.key === activeTab ? "active" : ""}
                  onClick={() => {
                    setActiveTab(tab.key);
                    setActiveProject(tab.relatedProject);
                  }}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
          {activeProject.length > 0 ? (
            <div className="project__tab__items">
              <Slider {...settings}>
                {activeProject?.map((project) => (
                  <div className="project__tab__item " key={project?.title}>
                    <div className="md:flex justify-start items-center gap-4">
                      <div className="project__tab__item-image">
                        <Image
                          src={project?.image?.url ? project.image.url : "/project-01.png"}
                          alt=""
                          width={1920}
                          height={450}
                          layout="responsive"
                          objectFit="cover"
                          quality={75}
                          className="max-w-full h-auto"
                        />
                      </div>
                      <div className="project__tab__item-text">
                        <h3>{project?.title}</h3>
                        <p className="hidden md:block">{project?.brief}</p>
                        <div className="flex justify-start items-center gap-4 flex-wrap mb-4">
                          {project?.techUsed.map((tech) => {
                            return <span key={tech}>{tech}</span>;
                          })}
                        </div>
                        <div className="flex flex-col md:flex-row justify-start items-center gap-4 lg:gap-8">
                          {project?.liveLink ? (
                            <Link href={"#"} className="btn btn__outline lg:order-2">
                              Live Site
                            </Link>
                          ) : (
                            ""
                          )}
                          {project?.sourceCode ? (
                            <Link href={"#"} className="btn btn__filled lg:order-1">
                              Source Code
                            </Link>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <div className="empty__project">
              <p className="text-center">Coming Soon</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
