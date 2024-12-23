/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "x-small": "290px",
        small: "365px",
        medium: "395px",
        large: "450px",
        tab: "765px",
      },
    },
  },
  plugins: [],
};
