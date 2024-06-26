/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'small': "url('../src/assets/bg-small.png')",
        'big': "url('../src/assets/bg-big.png')",
        'profile': "url('../src/assets/profile.png')",
      },
      fontFamily: {
        'primary': ['Orbitron'],
        'secondary': ['Electrolize'],
      }
    },
  },
  plugins: [],
}

