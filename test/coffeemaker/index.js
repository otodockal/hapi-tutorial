
var Hapi = require('hapi');
var Lab = require('lab');

var server = require('./../../server');

var expect = Lab.expect;
var describe = Lab.experiment;
var it = Lab.test;


describe('Server', function () {

  it('calls /coffeemakers', function (done) {
    server.inject({ method: 'GET', url: '/coffeemakers' }, function (res) {

      // code
      expect(res.statusCode).to.equal(200);
      // headers
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      expect(res.headers['content-length']).to.above(0);
      expect(res.headers['cache-control']).to.equal('no-cache');

      done();
    });
  });

  it('calls /coffeemakers/1', function (done) {
    server.inject({ method: 'GET', url: '/coffeemakers/1' }, function (res) {

      // code
      expect(res.statusCode).to.equal(200);
      // headers
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      expect(res.headers['content-length']).to.above(0);
      expect(res.headers['cache-control']).to.equal('no-cache');

      done();
    });
  });

});
