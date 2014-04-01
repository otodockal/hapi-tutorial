var Hapi = require('hapi');
var Joi = require('joi');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 8000);

// Homepage route
server.route({
  method: 'GET',
  path: '/',
  config: {
    handler: function (request, reply) {
      reply(
        '<h1>Hapi\'s cafe</h1>' + 
        '<h2>Drink coffee and be hapi!</h2>' + 
        '<p><a href="/coffee">Coffee</a></p>' + 
        '<p><a href="/coffeemakers">Coffee makers</a></p>' 
      );
    }
  }
});

// Coffee routes
server.route({
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

server.route({
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

// Coffe makers routes
server.route({
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

server.route({
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

// Start the server
server.start(function () {
  console.log('Server started at port ' + server.info.port);
});