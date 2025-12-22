import { projects } from "@/data/projects";
import { techs } from "@/data/techs";

export default function Stats() {
  return (
    <section className="grid grid-cols-3 gap-8 text-center py-16">
      <div>
        <h2 className="text-4xl font-bold">{projects.length}+</h2>
        <p className="text-muted-foreground">Projects</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">{techs.length}</h2>
        <p className="text-muted-foreground">Technologies</p>
      </div>

      <div>
        <h2 className="text-4xl font-bold">400+</h2>
        <p className="text-muted-foreground">Commits</p>
      </div>
    </section>
  );
}
