const path = require("path");
const TerserPluin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    port: 3000,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new TerserPluin(),
    new HtmlWebpackPlugin({
      title: "Modes - Webpack",
    }),
  ],
};
