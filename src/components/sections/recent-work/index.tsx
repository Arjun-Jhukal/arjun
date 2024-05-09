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
  ];
  return (
    <section className="recent_work section__gap">
      <div className="section__title ">
        <h2 className="uppercase  text-center pb-[60px] text-[45px] lg:text-[65px] font-[800]">Recent Works</h2>
      </div>
      {relatedProject.length > 0
        ? relatedProject.map((project) => (
            <div className="recent_work_item" key={project.title}>
              <div className="md:grid grid-cols-2 gap-12 items-center">
                <div className="col-span-1 ">
                  <div className="featured__image mb-8 md:mb-0">
                    <Image src={project.image.url} alt={project.image.alt} width={696} height={325} />
                  </div>
                </div>
                <div className="col-span-1 max-w-[550px]">
                  <h3 className="text-[30px] font-[800] text-primary mb-8 uppercase">{project.title}</h3>
                  <p className="text-white mb-8">{project.brief}</p>

                  <ul className="flex justify-start items-center gap-8 mb-8">
                    {project.techUsed.map((tech) => (
                      <li key={tech} className="capitalize text-[22px] text-white uppercase">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex justify-start items-center gap-8 ">
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
          ))
        : ""}
    </section>
  );
}
