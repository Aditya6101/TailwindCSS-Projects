module.exports = {
  purge: {
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "fb-blue": "#156FE5",
        "fb-green": "#36A421",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
