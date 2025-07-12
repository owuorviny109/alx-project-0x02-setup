"use strict";

var path = require("path");

var HtmlWebpackPlugin = require('html-webpack-plugin');

var _require = require('clean-webpack-plugin'),
    CleanWebpackPlugin = _require.CleanWebpackPlugin;

var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        transpileOnly: true
      }
    }]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [new ForkTsCheckerWebpackPlugin(), new CleanWebpackPlugin(), new HtmlWebpackPlugin({
    title: "Development"
  })],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
//# sourceMappingURL=webpack.config.dev.js.map
