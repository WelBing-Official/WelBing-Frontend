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
        shadowColor: '#1B146478',
        topBg: '#1B146408',
        colorPurple: '#7F7CFF',
        aGreen: '#22DE80'
      },
      spacing: {
        hIw: '45rem',
        modalW: '55rem'
      }
    },
  },
  plugins: [require("daisyui")],
}
