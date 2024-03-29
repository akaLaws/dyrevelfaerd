/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    fontFamily: {
      'body':['Oswald', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
