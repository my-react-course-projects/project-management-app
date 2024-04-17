const autoprefixer = require("autoprefixer")
const tailwindcss = require("tailwindcss")
const postcssPresetEnv = require("postcss-preset-env")

module.exports = {
  plugins: [postcssPresetEnv, tailwindcss, autoprefixer],
};

  