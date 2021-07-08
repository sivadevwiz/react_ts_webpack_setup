const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true, // Added instead of adding in the run script in package.json
  },
  devtool: 'cheap-module-source-map', //value recommended by create-react-app
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Shiva'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
