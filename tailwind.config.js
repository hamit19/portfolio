/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/heroImage.jpg')",
      },
      keyframes: {
        rotate: {
          "0%": { transform: "rotate(-90deg)", opacity: "100" },
          "50%": { transform: "rotate(10deg)", opacity: "100" },
          "75%": { transform: "rotate(-10deg)", opacity: "100" },
          "100%": { transform: "rotate(0deg)", opacity: "100" },
        },
      },
      animation: {
        rotate: "rotate 1.5s forwards ease-in-out",
      },
      boxShadow: {
        "4xl": "inset 0 0 10px 0 rgba(0, 0, 0, 0.3)",
      },

      gridTemplateColumns: {
        "custom-auto": " repeat(auto-fill, minmax(250px, 1fr) ) ",
      },
    },
  },
  plugins: [],
};
