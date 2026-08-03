"use client";

import { useEffect, useState } from "react";
import Container from "@/components/layout/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
                  fixed
                  top-0
                  z-50
                  w-full
                  transition-all
                  duration-300
                  ${
                    scrolled
                      ? "border-b border-white/10 bg-[#09090B]/80 backdrop-blur-xl shadow-lg"
                      : "border-transparent bg-transparent"
                  }
                `}
    >
      <Container>
        <div
          className="
            flex
            items-center
            justify-between
            py-4
          "
        >
          {/* Logo */}
          <a
            href="#"
            className="
                      text-xl
                      font-bold
                      text-primary
                      transition
                      hover:opacity-80
                    "
          >
            JM
          </a>

          {/* Links */}
          <ul
            className="
            hidden
            items-center
            gap-8
            text-sm
            text-muted-foreground
            md:flex
          "
          >
            <li>
              <a href="#about" className="transition hover:text-primary">
                Sobre
              </a>
            </li>

            <li>
              <a href="#experience" className="transition hover:text-primary">
                Experiência
              </a>
            </li>

            <li>
              <a href="#skills" className="transition hover:text-primary">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="transition hover:text-primary">
                Projetos
              </a>
            </li>

            <li>
              <a
                href="#contact"
                className="
                rounded-full
                bg-primary
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition
                hover:opacity-90
              "
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}
