const webpack = require('webpack')
const path = require('path')
const cwd = require('process').cwd()
const Visualizer = require('webpack-visualizer-plugin')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    client: path.resolve(cwd, 'app', 'index.js'),
    vendor: path.resolve(cwd, 'app', 'vendor.js')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(cwd, 'dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new Visualizer()
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
}