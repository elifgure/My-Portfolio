import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    return (
        <section id="projects" className="min-h-screen bg-[#eff5f3] py-20 px-4 lg:px-8 font-sans">
            <div className="max-w-[1500px] mx-auto">
                <h2 className="text-6xl font-black tracking-tighter text-black mb-16 text-center">
                    Projects<span className="text-[#9F83D4]">.</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
