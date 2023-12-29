"use client";

import {
  useState,
  useEffect,
  type ReactElement
} from "react";

import Loading from "../loading";

export default function Formations(): ReactElement {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const loading = sessionStorage.getItem("formationsLoaded");

    if (loading !== null) {
      setIsLoading(false);
    } else {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("formationsLoaded", "true");
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
          <h1>Formações</h1>
        </main>
      )}
    </>
  );
}
