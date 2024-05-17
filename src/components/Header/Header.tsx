import { type ReactElement } from "react";

import { NavBar } from "./components";

export default function Header(): ReactElement {
  return (
    <header
      className="bg-Black2 min-[900px]:h-[9dvh] xl:rounded-xl lg:mt-[3dvh] max-w-screen-xl
      animate-fade-down animate-ease-in-out duration-200 ease-in m-auto lg:mx-8 xl:mx-auto overflow-x-hidden"
    >
      <NavBar />
    </header>
  );
}
