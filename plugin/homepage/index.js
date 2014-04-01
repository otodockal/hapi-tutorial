
var plug = function (plugin, options, next) {

  // Templates
  plugin.views({
    engines: {
      html: 'handlebars'
    },
    path: './plugin/homepage/templates',
    partialsPath: './plugin/homepage/templates',
    layout: true
  });

  // Serve static CSS file
  plugin.route({
    method: 'GET',
    path: '/css/style.css',
    handler: {
      file: './plugin/homepage/css/style.css'
    }
  });

  // Homepage route
  plugin.route({
    method: 'GET',
    path: '/',
    config: {
      handler: function (request, reply) {
        reply.view('list', {
          title: 'Hapi\'s cafe',
          baseUrl: request.server.info.uri
        });
      }
    }
  });
}

exports.register = {
  name: 'Homepage',
  version: '0.0.1',
  register: plug
}