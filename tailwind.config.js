/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import lineClamp from '@tailwindcss/line-clamp'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      boxShadow: {
        glass: '0 8px 32px rgba(0,0,0,0.4)',
      },
      backdropBlur: { xs: '2px' },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s infinite cubic-bezier(0.4,0,0.6,1)',
        'fade-in': 'fade-in 600ms ease-out both',
        'section-in': 'section-in 1.2s cubic-bezier(0.23,1,0.32,1) both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-4px)' },
          '50%': { transform: 'translateY(4px)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(8px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'section-in': {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(40px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
      },
    },
  },
  plugins: [typography, lineClamp],
}
