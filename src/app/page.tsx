import About from "@/components/sections/about";
import PageBanner from "@/components/sections/banner";
import Contact from "@/components/sections/contact";
import ProjectList from "@/components/sections/projects";
import Skills from "@/components/sections/sills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <PageBanner />
      <ProjectList />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
