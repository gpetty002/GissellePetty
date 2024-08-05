const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  pages: {
    index: {
      entry: "/src/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|svg)$/i)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "[name].[hash:8].[ext]",
        outputPath: "assets/",
        esModule: false,
      });
  },
});
