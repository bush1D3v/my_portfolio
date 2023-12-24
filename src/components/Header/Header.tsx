import { type ReactElement } from "react";

import { ButtonTheme, ListItem, Logo } from "./components";

export default function Header(): ReactElement {
  return (
    <header
      className="lg:mt-[3dvh] p-5 flex items-center justify-around max-w-screen-xl ]
      h-[9dvh] m-auto bg-Black2 rounded-xl duration-200 ease-in"
    >
      <Logo />
      <nav className="flex">
        <ul className="flex gap-20 justify-center items-center text-center w-full text-White">
          <ListItem href="/about" text="Sobre" />
          <ListItem href="/skills" text="Habilidades" />
          <ListItem href="/projects" text="Projetos" />
          <ListItem href="/formations" text="Formações" />
          <ListItem href="/contact" text="Contato" />
        </ul>
      </nav>
      <ButtonTheme />
    </header>
  );
}
