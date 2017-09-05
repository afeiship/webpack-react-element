// development config
import path from 'path';
import webpack from 'webpack';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';
import {resolve} from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import commonConfig from './webpack.config.common.babel';


export default merge(commonConfig, {
  entry: './index.js',
  output: {
    filename: '[name]-[chunkhash:6].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      nx: 'next-js-core2',
      mixin: 'mixin-decorator',
    }),
    new webpack.DllReferencePlugin({
      manifest: path.resolve(__dirname, '../dist/vendors/manifest.json')
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      title: 'Hot Module Replacement'
    }),
    // build optimization plugins
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[hash].min.js',
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  //devtools:
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    hot: true,
    stats: 'errors-only',
    compress: true,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Power-by": "Fei-WEBPACK"
    }
  }
});
