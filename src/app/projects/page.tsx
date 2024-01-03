import { Suspense, type ReactElement } from "react";

import { ProjectList } from "./components";
import Loading from "../loading";

export default function Projects(): ReactElement {
  return (
    <main
      className="flex items-center justify-center min-h-[69dvh] md:min-h-[82dvh] lg:min-h-[76dvh] animate-fade-down
      animate-ease-in-out max-w-screen-xl m-auto"
    >
      <Suspense fallback={<Loading />}>
        <ProjectList />
      </Suspense>
    </main>
  );
}
