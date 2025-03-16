import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function About() {
	return (
		<section className="about section__gap" id="about">
			<div className="container">
				<div className="section__title ">
					<h2 className="">About Myself</h2>
				</div>
				<p className="mb-4">
					Hello again! Thanks for scrolling this far!!.
				</p>
				<div className="about__brief md:columns-2">
					<p className="mb-8">
						Here’s a little bit about me—I’m a <strong>Web Developer</strong> with <strong>React.js</strong>, <strong>Next.js</strong>, and <strong>WordPress</strong> as my main tech stack. I have worked on a variety of projects, from <strong>e-commerce websites to SaaS platforms and web applications.</strong> I’m always eager for new challenges and opportunities to learn and grow.
					</p>
					<p className="mb-8">I have been part of multiple teams and have worked with various tech stacks. I feel confident working with WordPress, React, and Next.js and have hands-on experience in building and optimizing web applications. Currently, I am looking for a stable career focused on React and Next.js, where I can continue to grow and contribute to impactful projects.</p>
				</div>
				<p className="block">🚀 Let’s build something amazing together!</p>
				<Link
					href={
						"https://drive.google.com/file/d/1Vrw4jljK1t_pkAXytdsbYiF9eqORMc-W/view?usp=sharing"
					}
					target="_blank"
					className="btn btn__outline mt-6">
					Download CV
				</Link>
			</div>
		</section>
	);
}
