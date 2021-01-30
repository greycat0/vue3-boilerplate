const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  entry: "./index.ts",
  output: {
    path: __dirname,
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          appendTsSuffixTo: [/\.vue$/],
          onlyCompileBundledFiles: true,
        },
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
};
