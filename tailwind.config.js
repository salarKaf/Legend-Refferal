/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        gidugu: ['Gidugu', 'sans-serif'],
        surfer: ['"Original Surfer"', 'cursive'],
        overlock: ['Overlock', 'sans-serif'],
        lahzeh: ['Lahzeh', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}



