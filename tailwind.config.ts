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
        WhiteA10: "var(--white-a10)",
        LightGray: "var(--light-gray)",
        Gray: "var(--gray)",
        Gray2: "var(--gray2)",
        DarkGray: "var(--dark-gray)",
        Black: "var(--black)",
        Black2: "var(--black2)",
        BlackA10: "var(--black-a10)",
        Yellow: "var(--yellow)",
        Background: "var(--background)",
      },
    },
  },
  plugins: [ require("tailwindcss-animated") ],
};

export default config;
