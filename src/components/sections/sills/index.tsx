import BootstrapIcon from "@/Icons/Bootstrap";
import GitIcon from "@/Icons/Git";
import JavascriptIcon from "@/Icons/Javascript";
import NextIcon from "@/Icons/Next";
import ReactIcon from "@/Icons/React";
import SassIcon from "@/Icons/Sass";
import React from "react";
import Tooltip from "../../molecules/tooltip";

export default function Skills() {
  return (
    <section className="skills section__gap">
      <div className="container">
        <div className="section__header mb-8 text-center">
          <h2>My Toolkit</h2>
        </div>
        <div className="featured__project grid grid-cols-12 gap-8 max-w-[705px] mx-auto">
          <Tooltip message="CSS Pre Processor">
            <div className=" inline-block  text-center py-4 px-4 ">
              <SassIcon />
            </div>
          </Tooltip>
          <Tooltip message="CSS Framework Bootstrap">
            <div className=" inline-block  text-center py-4 px-4 ">
              <BootstrapIcon />
            </div>
          </Tooltip>
          <Tooltip message="Javascript">
            <div className=" inline-block  text-center py-4 px-4 ">
              <JavascriptIcon />
            </div>
          </Tooltip>
          <Tooltip message="React Js">
            <div className=" inline-block  text-center py-4 px-4 ">
              <ReactIcon />
            </div>
          </Tooltip>
          <Tooltip message="Next Js">
            <div className=" inline-block  text-center py-4 px-4 ">
              <NextIcon />
            </div>
          </Tooltip>

          <Tooltip message="Version Control Git">
            <div className=" inline-block  text-center py-4 px-4 ">
              <GitIcon />
            </div>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}
