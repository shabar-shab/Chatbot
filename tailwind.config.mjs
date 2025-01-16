/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        scrollbarThumb: "#4a5568", // Gray thumb
        scrollbarTrack: "#2d3748", // Dark background
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
