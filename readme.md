#争取做到前端最佳实践

node server.js
	基于webpack-dev-middleware和webpack-hot-middleware中间件,依赖express模块
    server.js在双服务的情况下，热部署存在问题。需要主动刷新页面才生效
node webpack-dev-server.js
	基于webpack-dev-server服务器，不依赖express模块
node app.js
    模拟后端服务器，结合node webpack-dev-server.js实现双服务热部署
