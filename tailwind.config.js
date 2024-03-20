/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto'],
        poppins: ['Poppins']
      },
      colors: {
        primary: '#742C2b',
        grey: '#5D5F5D',
        black: '#181818'
      }
    }
  },
  plugins: []
}
