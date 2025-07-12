const path = require("path");
module.exports = {
  entry: "./js/main.ts",
  mode: "production",
  module: {
    rules: [{ test: /\.ts$/, loader: "ts-loader" }]
  },
  resolve: { extensions: [".ts", ".js"] },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
