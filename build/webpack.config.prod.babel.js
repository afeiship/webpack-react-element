// production config
import merge from 'webpack-merge';
import {resolve} from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from "extract-text-webpack-plugin";
import commonConfig from './webpack.config.common.babel';

module.exports = merge(commonConfig, {
  entry: './index.js',
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      nx: 'next-js-core2',
      autobind: 'autobind-decorator',
      mixin: 'mixin-decorator',
    }),
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, '../dist/vendors/manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../public/index.html'),
      title: 'Hot Module Replacement'
    }),
    // build optimization plugins
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].min.js',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new ExtractTextPlugin('style-[name]-[hash].css')
  ]
});
