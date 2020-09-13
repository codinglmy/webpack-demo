const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist",
  },
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "beibei",
      template: "src/assets/index.html",
    }),
  ],
};







    





