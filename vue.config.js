var path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      modules: [path.resolve("./src"), path.resolve("./node_modules")],
    },
  },
};

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});
