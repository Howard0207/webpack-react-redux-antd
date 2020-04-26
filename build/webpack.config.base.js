const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const ENV = process.env.NODE_ENV;
const isDev = ENV === 'development';

const cssHandler = [
  isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader',
  'less-loader',
];

module.exports = {
  entry: path.resolve(__dirname, '../App.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        use: [...cssHandler],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: 'url-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|htc)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
      ignoreOrder: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      scriptLoading: 'defer',
      hash: true,
      inject: 'body',
    }),
    new AddAssetHtmlPlugin({ filepath: require.resolve(path.resolve(__dirname, '../_dll_vendors/_dll_react.js')) }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../_dll_vendors', 'manifest.json'),
    }),
    new webpack.DefinePlugin({
      'process.env': `${JSON.stringify(ENV)}`,
    }),
  ],
  resolve: {
    alias: {
      _components: path.resolve(__dirname, '../components'),
      _consts: path.resolve(__dirname, '../consts'),
      _less: path.resolve(__dirname, '../less'),
      _utils: path.resolve(__dirname, '../utils'),
    },
    extensions: ['.jsx', '.js', '.less', '.css'],
  },
};
