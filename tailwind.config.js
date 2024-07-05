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
        'big': "url('/assets/background-large.jpg')",
        'profile': "url('/assets/profile.png')",
      },
      fontFamily: {
        'primary': ['Orbitron'],
        'secondary': ['Electrolize'],
      },
      keyframes: {
        'sine-wave': {
          '0%': { transform: 'translateX(10px) rotate(45deg)', stroke: 'hsl(60, 75%, 50%)', opacity: 1, },
          '50%': { transform: 'translateX(130px) rotate(45deg)', opacity: 0 },

          '100%': { transform: 'translateX(160px) rotate(45deg)', opacity: 0 },
        },
      },
      animation: {
        'sine-wave': 'sine-wave 1.3s  infinite cubic-bezier(0.45, 0, 0.55, 1)',
      },
    },
  },
  plugins: [],
}

