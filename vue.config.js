const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  publicPath: "/hello-vue/index.html",
  outputDir: "dist",
});
