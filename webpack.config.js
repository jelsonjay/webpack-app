const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				//use:['style-loader', 'css-loader']
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]
	},
	plugins: [new MiniCssExtractPlugin({ filename: 'index.css' })]
};
