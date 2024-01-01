import { type ReactElement } from "react";

import { AboutDivision } from "./components";

export default function About(): ReactElement {
  return (
    <main
      className="flex flex-col lg:flex-row items-center justify-center min-h-[69dvh] md:min-h-[82dvh] gap-10
          lg:min-h-[76dvh] animate-fade-down animate-ease-in-out max-w-screen-xl m-auto p-10 md:gap-20 py-20 lg:py-0"
    >
      <AboutDivision />
    </main>
  );
}
