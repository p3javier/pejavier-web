module.exports = {
  purge: {
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
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
    },
  },
};
