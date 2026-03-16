require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function addUser() {
  const email = 'admin@tvapp.com';
  const password = 'admin123';

  const insertUser = `
    INSERT INTO users (email, password, role)
    VALUES ($1, $2, 'admin')
    ON CONFLICT (email) DO UPDATE SET password = $2;
  `;

  try {
    const client = await pool.connect();
    await client.query(insertUser, [email, password]);
    console.log(`User ${email} has been added/updated successfully.`);
    client.release();
  } catch (err) {
    console.error('Error adding user:', err);
  } finally {
    await pool.end();
  }
}

addUser();
