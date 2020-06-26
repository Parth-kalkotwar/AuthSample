const { Pool } = require("pg");

const connectionString = `postgresql://postgres:admin@localhost:5432/nodelogin`;

const pool = new Pool({
  connectionString: connectionString,
  ssl: false,
});

module.exports = { pool };
