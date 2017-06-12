var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var fullPath = path.resolve.bind(null, __dirname);



/**
 *
 */
module.exports = {
	entry: {
		'rgaa-angular-bootstrap': fullPath('./src/angular-bootstrap/index.js'),
		'rgaa-jquery-ui': fullPath('./src/jquery-ui/index.js'),
		'rgaa-react-bootstrap': fullPath('./src/react-bootstrap/index.js')
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
			{ from: 'node_modules/jquery/dist/jquery.js', to: 'jquery.js' },
			{ from: 'node_modules/jquery-ui-dist/jquery-ui.min.js', to: 'jquery-ui.js' },
			{ from: 'node_modules/angular/angular.js', to: 'angular.js' },
			{ from: 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js', to: 'angular-ui-bootstrap.js' },
			{ from: 'node_modules/highlightjs/highlight.pack.js', to: 'highlight.js' },
			{ from: 'node_modules/bootstrap/dist/css/bootstrap.css', to: 'bootstrap.css' },
			{ from: 'node_modules/bootstrap/dist/css/bootstrap-theme.css', to: 'bootstrap-theme.css' },
			{ from: 'node_modules/highlightjs/styles/github.css', to: 'github.css' },
			{ from: 'node_modules/jquery-ui/themes/base', to: 'jquery-ui' }
		])
	]
};
