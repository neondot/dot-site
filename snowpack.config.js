module.exports = {
  devOptions: {
    open: 'none',
  },
  mount: {
    src: "/"
  },
  plugins: [
    ['@neondot/dot-loader'],
    ['./sass-loader']
  ],
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html",
    }
  ]
};