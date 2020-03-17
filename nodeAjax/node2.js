var http = require('http'); //导入http模块
//创建一个服务器
http.createServer(function(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*'); //允许跨域 第二个参数允许谁跨域
    //console.log(request.url); /?user=nini&pass=123456

    var url = request.url.substring(2);
    console.log(url);
    //user=nini&pass=123456 => {user:nini , pass:123456}String to Json
    var arr = url.split('&')
        //console.log(arr);
    var json = {};
    for (var i = 0; i < arr.length; i++) {
        json[arr[i].split('=')[0]] = arr[i].split('=')[1];
    }
    //console.log(json)
    if (json['user'] == 'nini' && json['pass'] == '123456') {
        response.write('登录成功');
    } else {
        response.write('登录失败');
    }
    response.end();

}).listen(1212); //监听接口