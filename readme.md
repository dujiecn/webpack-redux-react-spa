
server.js
    基于webpack-dev-middleware和webpack-hot-middleware中间件,依赖express模块
    在双服务的情况下，热部署存在问题。需要主动刷新页面才生效
webpack-dev-server.js 
    基于webpack-dev-server服务器，不依赖express模块，双服务可以实现热部署
settings.js
    全局配置，通过解析命令行参数区分环境。
    
启动方式见package.json里面的scripts属性    





