"use client";

import { type ReactElement } from "react";

import { loaderSessionStorage } from "@/functions";

import Loading from "../loading";
import { SkillCardList } from "./components";


export default function Skills(): ReactElement {
  const isLoading: boolean = loaderSessionStorage("skillsLoaded");

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main
          className="flex items-center justify-center min-h-[69dvh] md:min-h-[82dvh] lg:min-h-[76dvh] animate-fade-down
          animate-ease-in-out max-w-screen-xl m-auto p-10"
        >
          <SkillCardList />
        </main>
      )}
    </>
  );
}
