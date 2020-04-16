const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
  mode: "development",
  entry: "./public/index.js",
  output: {
    path: __dirname + "/public/dist",
    filename: "bundle.js"
  },
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: "my-domain-cache-id",
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: "service-worker.js",
      minify: true,
      staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
    }),
    new WebpackPwaManifest({
      name: "Budget App",
      short_name: "Budget App",
      description: "An application for transactions",
      background_color: "#01579b",
      theme_color: "#ffffff",
      "theme-color": "#ffffff",
      start_url: "/"
    })
  ]
};
module.exports = config;
