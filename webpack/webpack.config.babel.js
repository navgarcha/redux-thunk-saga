import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import cmrhConfig from '../cmrh.conf';

const appPath = path.resolve(__dirname, '../src');
const buildPath = path.resolve(__dirname, '../public/build');

export default {
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
