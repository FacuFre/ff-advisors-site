/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./agro.html", "./aprende.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        amber: {
          brand: "#b45309",
          hover: "#92400e",
        },
        paper: "#f7f4ef",
        sand: "#efe8dc",
        hairline: "rgba(18,18,18,0.12)",
        muted: "rgba(18,18,18,0.62)",
      },
      fontFamily: {
        sans: ['"Josefin Sans"', "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 18px 50px rgba(18,18,18,0.08)",
      },
      maxWidth: {
        site: "1180px",
      },
    },
  },
  plugins: [],
};
