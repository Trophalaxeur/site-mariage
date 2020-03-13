const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const plugins = [
  new ExtractTextPlugin('[name].css'),
  new HtmlWebpackPlugin({
    inject: true, // eq. 'body'
    favicon: path.join('public', 'favicon.ico'),
    filename: 'index.html',
    template: path.join('public', 'index.html'),
    hash: true
  }),
  new CopyWebpackPlugin([
    // {output}/file.txt
    { from: 'public/galleries/', to: 'static/media/galleries' }
  ])
];

const sassIncludePath = `includePaths[]=${encodeURIComponent(path.resolve(process.cwd(), './node_modules'))}`;
const postCssOptions = autoprefixer({ browsers: ['last 2 versions'] });
const postCssLoader = { loader: 'postcss-loader', options: { plugins: [postCssOptions] } };

module.exports = {
  // devtool: 'source-map',
  entry: [path.join(__dirname, 'src', 'index.jsx')],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'static/js/[name].[chunkhash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['transform-decorators-legacy']
            }
          }, {
            loader: 'eslint-loader'
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }
        ]
      }, {
        test: /\.woff(2)?(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
              name: 'static/fonts/[name].[ext]'
            }
          }
        ]
      }, {
        test: /\.(ttf|eot)(\?v=[0-9]+\.[0-9]+\.[0-9]+)?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }, {
        test: [/\.(png|jpg|svg|gif)$/],
        use: [{
          loader: 'file-loader',
          options: { name: 'static/media/[name].[ext]' }
        }]
      }, {
        test: /\.scss$/,
        // use: [{
        loader: ExtractTextPlugin.extract(['css-loader?minimize', postCssLoader, `sass-loader?${sassIncludePath}`])
        // }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules'
    ]
  },
  plugins
};
