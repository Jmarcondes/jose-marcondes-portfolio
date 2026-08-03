import Container from "@/components/layout/Container";

import ProjectsHeader from "./ProjectsHeader";
import ProjectsExplorer from "./ProjectsExplorer";

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <Container>
        <ProjectsHeader />

        <ProjectsExplorer />
      </Container>
    </section>
  );
}
