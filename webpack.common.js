const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico"
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: "js/[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                const dirs = file.split('\\');
                const folder = dirs[dirs.length - 2];

                return `img/${folder}/[name].[ext]`
              }
            }
          },
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'svg/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(otf|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      components: path.resolve(__dirname, "./src/components"),
      pages: path.resolve(__dirname, "./src/pages"),
      modules: path.resolve(__dirname, "./src/modules"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      utils: path.resolve(__dirname, "./src/utils"),
      sass: path.resolve(__dirname, "./src/sass")
    }
  }
};