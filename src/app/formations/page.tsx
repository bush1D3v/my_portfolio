import { type ReactElement } from "react";

import { FormationsList } from "./components";

export default function Formations(): ReactElement {
  return (
    <main
      className="flex items-center justify-center min-h-[69dvh] md:min-h-[82dvh] lg:min-h-[76dvh] animate-fade-down
      animate-ease-in-out max-w-screen-xl m-auto"
    >
      <FormationsList />
    </main>
  );
}
