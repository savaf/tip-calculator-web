/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
// import colors from "tailwindcss/colors";
import tailwindTypography from "@tailwindcss/typography";
import tailwindForms from "@tailwindcss/forms";
import tailwindAspectRatio from "@tailwindcss/aspect-ratio";

const srcDir = "./";
export default <Partial<Config>>{
  darkMode: ["class"],
  content: [`${srcDir}/components/**/*.{vue,js,ts,jsx,tsx}`, `${srcDir}/layouts/**/*.vue`, `${srcDir}/pages/**/*.vue`, `${srcDir}/composables/**/*.{js,ts}`, `${srcDir}/plugins/**/*.{js,ts}`, `${srcDir}/utils/**/*.{js,ts}`, `${srcDir}/App.{js,ts,vue}`, `${srcDir}/app.{js,ts,vue}`, `${srcDir}/Error.{js,ts,vue}`, `${srcDir}/error.{js,ts,vue}`, `${srcDir}/app.config.{js,ts}`],
  theme: {
    extend: {
      colors: {
        primary: "#26C0AB",
        "primary-light": "#9FE8DF",
        "primary-dark": "#00474B",
        "primary-grayish": "#7F9C9F",
        "primary-grayish-dark": "#5E7A7D",
        "primary-grayish-light": "#C5E4E7",
        "primary-grayish-lighter": "#F4FAFA",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
      fontFamily: {
        sans: ["Space Mono", ...defaultTheme.fontFamily.sans]
      },
      borderRadius: {
        "main-container": "25px",
        "4xl": "2rem",
        "5xl": "3rem",
      },
      maxWidth: {
        "main-container": "920px",
      },
      screens: {
        desktop: "1440px",
      },
      boxShadow: {
        "main-container": "0px 32px 43px 0px rgba(79, 166, 175, 0.20);",
      },
    },
  },
  plugins: [tailwindForms, tailwindTypography, tailwindAspectRatio],
};
