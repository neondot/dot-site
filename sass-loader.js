const fs = require('fs').promises;
const sass = require('sass');

module.exports = function (snowpackConfig, pluginOptions) {
  return {
    resolve: {
      input: ['.scss'],
      output: ['.css'],
    },
    async load({ filePath }) {
      const code = await fs.readFile(filePath);
      return sass.renderSync({
        data: code.toString(),
        outputStyle: "expanded",
        ...pluginOptions
      }).css.toString();
    }
  }
}