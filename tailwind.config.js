/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
    },
    screens: {
      'sm': {'max': '750px'},
      'lg': {'min':'1440px'}
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

