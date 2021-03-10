const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    enabled: true,
    mode: "all",
    preserveHtmlElements: false,
    content: [
      "src/**/*.js",
      "src/**/*.jsx",
      "src/**/*.ts",
      "src/**/*.tsx",
      "public/**/*.html",
    ],
    options: {
      keyframes: true,
    },
  },
  plugins: [require("tailwindcss-neumorphism")],
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
    },
  },
};
