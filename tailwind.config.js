/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        justice: 'rgb(93, 226, 231)', // 👈 your new brand color
      },
    },
  },
  plugins: [],
}
