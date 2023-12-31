"use client";

import { type ReactElement } from "react";

import { loaderSessionStorage } from "@/functions";

import Loading from "../loading";

export default function Contact(): ReactElement {
  const isLoading: boolean = loaderSessionStorage("contactLoaded");

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main
          className="flex items-center justify-center min-h-[69dvh] md:min-h-[82dvh] lg:min-h-[76dvh] animate-fade-down
          animate-ease-in-out"
        >
          <h1>Contato</h1>
        </main>
      )}
    </>
  );
}
