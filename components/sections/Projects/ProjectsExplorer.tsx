"use client";

import { useState } from "react";

import { projects } from "@/data/projects";

import ProjectSidebar from "./ProjectSidebar";
import ProjectCard from "./ProjectCard";

export default function ProjectsExplorer() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <div
      className="
        flex
        flex-col
        gap-8
        md:flex-row
      "
    >
      <ProjectSidebar
        projects={projects}
        selectedProject={selectedProject}
        onSelect={setSelectedProject}
      />

      <ProjectCard project={selectedProject} />
    </div>
  );
}
