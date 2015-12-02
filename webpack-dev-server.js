var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var host = 'localhost';
var port = 8080;

webpackConfig.entry.unshift('webpack-dev-server/client?http://' + host + ':' + port, 'webpack/hot/dev-server');
var compiler = webpack(webpackConfig);
var server = new webpackDevServer(compiler, {
    hot: true,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
}).listen(port, host, function() {
    console.info("==> 🌍 Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
});
