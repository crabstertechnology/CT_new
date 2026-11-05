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
          orange: '#E87121',
          orangeHover: '#D45E12',
          orangeLight: '#FFF7ED',
          orangeBorder: '#FDBA74',
          dark: '#09111E',
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
