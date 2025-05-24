/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#bae0ff',
          300: '#7cc5fb',
          400: '#36a9f8',
          500: '#0c8ee7',
          600: '#0072c3',
          700: '#005a9e',
          800: '#004d85',
          900: '#00366d',
        },
      },
      spacing: {
        '102': '102%',
      },
      transitionProperty: {
        'height': 'height',
      },
    },
  },
  plugins: [],
};