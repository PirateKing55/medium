/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      primary: "#292929",
      secondary: "#6c7480",
      secondaryLight: "#eaeaec",
      text: "#ffffff",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    screens: { phone: "300px", sm: "600px" },
  },
  plugins: [],
};
