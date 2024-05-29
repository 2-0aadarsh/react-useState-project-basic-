/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        greenCustom:'rgb(29, 185, 84)'
      }
    },
    
  },
  plugins: [],
}

