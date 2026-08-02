import Container from "@/components/layout/Container";
import HeroContent from "./HeroContent";
import HeroTerminal from "./HeroTerminal";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-20 top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-blue-400/5 blur-3xl" />
      </div>
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroTerminal />
        </div>
      </Container>
    </section>
  );
}
