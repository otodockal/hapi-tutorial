
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

    it('should return coffee maker by id', function (done) {

      server.methods.getCoffeemakerById(1, function (err, result) {

        // A
        expect(err).to.equal(null);
        expect(result.id).to.equal(1);

        server.methods.getCoffeemakerById(1000, function (err, result) {

          // B
          // expect(typeof err).to.equal('object');
          expect(result).to.equal(undefined);
          done();
        });

      });
    });
  });
});
