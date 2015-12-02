var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var port = 8080;

webpackConfig.entry.unshift('webpack-dev-server/client?http://localhost:8080','webpack/hot/dev-server');
var compiler = webpack(webpackConfig);
var server = new webpackDevServer(compiler, {
	hot:true,
	noInfo: true,
	publicPath: webpackConfig.output.publicPath
});
server.listen(port);
console.info("==> 🌍 Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
