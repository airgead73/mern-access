const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack  = require('webpack');

module.exports = {

  entry: './_APP/src/index.js',
  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader'},
      { test: /\.(scss|css)$/, use: [
        {
          loader: 'style-loader'
        }, 
          'css-loader', 'sass-loader']},
      { 
        test: /\.(js)$/,
        exclude: /node_modules/, 
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'            
          ],
          plugins: [
            '@babel/transform-runtime'
          ]
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../_PUBLIC'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  devServer: {
    port: 4041,
    historyApiFallback: true,
    proxy: {
      '/api': `http://localhost:4040`
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '_APP/src/index.html'
    })
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'

};