

var plug = function (plugin, options, next) {

  // Homepage route
  plugin.route({
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
}

exports.register = {
  name: 'Homepage',
  version: '0.0.1',
  register: plug
}