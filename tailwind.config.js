/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      'rdatos-second': '#2E6DE7',
      'rdatos-accent': '#00cde1',
      'white': '#fff',
      'black': '#091222',
      gray: colors.gray,
      slate: colors.slate
    },
    extend: {      
      screens: {
        'xs': '475px',
        '3xl': '1680px',
        '4xl': '1980px',
        '5xl': '2560px',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        keys_more: {
          '0%, 100%': { transform: 'translateX(0)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'translateX(3px)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' }
        }
      },
      animation: {
        'spin-slow': 'spin 0.5s linear',
        'slide': 'keys_more 1s ease-in-out infinite'
      },
      transitionProperty: {
        'height': 'height',
        'opacity': 'opacity',
        'background': 'background',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        white: '0 0px 20px -1px var(--tw-shadow-color), 0 1px 1px -5px var(--tw-shadow-color)',
        green: '0 0 0 1px rgba(255,255,255,.1),0 3px 2px rgba(0,0,0,.04),0 7px 5px rgba(0,0,0,.02),0 13px 10px rgba(0,0,0,.02),0 22px 17px rgba(0,0,0,.02)',
        insetwhite: 'rgba(255, 255, 255, 1) 0 0 0 2px inset',
        card: 'box-shadow: rgb(0 0 0 / 20%) 0px 4px 20px;',
        cite: 'rgb(41, 41, 41) 3px 0px 0px 0px inset;'
      },
      height: {
        media: '40vh',
        body: 'calc(100vh - 56px)'
      },
      minHeight: {
        body: 'calc(100vh - 56px)'
      },
      grayscale: {
        50: '50%',
        70: '70%'
      } 
    }
  },
  variants: {
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    extend: {
      display: ['group-hover'],
      scale: ['active'],
      opacity: ['active', 'dark'],
      grayscale: ['hover', 'dark'],
      translate: ['active'],
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          // marginLeft: 'auto',
          // marginRight: 'auto',
          // paddingLeft: '2rem',
          // paddingRight: '2rem',
          '@screen xs': {
            maxWidth: '475px',
          },
          '@screen sm': {
            maxWidth: '640px', // 640px
          },
          '@screen md': {
            maxWidth: '768px', // 768px
          },
          '@screen lg': {
            maxWidth: '1024px', // 1024px
          },
          '@screen xl': {
            maxWidth: '1280px', //1280px
          },
          '@screen 2xl': {
            maxWidth: '1436px', // 1536px
          },
          '@screen 3xl': {
            maxWidth: '1536px', // 1680px
          },
          '@screen 4xl': {
            maxWidth: '1636px', // 1980px
          },
          '@screen 5xl': {
            maxWidth: '1736px', // 2560px
          },
        }        
      })
    },
    require('daisyui'),
    require("@tailwindcss/typography")
  ],
  daisyui: {
    themes: [
      {
        'light': {
          "primary": "#003f8c",
          "primary-focus": "#263A4E",
          "primary-content": "#fff",
          "secondary": "#2E6DE7",
          "secondary-focus": "#1654CC",
          "secondary-content": "#fff",
          "accent": "#2496ed",
          "accent-focus": "#3e9aea",
          "accent-content": "#ffffff",
          "neutral": "#181a2a",
          "neutral-focus": "#06060a",
          "neutral-content": "#edf2f7",
          "base-100": "#e9eef9",
          "base-200": "#fff",
          "base-300": "#edf2f7",
          "base-content": "#0a1b2b",
          
          "info": "#4967B4",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
          "--border-color": "var(--b3)",
          "--rounded-box": "1rem",
          "--rounded-btn": "0.7rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0s",
          "--animation-input": "0",
          "--btn-text-case": "",
          "--btn-focus-scale": "0.95",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
        'dark': {
          "primary": "#013371",
          "neutral": "#181a2a",
          "neutral-focus": "#06060a",
          "neutral-content": "#edf2f7",
          "base-100": "#2d2d39",
          "base-200": "#1e1e2c",
          "base-300": "#2a3642",
          "base-content": "#FCFCFC"
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
  },
}
