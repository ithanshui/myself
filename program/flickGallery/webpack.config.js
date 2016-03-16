var webpack = require('webpack');
var path = require("path");
module.exports = {
  entry: path.join(__dirname, './src/entry.js'),
  output: {
    path: path.join(__dirname, 'out'),
    publicPath: "./out/",
    filename: 'bundle.js'
  },
  // 新添加的module属性
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/,loader: "babel"},
      {test: /\.css$/, loader: 'style-loader!css-loader' },
      {test: /\.(gif|jpg|png)$/, loader: "url?limit=8192&name=[path][name].[ext]"},
      {test: /\.json$/, loader: 'json-loader' }
    ]
  }
};