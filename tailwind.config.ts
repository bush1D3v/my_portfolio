import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blueBase: "var(--blue-base)",
        darkBlue: "var(--dark-blue)",
        lightBlue: "var(--light-blue)",
        saturatedBlue: "var(--saturated-blue)",
        desaturatedBlue: "var(--desaturated-blue)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        black: "var(--black)",
        text: "var(--white)",
        error: "var(--error)",
        input: "var(--input)",
        darkGray: "var(--dark-gray)",
        lightGray: "var(--light-gray)",
      },
    },
  },
  plugins: [],
};

export default config;
