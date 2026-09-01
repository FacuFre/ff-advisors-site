/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./agro.html", "./aprende.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#faf9f6",
          surface: "#f1efea",
          dark: "#121212",
          accent: "#a8874a",
          "accent-soft": "#eee7d6",
          muted: "#7c7a75",
          hairline: "#1212121a",
        },
        ink: "#121212",
        amber: {
          brand: "#b45309",
          hover: "#92400e",
        },
      },
      fontFamily: {
        sans: ['"Source Serif 4"', "Georgia", "ui-serif", "serif"],
        display: ['"Josefin Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px #1118270a, 0 8px 24px -12px #11182714",
        elevated: "0 4px 12px #1118270f, 0 24px 60px -20px #1118272e",
      },
      maxWidth: {
        site: "1280px",
      },
      keyframes: {
        "ff-marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "ff-marquee": "ff-marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};
