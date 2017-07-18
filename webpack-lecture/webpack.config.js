const webpack = require('webpack');

module.exports = {
	entry: './src/test',
	output: { filename: './dist/bundle.js' },

	devtool: 'source-map',

	module: {
		rules: [{
			loader: 'ts-loader',
			test: /\.ts$/
		}]
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: false
			}
		})
	]

};