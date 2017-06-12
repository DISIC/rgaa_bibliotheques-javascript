var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var fullPath = path.resolve.bind(null, __dirname);



/**
 *
 */
module.exports = {
	entry: {
		'angular-bootstrap': fullPath('./src/angular-bootstrap/index.js'),
		'jquery-ui': fullPath('./src/jquery-ui/index.js'),
		'react-bootstrap': fullPath('./src/react-bootstrap/index.js')
	},
	output: {
		path: 'dist',
		filename: '[name].js'
	},
	externals: {
		'angular': 'angular',
		'jquery': 'jQuery'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'jsx-loader',
				include: fullPath('src/react')
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{ from: 'node_modules/bootstrap/dist/css/bootstrap.css', to: 'bootstrap.css' },
			{ from: 'node_modules/bootstrap/dist/css/bootstrap-theme.css', to: 'bootstrap-theme.css' },
			{ from: 'node_modules/highlightjs/styles/github.css', to: 'github.css' },
			{ from: 'node_modules/jquery-ui/themes/base/all.css', to: 'jquery-ui.css' }
		])
	]
};
