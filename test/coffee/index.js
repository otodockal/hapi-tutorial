
var Hapi = require('hapi');
var Lab = require('lab');

var server = require('./../../server');

var expect = Lab.expect;
// var before = Lab.before;
// var after = Lab.after;
var describe = Lab.experiment;
var it = Lab.test;


describe('Server', function () {

  it('calls /coffee', function (done) {
    server.inject({ method: 'GET', url: '/coffee' }, function (res) {

      // code
      expect(res.statusCode).to.equal(200);
      // headers
      // expect(res.headers['content-type']).to.equal('application/json; charset=utf-8');
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      expect(res.headers['content-length']).to.above(0);
      expect(res.headers['cache-control']).to.equal('max-age=3600, must-revalidate');
      // payload
      // expect(res.result.length).to.equal(64);

      done();
    });
  });

  it('calls /coffee/1', function (done) {
    server.inject({ method: 'GET', url: '/coffee/1' }, function (res) {

      // console.log(res.headers['content-length']);

      // code
      expect(res.statusCode).to.equal(200);
      // headers
      // expect(res.headers['content-type']).to.equal('application/json; charset=utf-8');
      expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
      expect(res.headers['content-length']).to.above(0);
      expect(res.headers['cache-control']).to.equal('no-cache');
      // payload
      // expect(res.result.id).to.equal(1);

      done();
    });
  });

});
