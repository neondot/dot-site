module.exports = {
  devOptions: {
    open: 'none',
  },
  mount: {
    src: "/"
  },
  plugins: [
    ['@neondot/dot-loader'],
    ['@snowpack/plugin-sass']
  ],
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html",
    }
  ]
};