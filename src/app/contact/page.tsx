"use client";

import { type ReactElement } from "react";

import { loaderSessionStorage } from "@/functions";

import Loading from "../loading";
import { TextArea, Form } from "./components";

export default function Contact(): ReactElement {
  const isLoading: boolean = loaderSessionStorage("contactLoaded");

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main
          className="flex items-center justify-center min-h-[69dvh] md:min-h-[82dvh] lg:min-h-[76dvh] animate-fade-down
          animate-ease-in-out max-w-screen-xl px-5 py-10 md:p-10 m-auto"
        >
          <div
            className="flex flex-col lg:flex-row gap-20 w-fit bg-Black2 px-5 py-10 md:p-20 rounded-3xl
            duration-200 ease-in items-center"
          >
            <TextArea />
            <Form />
          </div>
        </main>
      )}
    </>
  );
}
