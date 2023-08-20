const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // The path you want to proxy (adjust as needed)
    createProxyMiddleware({
      target: 'https://localhost:7007', // The target URL of your API
      secure: false, // If your API doesn't have a valid SSL certificate
      changeOrigin: true,
    })
  );
};
