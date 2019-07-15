const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: "development",
  devtool: "eval",
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      }
    ]
  }
});