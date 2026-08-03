import Container from "@/components/layout/Container";

import ProjectsHeader from "./ProjectsHeader";
import ProjectsExplorer from "./ProjectsExplorer";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      {/* Glow */}
      <div
        className="
          absolute
          left-1/2
          top-20
          -z-10
          h-[400px]
          w-[400px]
          -translate-x-1/2
          rounded-full
          bg-primary/10
          blur-[120px]
        "
      />

      <Container>
        <ProjectsHeader />

        <ProjectsExplorer />
      </Container>
    </section>
  );
}
