var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
module.exports = {
	entry:'./static/router/router.js',
	output:{
		filename:'./public/main.js'
	},
	module:{
		loaders:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			},
			{
				test:/\.(jpg|png|gif)$/,
				loader:'url-loader?limit=4096'
			}
		]
	},
	plugins:[
		new UglifyJsPlugin()
	]
	
}