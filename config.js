const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'development', //development, none, production
	performance: {hints: false}, //To mute the performance warnings for the production build...
	entry: {
		app: ['babel-polyfill', './src/index.js']
    },//entry point of project i.e index.js file.
	devtool: 'inline-source-map', //Know exact file name whicn contains error in your code in console...
	devServer: {
	  contentBase: path.join(__dirname, "./"),
	  compress: true,
	  //hot: true,  //Result will show in console
	  port: 9000,
	  inline: true
	},
	module: {
		rules: [
			{test: /\.js$/, exclude: /(node_modules|bower_components)/, use: {loader: 'babel-loader', options: {presets: ['es2015', 'react']}}},
			{test: /\.css$/, use: ['style-loader','css-loader']},
			{test: /\.(png|svg|jpg|gif|ico)$/, use: ['file-loader']},
			{test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
			{test: /\.(csv|tsv)$/, use: ['csv-loader']},
			{test: /\.xml$/, use: ['xml-loader']},
			{test: /\.html$/, use: [{loader: 'html-loader', options: {minimize: true, removeComments: false, collapseWhitespace: false}}]}
		]
	},
	plugins: [		
		new CleanWebpackPlugin(['./build']),
		// index.html Html file prevent to generate automatically...
		// new HtmlWebpackPlugin({
			// title: 'React Ejemplo template',	
			// filename: 'index.html'
		// }),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {filename: 'ejemplo.bundle.js', path: path.resolve(__dirname, './build')}
};
