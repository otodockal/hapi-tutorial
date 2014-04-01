
var Hapi = require('hapi');
var Lab = require('lab');

var server = require('./../../server');

var expect = Lab.expect;
var describe = Lab.experiment;
var it = Lab.test;


describe('Server', function () {

  it('calls /', function (done) {
    server.inject({ method: 'GET', url: '/' }, function (res) {

      // code
      expect(res.statusCode).to.equal(200);
      // headers
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      // expect(res.headers['content-length']).to.equal(117);
      expect(res.headers['content-length']).to.above(381);
      expect(res.headers['cache-control']).to.equal('no-cache');

      done();
    });
  });

});
