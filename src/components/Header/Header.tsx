import { type ReactElement } from "react";
import Image from "next/image";

import { ListItem } from "./components";
import logo from "../../../public/logo.png";

export default function Header(): ReactElement {
  return (
    <header
      className="lg:mt-[3dvh] p-5 flex items-center justify-around max-w-screen-xl h-[9dvh] m-auto bg-Black2 rounded-xl"
    >
      <div className="flex hover:opacity-50 cursor-pointer ease-in-out duration-150">
        <Image
          src={logo}
          alt="Logo"
          className="dark:brightness-100 brightness-0 w-20 cursor-pointer"
        />
      </div>
      <nav className="flex">
        <ul className="flex gap-20 justify-center items-center text-center w-full text-White">
          <ListItem href="/about" text="Sobre" />
          <ListItem href="/skills" text="Habilidades" />
          <ListItem href="/projects" text="Projetos" />
          <ListItem href="/certifications" text="Certificações" />
          <ListItem href="/contact" text="Contato" />
        </ul>
      </nav>
      <button>
        ButtonTheme
      </button>
    </header>
  );
}
