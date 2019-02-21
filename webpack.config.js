const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    contentBase: './dist',
    host: '0.0.0.0'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new CleanWebpackPlugin(['dist'])
  ],
  output: {
    filename: "./main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(otf|ttf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};