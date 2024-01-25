/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
    },
    extend: {
      colors: {
        bgmain: "#2B2B2B",
        bgpurple:"#A259FF",
        secondary:"#3B3B3B",
        bgofitems:"#858584"
      },
      padding: {
        psm: "15px 30px",
        psm4030: "40px 30px",
        pmd: "15px 50px",
        pmd8072: "80px 72px",
        pmd4072: "40px 72px",
        plg: "20px 50px",
        plg80115: "80px 115px",
        pbtnheader: "20px 30px"
      },
      fontFamily:{
        mainfont:['Roboto Condensed']
      }
    },
  },
  plugins: [],
};
