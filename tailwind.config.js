module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1760px",
      "4xl": "1980px",
    },

    extend: {
      maxWidth: {
        limit: "80%",
      },

      fontSize: {
        "2xs": "0.625rem",
        "3xs": "0.5rem",
      },

      zIndex: {
        1: "1",
      },

      colors: {
        gradient_primary: "var(--gradient-primary)",
        main: "var(--main)",
      },
    },
  },
  plugins: [],
};
