import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#FFE7D6",
          "500": "#F36F21",
          DEFAULT: "#F36F21",
          foreground: "#FFFFFF",
        },
        dark: {
          "100": "#243447",
          "200": "#1B2A38",
          "300": "#18242F",
          "400": "#121D26",
          "500": "#101012",
        },
        light: {
          "400": "#BFC9DA",
          "500": "#DCE3F1",
          "700": "#F4F6F8",
          "800": "#FFFFFF",
        },
        background: {
          DEFAULT: "#FFFFFF",
          dark: "#243447",
        },
        foreground: {
          DEFAULT: "#243447",
          dark: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#8591A6",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)"],
        poppins: ["var(--font-poppins)"],
        "open-sans": ["var(--font-open-sans)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        heroLight: `linear-gradient(
          rgba(29, 161, 241, 0.7),
          rgba(29, 161, 241, 0.1)
        ), url('/images/newhero.jpg')`,
        heroDark: `linear-gradient(
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.4)
        ), url('/images/newhero.jpg')`,
        logoLight: "url('/images/logo.png')",
        logoDark: "url('/images/logo_dark.png')",
        logoTransparent: "url('/images/nav-logo.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
