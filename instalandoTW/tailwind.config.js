/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,js,php}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

/*em content[], é setado um objeto que diz quais arquivos ele deve observar:
na linha 4 está dizendo-> volte um direttório/ acesse o diretório 'src' / entre em todos os diretório de 'src' /  aplique tailwind em todos os arquivos com as seguintes extenções .{html,ts,js,php};
*/
