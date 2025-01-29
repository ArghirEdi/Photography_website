/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        128: "32rem", // Add custom height value
        144: "36rem", // Add custom height value
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
