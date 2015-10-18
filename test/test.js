// Simple async test for HTTP 200 response code using supertest
'use strict';

var request = require("supertest"),
	app = require("../app").getApp;


describe('GET /', function() {
	it('expects HTTP 200 response', function(done) {
		request(app)
		.get('/')
		.expect(200, done);
	});
});