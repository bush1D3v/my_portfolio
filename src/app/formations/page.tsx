"use client";

import { type ReactElement } from "react";

import { loaderSessionStorage } from "@/functions";

import Loading from "../loading";
import { FormationsList } from "./components";

export default function Formations(): ReactElement {
  const isLoading: boolean = loaderSessionStorage("formationsLoaded");

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main
          className="flex items-center justify-center min-h-[69dvh] md:min-h-[82dvh] lg:min-h-[76dvh] animate-fade-down
          animate-ease-in-out max-w-screen-xl p-10 m-auto"
        >
          <FormationsList />
        </main>
      )}
    </>
  );
}
