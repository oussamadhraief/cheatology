/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 0px 20px 1px rgba(0,0,0,0.1)",
      },
      colors: {
        'primary': '#7843E9',
        'secondary': '#EE9441',
      }
    },
  },
  plugins: [],
}

