const webpack = require('webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  devtool: 'source-map', //Can also be removed
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Production'),
    }),
    new BundleAnalyzerPlugin(),
  ],
};
