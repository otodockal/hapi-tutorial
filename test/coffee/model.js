
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

    it('should return coffee by Id', function (done) {

      model.getCoffeeById(1, function (err, coffee) {

        // A
        expect(err).to.equal(null);
        expect(coffee.id).to.equal(1);

        model.getCoffeeById(200, function (err, coffee) {

          // B
          // expect(typeof err).to.equal('object');
          expect(coffee).to.equal(undefined);
          done();
        });

      });
    });


  });
});
