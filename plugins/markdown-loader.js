const fs = require('fs').promises;
const MarkdownIt = require('markdown-it');

module.exports = function (snowpackConfig, pluginOptions) {
  return {
    resolve: {
      input: ['.md'],
      output: ['.txt'],
    },
    async load({ filePath }) {
      const code = await fs.readFile(filePath);
      const md = new MarkdownIt(pluginOptions);
      const result = md.render(code.toString());
      return result.toString();
    }
  }
}