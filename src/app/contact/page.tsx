import { Suspense, type ReactElement } from "react";

import { Form, TextArea } from "./components";
import Loading from "../loading";

export default async function Contact(): Promise<ReactElement> {
  return (
    <Suspense fallback={<Loading />}>
      <main
        className="flex items-center justify-center min-h-[69dvh] md:min-h-[82dvh] lg:min-h-[76dvh] animate-fade-down
        animate-ease-in-out max-w-screen-xl m-auto px-5 py-10"
      >
        <div
          className="flex flex-col lg:flex-row gap-20 w-fit bg-Black2 px-5 py-10 md:p-20 rounded-3xl
          duration-200 ease-in items-center"
        >
          <TextArea />
          <Form />
        </div>
      </main >
    </Suspense>
  );
}
