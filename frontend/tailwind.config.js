/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#c4d4cf',
        secondary:'##b5c7cc'
      }
    },
  },
  plugins: [],
}