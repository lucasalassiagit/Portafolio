/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#141414", // Very dark background
        secondary: "#1a1a1a", // Slightly lighter for cards
        accent: "#3b82f6", // Blue accent for buttons/links
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
