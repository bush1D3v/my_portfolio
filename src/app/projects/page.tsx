"use client";

import { type ReactElement } from "react";

import { loaderSessionStorage } from "@/functions";

import Loading from "../loading";

export default function Projects(): ReactElement {
  const isLoading: boolean = loaderSessionStorage("projectsLoaded");

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main
          className="flex items-center justify-center min-h-[69dvh] md:min-h-[82dvh] lg:min-h-[76dvh] animate-fade-down
          animate-ease-in-out"
        >
          <h1>Projetos</h1>
        </main>
      )}
    </>
  );
}
