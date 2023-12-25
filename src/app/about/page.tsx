"use client";

import {
  useState,
  useEffect,
  type ReactElement
} from "react";

import Loading from "../loading";

export default function About(): ReactElement {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const loading = sessionStorage.getItem("aboutLoaded");

    if (loading !== null) {
      setIsLoading(false);
    } else {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("aboutLoaded", "true");
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <main
          className="flex items-center justify-center h-[69dvh] md:h-[82dvh] lg:h-[76dvh] animate-fade-down
          animate-ease-in-out"
        >
          <h1>Sobre</h1>
        </main>
      )}
    </>
  );
}
