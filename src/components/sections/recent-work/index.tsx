import Link from "next/link";

import "./recent-work.scss";
import Image from "next/image";

export default function RecentWork() {
  const relatedProject = [
    {
      title: "News Portal",
      techUsed: ["HTML", "Bootstrap", "Javascript"],
      liveLink: "#",
      sourceCode: "#",
      brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
      image: {
        url: "/project-04.jpeg",
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
        url: "/project-01.jpg",
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
      title: "PTE Voucher Booking",
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
      title: "E-Commerce",
      techUsed: ["HTML", "Bootstrap", "Javascript"],
      liveLink: "#",
      sourceCode: "#",
      brief: "An e-commerce website with a focus on HTML, CSS, Bootstrap, and JavaScript.",
      image: {
        url: "/project-04.jpeg",
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
                      <Link href={"#"} className="btn btn__outline">
                        Live Site
                      </Link>
                      <Link href={"#"} className="btn btn__filled">
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
