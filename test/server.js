
var Hapi = require('hapi');
var Lab = require('lab');

var server = require('./../server');

var expect = Lab.expect;
var describe = Lab.experiment;
var it = Lab.test;


describe('Server', function () {

  var plugins = Object.keys(server.pack.list);

  it('should has Homepage plugin', function (done) {

    expect(plugins.indexOf('Homepage')).not.to.equal(-1);

    done();
  });

  it('should has Coffee plugin', function (done) {

    expect(plugins.indexOf('Coffee')).not.to.equal(-1);

    done();
  });

  it('should has Coffee maker plugin', function (done) {

    expect(plugins.indexOf('Coffee maker')).not.to.equal(-1);

    done();
  });
});
