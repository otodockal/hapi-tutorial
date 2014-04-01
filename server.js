var Hapi = require('hapi');

// Create a server with a host and port
var server = Hapi.createServer('localhost', 8000);

// Homepage plugin
server.pack.register(require('./plugin/homepage/index').register, function (err) {
  if (err) {
    console.log('Failed loading plugin: Homepage');
  }
});

// Coffee plugin
server.pack.require('./plugin/coffee', function (err) {
  if (err) {
    console.log('Failed loading plugin: Coffee');
  }
});

// Coffee maker plugin
server.pack.require('./plugin/coffeemaker', function (err) {
  if (err) {
    console.log('Failed loading plugin: Coffee maker');
  }
});

// Start the server
server.start(function () {
  console.log('Server started at port ' + server.info.port);
});