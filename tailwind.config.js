/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: '#00fff7',
        dark: {
          100: '#232526',
          200: '#0f2027',
          300: '#2c5364',
        },
      },
      animation: {
        'float-in': 'float-in 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
        'section-in': 'section-in 1.2s cubic-bezier(0.23, 1, 0.32, 1)',
      },
      keyframes: {
        'float-in': {
          '0%': { opacity: '0', transform: 'translateX(-40px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateX(0) scale(1)' },
        },
        'section-in': {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(40px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
