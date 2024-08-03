/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{svelte,html,js,ts}', "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors:{
        greys: {
          50: '#e3e3e3',
          100: '#e8e8e8',
          200: '#e1e1e1',
          300: '#d7d7d7',
          400: '#c1c1c1',
          500: '#a2a9b2',
          600: '#86827f',
          700: '#403c3c',
        },
        primary: {
          100: '#f1ece7',
          200: '#ebded2',
          300: '#e0c2a5',
          400: '#dbb791',
          500: '#cbbdb0',
          600: '#beb1a5',
          700: '#a09790',
          800: '#888786',
          900: '#6b6b6b',
        },
        secondary: {
          100: '#e3e7ed',
          200: '#cfd6e2',
          300: '#92b8e4',
          400: '#669ddd',
          500: '#88a7cc',
          600: '#91aaca',
          700: '#9eb0ca',
          800: '#9eacbf',
          900: '#a7b1be',
        },
        error: {
          100: '#fdbac2',
          200: '#fc8393',
          300: '#f4596d',
          400: '#e13f54',
          500: '#d84457',
          600: '#c14d5c',
          700: '#965a5a',
        },
        warning: {
          100: '#f5eee6',
          200: '#f7e9da',
          300: '#f9e4cd',
          400: '#fdd7b1',
          500: '#edcba8',
          600: '#DEC4A9FF',
          700: '#C9B9A6FF',
        },
        green: {
          100: '#EAEEE6FF',
          200: '#DFE8D6FF',
          300: '#D3E2C4FF',
          400: '#C0D8A9FF',
          500: '#B9C7ABFF',
          600: '#ADB9A2FF',
          700: '#9AA492FF',
        },
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#dbb791",

          "secondary": "#9eacbf",

          "accent": "#00ffff",

          "neutral": "#ff00ff",

          "base-100": "#ff00ff",

          "info": "#0000ff",

          "success": "#00ff00",

          "warning": "#00ff00",

          "error": "#ff0000",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require("flowbite/plugin"),
  ],
}

