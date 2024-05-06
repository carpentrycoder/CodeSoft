/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Oswald',],
        'body': ['"Open Sans"'],
      },
      typography: {
        additional: {
          '.unica-one-regular': {
            fontFamily: ['"Unica One"', 'sans-serif'],
            fontWeight: 400,
            fontStyle: 'normal',
          },
        },
      },
    },
  },
  plugins: [],
}
