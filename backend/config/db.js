const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test the connection
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error acquiring client for PostgreSQL connections', err.stack);
  } else {
    console.log('Successfully connected to PostgreSQL Database');
  }
  if (release) release();
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
