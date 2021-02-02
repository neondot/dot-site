module.exports = {
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    htmlFragments: true,
    out: 'docs',
  },
  mount: {
    src: "/",
    public: { url: "/", static: true, resolve: false }
  },
  plugins: [
    ['@neondot/dot-loader'],
    ['@snowpack/plugin-sass'],
    ['./plugins/markdown-loader.js', { html: true }] 
  ],
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html",
    }
  ]
};
