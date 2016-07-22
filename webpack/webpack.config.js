const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cmrhConfig = require('../cmrh.conf');
const appPath = path.resolve(__dirname, '../src');
const buildPath = path.resolve(__dirname, '../public/build');

module.exports = {
	entry: './src/client',

	output: {
		path: buildPath,
		publicPath: '/build/',
		filename: 'main.js',
		chunkFilename: '[name].js'
	},

	resolve: {
		root: appPath
	},

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel'
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract([
				`css?sourceMap&modules&localIdentName=${cmrhConfig.generateScopedName}`
			])
		}]
	},

	plugins: [
		new ExtractTextPlugin('main.css'),
		new CleanWebpackPlugin([buildPath], {root: path.resolve(__dirname, '..')})
	]
};
