const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: './_APP/src/index.js',
  module: {
    rules: [
      { test: /\.svg$/, use: 'svg-inline-loader'},
      { test: /\.(scss|css)$/, use: [
        {
          loader: 'style-loader',
          options: {
            attributes: {
              nonce: 'htueffffhehendgvhfdhggfwasaweqfkjkjhvdhghsfdfkjhpofjfbndfhsflkdlknfkjbnlfvyucdrsdysf'
            }
          }
        }, 
          'css-loader', 'sass-loader']},
      { test: /\.(js)$/, use: 'babel-loader'}
    ]
  },
  output: {
    path: path.resolve(__dirname, '../_PUBLIC'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  devServer: {
    port: 6001,
    historyApiFallback: true,
    proxy: {
      '/api': `http://localhost:6000`
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: '_APP/src/index.html'
    })
  ],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'

};