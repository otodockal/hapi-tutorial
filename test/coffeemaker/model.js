
var Hapi = require('hapi');
var Lab = require('lab');

var server = require('./../../server');

var expect = Lab.expect;
var describe = Lab.experiment;
var it = Lab.test;


describe('Coffee maker model', function () {

  describe('getRandomCoffeemakers', function () {

    it('should return (random) list of coffee makers', function (done) {

      server.methods.getRandomCoffeemakers(function (err, result) {

        expect(result.length).to.equal(6);
        done();
      });
    });
  });

  describe('getCoffeemakerById', function () {

    // A
    it('should return coffee maker by id', function (done) {

      server.methods.getCoffeemakerById(1, function (err, result) {

        expect(err).to.equal(null);
        expect(result.id).to.equal(1);

        done();
      });
    });

    // B
    it('should not return coffee maker by id', function (done) {

      server.methods.getCoffeemakerById(1000, function (err, result) {

        expect(err.toString()).to.equal('Error: Not found!');
        expect(result).to.equal(undefined);
        done();
      });
    });
  });
});
