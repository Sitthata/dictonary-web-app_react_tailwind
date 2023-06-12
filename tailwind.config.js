/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  
  theme: {
    extend: {
        colors: {
          light : {
            DEFAULT: "#FFF",
            'main' : '#2D2D2D',
            'utility' : '#A445ED',
            'grey-light': "#757575"
          },
          dark : {
            DEFAULT: "#050505",
            'main' : "#FFF",
            'utility' : '#A445ED',
          }
        }
    },
  },
  plugins: [],
}

