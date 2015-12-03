// 全局参数配置
var mode = process.argv[process.argv.length - 1];

var settings = {
    __DEV__: false,
    WDS_PORT: 3000,
    BASE_URL: JSON.stringify("http://127.0.0.1:8080")
};
if (mode == "dev") {
    Object.assign(settings, {
        __DEV__: true,
        BASE_URL: JSON.stringify("http://192.168.0.179:8080")
    });
} else if (mode == "pro") {
    Object.assign(settings, {
        BASE_URL: JSON.stringify("http://123.57.226.128:8080")
    });
}

module.exports = settings;
