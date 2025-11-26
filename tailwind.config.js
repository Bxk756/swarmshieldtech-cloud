/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#2563EB",
        "brand-neon": "#22d3ee",
        "brand-teal": "#1fb6ff",
        "brand-dark": "#020617",
        "brand-accent": "#f97316",
      },
      boxShadow: {
        soft: "0 20px 40px rgba(15,23,42,0.6)",
      },
    },
  },
  plugins: [],
};

