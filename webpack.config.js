const webpack = require('webpack');
const path = require('path');

const config = {
	entry: {
		app: './app.module.js',
		vendor: ['angular']
	},
	output: {
		path: __dirname + '/scripts',
		filename: 'app.bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
	]
    
}

module.exports = config;