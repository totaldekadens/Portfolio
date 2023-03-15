/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        primary: ["var(--mont-font)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--ptSerif-font)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("flowbite/plugin"),
    require("tw-elements/dist/plugin"),
  ],
};
