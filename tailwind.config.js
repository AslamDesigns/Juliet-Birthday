/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: { DEFAULT: "#f472b6", dark: "#db2777", light: "#fbcfe8" },
        sky: { DEFAULT: "#7dd3fc" },
        lavender: { DEFAULT: "#c084fc" },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body: ["'Lora'", "serif"],
      },
    },
  },
  plugins: [],
};
