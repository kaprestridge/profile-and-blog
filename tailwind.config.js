module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: { lime: "#73FF10", brightPink: "#FF62CE" },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
  },
};
