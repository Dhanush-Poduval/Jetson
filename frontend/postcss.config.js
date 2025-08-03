// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},  // ✅ Add this line instead of 'tailwindcss'
    autoprefixer: {},
  },
};
