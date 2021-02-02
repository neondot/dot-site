const fs = require('fs').promises;
const MarkdownIt = require('markdown-it');
const hljs = require('highlight.js');

module.exports = function (snowpackConfig, pluginOptions) {
  return {
    resolve: {
      input: ['.md'],
      output: ['.txt'],
    },
    async load({ filePath }) {
      const code = await fs.readFile(filePath);
      const md = new MarkdownIt({
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return '<pre class="hljs"><code>' +
                     hljs.highlight(lang, str, true).value +
                     '</code></pre>';
            } catch (__) {}
          }
      
          return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
        },
        ...pluginOptions
      });
      const result = md.render(code.toString());
      return result.toString();
    }
  }
}