import About from "@/components/sections/about";
import PageBanner from "@/components/sections/banner";
import Contact from "@/components/sections/contact";
import Experience from "@/components/sections/experience";
import ProjectList from "@/components/sections/projects";
import RecentWork from "@/components/sections/recent-work";
import Skills from "@/components/sections/sills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageBanner />
      <RecentWork />
      {/* <ProjectList /> */}
      <About />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
