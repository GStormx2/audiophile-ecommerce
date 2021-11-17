module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily : {
      sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      serif: ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
