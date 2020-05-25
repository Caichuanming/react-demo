// 开发
const path = require("path");
const webpackMerge = require("webpack-merge");
const base = require("./webpack.config.base");
const webpack = require("webpack");
module.exports = webpackMerge(base, {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        open: false,
        port: 9090,
        hot: true,
    },
    devtool: "cheap-module-eval-source-map",
    plugins: [new webpack.HotModuleReplacementPlugin()],
});
