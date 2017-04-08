/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const path = require('path');
const cwd = require('process').cwd();
const Visualizer = require('webpack-visualizer-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    client: path.resolve(cwd, 'app', 'index.js'),
    vendor: path.resolve(cwd, 'app', 'vendor.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(cwd, 'build'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new Visualizer(),
    new CopyWebpackPlugin([{ from: 'public/img', to: 'public/img' }]),
    new ExtractTextPlugin('public/styles.css'),
    new HtmlWebpackPlugin({
      title: 'Keepo',
      template: './config/html_template.ejs',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader'],
        }),
      },
    ],
  },
};
