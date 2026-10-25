/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        celestial: {
          dark: '#03050a',
          card: 'rgba(12, 17, 29, 0.75)',
          gold: '#f5c344',
          amber: '#e69519',
          honey: '#ffb300',
          cyan: '#38bdf8',
          violet: '#a855f7'
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        serifDisplay: ['Cinzel', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
