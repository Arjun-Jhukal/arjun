import BootstrapIcon from "@/Icons/Bootstrap";
import GitIcon from "@/Icons/Git";
import JavascriptIcon from "@/Icons/Javascript";
import NextIcon from "@/Icons/Next";
import ReactIcon from "@/Icons/React";
import SassIcon from "@/Icons/Sass";
import React from "react";
import Tooltip from "../../molecules/tooltip";

import "./skill.scss";
import HtmlIcon from "@/Icons/Html";

export default function Skills() {
  const skillsData = [
    {
      tooltipMessage: "HTML",
      icon: <HtmlIcon />,
    },
    {
      tooltipMessage: "SCSS",
      icon: <SassIcon />,
    },
    {
      tooltipMessage: "Javascript",
      icon: <JavascriptIcon />,
    },
    {
      tooltipMessage: "Bootstrap",
      icon: <BootstrapIcon />,
    },
    {
      tooltipMessage: "GitHub",
      icon: <GitIcon />,
    },
    {
      tooltipMessage: "Next Js",
      icon: <NextIcon />,
    },
    {
      tooltipMessage: "React Js",
      icon: <ReactIcon />,
    },
  ];
  return (
    <section className="skills section__gap bg-black-100">
      <div className="container">
        <div className="section__title ">
          <h2 className="uppercase pb-[60px] ">Toolkit</h2>
        </div>
        <div className="skills__list flex justify-start items-center flex-wrap">
          {skillsData.map((skill, index) => (
            <div className="skills__list-item" key={skill.tooltipMessage + index.toString()}>
              <Tooltip message={skill.tooltipMessage}>{skill.icon}</Tooltip>
            </div>
          ))}
          <div className="skills__list-item">
            <Tooltip message="Coming Soon">
              <p className="empty">
                <span>Uploading</span>
              </p>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}
