/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7986cb',
          DEFAULT: '#3949ab',
          dark: '#1a237e',
        },
        secondary: '#5c6bc0',
        accent: '#7986cb',
        background: '#f5f5f5',
        textColor: '#263238',
        danger: '#e57373',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0, 0, 0, 0.05)',
        'header': '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

