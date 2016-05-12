var path = require('path');
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
				include: fullPath('src/react-bootstrap')
			}
		]
	}
};
