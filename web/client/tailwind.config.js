/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      blue:{
        1:'#CDF5FD',
        2:'#A0E9FF',
        3:'#89CFF3',
        4:'#00A9FF'
      }
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}