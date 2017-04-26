

module.exports = ({ api, db }) => {
  Object.assign(api, {

    async getUserByEmail(email) {
      return await db.row('SELECT * FROM "users" WHERE email=$1', [ email ]);
    }

  })
};