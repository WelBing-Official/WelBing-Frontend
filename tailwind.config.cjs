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
        bajigoor: ["Bajigoor"],
        inter: ["inter"]
      },
      colors:{
        mainBlue: "#1B1464",
        shadowColor: '#1B146478',
        topBg: '#1B146408',
        colorPurple: '#7F7CFF',
        aGreen: '#22DE80',
        secondGrad: '#332999F5',
        trasnparentWhite: "#ffffff22",
        notwhite: "#F4F3FF"
      },
      spacing: {
        hIw: '45rem',
        modalW: '55rem',
        abit: '30rem'
      },
      height: {
        viewHeight: '100vh',
        abit: '30rem',
        hIw: '45rem'
      }
    },
  },
  plugins: [require("daisyui")],
}
