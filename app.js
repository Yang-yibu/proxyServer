const express = require('express');
const proxy = require('http-proxy-middleware');

let app = express();

app.use('/api', proxy({
  target: 'http://192.168.2.163:8000',
  changeOrigin: true,
  pathRewrite: {
    '^/api/getWxConfig': '/get-signature',
    '^/api/upLoadImg': '/api/upLoadImg'
  },

  onProxyRes: function(proxyRes, req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true')
  },

}));

app.listen(3000);
console.log('Proxy server is listen at port 3000...');