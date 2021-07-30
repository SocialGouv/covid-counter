const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // due to gh-pages hosting
  assetPrefix: isProd ? "/covid-counter" : "",
  basePath: isProd ? "/covid-counter" : "",
  env: {
    DATA_URL: process.env.DATA_URL || "/sample.csv",
  },
};
