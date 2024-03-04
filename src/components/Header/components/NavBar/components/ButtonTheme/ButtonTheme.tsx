"use client";

import { useTheme } from "next-themes";
import {
  type ReactElement,
  useState,
  useEffect
} from "react";
import "./style/buttonTheme.css";

export default function ButtonTheme(): ReactElement {
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
      htmlFor="change-theme" aria-label="Change theme"
      aria-labelledby="sunMoon" id="switch" className="mr-8 md:mr-0"
    >
      <input
        type="checkbox"
        checked={theme === "light" || (initialRender && theme === "dark")}
        onChange={handleThemeChange}
        aria-label="Change theme"
        id="change-theme"
      />
      <span id="sunMoon" aria-label="Change theme"></span>
    </label>
  );
}
