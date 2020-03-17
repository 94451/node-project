var http = require('http'); //导入http模块
//创建一个服务器
http.createServer(function(request, response) {
    //console.log(request.url)
    response.setHeader('Access-Control-Allow-Origin', '*'); //允许跨域 第二个参数允许谁跨域

    let url = request.url;
    if (url.indexOf('html') != -1) {
        //console.log(url);
        if (url == '/index.html') {
            response.write('Good! this is index.html')
        } else {
            response.write('404')
        }
    } else {

    }
    // console.log('有人访问')
    // response.write('I am nini');
    response.end();
}).listen(1212);

//监听接口