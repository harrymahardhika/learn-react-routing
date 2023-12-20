/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.{js,jsx}', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')]
}
