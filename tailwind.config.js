/** @type {import("tailwindcss").Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./*.html", "./asset/js/*.js"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "3rem"
    },
    extend: {
      fontFamily: {
        "body": ["Jost", ...defaultTheme.fontFamily.sans]
      }
    }
  }
}