module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist/ngTinyTextEditor.min.js'
  },
  module: {
    loaders: [
      {test: /\.html$/, loader: 'html-loader'}
    ]
  }
};