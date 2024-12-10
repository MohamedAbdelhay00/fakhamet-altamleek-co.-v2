import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F36F21",
        footer: "#243447",
        textPrimary: "#243447",
        textLight: "#ffffff",
        backgroundLight: "#ffffff",
        borderGray: "#e0e0e0",
        mutedText: "#6b7280",
      },
      fontFamily: {
        cairo: ["var(--font-cairo)"],
        poppins: ["var(--font-poppins)"],
        "open-sans": ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
