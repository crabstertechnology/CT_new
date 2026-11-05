/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1A67B2',
          navy: '#0E3B64',
          darkNavy: '#0A121A',
          deepDark: '#081018',
          cardBg: '#F3F4F6',
          borderSubtle: '#E5E7EB',
          textMuted: '#4B5563',
          textDark: '#111827'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif'
        ]
      }
    },
  },
  plugins: [],
}
