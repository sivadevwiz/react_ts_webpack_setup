const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: ['/node_modules/', '/build/'],
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader',
          'css-loader',
        ],
      },
      {
        // this is to have CSS injected to DOM as JS
        test: /\.scss$/,
        exclude: ['/node_modules/', '/build/'],
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', //3. Injected to DOM
          'css-loader', // 2. CSS -> Common.js
          'sass-loader', // 1. SASS -> CSS
        ],
      },
      // {
      //   test: /test.css$/,
      //   include: ['/build/'],
      //   use: ['style-loader'],
      // },
      // {
      //   // this is to have CSS as external file instead of injecting into DOM
      //   test: /\.s?css$/,
      //   exclude: ['/node_modules/', '/build/'],
      //   use: [
      //     // always the options comes before the loaders
      //     {
      //       loader: 'file-loader',
      //       options: { outputPath: 'css/', name: '[name].min.css' },
      //     },
      //     'sass-loader', // 1. SASS -> CSS
      //   ],
      // },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    new CopyPlugin({
      patterns: [{ from: 'source', to: 'dest', noErrorOnMissing: true }],
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css',
      // chunkFilename: '[id].css',
    }),
    new CssMinimizerPlugin(),
  ],
  optimization: {
    // to minimze CSS
    minimizer: [new CssMinimizerPlugin()],
  },
  stats: 'errors-only',
};
