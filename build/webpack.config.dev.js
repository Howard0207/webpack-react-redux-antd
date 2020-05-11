const merge = require('webpack-merge');
const webpack = require('webpack');
const webpackBase = require('./webpack.config.base');
const mock = require('../mock');

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
        before(app) {
            mock(app);
        },
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
};

module.exports = merge(webpackDev, webpackBase);
