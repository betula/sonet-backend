

module.exports = ({ route, db }) => {

  route('GET', '/user/:id', async ({ id }) => {
    const user = await db.row('SELECT * FROM "users" WHERE email=$1', [ id ]);
    if (!user) return 404;

    return user;
  });

};