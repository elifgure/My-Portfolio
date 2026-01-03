import Hero from "@/components/Hero";
import ProjectsSection from "@/components/Projects Section";
import Stats from "@/components/Stats";
import Technologies from "@/components/Technologies";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Technologies />
      <Tools />
      <ProjectsSection />
      <Contact />
      <Stats />
    </main>
  );
}
