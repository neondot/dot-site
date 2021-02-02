module.exports = {
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    htmlFragments: true,
    out: 'docs',
  },
  mount: {
    src: "/"
  },
  plugins: [
    ['@neondot/dot-loader'],
    ['@snowpack/plugin-sass'],
    ['./plugins/markdown-loader.js'] 
  ],
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html",
    }
  ]
};
