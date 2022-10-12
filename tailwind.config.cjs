/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato"],
        nunito: ["Nunito"],
        bajigoor: ["Bajigoor"]
      },
      colors:{
        mainBlue: "#1B1464",
        topBg: '#1B146412',
        colorPurple: '#7F7CFF'
      }
    },
  },
  plugins: [require("daisyui")],
}
