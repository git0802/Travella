/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {},
    screens: {
      xs: "340px",
      phone: "400px",
      five: "500px",
      tablet: "640px",
      md: "750px",
      xtab: "960px",
      laptop: "1100px",
      desktop: "1280px",
    },
    fontFamily: {
      oxa: ["Oxanium", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      rokkit: ["Rokkit", "sans-serif"],
      poppin: ["Poppins", "sans-serif"],
    },
    colors: {
      ...colors,
      mainwhite: "#fbfbfe",
      secondary: "#fcf7fa",
      mainblue: "#411ef8",
      active: "#1b2682",
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
  important: true,
};
