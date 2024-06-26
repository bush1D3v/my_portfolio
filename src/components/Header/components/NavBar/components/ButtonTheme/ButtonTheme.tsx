"use client";

import { useTheme } from "next-themes";
import {
  type ReactElement,
  useState,
  useEffect
} from "react";
import "./style/buttonTheme.css";

interface ButtonThemeProps {
  id: string;
  ariaLabel: string;
}

export default function ButtonTheme({
  id,
  ariaLabel
}: ButtonThemeProps): ReactElement {
  const { theme, setTheme } = useTheme();
  const [ initialRender, setInitialRender ] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      setInitialRender(false);
    }
  }, [ setTheme ]);

  const handleThemeChange = (): void => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label
      htmlFor={id} aria-label={ariaLabel}
      aria-labelledby="sunMoon" id="switch" className="mr-8 min-[900px]:mr-0"
    >
      <input
        type="checkbox"
        checked={theme === "light" || (initialRender && theme === "dark")}
        onChange={handleThemeChange}
        aria-label={ariaLabel}
        id={id}
      />
      <span id="sunMoon" aria-label={ariaLabel}></span>
    </label>
  );
}
