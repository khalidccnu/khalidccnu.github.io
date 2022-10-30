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
      },
      keyframes: {
        "home-arrow": {
          "0%": { bottom: "-85px" },
          "50%": { bottom: "-50px" },
          "100%": { bottom: "-85px" }
        }
      },
      animation: {
        "home-arrow": "home-arrow 2s infinite"
      }
    }
  }
}