/** @type {import('tailwindcss').Config} */

const constants = {
  white: '#ffffff',
  black: '#222222',
  gray: '#eae9e5',
  'dark-gray': '#696969',
  red: '#f33c3c',
  green: '#00653d',
  'dark-green': '#044b2b',
  beige: '#b3aba1',
  'dark-beige': '#a49b8e',
  'white-blue': '#cad7d9',
  brown: '#ad7f56'
}

export default {
  content: [],
  theme: {
    colors: {
      ...constants
    },
    extend: {
      fontSize: {
        '10xl': '130px'
      },
      height: {
        360: '360px',
        400: '400px',
        597: '597px'
      },
      width: {
        118: '118px',
        350: '335px',
        500: '500px'
      }
    }
  },
  plugins: []
}
