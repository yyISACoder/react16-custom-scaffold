const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ESLintPlugin = require('eslint-webpack-plugin')

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  entry: path.join(__dirname,'..','src','index.jsx'),
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        exclude: /node_modules/,
        type: 'asset'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          'thread-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader:'css-loader',
            options: {
              modules: true // 开启css module功能
            }
          },
          'postcss-loader',
          {
            loader:'sass-loader',
            options: {
              implementation: require('dart-sass')
            }
          }
        ]
      }
    ]
  },
  plugins:[
    new ESLintPlugin({
      extensions: ['js','jsx']
    }),
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      title: NODE_ENV === 'development' ? 'Carl的React16脚手架-开发模式' : 'Carl的React16脚手架-生产模式',
      template: path.join(__dirname,'..','public','index.html')
    })
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname,'..','src')
    },
    extensions: ['.js','.jsx','.json','...'] // ...代表webpack默认的扩展名
  },
  optimization: {
    runtimeChunk: 'single'
  },
  output: {
    clean: true,
    path: path.join(__dirname,'..','dist'),
    filename: NODE_ENV === 'development' ? '[name].[hash].js' : '[name].[chunkhash].js'
  }
}