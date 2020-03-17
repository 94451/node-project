//解析post发来的数据
var data = 'ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=hehe&oq=klad&rsv_pq=964cf2d40004395d&rsv_t=cf419Qk1Xu%2BwAV5FUITShqLBta5yhbogoXdaAzCqAoJfMqBfWnBlt0vzqw0&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=9&rsv_sug1=7&rsv_sug7=100&rsv_sug2=0&inputT=3985&rsv_sug4=4971';
var querystring = require('querystring');
console.log(querystring.parse(data));