"use client";

import {
  useState,
  useEffect,
  type ReactElement
} from "react";

import Loading from "../loading";

export default function Skills(): ReactElement {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const loading = sessionStorage.getItem("skillsLoaded");

    if (loading !== null) {
      setIsLoading(false);
    } else {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("skillsLoaded", "true");
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
          className="flex items-center justify-center min-h-[69dvh] md:min-h-[82dvh] lg:min-h-[76dvh] animate-fade-down
          animate-ease-in-out"
        >
          <h1>Habilidades</h1>
        </main>
      )}
    </>
  );
}
