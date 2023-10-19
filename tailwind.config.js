/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'clash' : ['Artifika', 'serif'],
        'montserrat' : ['Montserrat','sans-serif']
      },
    },
  },
  plugins: [],
}

