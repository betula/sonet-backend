const
  Pool = require('pg').Pool
;

module.exports = (config) => {
  const pool = new Pool(config);

  return {
    async rows(...args) {
      return ( await pool.query(...args) ).rows;
    },

    async row(...args) {
      return ( ( await pool.query(...args) ).rows || [] )[0];
    }
  }

};