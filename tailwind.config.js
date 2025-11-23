/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        secondary: "#6366F1",
        accent: "#A5B4FC",
      },
      animation: {
        fade: "fadeIn 0.3s ease-in-out",
        zoom: "zoomIn 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        zoomIn: {
          "0%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};