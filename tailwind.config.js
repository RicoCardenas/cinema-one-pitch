/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./content/**/*.json"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f8ff',
          100: '#ebf0ff',
          200: '#cfd9ff',
          300: '#a6b9ff',
          400: '#7b93ff',
          500: '#4f6cff',
          600: '#324dff',
          700: '#243ad6',
          800: '#1e2fa8',
          900: '#1b2a86'
        }
      }
    },
  },
  plugins: [],
}