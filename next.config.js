const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // due to gh-pages hosting
  assetPrefix: isProd ? "/covid-counter" : "",
  basePath: isProd ? "/covid-counter" : "",
};
