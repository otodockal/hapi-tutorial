var Hapi = require('hapi');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 8000);

// Homepage route
server.route({
  method: 'GET',
  path: '/',
  config: {
    handler: function (request, reply) {
      reply('Hapi.js getting started tutorial Hapi\'s cafe.');
    }
  }
});

// Start the server
server.start(function () {
  console.log('Server started at port ' + server.info.port);
});