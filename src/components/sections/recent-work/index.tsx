import Link from "next/link";

import "./recent-work.scss";
import Image from "next/image";

export default function RecentWork() {
  const relatedProject = [
    {
      title: "Story Circle",
      techUsed: ["Next Js", "Tailwind", "DatoCMS"],
      liveLink: "https://blog.arjunjhukal.com.np/",
      sourceCode: "https://github.com/Arjun-Jhukal/story-circle",
      brief:
        "Inspired by diverse web sources, the design offers a visually compelling platform to highlight my content creation and presentation abilities.",
      image: {
        url: "/project-04.jpeg",
        alt: "",
      },
    },
    {
      title: "Project Progress Tracker",
      techUsed: ["Next JS", "Tailwind CSS", "Firebase"],
      liveLink: "https://project-progress-tracker.vercel.app/",
      sourceCode: "https://github.com/Arjun-Jhukal/project-progress-tracker",
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
        url: "/project-02.jpg",
        alt: "",
      },
    },
    {
      title: "Dashboard",
      techUsed: ["HTML", "Bootstrap", "Javascript"],
      liveLink: "#",
      sourceCode: "#",
      brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
      image: {
        url: "/project-03.jpg",
        alt: "",
      },
    },
    {
      title: "Online Store 3.O",
      techUsed: ["HTML", "Bootstrap", "Javascript"],
      liveLink: "https://sasto-dukan.vercel.app/",
      sourceCode: "https://github.com/Arjun-Jhukal/sasto-dukan",
      brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
      image: {
        url: "/project-02.png",
        alt: "",
      },
    },
  ];
  return (
    <section className="recent_work section__gap" id="projects">
      <div className="section__title ">
        <h2 className="uppercase pb-[60px] text-center">Recent Works</h2>
      </div>
      {relatedProject.length > 0
        ? relatedProject.map((project, index) => (
            <div className="recent_work_item" key={project.title + index.toString()}>
              <div className="md:grid grid-cols-2 gap-8 lg:gap-20 items-center">
                <div className="col-span-1 ">
                  <div className="featured__image mb-8 md:mb-0">
                    <Image src={project.image.url} alt={project.image.alt} width={1280} height={1706} />
                  </div>
                </div>
                <div className="col-span-1 max-w-[550px]">
                  <div className="recent_work_item-content">
                    <h3 className="mb-8 uppercase">{project.title}</h3>
                    <p className="text-black-300 mb-4">{project.brief}</p>

                    <ul className="flex justify-start items-center flex-wrap gap-x-7 gap-y-3 mb-8">
                      {project.techUsed.map((tech) => (
                        <li key={tech} className="capitalize text-[22px] text-black-100 uppercase">
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col lg:flex-row justify-start items-center gap-8 ">
                      <Link href={project.liveLink} className="btn btn__outline" target="_blank">
                        Live Site
                      </Link>
                      <Link href={project.sourceCode} className="btn btn__filled" target="_blank">
                        Source Code
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : ""}
    </section>
  );
}
