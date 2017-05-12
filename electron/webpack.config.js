(function (factory) {
  module.exports = factory(require('path'),
    require('webpack'),
    require('webpack/lib/ProgressPlugin'));
}(function (path,
  webpack) {

  var config = {
    devtool: 'source-map',
    entry: './src/app.ts',
    target: 'electron',
    resolve: {
      extensions: [
        ".tsx",
        ".ts",
        ".js"
      ],
      modules: [
        "./node_modules"
      ]
    },
    resolveLoader: {
      modules: [
        "./node_modules"
      ]
    },
    output: {
      path: path.join(process.cwd(), "\\app"),
      filename: 'app.js'
    },
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.js$/,
          loader: "source-map-loader",
          exclude: [
            /\/node_modules\//
          ]
        },
        {
          enforce: 'pre',
          test: /\.ts(x?)$/,
          use: "ts-loader"
        }
      ]
    }
  };

  return config;
}));
