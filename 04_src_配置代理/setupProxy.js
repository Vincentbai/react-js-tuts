const {createProxyMiddleware} = require('http-proxy-middleware')

// only can use CJM, not ES6
module.exports = function(app){

  app.use(
    createProxyMiddleware('/api1', { // 当遇到 /api1 前缀的请求，就触发改代理
      target: 'http://localhost:5000', // 请求转发给谁
      changeOrigin: true, // 控制服务器收到请求头的post字段的值，将后端服务器收到的请求头由 3000 端口改成了5000端口 
      pathRewrite: {'^/api1':''}, // 发给后端的服务器之前将 /api 去掉， 如果过不去掉，后端服务器无法识别 http://localhost:5000/api1/xxxx 这个路径
    }),
    createProxyMiddleware('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: {'^/api2': ''},
    }),
  )
}