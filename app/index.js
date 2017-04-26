const
  PgPool = require('pg').Pool,
  Server = require('./lib/server'),
  Globby = require('globby');

module.exports = async ({ pg, hostname, port }) => {
  const db = new PgPool(pg);
  const server = Server({ hostname, port });

  const context = {
    db,
    route: server.route
  };

  for (let filename of await Globby('./routes/**/*.js', { cwd: __dirname, absolute: true })) {
    require(filename)(context);
  }

  server.run();
};