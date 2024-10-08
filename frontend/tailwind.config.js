/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rickBlue: "#00B5CC",
        mortyYellow: "#FFCC00",
        portalGreen: "#00FF00",
        darkBackground: "#1A1A1A",
        lightBackground: "#F5F5F5",
        textPrimary: "#FFFFFF",
        textSecondary: "#000000",
      },
    },
  },
  plugins: [],
}
