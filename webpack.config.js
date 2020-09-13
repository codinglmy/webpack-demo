const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const base = require('./webpack.config.base.js')

module.exports = {
  ...base,// 把base的所有属性都抄过来
  mode: "development",
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
// production --→ 最小化代码，提供给用户的 development --→ 提供给开发者看的







    





