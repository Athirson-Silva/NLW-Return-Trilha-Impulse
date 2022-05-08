module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#996dff',
          500: '#8257e5'
        },
        mainbackground: {
          100: '#09090A'
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
  ],
}
