module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "card-bg": "#f6f8fa",
        "primary-green": "#2ea44f",
        "blue-links": "#0366d6",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
