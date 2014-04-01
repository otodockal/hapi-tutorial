
var Joi = require('joi');

exports.register = function (plugin, options, next) {

  // Coffe routes
  plugin.route({
    method: 'GET',
    path: '/coffee',
    config: {
      handler: function (request, reply) {
        reply('List of coffee.');
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
    path: '/coffee/{id}',
    config: {
      handler: function (request, reply) {
        reply('Coffee view - ' + request.params.id + '.');
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