// const BundleAnalyzerPlugin = require(
//   'webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const zipWebpackPlugin = require('zip-webpack-plugin');
const env = process.env.NODE_ENV;
const {name, version} = require('./package');

const basePlugin = [
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
];
const devPlugin = [];
const prodPlugin = [
  new zipWebpackPlugin({
    filename: `${ name }_${ version }_${ env }.zip`,
  }),
];

const plugins = env === 'development'
  ? basePlugin.concat(devPlugin)
  : basePlugin.concat(prodPlugin);

module.exports = {
  publicPath: './',
  configureWebpack: {
    plugins,
  },
};
