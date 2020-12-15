const { Pool } = require('pg');

const pool_config = {
  host: '',
  database: 'sdc',
  user: '',
  password: '',
  max: 10,
  port: 5432,
};

const pool = new Pool(pool_config);
pool
  .connect()
  .then(() => console.log('connected to PSQL'))
  .catch((e) => console.log(e));

module.exports.pool = pool;
