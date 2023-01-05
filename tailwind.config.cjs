/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: { 
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'primary-50': '#D6EFFF',
        'primary-100': '#99D7FF',
        'primary-200': '#4CB8FF',
        'primary-300': '#1AA4FF',
        'primary-400': '#0091F0',
        'primary-500': '#007BCC',
        'primary-600': '#005F9E',
        'primary-700': '#004A7A',
        'primary-800': '#002E4D',
        'primary-900': '#001929',
        'accent-50': '#FDE9E9',
        'accent-100': '#F8BCBC',
        'accent-200': '#F39090',
        'accent-300': '#EE6363',
        'accent-400': '#EB4D4D',
        'accent-500': '#E62020',
        'accent-600': '#B81A1A',
        'accent-700': '#A11616',
        'accent-800': '#731010',
        'accent-900': '#450A0A',
      },

      fontFamily: {
        opti: ["Opti", "sans-serif"],
      },

      borderWidth: {
        '3': '3px'
      },

    }
  },
  plugins: [],
}
