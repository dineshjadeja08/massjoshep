/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        techNavy: '#0B1F3A',
        electricBlue: '#2563EB',
        tealBrand: '#14B8A6',
        amberBrand: '#F59E0B',
        graphite: '#111827',
        cloudGrey: '#F5F7FA',
        navy: {
          950: '#050E1B',
          900: '#0B1F3A',
          800: '#102A4E',
          700: '#1A3E70',
        },
        accent: {
          400: '#60A5FA',
          500: '#2563EB',
          600: '#1D4ED8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'card': '16px',
      }
    },
  },
  plugins: [],
}
