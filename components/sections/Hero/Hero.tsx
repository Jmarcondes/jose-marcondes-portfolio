import Container from "@/components/layout/Container";
import HeroContent from "./HeroContent";
import HeroTerminal from "./HeroTerminal";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20">
      <div
        className="
                  pointer-events-none
                  absolute
                  left-1/2
                  top-24
                  h-[520px]
                  w-[520px]
                  -translate-x-1/2
                  rounded-full
                  bg-primary/15
                  blur-[100px]
                "
      />
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroTerminal />
        </div>
      </Container>
    </section>
  );
}
