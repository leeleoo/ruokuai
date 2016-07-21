/*
* 诺快打码 http 接口(上传)，node.js 示例代码 
* 注意：需要安装restler : npm install restler
*/
var rest = require('restler');
var fs   = require('fs');
/*parmas = {
		filePath(required)
		password(required)
}*/
module.exports = function(parmas,callback){
	var _p = Object.assign({
			'softkey': 'f884049e07c2437782a6f085191a3761',
			'username': 'yang1180mm1',
			'img': 'image/gif',
			'typeid':'3000',
			'softid': '61840'
	},parmas)
	rest.post('http://api.ruokuai.com/create.json', {
		multipart: true,
		data: Object.assign(_p,{image:rest.file(_p.filePath, null, fs.statSync(_p.filePath).size, null, _p.img)}),
		headers: { 
			'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0',
			'Content-Type' : 'application/x-www-form-urlencoded' 
		}
	}).on('complete', function(data) {
		console.log('打码平台返回数据', data);
		var captcha = JSON.parse(data);
		callback(null,captcha.Result);
	});
}
