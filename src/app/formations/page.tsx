import { Suspense, type ReactElement } from "react";

import { FormationsList } from "./components";
import Loading from "../loading";

export default async function Formations(): Promise<ReactElement> {
  return (
    <Suspense fallback={<Loading />}>
      <main
        className="flex items-center justify-center min-h-[69dvh] md:min-h-[82dvh] lg:min-h-[76dvh] animate-fade-down
      animate-ease-in-out max-w-screen-xl m-auto"
      >
        <FormationsList />
      </main>
    </Suspense>
  );
}
