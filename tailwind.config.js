module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // add keyframes and animation
      keyframes: {
        expendWidth: {
          "0%": { width: "0%" },
          "100%": { width: "50%" },
        },
      },
      animation: {
        expendWidth: "expendWidth 1s ease-in-out",
      },
    },
  },
  plugins: [require("daisyui")],
};
