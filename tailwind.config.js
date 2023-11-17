/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      letterSpacing: {
        widest: '.3em',
      },
      keyframes: { rotateOnce : { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(180deg)' } }},
      animation: { rotateOnce: 'rotateOnce 1s ease-in-out 1'} 
    },
  },
  plugins: [],
}