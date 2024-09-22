/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: { 
        "rubik": ["Rubik Mono One", "monospace"],
        "doodle":["Rubik Doodle Shadow", "system-ui"]
    },
    colors:{
      "yellow":"#EAD8B1",
      "light-blue":"#6A9AB0",
      "med-blue":"#3A6D8C",
      "dark-blue":"#001F3F"
    }
    },
  },
  plugins: [],
}

