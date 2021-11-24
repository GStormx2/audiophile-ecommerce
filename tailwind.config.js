module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1280px",
    },
    fontFamily: {
      sans: ["Manrope", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      serif: ["Manrope", "-apple-system", "BlinkMacSystemFont", "serif"],
    },
    fontSize: {
      h1: ["56px", { lineHeight: "58px", letterSpacing: "2px" }],
      h2: ["40px", { lineHeight: "44px", letterSpacing: "1.5px" }],
      h3: ["32px", { lineHeight: "36px", letterSpacing: "1.15px" }],
      h4: ["28px", { lineHeight: "36px", letterSpacing: "2px" }],
      h6: ["18px", { lineHeight: "24px", letterSpacing: "1.13px" }],
      overline: ["14px", { lineHeight: "19px", letterSpacing: "10px" }],
      subtitle: ["13px", { lineHeight: "25px", letterSpacing: "2px" }],
      body: ["16px", { lineHeight: "25px" }],
      'showcase-mobile': ['36px', {lineHeight: '40px', letterSpacing: '1.29px'}],
      'features-mobile': ['24px', {lineHeight: '36px', letterSpacing: '0.86px'}],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
