
var Joi = require('joi');

exports.register = function (plugin, options, next) {

  // Coffe makers routes
  plugin.route({
    method: 'GET',
    path: '/coffeemakers',
    config: {
      handler: function (request, reply) {
        reply('List of coffee makers.');
      },
      validate: {
        query: {
          page: Joi.number().min(1)
        }
      }
    }
  });

  plugin.route({
    method: 'GET',
    path: '/coffeemakers/{id}',
    config: {
      handler: function (request, reply) {
        reply('Coffee maker view - ' + request.params.id + '.');
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