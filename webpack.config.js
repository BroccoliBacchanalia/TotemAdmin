var webpack = require('webpack');
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'client/dist');
var APP_DIR = path.resolve(__dirname, 'client/src');

var config = {
  entry: APP_DIR + '/index.jsx',
  module: {
    rules: [
      {
        include: APP_DIR,
        exclude: /(node_modules|bower_components)/,
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'},
      {
        test: /\.css$/,
        loader: 'style-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
        query: { mimetype: "image/png" }
      }
    ]
  },
  // plugins: [
  //   new ClosureCompilerPlugin({
  //     compiler: {
  //       language_in: 'ECMASCRIPT6',
  //       language_out: 'ECMASCRIPT5',
  //       compilation_level: 'ADVANCED'
  //     },
  //     concurrency: 3,
  //   });
  // ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
