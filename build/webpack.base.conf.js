var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@docs': resolve('docs'),
      // 'clever-ui':path.resolve(__dirname, '../'),
      // src:path.resolve(__dirname,'../src'),
      // components:path.resolve(__dirname,'../src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          publicPath: function(url) {
            if (process.env.NODE_ENV === 'production') {
              url = url.replace('theme-default/', '')
            }
            return url
          },
          limit: 1024 * 100,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          publicPath: function(url) {
            if (process.env.NODE_ENV === 'production') {
              url = url.replace('theme-default/', '')
            }
            return url
          },
          limit: 10,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          // publicPath: function (url) {
          //   if (process.env.NODE_ENV === 'production') {
          //     url = url.replace('theme-default/', '')
          //   }
          //   return url
          // },
          // limit: 10,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.md$/,
        loader: 'raw-loader'
      }
    ]
  }
}
