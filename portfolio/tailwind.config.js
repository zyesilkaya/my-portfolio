/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#F7AB0A',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
