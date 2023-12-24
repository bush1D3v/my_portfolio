"use client";

import { useTheme } from "next-themes";
import { type ReactElement } from "react";
import "./style/ButtonTheme.css";

export default function ButtonTheme(): ReactElement {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (): void => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <label htmlFor="change-theme" id="switch">
      <input
        type="checkbox"
        name="change-theme"
        checked={theme === "light" ? true : false}
        onChange={handleThemeChange}
        id="change-theme"
      />
      <span id="sunMoon"></span>
    </label>
  );
}
