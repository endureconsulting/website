const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/opaque-logo.svg')",
      },
      colors: {
        gray: colors.trueGray,
        blue: colors.sky,
        brand: "#0864a6", // hsl(205, 91%, 34%)
        "brand-dark": "#064675", // hsl(205, 91%, 24%)
        "brand-gradient": "#e8f4fd", // hsl(205, 91%, 95%)
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    listStyleType: {
      none: "none",
      circle: "circle",
    },
    minHeight: {
      0: "0",
      80: "20rem",
      full: "100%",
      screen: "100vh",
    },
    screens: {
      xs: "360px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      borderColor: ["group-focus"],
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
