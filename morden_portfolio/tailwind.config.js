/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'accent': {
          50: '#e6f1fe',
          100: '#cce3fd',
          200: '#99c7fb',
          300: '#66abf9',
          400: '#338ff7',
          500: '#0073f5', // Main accent color
          600: '#005cc4',
          700: '#004593',
          800: '#002e62',
          900: '#001731',
        },
        'neutral-dark': {
          900: '#121212',
          800: '#1f1f1f',
          700: '#2d2d2d',
          600: '#3a3a3a',
        },
        'neutral-light': {
          50: '#ffffff',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-hover': '6px 6px 0px 0px rgba(0,0,0,1)',
        'brutal-light': '4px 4px 0px 0px rgba(0, 115, 245, 1)',
        'brutal-light-hover': '6px 6px 0px 0px rgba(0, 115, 245, 1)',
      },
    },
  },
  plugins: [],
};