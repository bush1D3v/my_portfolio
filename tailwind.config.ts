import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: [ "class", "[data-theme=\"dark\"]" ],
  lightMode: [ "class", "[data-theme=\"light\"]" ],
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        RomanSilver: "var(--roman-silver)",
        White: "var(--white)",
        WhiteA5: "var(--white-a5)",
        WhiteA10: "var(--white-a10)",
        LightGray: "var(--light-gray)",
        Gray: "var(--gray)",
        Gray2: "var(--gray2)",
        DarkGray: "var(--dark-gray)",
        Black: "var(--black)",
        Black2: "var(--black2)",
        Red: "var(--red)",
        RedA20: "var(--red-a20)",
        Yellow: "var(--yellow)",
        Background: "var(--background)",
      },
    },
  },
  plugins: [ require("tailwindcss-animated") ],
};

export default config;
