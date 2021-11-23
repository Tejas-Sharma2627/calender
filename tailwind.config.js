module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {fontStyle: ['hover', 'focus']},
  },
  plugins: [require('@tailwindcss/forms')],
}
