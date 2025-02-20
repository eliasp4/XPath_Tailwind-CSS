/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-primary': '',
        'brand-secondary': '#484848',
        'brand-accent': '#ffcc00',
      },
      fontFamily: {
        'display': ['"Satoshi"', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  variants: {},
  plugins: [],
}

