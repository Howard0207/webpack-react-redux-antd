const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    react: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux'],
    redux_middleware: ['immutable', 'redux-immutable', 'redux-thunk'],
  },
  output: {
    filename: '_dll_[name].js', // 产生的文件名
    path: path.resolve(__dirname, '../dist/vendors'),
    library: '_dll_[name]',
  },
  plugins: [
    new webpack.DllPlugin({
      // name === library
      name: '_dll_[name]',
      path: path.resolve(__dirname, '../dist/vendors', 'manifest.json'),
    }),
  ],
};
