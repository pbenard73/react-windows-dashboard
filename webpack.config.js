const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  target: "node",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "react-windows-dashboard",
    libraryTarget: "umd",
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin()],
  externals: {
    "react-draggable": "react-draggable", // Case matters here
    "react-resizable": "react-resizable", // Case matters here
    react: "react", // Case matters here
    "react-dom": "react-dom", // Case matters here
  },
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
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "./src"),
      },
    ],
  },
};
