const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// const sassLoaders = [
//   'css-loader',
//   'postcss-loader',
//   'sass-loader?indentedSyntax=sass'
// ]

const stylusLoaders = [
  'css-loader',
  'postcss-loader',
  'stylus-loader'
]

module.exports = {
  entry: {
    main: './main.js',
    vendors: [
      'react',
      'react-dom',
      'react-router'
    ]
  },
  output: {
    filename: 'application.js',
    path: path.join(__dirname, './assets')
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      // {
      //   test: /\.sass$/,
      //   loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      // },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('style-loader', stylusLoaders.join('!'))
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('application.css'),
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    })
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.styl', '.json']
  }
}
