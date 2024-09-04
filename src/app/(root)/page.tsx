import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import NewBanner from "@/components/sections/new-banner";
import RecentWork from "@/components/sections/recent-work";
import Skills from "@/components/sections/sills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NewBanner />
      <RecentWork />
      {/* <ProjectList /> */}
      <About />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}
