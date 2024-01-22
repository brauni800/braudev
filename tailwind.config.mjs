/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'fade-out': {
          '100%': {
            opacity: 0,
            display: 'none'
          }
        }
      },
      animation: {
        'fade-out': 'fade-out 150ms forwards'
      },
      colors: {
        'bright-turquoise': {
          50: 'oklch(98.54% 0.02 187.35)',
          100: 'oklch(96.03% 0.06 185.35)',
          200: 'oklch(92.80% 0.10 185.71)',
          300: 'oklch(88.63% 0.13 187.40)',
          400: 'oklch(82.89% 0.14 189.59)',
          500: 'oklch(74.66% 0.13 190.90)',
          600: 'oklch(63.55% 0.11 193.19)',
          700: 'oklch(54.02% 0.09 193.81)',
          800: 'oklch(45.15% 0.07 197.39)',
          900: 'oklch(40.28% 0.06 194.92)',
          950: 'oklch(28.45% 0.05 199.13)'
        }
      }
    }
  },
  plugins: []
}
