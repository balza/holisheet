'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry:[ 
    'webpack-hot-middleware/client',
    './src/index.js'
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', query: { presets: ['react','es2015']}, exclude: /node_modules/ },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader', exclude: /node_modules/},
      { test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  stats: {
    colors: true
  }
};
