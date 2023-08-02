/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      screens:{
        '2xl':'1240px'
      },
      colors:{
        primary:'#49DB92',
        dark:'#f2f2f2',
        secondary:'#EBEBEB'
      }
    },
  },
  plugins: [],
}

