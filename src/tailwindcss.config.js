// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,jpg}',
  ],
  safelist: [
    'border-gray-300',
    'dark:border-white',
    'shadow-lg',
    'hover:shadow-2xl',
    'bg-white/70',
    'rounded-xl',
    'p-6',
    'my-12',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'light-blue': '#A0D2FF',
        'dark-blue': '#002A55',
        'gray-dark': '#333333',

        // 🌸 Your custom color palette
        'primary': '#ffccce',
        'darkbg': '#000000',
        'lightText': '#000000',
        'darkText': '#ffccce',
        'highlight': '#ff6b81',
        'muted': '#ffe4e6',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '1/2': '50%',
      },
      boxShadow: {
        'custom-light': '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
