const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
devServer: {
  contentBase: '../dist',
    hot: true,
    open: true
},
plugins: [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    minify: true,
  }),
  new CleanWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin()
]
});

