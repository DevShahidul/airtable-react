/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '8px',
      'full': '9999px',
      'xl': '12px',
      '2xl': '15px',
      '3xl': '20px'
    },
    extend: {
      backgroundImage: {
        'check-green': "url('../images/check-green.png')",
      },
      spacing: {
        '15px': '.9375rem',
        '30px': '1.875rem',
        '15': '3.625rem',
      },
      colors: {
        'body': '#F7F7F7',
        'default': '#313131',
        'label': '#191919',
        'theme-red': '#CD1E1E',
        'theme-red-dark': '#7B1212',
        'theme-orange': '#FB8C00',
        'theme-orange-0': '#FFF3E0',
        'theme-gray': '#E7E7E7',
        'blue-10': '#E6EBFC',
        'blue-100': '#011446',
        'primary': '#054FE5',
        'primary-black': '#191C1F',
        'secondary': '#494949',
        'disabled': '#C4C4C4',
        'info': '#B2B2B2',
        'success': '#00B67A',
        'overlay': 'rgba(25, 25, 25, 0.8)',
      },
      boxShadow: {
        'main': '0px 10px 45px rgba(49, 49, 49, 0.1)',
        'card': '0px 10px 60px rgba(49, 49, 49, 0.2)',
        'btn': '0px 4px 10px rgba(0, 0, 0, 0.1)',
        'inset': 'inset 0px 1px 0px rgba(0, 0, 0, 0.1)',
      },
      fontFamily: {
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        progress: {
          '0%': { strokeDashoffset: 100 },
          '100%': { strokeDashoffset: 0 },
        },
      },
      animation: {
        progress: 'progress 5s ease-in-out',
      }
      // keyframes: {
      //   wiggle: {
      //     '0%, 100%': { transform: 'rotate(-3deg)' },
      //     '50%': { transform: 'rotate(3deg)' },
      //   }
      // }
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h2': { fontSize: theme('fontSize.2xl') },
        'body': { fontSize: theme('fontSize.sm') },
        // 'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}
