// 线上
const webpackMerge = require("webpack-merge");
const base = require("./webpack.config.base");
module.exports = webpackMerge(base, {
  mode: "production",
});
