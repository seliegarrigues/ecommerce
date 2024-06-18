/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors : {
        primary :"#F0F0F2" ,
        secondary:"#191919"
    },
    container: {
      center: true,
      padding: {
        DEFAULT:"1rem",
        sm: "3rem",
        
      }
    }
  },
},
  plugins: [
    require('daisyui')
  ],
}

