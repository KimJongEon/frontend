const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  )
};

//이제 axios로 /api/어쩌고 라는 형식의 url을 호출하면 자동으로 [localhost:8080/api/어쩌고] -> (http://localhost:8080/api/어쩌고) 로 프록시해줌