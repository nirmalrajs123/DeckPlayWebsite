require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function setupDatabase() {
  const createUserTable = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      role VARCHAR(50) DEFAULT 'admin',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  const insertAdminUser = `
    INSERT INTO users (email, password, role)
    VALUES ('admin@deckplay.com', 'admin123', 'admin')
    ON CONFLICT (email) DO NOTHING;
  `;

  try {
    console.log('Connecting to database...');
    const client = await pool.connect();
    
    console.log('Creating "users" table...');
    await client.query(createUserTable);
    
    console.log('Inserting default admin user...');
    await client.query(insertAdminUser);
    
    console.log('Database setup completed successfully.');
    client.release();
  } catch (err) {
    console.error('Error setting up database:', err);
  } finally {
    await pool.end();
  }
}

setupDatabase();
