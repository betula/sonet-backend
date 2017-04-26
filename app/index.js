const
  Server = require('./lib/server'),
  Db = require('./lib/db'),
  Globby = require('globby');

module.exports = async ({ pg, hostname, port }) => {
  const server = Server({ hostname, port });
  const db = Db(pg);

  const context = {
    db,
    route: server.route,
    api: {}
  };

  const requires = [
    './api/**/*.js',
    './routes/**/*.js'
  ];
  for (let filename of await Globby(requires, { cwd: __dirname, absolute: true })) {
    require(filename)(context);
  }

  server.run();
};