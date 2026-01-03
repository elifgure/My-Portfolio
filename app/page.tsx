import Hero from "@/components/Hero";
import ProjectsSection from "@/components/Projects Section";
import Stats from "@/components/Stats";
import Technologies from "@/components/Technologies";
import Tools from "@/components/Tools";

export default function Home() {
  return (
    <main>
      <Hero />
      <Technologies />
      <Tools />
      <ProjectsSection />
      <Stats />
    </main>
  );
}
