/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

export default function loaderSessionStorage(sessionStorageKey: string): boolean {
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    const loading = sessionStorage.getItem(sessionStorageKey);

    if (loading !== null) {
      setIsLoading(false);
    } else {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem(sessionStorageKey, "true");
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [ sessionStorageKey ]);

  return isLoading;
}
