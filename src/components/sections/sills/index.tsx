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
        <div className="featured__project flex justify-center items-center gap-12">
          <div>
            <Tooltip message="Javascript">
              <JavascriptIcon />
            </Tooltip>
          </div>
          <div>
            <Tooltip message="Bootstrap">
              <BootstrapIcon />
            </Tooltip>
          </div>
          <div>
            <Tooltip message="Github">
              <GitIcon />
            </Tooltip>
          </div>
          <div>
            <Tooltip message="Next Js">
              <NextIcon />
            </Tooltip>
          </div>
          <div>
            <Tooltip message="React Js">
              <ReactIcon />
            </Tooltip>
          </div>
          <div>
            <Tooltip message="CSS Pre Processor">
              <SassIcon />
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}
