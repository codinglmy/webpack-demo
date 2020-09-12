var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js'
  }
};
// production --→ 最小化代码，提供给用户的 development --→ 提供给开发者看的
