import { type ReactElement } from "react";

import { NavBar } from "./components";

export default function Header(): ReactElement {
  return (
    <header
      className="bg-Black2 md:h-[9dvh] lg:rounded-xl lg:mt-[3dvh] max-w-screen-xl animate-fade-down animate-ease-in-out
      duration-200 ease-in m-auto"
    >
      <NavBar />
    </header>
  );
}
