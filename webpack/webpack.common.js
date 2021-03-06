const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

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
          // 'style-loader', // won't work
          'css-loader',
        ],
      },
      {
        // this is to have CSS injected to DOM as JS
        test: /\.scss$/,
        exclude: ['/node_modules/', '/build/'],
        use: [
          MiniCssExtractPlugin.loader,
          // 'style-loader', //3. Injected to DOM // won't work
          'css-loader', // 2. CSS -> Common.js
          'sass-loader', // 1. SASS -> CSS
        ],
      },
      // TODO Find a way to src/*.scss => build/CSS/*.css
      // {
      //   test: /\.s?css$/,
      //   exclude: ['/node_modules/', '/build/'],
      //   use: [
      //     // always the options comes before the loaders
      //     {
      //       loader: 'file-loader',
      //       options: { outputPath: 'css/', name: '[name].css' },
      //     },
      //     'sass-loader', // 1. SASS -> CSS
      //   ],
      // },
      // {
      //   test: /test.css$/,
      //   include: ['/build/'],
      //   use: ['style-loader'],
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
      // whatever CSS file is given here, it's added to the build/index.html
      filename: 'main.css',
      // chunkFilename: '[id].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // to minimze CSS
      new CssMinimizerPlugin(),
      // to minimize the bundle.js
      new UglifyJsPlugin({
        include: /bundle.js$/,
        extractComments: true, // to remove comments on bundle.js
      }),
    ],
  },
  stats: 'errors-only',
};
