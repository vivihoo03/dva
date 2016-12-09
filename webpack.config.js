const fs = require('fs');
const path = require('path');
const webpack = require('atool-build/lib/webpack');
const ExtractTextPlugin = require("atool-build/node_modules/extract-text-webpack-plugin");
module.exports = function(webpackConfig, env) {
  webpackConfig.babel.plugins.push('transform-runtime');

  webpackConfig.module.loaders.push({
  test: /\.module\.scss$/,
  loader:ExtractTextPlugin.extract( 
  'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]&-autoprefixer!' + 'postcss-loader!'+ 'sass-loader?sourceMap'
  )
});


  // Support hmr
  if (env === 'development') {
    webpackConfig.devtool = '#eval';
    webpackConfig.babel.plugins.push(['dva-hmr', {
      entries: [
        './src/index.js',
      ],
    }]);
  } else {
    webpackConfig.babel.plugins.push('dev-expression');
  }

  // Support CSS Modules
  // Parse all less files as css module.
  webpackConfig.module.loaders.forEach(function(loader, index) {
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
      loader.include = /node_modules/;
      loader.test = /\.less$/;
    }
    if (loader.test.toString() === '/\\.module\\.less$/') {
      loader.exclude = /node_modules/;
      loader.test = /\.less$/;
    }
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.css$') > -1) {
      loader.include = /node_modules/;
      loader.test = /\.css$/;
    }
    if (loader.test.toString() === '/\\.module\\.css$/') {
      loader.exclude = /node_modules/;
      loader.test = /\.css$/;
    }
    if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.scss$') > -1) {
      loader.include = /node_modules/;
      loader.test = /\.scss$/;
    }
    if (loader.test.toString() === '/\\.module\\.scss$/') {
      loader.exclude = /node_modules/;
      loader.test = /\.scss$/;
    }
  });

  return webpackConfig;
};
