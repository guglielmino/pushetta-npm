var should = require('chai').should(),
    chai = require('chai'),
    Pushetta = require('../pushetta'),
    pushetta = new Pushetta("0b73575eda098fad2281337f4dc9d55e22ee57dd");



describe('#pushMessage', function() {
	it('push a message', function(){
		pushetta.pushMessage("WebPush", "hello world", function(result){
			try {
				expect(result).to.equal(true);
				done();
			}
			catch(e){
				done(e);
			}
		});
	});
});