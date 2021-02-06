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
};
