import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}", // For pages in the 'pages' folder (if applicable)
    "./components/**/*.{js,ts,jsx,tsx}", // For shared components
    "./app/**/*.{js,ts,jsx,tsx}", // For files in the 'app' folder
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "100": "#FFE7D6",
          "300": "#D95F1D",
          "500": "#F56E0F", // Liquid Lava
          DEFAULT: "#F56E0F", // Liquid Lava
          foreground: "#FFFFFF", // White for contrast
        },
        dark: {
          "100": "#1B1B1E", // Gluon Grey
          "200": "#262626", // Slate Grey
          "300": "#151419", // Dark Void
          "400": "#101012", // Slightly darker for variation
          "500": "#000000", // True black if needed
        },
        light: {
          "400": "#878787", // Dusty Grey
          "500": "#F4F4F4", // Slightly off-white for cards or sections
          "700": "#FBFBFB", // Snow
          "800": "#FFFFFF", // True white
        },
        background: {
          DEFAULT: "#FFFFFF", // Light mode background
          dark: "#151419", // Dark mode background (Dark Void)
        },
        foreground: {
          DEFAULT: "#151419", // Text for light mode (Dark Void)
          dark: "#FBFBFB", // Text for dark mode (Snow)
        },
        secondary: {
          DEFAULT: "#878787", // Dusty Grey for muted elements
          foreground: "#FFFFFF", // White for contrast
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
          rgba(21, 20, 25, 0.4), 
          rgba(21, 20, 25, 0.7)
        ), url('/images/newhero.jpg')`,
        heroDark: `linear-gradient(
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.5)
        ), url('/images/newhero.jpg')`,
        logoLight: "url('/images/new-logo.png')",
        logoDark: "url('/images/logo_dark.png')",
        logoTransparent: "url('/images/nav-logo.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
