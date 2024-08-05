const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  pages: {
    index: {
      entry: "./src/main.js", // Use relative path
      template: "public/index.html",
      filename: "index.html",
    },
  },
});
