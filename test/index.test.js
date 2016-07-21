var getCaptcha = require('../index.js');
var expect     = require('chai').expect;
var path       = require('path')

describe('测试图片是否验证成功', function() {
	it('5568', function(done) {
		getCaptcha({
			filePath:path.join(__dirname,'google.png'),
			password: 'yang1180'
		},function(err,code){
			expect(code).to.be.equal("5568");
			done();
		})
	});
});