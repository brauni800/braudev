import { screens } from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '475px',
      ...screens
    },
    extend: {
      transitionProperty: {
        filter: 'filter'
      },
      keyframes: {
        swing: {
          '0%, 100%': {
            transform: 'rotate(12deg)'
          },
          '50%': {
            transform: 'rotate(32deg)'
          }
        },
        show: {
          from: {
            opacity: 0,
            scale: '25%'
          },
          to: {
            opacity: 1,
            scale: '100%'
          }
        },
        'fade-out': {
          '100%': {
            opacity: 0,
            display: 'none'
          }
        }
      },
      animation: {
        'fade-out': 'fade-out 150ms forwards',
        swing: 'swing ease-in-out 1s infinite'
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
  plugins: [
    require('tailwindcss-hero-patterns'),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '@keyframes show': theme('keyframes.show'),
        '.scroll-show-animation': {
          'view-timeline': '--scroll-show block',
          'animation-timeline': '--scroll-show',
          'animation-name': 'show',
          'animation-range': 'entry 0% cover 30%',
          'animation-fill-mode': 'both'
        }
      })
    })
  ]
}
