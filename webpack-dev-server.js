var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var settings = require('./settings');
var port = settings.WDS_PORT;

var options = {
    hot: false,
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    stats: {
        colors: true
    }
};

if (settings.__DEV__) {
    for (entryName in webpackConfig.entry) {
        webpackConfig.entry[entryName].unshift('webpack-dev-server/client?http://localhost:' + port, 'webpack/hot/dev-server');
    }

    Object.assign(options, {
        hot: true,
        noInfo: false,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        }
    });
}

var compiler = webpack(webpackConfig);
var server = new webpackDevServer(compiler, options).listen(port, "localhost", function() {
    console.info("==> 🌍  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
});
