var urlLib = require('url');
var http = require('http');
var querystring = require('querystring');

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.url);

    var json = urlLib.parse(req.url, true).query;
    if (json.user == 'nini' && json.pass == '123456') {
        res.write('登录成功');
    } else {
        res.write('登录失败');
    }
    res.end();
}).listen(1212);