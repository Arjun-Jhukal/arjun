import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/Icons/Github";
import LinkedInIcon from "@/Icons/LinkedIn";

import "./new-banner.scss";

export default function NewBanner() {
  return (
    <section className="new__banner  flex justify-center items-center section__gap bg-black-100">
      <div className=" md:grid grid-cols-2 items-center gap-8 xl:gap-20">
        <div className="col-span-1 mb-8 md:mb-0">
          <Image src={"/banner-01.jpeg"} alt="Arjun Jhukal - a frontend developer" width={1280} height={1599} />
        </div>
        <div className="col-span-1 new__banner-content pb-[80px] px-4 md:px-0 md:pb-0">
          <h1 className="text-white mb-2">Hello !</h1>
          <h1 className="mb-4 text-white">I am Arjun Jhukal</h1>
          <p className="text-black-300 mb-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis qui vel eum aut at unde incidunt ratione harum, sapiente cumque placeat
            quidem consequuntur dolor rerum quia corporis dolore iusto quisquam.
          </p>

          <div className="flex justify-start items-center gap-6">
            <Link href={"https://github.com/Arjun-Jhukal"} className="hover:scale-105 transition-transform duration-200 ease-in" target="_blank">
              <GithubIcon />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/arjun-jhukal/"}
              className="hover:scale-105 transition-transform duration-200 ease-in"
              target="_blank"
            >
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
