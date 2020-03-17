//解析url模块
var urlLib = require('url');
var data = 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=baik&oq=baikk&rsv_pq=853b948e00015144&rsv_t=cc073tyOYuozqb1sbXu%2B4IBheRThoODL%2FeR5weAc5e1xJdafbhEhg7NyfbU&rqlang=cn&rsv_enter=1&rsv_dl=tb&rsv_sug3=2&rsv_sug1=1&rsv_sug7=100&rsv_sug2=0&inputT=648&rsv_sug4=1180'
console.log(urlLib.parse(data, true));