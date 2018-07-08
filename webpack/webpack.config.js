module.exports = {
  entry: './src/alert',
  devtool: 'source-map',

  module: {
		rules: [{
			loader: 'ts-loader',
			test: /\.ts$/
		}]
	}
}