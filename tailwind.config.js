/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightgray:'#F2F1F6',
        geekblue:{
          100:'#f0f5ff',
          200:'#d6e4ff',
          300:'#adc6ff',
          400:'#85a5ff',
          500:'#597ef7',
          600:'#2f54eb',
          700:'#1d39c4',
          800:'#10239e',
          900:'#061178',
          1000:'#030852'
        },
        gray: {
          100:'#ffffff',
          200:'#fafafa',
          300:'#f5f5f5',
          400:'#f0f0f0',
          500:'#d9d9d9',
          600:'#bfbfbf',
          700:'#8c8c8c',
          800:'#595959',
          900:'#434343',
          1000:'#262626',
          1100:'#1f1f1f',
          1200:'#141414',
          1300:'#000000'
        }
      }
    },
  },
  plugins: [],
}
