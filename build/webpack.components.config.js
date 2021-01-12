var path = require('path')
var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
const components = require('../components.json')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

var externals = {}
Object.keys(components).forEach(function(key){
  externals[`../${key}`] = `clever-ui/lib/${key}`
})
const entry = {}
Object.keys(components).forEach(function(component){
  entry[component] = path.resolve(__dirname,'../',components[component])
})

var env = config.lib.env

var webpackConfig = merge(baseWebpackConfig, {
  entry: entry,
  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    chunkFilename: '[id].js', 
    libraryTarget: 'commonjs2'
  },
  externals: Object.assign({vue:'vue', zrender:'zrender'},externals),
  module: {
    rules: utils.styleLoaders({
      sourceMap: config.lib.productionSourceMap,
      extract: true
    })
  },
  // stats: 'verbose',
  // profile: true,
  // node: false,
  plugins: [
    new CleanWebpackPlugin(['lib']),
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': env
    }),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('[name].css')
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
})

module.exports = webpackConfig
