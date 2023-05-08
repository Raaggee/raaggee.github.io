/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html, js}"],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      animation: {
        typing: 'typing  steps(34)',
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0',
          },
          '80%': {
            width: '34ch',
          },
          '100%': {
            width: '34ch',
          },
        },
      },
    },
  },
  plugins: [],

}

