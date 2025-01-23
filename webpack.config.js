const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.[contenthash].js",
    assetModuleFilename: path.join("images", "[name].[contenthash][ext]"),
  },
  entry: {
    index: path.join(__dirname, "src", "index.js"),
    click: path.join(__dirname, "src", "click.js"),
    table: path.join(__dirname, "src", "table.js"),
    pr: path.join(__dirname, "src", "pr.js"),
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/resource",
        generator: {
          filename: path.join("icons", "[name].[contenthash][ext]"),
        },
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: "style-loader", // creates style nodes from JS strings
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "stylus-loader", // compiles Stylus to CSS
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.pug"),
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "click.pug"),
      filename: "click.html",
      chunks: ["click"],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "table.pug"),
      filename: "table.html",
      chunks: ["table"],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "pr.pug"),
      filename: "pr.html",
      chunks: ["pr"],
    }),
  ],
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    port: 8082,
  },
};
