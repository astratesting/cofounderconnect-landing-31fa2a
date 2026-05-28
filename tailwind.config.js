/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",
        secondary: "#14b8a6",
        midnight: "#0f172a",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(14, 165, 233, 0.35)",
        teal: "0 0 70px rgba(20, 184, 166, 0.28)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseLine: "pulseLine 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.25", transform: "scaleX(0.82)" },
          "50%": { opacity: "1", transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};
