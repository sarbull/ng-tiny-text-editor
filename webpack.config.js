module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'dist/html2text.min.js'
  },
  module: {
    loaders: [
      {test: /\.html$/, loader: 'html-loader'}
    ]
  }
};