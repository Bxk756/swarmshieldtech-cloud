export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          neon: "#22d3ee",
          teal: "#1fb6ff",
          dark: "#020617",
          accent: "#f97316"
        },
      },
      boxShadow: {
        soft: "0 20px 40px rgba(15,23,42,0.6)"
      }
    },
  },
  plugins: [],
};
