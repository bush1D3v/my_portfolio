import { Suspense, type ReactElement } from "react";
import { unstable_noStore } from "next/cache";

import { ProjectList } from "./components";
import Loading from "../loading";

export default function Projects(): ReactElement {
  unstable_noStore();
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
