import Hero from "@/components/Hero";
import ProjectsSection from "@/components/Projects Section";
import Stats from "@/components/Stats";
import Technologies from "@/components/Technologies";

export default function Home() {
  return (
    <main>
      <Hero />
      <Technologies />
      <ProjectsSection />
      <Stats />
    </main>
  );
}
