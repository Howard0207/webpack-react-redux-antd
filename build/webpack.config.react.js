const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    react: ['react', 'react-router-dom', 'redux', 'react-redux', 'redux-immutable', 'redux-thunk'],
  },
  output: {
    filename: '_dll_[name].js', // 产生的文件名
    path: path.resolve(__dirname, '../_dll_vendors'),
    library: '_dll_[name]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      // name === library
      name: '_dll_[name]',
      path: path.resolve(__dirname, '../_dll_vendors', 'manifest.json'),
    }),
  ],
};
