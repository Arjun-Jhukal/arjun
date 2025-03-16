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
import CssIcon from "@/Icons/CssIcon";
import TypescriptIcon from "@/Icons/TypescriptIcon";
import TailwindCss from "@/Icons/TailwindCss";
import Wordpress from "@/Icons/Wordpress";
import Node from "@/Icons/Node";

export default function Skills() {
	const skillsData = [
		{
			tooltipMessage: "React Js",
			icon: <ReactIcon />,
		},
		{
			tooltipMessage: "Next Js",
			icon: <NextIcon />,
		},
		{
			tooltipMessage: "Typescript",
			icon: <TypescriptIcon />,
		},
		{
			tooltipMessage: "Tailwind",
			icon: <TailwindCss />,
		},
		{
			tooltipMessage: "GitHub",
			icon: <GitIcon />,
		},
		{
			tooltipMessage: "Wordpress",
			icon: <Wordpress />,
		},
		{
			tooltipMessage: "HTML",
			icon: <HtmlIcon />,
		},
		{
			tooltipMessage: "CSS",
			icon: <CssIcon />,
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
			tooltipMessage: "Node",
			icon: <Node />,
		},
	];
	return (
		<section className="skills section__gap bg-black-100" id="skills">
			<div className="container">
				<div className="section__title">
					<h2 className="uppercase text-white">Toolkit</h2>
				</div>
				<div className="skills__list flex justify-start items-stretch flex-wrap">
					{skillsData.map((skill, index) => (
						<div
							className="skills__list-item"
							key={skill.tooltipMessage + index.toString()}>
							<Tooltip message={skill.tooltipMessage}>{skill.icon}</Tooltip>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
