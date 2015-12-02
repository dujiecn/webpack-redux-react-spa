var webpack = require('webpack');
var path = require('path');

var config = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client?timeout=6000&reload=true',
		'./router'
	],
	output: {  
		publicPath: '/',
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('common.js'),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(), // OccurenceOrderPlugin，它会按引用频度来排序 ID，以便达到减少文件大小的效果
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin() // 用来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loader: 'babel',
			exclude: /node_modules/,
			query: {
				presets: ['react', 'es2015'],
				plugins: ['transform-runtime']
			}
		}, {
			test: /\.(less|css)?$/,
			loader: 'style!css!less',
			exclude: /node_modules/,
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};


// var webpack = require('webpack');
// var path = require('path');

// var config = {
// 	devtool: 'cheap-module-eval-source-map',
// 	entry: [
// 		'webpack-hot-middleware/client?timeout=6000&reload=true',
// 		'./index'
// 	],
// 	output: {
// 		publicPath: '/',
// 		path: path.join(__dirname, 'dist'),
// 		filename: 'bundle.js'
// 	},
// 	plugins: [
// 		new webpack.optimize.CommonsChunkPlugin('common.js'),
// 		new webpack.optimize.UglifyJsPlugin(),
// 		new webpack.optimize.OccurenceOrderPlugin(), // OccurenceOrderPlugin，它会按引用频度来排序 ID，以便达到减少文件大小的效果
// 		new webpack.HotModuleReplacementPlugin(),
// 		new webpack.NoErrorsPlugin(),// 用来跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
// 	],
// 	module: {
// 		loaders: [{
// 			test: /\.jsx?$/,
// 			loader: 'babel',
// 			exclude: /node_modules/,
// 			query: {
// 				presets: ['react', 'es2015']
// 			}
// 		}]
// 	}
// };


// module.exports = config;



module.exports = config;