import Image from "next/image";
import "./banner.scss";
import Link from "next/link";
import GithubIcon from "@/Icons/Github";
import LinkedInIcon from "@/Icons/LinkedIn";

export default function PageBanner() {
  return (
    <section className="page__banner section__gap ">
      <div className="container">
        <div className="lg:grid lg:grid-cols-5 gap-8 items-center flex flex-col justify-center">
          <div className="lg:col-span-2 lg:order-2 lg:ms-auto">
            <Image
              src="/banner.png"
              alt="Arjun Jhukal - Software Developer | Frontend Developer"
              className="max-w-full h-auto"
              width={384}
              height={345}
            />
          </div>
          <div className="lg:col-span-3 lg:order-1">
            <h1 className="text-primary text-[40px] font-[800] relative inline-block mb-8 ">
              Hello! <br /> <span className=" leading-[1.2]">I'm Arjun Jhukal.</span>
            </h1>
            <p className="text-[24px] text-white lg:max-w-[80%] mb-8">
              A multidisciplinary <span className="text-primary">software developer</span> with a passion for developing something new something
              useful
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
      </div>
    </section>
  );
}
