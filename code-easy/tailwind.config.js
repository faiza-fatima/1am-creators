/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handjet: ['Handjet-Bold', 'cursive'],
        fira: ['Fira Code-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
}
