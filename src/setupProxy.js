const { createProxyMiddleware } = require('http-proxy-middleware');

const localProxy = {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: { '^/api': '' }
};


module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware(localProxy)
    );
};
