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
      "about":"#A8D0E6",
      "projects":"#24305E",
      "contact":"#F76C6C"
    }
    },
  },
  plugins: [],
}

