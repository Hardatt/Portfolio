/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'spin-slow': 'spin 20s linear infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        marquee: 'marquee 25s linear infinite',
        blink: 'blink 1s step-end infinite',
      },
      keyframes: {
        gradient: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(124,58,237,0.3)' },
          to: { boxShadow: '0 0 45px rgba(124,58,237,0.7)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%,100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      boxShadow: {
        'glow-v': '0 0 30px rgba(124,58,237,0.45)',
        'glow-b': '0 0 30px rgba(37,99,235,0.45)',
        'glow-c': '0 0 30px rgba(6,182,212,0.45)',
      },
    },
  },
  plugins: [],
}
