/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/indext.html',
    './src/**/*.{html,js}',
  ],

  // mode: 'jit',
  // purge: [
  //   './src/**/*.{html, js}',
  // ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Playfair', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      outfit: ['Outfit', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      nunito: ['Nunito', 'sans-serif'],
    },
    fontSize: {
      base: ['16px', '20px'],
      sm: ['12px', '16px'],
      md: ['14px', '18px'],
      lg: ['18px', '24px'],
      xl: ['20px', '28px'],
    },
    colors: {
      'primary': {
        25: '#F5F5F7',
        50: '#EBEAEE',
        100: '#D7D5DE',
        200: '#AEACBD',
        300: '#86829C',
        400: '#726D8C',
        500: '#5D597B',
        600: '#352F5A',
        700: '#2A2648',
        800: '#221F3B',
        900: '#1B182D',
      },
      'accent': {
        50: '#FFF5F2',
        100: '#FFC0B3',
        200: '#FFAB99',
        300: '#FF8266',
        400: '#FF6D4D',
        500: '#FF5833',
        600: '#FF2E00',
        700: '#CC2500',
        800: '#A61E00',
        900: '#801700',
      },

    },


    extend: {},
  },
  plugins: [],
}
