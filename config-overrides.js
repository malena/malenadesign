/* config-overrides.js */

const path = require("path");

module.exports = {
  override: function (config, env) {
    //do stuff with the webpack config...
    return config;
  },
  paths: function (paths, env) {
<<<<<<< HEAD
    // Changing public to static
=======
    // Changing build to docs
>>>>>>> update-design
    paths.appBuild = path.resolve(__dirname, "./docs");
    paths.appHtml = path.resolve(__dirname, "./docs/index.html");
    return paths;
  },
};
