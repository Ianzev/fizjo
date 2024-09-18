/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#27AE60",
        secondary: "#313942",

        // secondary: "#1e6091",
        third: "#f7f7f7",
        forth: "#0E231C",
      },
      height: {
        "1/2-screen": "50vh",
        "1/3-screen": "40vh",
      },
      animation: {
        "loop-scroll": "loop-scroll 45s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      screens: {
        sm: "576px",
      },
    },
  },

  plugins: [],
};
