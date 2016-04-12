'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: './src/index.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', query: { presets: ['react','es2015']}, exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/}
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') })
  ],
  stats: {
    colors: true
  }
};
