/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  experimental: {
    optimizeUniversalDefaults: true,
  },
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        formula: "#C7F860",
        babyBlue: "#1f75f3",
        whiteSmoke: "#F4F6FC",
        white: "#fff",
        whiteShade: "#f9f9f9",
        purpyHover: "#6b20ce",
        forest: "#0a3524",
        forestLight: "#2bbf79",

        matte: "#131616",
        graphit: "#303249",
        byzantine: "#4555b5",
        pond: "#317BAB",
        purpy: "#8B91DE",
        beige: "#FFEFE8",
        racingYellow: "#FACC15",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
