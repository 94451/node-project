var http = require('http');
var querystring = require('querystring');

http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    //监听数据包过来 
    var str = '';
    req.on('data', function(data) {
        str += data;
    });

    //接收完了数据
    req.on('end', function() {
        console.log(str);
        var json = querystring.parse(str);
        console.log(json);
        if (json.user == 'nini' && json.pass == '123456') {
            res.write('登录成功')
        } else {
            res.write('登录失败')
        }
        res.end();
    });

}).listen(1212);