var failPlugin = require('webpack-fail-plugin');
var webpack = require('webpack');

module.exports = {
  entry: ['babel-polyfill', './src/WebViewWorker'],
  output: {
    filename: "webViewWorker.js",

    libraryTarget: "var",
    library: "MainWorker"
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      { test: /\.tsx?$/, loader: "babel-loader?presets[]=react-native!ts-loader" }
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      mangle: true,
      comments: false,
      sourceMap: false
    })
	]
};