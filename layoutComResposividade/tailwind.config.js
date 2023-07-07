/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js,php}"
  ],
  theme: {
    //container: {center:true },
    extend: {},
  },
  plugins: [],
}

/*
  com a dição do:
  container: {
      center:true
    } 
*agora todos os containers terão o centrslizar pois na core do tw todos estão true
*/