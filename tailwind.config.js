/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
    },
    screens: {
      'usm': {'max': '499px'}, 
      'sm': {'min':'500px','max': '750px'},
      'lg': {'min':'1440px'}
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

