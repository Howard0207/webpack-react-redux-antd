const merge = require('webpack-merge');
const webpackBase = require('./webpack.config.base');

const webpackDev = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    port: '8080',
    host: 'localhost',
    hot: true,
    // compress: true,
    historyApiFallback: true,
    // proxy: {
    //   '/api': 'http://localhost:3000',
    // },
  },
};

module.exports = merge(webpackDev, webpackBase);
