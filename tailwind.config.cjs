/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      'primary': '#e82127',
      'secondary': '#005288',
      'custom-white': '#FAFAFF',
      'custom-black': '#0D1321',
    },
    fontFamily: { 
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
