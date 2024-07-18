/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#4ea8de',
          dark: '#1e6f9f',
        },
        purple: {
          DEFAULT: '#8284FA',
          dark: '#5E60CE',
        },
        gray: {
          100: '#f2f2f2',
          200: '#d9d9d9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1a1a1a',
          700: '#0d0d0d',
        },
        danger: '#e25858',
      },
    },
  },
  plugins: [],
};
