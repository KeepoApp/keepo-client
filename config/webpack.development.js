const webpack = require('webpack')
const path = require('path')
const cwd = require('process').cwd()

console.log('kanker zooi', cwd)

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    client: path.resolve(cwd, 'app', 'index.js'),
    vendor: path.resolve(cwd, 'app', 'vendor.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(cwd, 'dist'),
    publicPath: '/dist'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor'),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'less-loader']
      }
    ]
  },
  devServer: {
    contentBase: cwd,
    historyApiFallback: true, // for use with client side router
    hot: false,
    port: 3000
  }
}