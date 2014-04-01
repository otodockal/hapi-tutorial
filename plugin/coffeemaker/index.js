
var Joi = require('joi');
var Boom = require('boom');

exports.register = function (plugin, options, next) {

  // Templates
  plugin.views({
    engines: {
      html: 'handlebars'
    },
    path: './templates',
    partialsPath: './templates',
    layout: true,
    layoutPath: './../homepage/templates'
  });

  // Setup plugin model
  require('./model')(plugin);

  // Coffe makers
  plugin.route({
    method: 'GET',
    path: '/coffeemakers',
    config: {
      handler: function (request, reply) {

        plugin.methods.getRandomCoffeemakers(function (err, coffeeMakers) {

          if (err) {
            return reply(Boom.notFound());
          }

          reply.view('list', {
            title: 'Coffee makers',
            list: coffeeMakers,
            baseUrl: request.server.info.uri
          });
        });
      },
      validate: {
        query: {
          page: Joi.number().min(1)
        }
      }
    }
  });

  // Coffee makers by Id
  plugin.route({
    method: 'GET',
    path: '/coffeemakers/{id}',
    config: {
      handler: function (request, reply) {

        plugin.methods.getCoffeemakerById(request.params.id, function (err, coffemaker) {

          if (err) {
            return reply(Boom.notFound());
          }

          reply.view('view', {
            title: coffemaker ? coffemaker.type : '',
            view: coffemaker,
            baseUrl: request.server.info.uri
          });
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