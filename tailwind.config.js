/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: '#FFDF00',
      secondary: '#FFFF00',
      third: '#FFFFE0',
      fourth: '#FFAA1D',
      black: '#000000',
      white: '#ffffff',
      amber: '#d97706',
      red: '#dc2626',
      green: '#22c55e'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      mono: ["Share Tech Mono", "monospace"],
      roboto: ["Roboto", "sans-serif"],
      karla: ["Karla", "sans-serif"],
      overpass: ["Overpass", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}

