/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'azure-radiance': {
          '50': '#edfbff',
          '100': '#d6f5ff',
          '200': '#b7f0ff',
          '300': '#85e9ff',
          '400': '#4cd9ff',
          '500': '#22bfff',
          '600': '#0ba3ff',
          '700': '#0484e7',
          '800': '#0b6dc2',
          '900': '#105c98',
          '950': '#0f385c',
        },
      },
      fontFamily:{
        inter:['Inter Variable', 'sans-serif'],
      } 
    },
    
  },
  plugins: [],
}

