import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueBase: "var(--blue-base)",
        darkBlue: "var(--dark-blue)",
        lightBlue: "var(--light-blue)",
        saturatedBlue: "var(--saturated-blue)",
        accent: "var(--accent)",
        black: "var(--black)",
        white: "var(--white)",
        darkGray: "var(--dark-gray)",
        lightGray: "var(--light-gray)",
      },
    },
  },
  plugins: [],
};

export default config;
