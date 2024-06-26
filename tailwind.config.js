/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'small': "url('/assets/bg-small.png')",
        'big': "url('/assets/bg-big.png')",
        'profile': "url('/assets/profile.png')",
      },
      fontFamily: {
        'primary': ['Orbitron'],
        'secondary': ['Electrolize'],
      }
    },
  },
  plugins: [],
}

