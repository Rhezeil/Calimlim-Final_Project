// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,jpg}', // Ensure all source files are included
  ],
  safelist: [
    'border-gray-300',  // Safelist any custom utility classes to avoid purging
    'dark:border-white',
    'shadow-lg',
    'hover:shadow-2xl',
    'bg-white/70',
    'rounded-xl',
    'p-6',
    'my-12',
  ],
  darkMode: 'class', // Enables dark mode using the 'dark' class
  theme: {
    extend: {
      colors: {
        'light-blue': '#A0D2FF',
        'dark-blue': '#002A55',
        'gray-dark': '#333333',
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
