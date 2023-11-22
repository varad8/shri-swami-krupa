/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violetDark: "#22092C",
        dark: "#0F0F0F",
        skinLight: "#FFFBF5",
      },
    },
  },
  plugins: [],
};
