import Container from "@/components/layout/Container";

import ContactItem from "./ContactItem";

import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-32
      "
    >
      <Container>
        <div className="text-center">
          <p
            className="
              text-sm
              font-semibold
              tracking-[0.3em]
              text-primary
            "
          >
            / CONTATO
          </p>

          <h2
            className="
              mt-6
              text-5xl
              font-bold
            "
          >
            Vamos conversar?
          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-lg
              leading-8
              text-muted-foreground
            "
          >
            Estou aberto a novas oportunidades, projetos e conexões
            profissionais.
          </p>
        </div>

        <div
          className="
            mt-14
            flex
            justify-center
            divide-x
            divide-white/10
          "
        >
          <ContactItem
            icon={MdEmail}
            label="Email"
            value="jose.marcondes.jr@gmail.com"
            href="mailto:jose.marcondes.jr@gmail.com"
          />

          <ContactItem
            icon={FaLinkedin}
            label="LinkedIn"
            value="linkedin.com/jmarcondesjr"
            href="https://www.linkedin.com/in/jmarcondesjr/"
          />

          <ContactItem
            icon={FaGithub}
            label="GitHub"
            value="github.com/Jmarcondes"
            href="https://github.com/Jmarcondes"
          />
        </div>
      </Container>
    </section>
  );
}
