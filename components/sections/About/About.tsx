import Container from "@/components/layout/Container";

import AboutContent from "./AboutContent";
import DeveloperReadme from "./DeveloperReadme";

export default function About() {
  return (
    <section
      id="about"
      className="
                  relative
                  overflow-hidden
                  py-32
                "
    >
      <div
        className="
                    absolute
                    left-1/2
                    top-1/2
                    -z-10
                    h-[700px]
                    w-[700px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-primary/15
                    blur-[180px]
                  "
      />
      <Container>
        <div
          className="
            grid
            items-center
            gap-20
            lg:grid-cols-2
          "
        >
          <AboutContent />

          <DeveloperReadme />
        </div>
      </Container>
    </section>
  );
}
