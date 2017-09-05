import webpack from 'webpack';
import {resolve} from 'path';
import merge from 'webpack-merge';

export default merge({
  entry: './src/app/index.js',
  plugins: []
})