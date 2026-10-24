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
        reforbs: {
          teal: {
            DEFAULT: "#007A7A",
            dark: "#005F5F",
            deep: "#004848",
            light: "#4AA8A0",
            soft: "#E6F4F3",
            wash: "#F0F9F8",
          },
          yellow: {
            DEFAULT: "#FFDE59",
            warm: "#FFC83B",
            light: "#FFF9D4",
          },
          charcoal: {
            DEFAULT: "#1B1D1C",
            deep: "#111312",
            muted: "#4A524F",
            subtle: "#666B68",
          },
          surface: {
            DEFAULT: "#FAFAFA",
            card: "#FFFFFF",
            secondary: "#F1F4F4",
            border: "#E1E7E6",
            accent: "#FAF6E8",
          },
        },
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        sans: ["Montserrat", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
        caption: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(0, 122, 122, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 20px 35px -5px rgba(0, 122, 122, 0.12), 0 8px 16px -2px rgba(0, 0, 0, 0.06)",
        stanza: "0 10px 30px rgba(0, 0, 0, 0.08)",
        glow: "0 0 25px rgba(0, 122, 122, 0.3)",
      },
      borderRadius: {
        "3xl": "24px",
        "4xl": "32px",
      },
    },
  },
  plugins: [],
};
export default config;
