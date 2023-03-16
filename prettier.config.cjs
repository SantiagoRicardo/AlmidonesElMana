/** @type {import("prettier").Config} */
const config = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  arrowParens: "always",
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  endOfLine: "lf"
};

module.exports = config;
