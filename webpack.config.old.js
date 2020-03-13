const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const resolveApp = relativePath => path.resolve(fs.realpathSync(process.cwd()), relativePath);

const plugins = [
  new ExtractTextPlugin('[name].css'),
  new HtmlWebpackPlugin({
    inject: true,
    favicon: './public/favicon.ico',
    filename: 'index.html',
    template: './public/index.html',
    hash: true
  }),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.AggressiveMergingPlugin()
];

const sassIncludePath = `includePaths[]=${encodeURIComponent(path.resolve(process.cwd(), './node_modules'))}`;
const postCssOptions = autoprefixer({ browsers: ['last 2 versions'] });
const postCssLoader = { loader: 'postcss-loader', options: { plugins: [postCssOptions] } };

module.exports = {
  devtool: 'source-map',
  bail: true,
  context: __dirname,
  entry: resolveApp('src/index.jsx'),
  output: {
    path: resolveApp('build'),
    filename: 'static/js/[name].[chunkhash:8].js'
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: ['babel-loader', 'eslint-loader'], exclude: /node_modules/ },
      {
        test: [/\.(png|jpg|svg|gif)$/],
        loader: 'file-loader',
        options: { name: 'static/media/[name].[ext]' }
      },
      {
        test: /\.woff$/,
        loader: 'url-loader',
        options: {
          limit: 65000,
          mimetype: 'application/font-woff',
          name: 'static/fonts/[name].[ext]'
        }
      },
      {
        test: /\.scss$/,

        loader: ExtractTextPlugin.extract(['css-loader?minimize', postCssLoader, `sass-loader?${sassIncludePath}`])
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(['css-loader?minimize', postCssLoader])
      }
    ]
  },
  resolve: {
    enforceExtension: false,
    extensions: ['.js', '.json', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
  plugins
};
