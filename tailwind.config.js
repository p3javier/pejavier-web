module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  plugins: [
    require("tailwindcss-neumorphism"),
    require("@mjwebs/tailwindcss-frosted"),
  ],
  theme: {
    extend: {
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
    },
  },
};
