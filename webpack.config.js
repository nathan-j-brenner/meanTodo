const webpack = require('webpack');
const path = require('path');

const config = {
	entry: {
		app: './public/app.module.js',
		vendor: ['angular']
	},
	output: {
		path: __dirname + '/public/scripts',
		filename: 'app.bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
	]
	
}

module.exports = config;