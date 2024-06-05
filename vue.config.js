const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  pages: {
    index: {
      entry: "/src/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
    historical: {
      entry: "src/historicalStories.js",
      template: "public/historical.html",
      filename: "historical.html",
    },
  },
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /^\/historicalStories$/, to: "/historical.html" }],
    },
  },
});
