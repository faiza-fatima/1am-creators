/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        handjet: ['"Press Start 2P"', 'cursive'], // Update this to use the pixelated font
        fira: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
