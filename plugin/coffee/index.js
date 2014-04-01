
var Joi = require('joi');
var Boom = require('boom');

// Data model
var model = require('./model');

exports.register = function (plugin, options, next) {

  // Coffee
  plugin.route({
    method: 'GET',
    path: '/coffee',
    config: {
      handler: function (request, reply) {

        reply(model.getCoffeeList());
      },
      validate: {
        query: {
          page: Joi.number().min(1)
        }
      }
    }
  });

  // Coffee by Id
  plugin.route({
    method: 'GET',
    path: '/coffee/{id}',
    config: {
      handler: function (request, reply) {

        model.getCoffeeById(request.params.id, function (err, coffee) {

          if (err) {
            return reply(Boom.notFound());
          }

          reply(coffee);
        });
      },
      validate: {
        path: {
          id: Joi.number().min(1)
        }
      }
    }
  });

  next();

}