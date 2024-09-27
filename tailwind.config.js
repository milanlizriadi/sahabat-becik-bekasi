/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    container: {
      center: true,
      padding: "48px",
    },
    extend: {
      colors: {
        primary: "#ffa113",
        secondary: "#64748b",
        dark: "#0f172a",
        dusky: "#525252",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
