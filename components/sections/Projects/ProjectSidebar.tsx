import ProjectItem from "./ProjectItem";

import { Project } from "@/data/projects";

interface ProjectSidebarProps {
  projects: Project[];
  selectedProject: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectSidebar({
  projects,
  selectedProject,
  onSelect,
}: ProjectSidebarProps) {
  return (
    <aside
      className="
        w-full
        rounded-3xl
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-2xl
        shadow-xl
        p-4
        backdrop-blur-xl
        md:w-72
      "
    >
      <p
        className="
          mb-5
          px-2
          text-xs
          font-semibold
          uppercase
          tracking-[0.2em]
          text-muted-foreground
        "
      >
        Projetos
      </p>

      <div className="space-y-2">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            selected={selectedProject.id === project.id}
            onClick={() => onSelect(project)}
          />
        ))}
      </div>
    </aside>
  );
}
