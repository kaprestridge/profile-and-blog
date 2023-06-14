module.exports = {
  content: ["./**/*.html"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        peach: "#FEE4DD",
        lightPurple: "#EECCDC",
        darkPurple: "#A64EC1",
        cream: "#FFF4F1",
        pink: "#FF9CE3",
      },
    },
    variants: {},
    plugins: [require("@tailwindcss/typography")],
  },
};
