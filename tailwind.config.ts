import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: {
            DEFAULT: "#0097B2",
            50: "#F0F9FA",
            100: "#D3F0F4",
            200: "#A6E2EC",
            300: "#70D0E0",
            400: "#32B7CE",
            500: "#0097B2",
            600: "#007A91",
            700: "#006174",
            800: "#004B5A",
            900: "#00323C",
          },
          yellow: {
            DEFAULT: "#FFDE59",
            50: "#FFFDF0",
            100: "#FFF9D4",
            200: "#FFF3A9",
            300: "#FFEC7D",
            400: "#FFE651",
            500: "#FFDE59",
            600: "#E6C43B",
            700: "#B89B20",
            800: "#8A7312",
            900: "#5C4C09",
          },
          dark: {
            DEFAULT: "#0F2F3D",
            900: "#091B24",
            800: "#0F2F3D",
            700: "#1A4152",
            600: "#27556A",
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -5px rgba(0, 151, 178, 0.08)",
        "card-hover": "0 20px 40px -5px rgba(0, 151, 178, 0.16)",
        glow: "0 0 25px rgba(0, 151, 178, 0.25)",
        "glow-yellow": "0 0 25px rgba(255, 222, 89, 0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
