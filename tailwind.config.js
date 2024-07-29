/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "welcome-image": "url('/assets/images/welcome-img.png')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors:{
          primary: "#96c461",
          secondary: "#394e79"
      }
    },
  },
  plugins: [],
};
