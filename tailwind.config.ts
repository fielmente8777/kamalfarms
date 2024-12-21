import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#18685C",
        secondary: "#C17362",
        textdark: "#4D4D4D",
        textlight: "#767676",
        bgclr: "#FFEFE3",
      },
    },
  },
  plugins: [],
} satisfies Config;
