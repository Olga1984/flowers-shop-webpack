var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.html$/,
            loader: 'mustache-loader'
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: 'file-loader?name=[name].[ext]&outputPath=images/'

        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          //template: 'src/mustache-html/mustache.html',
          inject: 'body',
      }),
      new ExtractTextPlugin('style.css')
  ]
};
