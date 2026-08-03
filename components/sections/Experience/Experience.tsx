import Container from "@/components/layout/Container";
import ExperienceHeader from "./ExperienceHeader";
import GitHistory from "./GitHistory";

export default function Experience() {
  return (
    <section
      id="experience"
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
          top-1/2
          -z-10
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-primary/10
          blur-[180px]
        "
      />

      <Container>
        <ExperienceHeader />

        <GitHistory />
      </Container>
    </section>
  );
}
