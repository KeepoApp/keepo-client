const path = require('path')
const cwd = require('process').cwd()

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: path.resolve(cwd, 'app', 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(cwd, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: './app',
    historyApiFallback: true, // for use with client side router
    hot: false,
    port: 3000
  }
}