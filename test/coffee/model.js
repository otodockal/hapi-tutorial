
var Hapi = require('hapi');
var Lab = require('lab');

var server = require('./../../server');

var expect = Lab.expect;
var describe = Lab.experiment;
var it = Lab.test;


describe('Coffee model', function () {

  var model = require('./../../plugin/coffee/model');

  describe('getCoffeeList', function () {

    it('should return list of coffee', function (done) {

      var list = model.getCoffeeList();

      expect(list.length).to.equal(64);
      done();
    });
  });

  describe('getCoffeeById', function () {

    // A
    it('should return coffee by Id', function (done) {

      model.getCoffeeById(1, function (err, coffee) {

        expect(err).to.equal(null);
        expect(coffee.id).to.equal(1);

        done();
      });
    });

    it('should not return coffee by Id', function (done) {

      // B
      model.getCoffeeById(200, function (err, coffee) {

        expect(err.toString()).to.equal('Error: Not found!');
        expect(coffee).to.equal(undefined);
        done();
      });
    });

  });

});
