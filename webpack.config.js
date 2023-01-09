const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  // devtool: "source-map",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "react-windows-dashboard",
    libraryTarget: "umd",
  },
  plugins: [new CleanWebpackPlugin()],
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(sc|c)ss$/,
        // use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        use: ["style-loader", "css-loader"],
        include: path.resolve(__dirname, "./src"),
      },
    ],
  },
};
