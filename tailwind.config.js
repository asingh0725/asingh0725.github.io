/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#7b39fc',
        accentSoft: '#fa93fa',
        accentDark: '#2b2344',
        surface: '#0c0c0c'
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Manrope', 'sans-serif']
      },
      boxShadow: {
        glass: '0 18px 60px rgba(0, 0, 0, 0.35)'
      }
    }
  },
  plugins: []
}
