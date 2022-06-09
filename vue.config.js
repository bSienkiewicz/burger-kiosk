var path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      modules: [path.resolve("./src"), path.resolve("./node_modules")],
    },
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        productName: "PBKiosk",
        appId: "com.burgersolutions",
        win: {
          target: ["nsis"],
          icon: "public/favicon.ico",
          requestedExecutionLevel: "requireAdministrator",
        },
        nsis: {
          installerIcon: "public/favicon.ico",
          uninstallerIcon: "public/favicon.ico",
          uninstallDisplayName: "PBKiosk",
          oneClick: false,
          allowToChangeInstallationDirectory: true,
        },
      },
    },
  },
};

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      customFileProtocol: "./",
    },
  },
});
