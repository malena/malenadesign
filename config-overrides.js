/* config-overrides.js */

const path = require("path");

module.exports = {
  override: function (config, env) {
    //do stuff with the webpack config...
    return config;
  },
  paths: function (paths, env) {
    // Changing build to docs
    paths.appBuild = path.resolve(__dirname, "./docs");
    paths.appHtml = path.resolve(__dirname, "./docs/index.html");
    return paths;
  },
};
