import { Suspense, type ReactElement } from "react";

import { ProjectList } from "./components";
import Loading from "../loading";

export default async function Projects(): Promise<ReactElement> {
  return (
    <Suspense fallback={<Loading />}>
      <main
        className="flex items-center justify-center min-h-[69dvh] md:min-h-[82dvh] lg:min-h-[76dvh] animate-fade-down
      animate-ease-in-out max-w-screen-xl m-auto"
      >
        <ProjectList />
      </main>
    </Suspense>
  );
}
