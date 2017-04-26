const
  Server = require('./lib/server'),
  Db = require('./lib/db'),
  Globby = require('globby');

module.exports = async ({ pg, hostname, port }) => {
  const server = Server({ hostname, port });
  const db = Db(pg);

  const context = {
    db,
    route: server.route
  };

  for (let filename of await Globby('./routes/**/*.js', { cwd: __dirname, absolute: true })) {
    require(filename)(context);
  }

  server.run();
};