/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "welcome-image": "url('/assets/images/welcome-img.png')",
      },
    },
  },
  plugins: [],
};
